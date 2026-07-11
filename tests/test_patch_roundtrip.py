#!/usr/bin/env python3
r"""
Patch round-trip / regeneration test for the Busin 0 EN translation.

Applies the shipped xdelta patch to the source Japanese ISO and verifies the
result is byte-for-byte the expected v186 patched ISO (by MD5). Also confirms
the source ISO MD5 and that the copy of the patch served by the website is
byte-identical to the canonical release patch.

Run:  python C:/Programmieren/WizardryTranslationSite/tests/test_patch_roundtrip.py

Skips gracefully (exit 0) if the large ISOs / patch are absent, so CI without
the disc images does not choke. When the inputs ARE present it actually runs
the decode and checks the hashes.

Output ISO is written to (and overwritten in) the scratchpad / temp dir; per
project policy nothing is deleted.
"""

import hashlib
import os
import sys

# ---------------------------------------------------------------- config
WIZ = r"C:\programmieren\wizardrytranslation"
SOURCE_ISO = os.path.join(WIZ, "Busin 0 - Wizardry Alternative Neo (Japan) (v2.01).iso")
RELEASE_PATCH = os.path.join(WIZ, "release", "busin0_en_v186.xdelta")
SITE_PATCH = r"C:\Programmieren\WizardryTranslationSite\public\patch\busin0_en_v186.xdelta"

SOURCE_MD5 = "48a5639afdf9931913c7dde298dc5349"   # JP SLPM-65378, software v1.03
PATCHED_MD5 = "8617ab16f8358ec60c5400a4ffd7487d"  # v186 patched ISO

# where to write the decoded ISO (overwritten each run, never deleted)
WORK_DIR = os.environ.get(
    "BUSIN0_TEST_WORKDIR",
    os.environ.get("TEMP", os.path.dirname(os.path.abspath(__file__))),
)
OUT_ISO = os.path.join(WORK_DIR, "busin0_roundtrip_out.iso")

SKIP = 77  # conventional "skipped" exit code


def md5_file(path, chunk=1 << 20):
    h = hashlib.md5()
    with open(path, "rb") as f:
        for block in iter(lambda: f.read(chunk), b""):
            h.update(block)
    return h.hexdigest()


def main():
    print("=== Busin 0 patch round-trip test ===")

    try:
        import pyxdelta
    except ImportError:
        print("SKIP: pyxdelta not installed (pip install pyxdelta).")
        return SKIP

    # --- presence gate: skip cleanly if the big inputs aren't here ---
    missing = [p for p in (SOURCE_ISO, RELEASE_PATCH) if not os.path.isfile(p)]
    if missing:
        print("SKIP: required input(s) not present:")
        for p in missing:
            print("   - " + p)
        print("(This is expected in CI without the disc images.)")
        return SKIP

    failures = []

    def check(cond, msg):
        if cond:
            print("  PASS: " + msg)
        else:
            print("  FAIL: " + msg)
            failures.append(msg)
        return cond

    # --- 1. source ISO is the exact expected JP disc ---
    print("\n[1] hashing source ISO ...")
    src_md5 = md5_file(SOURCE_ISO)
    check(src_md5 == SOURCE_MD5,
          "source ISO MD5 == %s (got %s)" % (SOURCE_MD5, src_md5))

    # --- 2. site patch is byte-identical to the release patch ---
    print("\n[2] patch copies match")
    rel_md5 = md5_file(RELEASE_PATCH)
    if os.path.isfile(SITE_PATCH):
        site_md5 = md5_file(SITE_PATCH)
        check(site_md5 == rel_md5,
              "site patch MD5 == release patch MD5 (%s)" % rel_md5)
    else:
        print("  note: site patch copy not found at %s (skipping compare)" % SITE_PATCH)

    # --- 3. decode the patch and verify the round-trip hash ---
    print("\n[3] applying patch (pyxdelta.decode) -> %s" % OUT_ISO)
    os.makedirs(WORK_DIR, exist_ok=True)
    ok = pyxdelta.decode(infile=SOURCE_ISO, patchfile=RELEASE_PATCH, outfile=OUT_ISO)
    check(bool(ok), "pyxdelta.decode returned truthy")
    check(os.path.isfile(OUT_ISO) and os.path.getsize(OUT_ISO) > 0,
          "decoded ISO written and non-empty")

    if os.path.isfile(OUT_ISO):
        print("    hashing decoded ISO ...")
        out_md5 = md5_file(OUT_ISO)
        check(out_md5 == PATCHED_MD5,
              "patched ISO MD5 == %s (got %s)" % (PATCHED_MD5, out_md5))

    print("\n=== summary ===")
    if failures:
        print("FAILURES: %d" % len(failures))
        for m in failures:
            print("  - " + m)
        return 1
    print("ALL PASS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
