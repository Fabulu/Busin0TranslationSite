#!/usr/bin/env python3
"""
Static-site tests for the Busin 0: Wizardry Alternative Neo promo site.

Run:  python tests/test_site.py        (from C:\\Programmieren\\WizardryTranslationSite)
  or: python C:/Programmieren/WizardryTranslationSite/tests/test_site.py

Checks:
  1. index.html exists and is valid-ish HTML (parses, has html/head/body/title, tags balanced).
  2. Every screenshot/asset referenced in the HTML exists on disk.
  3. i18n COMPLETENESS: every data-i18n key used in the HTML exists in BOTH languages,
     and the en / de string maps in app.js have identical key sets (no missing strings).
  4. The patch + README that the download links point to exist.
  5. No obviously-broken relative links (every relative href/src resolves to a real file).

No third-party deps -- standard library only. Exit code 0 = all pass, 1 = any failure.
"""

import os
import re
import sys
from html.parser import HTMLParser

# ---------------------------------------------------------------- paths
HERE = os.path.dirname(os.path.abspath(__file__))
SITE_ROOT = os.path.dirname(HERE)                  # ...\WizardryTranslationSite
PUBLIC = os.path.join(SITE_ROOT, "public")         # deployed web root
INDEX = os.path.join(PUBLIC, "index.html")
APPJS = os.path.join(PUBLIC, "app.js")

# void / self-closing HTML elements (no closing tag expected)
VOID = {
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
}

_failures = []
_checks = 0


def check(cond, msg):
    global _checks
    _checks += 1
    if not cond:
        _failures.append(msg)
        print("  FAIL: " + msg)
    return cond


# ---------------------------------------------------------------- HTML parsing
class Collector(HTMLParser):
    """Collect tag balance, referenced assets, and data-i18n keys."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.balance_errors = []
        self.tags_seen = set()
        self.refs = []          # (attr, value) for src/href
        self.i18n_keys = set()  # data-i18n / -aria / -html values

    def handle_starttag(self, tag, attrs):
        self.tags_seen.add(tag)
        d = dict(attrs)
        for k in ("data-i18n", "data-i18n-aria", "data-i18n-html"):
            if k in d and d[k]:
                self.i18n_keys.add(d[k])
        if "src" in d and d["src"]:
            self.refs.append(("src", d["src"]))
        if "href" in d and d["href"]:
            self.refs.append(("href", d["href"]))
        if tag not in VOID:
            self.stack.append(tag)

    def handle_startendtag(self, tag, attrs):
        # explicit self-closing <tag/> -- treat like void, still scan attrs
        self.handle_starttag(tag, attrs)
        if tag not in VOID and self.stack and self.stack[-1] == tag:
            self.stack.pop()

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if tag in self.stack:
            # pop until matching (tolerant of optional-close elements)
            while self.stack:
                top = self.stack.pop()
                if top == tag:
                    break
        else:
            self.balance_errors.append("stray </%s>" % tag)


def extract_lang_keys(appjs_text, lang):
    """Return set of i18n keys defined for `lang` in the I18N object in app.js.

    The map looks like:  <lang>: { "key.name": "value", ... }
    Keys are matched at line start so colons inside values don't interfere.
    """
    # find "<lang>: {" then walk to the matching closing brace
    m = re.search(r'\b' + re.escape(lang) + r'\s*:\s*\{', appjs_text)
    if not m:
        return None
    i = m.end() - 1  # at the opening brace
    depth = 0
    start = i
    while i < len(appjs_text):
        c = appjs_text[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                break
        i += 1
    block = appjs_text[start + 1:i]
    keys = set(re.findall(r'^\s*"([^"]+)"\s*:', block, re.MULTILINE))
    return keys


def main():
    print("=== Busin 0 site tests ===")
    print("site root:", SITE_ROOT)

    # ---- 1. index.html exists + valid-ish ----
    print("\n[1] index.html structure")
    if not check(os.path.isfile(INDEX), "index.html missing at %s" % INDEX):
        # nothing else makes sense without it
        return finish()

    with open(INDEX, "r", encoding="utf-8") as f:
        html = f.read()

    parser = Collector()
    parsed_ok = True
    try:
        parser.feed(html)
        parser.close()
    except Exception as e:  # noqa: BLE001
        parsed_ok = False
        check(False, "HTML failed to parse: %r" % e)

    if parsed_ok:
        check(True, "HTML parsed")
        for tag in ("html", "head", "body", "title"):
            check(tag in parser.tags_seen, "<%s> element present" % tag)
        check(not parser.balance_errors,
              "no stray end tags (%s)" % parser.balance_errors)
        check(not parser.stack,
              "all tags closed (unclosed: %s)" % parser.stack)
        check("<!DOCTYPE html>" in html or "<!doctype html>" in html.lower(),
              "has <!DOCTYPE html>")

    # ---- 2. referenced assets exist ----
    print("\n[2] referenced assets exist")
    img_refs = [v for (a, v) in parser.refs
                if a == "src" and not v.startswith(("http:", "https:", "data:", "//"))]
    # screenshots specifically
    shot_refs = [v for v in img_refs if v.lower().endswith((".png", ".jpg", ".jpeg", ".webp", ".gif"))]
    check(len(shot_refs) >= 1, "at least one screenshot referenced (found %d)" % len(shot_refs))
    for v in img_refs:
        p = os.path.normpath(os.path.join(PUBLIC, v))
        check(os.path.isfile(p), "asset referenced in HTML exists: %s" % v)

    # ---- 3. i18n completeness ----
    print("\n[3] i18n completeness")
    if not check(os.path.isfile(APPJS), "app.js missing"):
        return finish()
    with open(APPJS, "r", encoding="utf-8") as f:
        appjs = f.read()

    en = extract_lang_keys(appjs, "en")
    de = extract_lang_keys(appjs, "de")
    check(en is not None and len(en) > 0, "en string map found and non-empty")
    check(de is not None and len(de) > 0, "de string map found and non-empty")

    if en and de:
        missing_in_de = sorted(en - de)
        missing_in_en = sorted(de - en)
        check(not missing_in_de, "every en key present in de (missing: %s)" % missing_in_de)
        check(not missing_in_en, "every de key present in en (missing: %s)" % missing_in_en)
        check(en == de, "en and de key sets identical (count en=%d de=%d)" % (len(en), len(de)))

        # every key the HTML actually uses must exist in BOTH languages
        used = parser.i18n_keys
        check(len(used) > 0, "HTML declares data-i18n keys (found %d)" % len(used))
        miss_html_en = sorted(used - en)
        miss_html_de = sorted(used - de)
        check(not miss_html_en, "all data-i18n keys defined in en (missing: %s)" % miss_html_en)
        check(not miss_html_de, "all data-i18n keys defined in de (missing: %s)" % miss_html_de)

    # ---- 4. download targets exist ----
    print("\n[4] download targets exist")
    patch = os.path.join(PUBLIC, "patch", "busin0_en_v151.xdelta")
    readme = os.path.join(PUBLIC, "patch", "README.md")
    check(os.path.isfile(patch), "patch file exists: public/patch/busin0_en_v151.xdelta")
    if os.path.isfile(patch):
        size = os.path.getsize(patch)
        check(size > 100_000, "patch is a real binary (%d bytes)" % size)
    check(os.path.isfile(readme), "README exists: public/patch/README.md")

    # ---- 5. no broken relative links ----
    print("\n[5] relative links resolve")
    for attr, v in parser.refs:
        if v.startswith(("http:", "https:", "data:", "mailto:", "//", "#")):
            continue
        target = v.split("#", 1)[0].split("?", 1)[0]
        if not target:
            continue
        p = os.path.normpath(os.path.join(PUBLIC, target))
        check(os.path.exists(p), "relative %s resolves: %s" % (attr, v))

    return finish()


def finish():
    print("\n=== summary ===")
    print("checks run:", _checks)
    if _failures:
        print("FAILURES: %d" % len(_failures))
        for m in _failures:
            print("  - " + m)
        return 1
    print("ALL PASS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
