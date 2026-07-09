/* ============================================================
   Busin 0 / Wizardry Alternative Neo — EN translation site
   Vanilla JS: i18n switcher, lightbox, clipboard, scroll reveal.
   Languages: de + en (matches the portfolio exactly).
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- i18n string map ---------------- */
  var I18N = {
    en: {
      "a11y.skip": "Skip to content",
      "nav.about": "About",
      "nav.gallery": "Screenshots",
      "nav.download": "Download",
      "nav.changelog": "Changelog",
      "nav.bugs": "Bugs",
      "nav.source": "Source",

      "hero.badge": "Public Beta",
      "hero.pitch": "An unofficial English fan translation of a Japan-only PS2 dungeon crawler.",
      "hero.cta_download": "Get the patch",
      "hero.cta_gallery": "See screenshots",

      "about.title": "About the project",
      "about.intro": "Busin 0 is a 70+ hour Wizardry-style first-person dungeon crawler that never left Japan. This project brings it into English by patching the actual disc data, so it runs on real PS2 hardware — not just emulators.",

      "feat.crawler.title": "A lost JP-only crawler",
      "feat.crawler.body": "A 70+ hour first-person dungeon crawler in the Wizardry tradition, now playable in English.",
      "feat.hardware.title": "Real PS2 compatible",
      "feat.hardware.body": "The patch modifies the real disc data — fonts, scripts, menus — so it works on hardware, not just emulator overlays.",
      "feat.lines.title": "~83,000 lines translated",
      "feat.lines.body": "Dialogue, narration, menus and item text translated across the entire game.",
      "feat.tooling.title": "~13,000 lines of tooling",
      "feat.tooling.body": "Custom reverse-engineering tools were written from scratch to decode the game's formats and re-inject English.",
      "feat.localized.title": "Fully localized systems",
      "feat.localized.body": "Character creation, combat, quests, equipment and menus are all in English.",
      "feat.beta.title": "A living public beta",
      "feat.beta.body": "The major systems work start to finish; bug reports from players drive the project forward.",

      "gallery.title": "Screenshots",
      "gallery.intro": "Captured in-game from the translated build. Click any image to enlarge.",
      "cap.battle": "Turn-based combat against an ogre, fully in English.",
      "cap.chargen_race": "Character creation — choosing a race.",
      "cap.chargen_status": "Translated stats and personality traits.",
      "cap.roster": "The adventurer roster with English bios.",
      "cap.equipment": "Equipment and item descriptions in English.",
      "cap.requests": "Quest and request board, translated.",

      "dl.title": "Get the patch",
      "dl.intro": "The translation ships as an xdelta patch you apply to your own legal Japanese disc image. No game data is included.",
      "dl.button": "Download the patch",
      "dl.beta": "beta",
      "cl.download": "Download this version",
      "dl.readme": "Read the README",
      "dl.callout": "You must supply your own legally-dumped Japanese disc (SLPM-65378, v2.01). No copyrighted game data is distributed.",
      "dl.apply_title": "How to apply",
      "dl.apply_verify": "Verify your JP ISO's MD5 matches the source hash below.",
      "dl.apply_cli": "Apply with xdelta3 on the command line:",
      "dl.apply_gui": "Or use a GUI such as <a href=\"https://github.com/marco-calautti/DeltaPatcher\" target=\"_blank\" rel=\"noopener\">Delta Patcher</a>: set the original file to your JP ISO, the patch to busin0_en_v182.xdelta, then Apply.",
      "dl.apply_boot": "Boot the resulting ISO fresh from the title screen. Do not load an old save state from before patching.",
      "dl.md5_source": "Source ISO MD5",
      "dl.md5_patched": "Patched ISO MD5",
      "dl.copy_aria": "Copy to clipboard",

      "cl.title": "Changelog",
      "cl.intro": "What changed in each release. Expand a version for the details.",
      "cl.exp": "does not boot",
      "cl.v182.date": "July 2026",
      "cl.v182.sub": "The Language Update: ~1,500 dialogue lines rewritten in full, quest objectives corrected, personality traits fixed — the deepest text update yet.",
      "cl.v182.i1": "Story dialogue rebuilt (B4F and deeper): around 1,500 lines that shipped as telegraphic fragments are now full dialogue — including the complete final-battle rally speeches. Sourced from the classic fan translation guide, cross-checked line by line.",
      "cl.v182.i2": "Quest objectives corrected: several requests pointed at the wrong thing or place — Gin's quest chain wants a sword (not armor), one request sends you to the tavern (not the Castle), the B10F landmark is a crystal room, and one reward is a Leprechaun mask. If a quest ever felt impossible to parse, this is why.",
      "cl.v182.i3": "Items sorted out: a whole accessory category was mislabeled — rings, talismans and magic stones are now what they say they are; the katana ladder carries its real famous-sword names; “Mad King” items are no longer “Demon King”.",
      "cl.v182.i4": "Personality traits fixed twice over: a few were mistranslated from the start (the trait called “Bold” is actually the simple-minded one, now “Stupid”; “Narcissist” is now “Vain”) and ALL trait names now fit the recruitment screen — no more personalities showing a description with no name.",
      "cl.v182.i5": "Beta-report fixes: the tavern intro no longer spoils a name, the trap-game boxes show the right labels, and the inn greeting lost its stray “Waitress:” prefix (thanks SirDragoon for the sharp reports). Plus one spelling per name everywhere — Kunnal, Milly, Romi, Guillaume and friends.",
      "cl.v182.i6": "Under the hood: dozens of new build safeguards; the game code is byte-identical to v180/v181, so stability is unchanged.",
      "cl.v181.date": "July 2026",
      "cl.v181.sub": "Consistency polish: trait names now match everywhere, MacBain unified — same game code as v180, plus heavy build-safety armor.",
      "cl.v181.i1": "Two different personality traits were both called “Narcissist.” The self-centered one is now “Selfish” (the vain one keeps Narcissist).",
      "cl.v181.i2": "The library's personality pages now use the same trait names as character creation — Superstitious, Selfish and Bold were still shown there under their old pre-v168 names (Sensitive, Masochist, Simple).",
      "cl.v181.i3": "“Mac Bain” is now spelled “MacBain” everywhere.",
      "cl.v181.i4": "Under the hood: the battle-memory safety rule and the whole build pipeline gained hard regression gates. The game code is byte-identical to v180 — if v180 played fine for you, v181 plays the same, just with the text fixes.",
      "cl.v180.date": "July 2026",
      "cl.v180.sub": "The real battle fix: empty battles are gone for good — plus restored character-creation polish and a wider item-name capsule.",
      "cl.v180.i1": "The empty-battle softlock is actually fixed this time. The cause was translation font data sitting in the game's battle memory, where it could intermittently stall the monster loader. That data now lives in a safe spot inside the executable (no header tricks, so unlike v174 the console loader has nothing to reject), and battle memory ships untouched. Verified in play — including the harpy fight that kept reproducing it. Thanks to SirBewm for the save states that cracked it.",
      "cl.v180.i2": "Character creation restored to full polish: the correct letter spacing is back (v173 had to sacrifice it), the ♂/♀ gender symbols draw correctly, and the white description banner at the bottom of the screen — missing since v173 — is back.",
      "cl.v180.i3": "The item-name capsule (shop & synthesis lists) is now a third wider so long English names fit better. This one hasn't been eyeballed in-game yet — if it looks odd, please report it.",
      "cl.v180.i4": "Under the hood: new regression tests pin the banner, battle memory, and capsule data so none of this can silently break again. (v175–v179 were internal iterations.)",
      "cl.v174.date": "July 2026",
      "cl.v174.sub": "⚠ PULLED — this build boots to the PS2 BIOS and does not run. Use an earlier patch below.",
      "cl.v174.i1": "Do NOT use this build. It drops you into the PS2 BIOS instead of loading the game — the console loader rejected the modified executable. A corrected fix is in progress and will be re-tested before it goes back up. Please use an earlier patch below in the meantime.",
      "cl.v174.i2": "Sorry for the churn.",
      "cl.v173.date": "July 2026",
      "cl.v173.sub": "The battle-fix update: the empty-battle softlock finally solved, plus selectable choices, dungeon signs & shops, and name/menu fixes.",
      "cl.v173.i1": "The empty-battle softlock is NOT fully fixed yet. This version relocated some character-creation font data out of battle memory, but reports show fights can still show no monster / a stuck camera. The real cause is now pinned and a proper fix is in progress. If you hit it, an earlier patch below may be more stable for now.",
      "cl.v173.i2": "Choices work again. Events that showed a blank continue-arrow instead of options (the \u201clucky job\u201d game, the resurrection ceremony, Fight/Flee prompts) now let you actually choose.",
      "cl.v173.i3": "Dungeon signs and the honesty-box shop are readable again \u2014 the scattered/wrong text is fixed.",
      "cl.v173.i4": "Name fixes: \u201cAdventurer\u201d \u2192 \u201cFighter\u201d and \u201cSorcerer\u201d \u2192 \u201cMage\u201d, the party names Vago and MacBain now show in English, and a knight NPC reads \u201cKnight\u201d instead of \u201cKnights\u201d.",
      "cl.v173.i5": "Menu & label polish: character-creation stat descriptions (gender, Human, Elf), tavern and camp labels, the synthesis \u201cForm up?\u201d prompt, a wider item-name box on the treasure screen, and spell-book descriptions that wrap instead of running off-screen.",
      "cl.v173.i6": "Note: the empty-battle fix is a deep engine change. If you still hit a fight with no monster or a stuck camera, please report it \u2014 it helps a lot.",
      "cl.v168.date": "July 2026",
      "cl.v168.sub": "Character-creation trait wording.",
      "cl.v168.i1": "Three personality traits reworded to match what the Japanese actually says: \u201cSimple\u201d \u2192 Bold, \u201cSensitive\u201d \u2192 Superstitious, and \u201cMasochist\u201d \u2192 Narcissist.",
      "cl.v167.date": "July 2026",
      "cl.v167.sub": "Polish pass: a corrected class description, tidier dialogue and item names, unified spellings.",
      "cl.v167.i1": "Fixed the Bishop class description \u2014 it read \u201cRestores HP\u201d but the Bishop actually identifies items for free at character creation.",
      "cl.v167.i2": "Cleaned up several flagged dialogue lines and corrected item names to match the item database (Id Bracelet, Wishing Bow\u2026), and filled one missing town line.",
      "cl.v167.i3": "More consistent spelling across the game (Orogad, Langobalt) and the \u201cHoly\u201d magic school label now matches the class descriptions.",
      "cl.v167.i4": "Under the hood: a larger automated test suite and cleaner build verification \u2014 no more false alarms on the two by-design gender-glyph checks.",
      "cl.v166.date": "July 2026",
      "cl.v166.sub": "The Library Update: the entire in-game library translated, plus ~900 repaired or new dialogue lines.",
      "cl.v166.i1": "The in-game LIBRARY is now 100% English \u2014 monster compendium (official US bestiary names + all bios), magic library, Lidi\u2019s Guide to Duhan, glossary, key items, book texts and Simzon\u2019s expedition journal.",
      "cl.v166.i2": "Even the library\u2019s decorative artwork: the section banners (Library, Bestiary, Glossary\u2026), sub-tabs and footer hints are re-drawn in English.",
      "cl.v166.i3": "~560 dialogue lines in one town script were showing text from a DIFFERENT script \u2014 all purged and freshly translated (Romi the ghost fortune-teller, the Medal Exchange, the Vago subplot and more). A sister script\u2019s misaligned lines were repaired too.",
      "cl.v166.i4": "Battle techniques complete: names, descriptions, party requirements and setup messages, plus item-activation and party-rank messages.",
      "cl.v166.i5": "One spelling everywhere: Skedim, Vigger, Duhan, Fudo, Vago, Venoa, MacBain and friends unified across the whole game.",
      "cl.v166.i6": "Deep-cut fixes: the library\u2019s ability descriptions were shifted by two slots since the first release; a data corruption in the library index was repaired.",
      "cl.v162.date": "July 2026",
      "cl.v162.sub": "The completeness update: ending narration, hundreds of missing lines, names everywhere.",
      "cl.v162.i1": "The ENDING narration is now in English \u2014 the game\u2019s final scene had been left in Japanese.",
      "cl.v162.i2": "~440 previously-missing short dialogue lines across the town hubs (shop patter, lever clicks, ghost whispers, lottery draws).",
      "cl.v162.i3": "NPC nameplates translated (Knight Commander, nobles, sorcerers\u2026) and a real howler fixed: the Knights faction was shipping as \u201cAdventurer\u201d.",
      "cl.v162.i4": "Battle technique (AA) names, descriptions and party requirements are now in English, matching the setup-menu names.",
      "cl.v162.i5": "All ally roster names romanized (Yoppen, Lidi, Turgot, Bertin, Weil, Belgran\u2026).",
      "cl.v162.i6": "Character creation polish: three class names were in each other\u2019s slots (Knight/Onmitsu/Shogun), several traits had inverted meanings (\u201cFrugal\u201d was actually Wasteful, \u201cBrave\u201d a Coward), and short names like Fight/Alchem are now Fighter/Alchemist.",
      "cl.v162.i7": "Chants and incantations render as intended (\u201cEst Repere Burae\u2026\u201d), plus quest-log topics and class lists.",
      "cl.v162.i8": "Note: the ending is translated but render-untested \u2014 if you finish the game, a screenshot would be gold.",
      "cl.v160.date": "July 2026",
      "cl.v160.sub": "The text-correctness update: spell data, battle text, and the typesetting engine.",
      "cl.v160.i1": "Every spell description re-verified against the original data — 46 of 56 were wrong (most showed a different spell's text; the basic heal claimed to be an attack buff). All now match the real effects.",
      "cl.v160.i2": "Spell names aligned with the official US localization of the series: Feal, Leap, Barrets, Kuld, Spleem and more.",
      "cl.v160.i3": "Battle prompts fixed: the turn confirmation asked “Open box?” — it now reads “Start turn?” with Go!!/Redo, and the per-attack popup says Atk instead of Gain. (Root cause: a corrupted decoding dictionary had turned battle text into treasure-chest text.)",
      "cl.v160.i4": "Battle popup labels now render inside their boxes instead of one line below them — a bug present since the first release.",
      "cl.v160.i5": "Uneven letter spacing fixed game-wide (“Ge nde r se ts” → “Gender sets”) on character creation, status and request screens — the engine was measuring a different font than the one it drew.",
      "cl.v160.i6": "Library screen category rows are now in English (Guide / Books).",
      "cl.v160.i7": "Under the hood: a full project audit, a 279-test regression suite, and repairs to the glyph-decoding dictionary that caused several mistranslations.",
      "cl.v151.date": "June 2026",
      "cl.v151.sub": "Initial public beta.",
      "cl.v151.i1": "~83,000 lines translated: dialogue, narration, quests, items and menus.",
      "cl.v151.i2": "All major systems in English: character creation, combat, equipment, shops, facilities and bulletin boards.",
      "cl.v151.i3": "Proportional text rendering with automatic re-wrapping and pagination.",
      "cl.v151.i4": "Runs on real PS2 hardware — the patch modifies the disc data itself, not emulator overlays.",
      "cl.v151.i5": "Built with ~13,000 lines of custom reverse-engineering tooling.",

      "bugs.title": "Report bugs",
      "bugs.intro": "This is a public beta — bug reports are the whole point. Deep and late-game content is largely untested.",
      "bugs.what": "When something breaks, the most useful thing you can send is a save to reproduce from. Please include:",
      "bugs.item_state": "A PCSX2 save state (default hotkey F1) from just before a crash — not at the frozen screen.",
      "bugs.item_mcard": "An in-game memory-card save near the problem.",
      "bugs.item_repro": "A one-line description of what you did.",
      "bugs.item_shot": "A screenshot for any bad text, formatting or untranslated content.",
      "bugs.item_version": "The patch version (v182 beta).",
      "bugs.item_emu": "Your emulator and version (or \"real PS2\"), plus your PCSX2 renderer (Hardware vs Software) for graphics glitches.",
      "bugs.contact": "The best place for bug reports is <a href=\"https://github.com/Fabulu/Busin0Translation/issues\" target=\"_blank\" rel=\"noopener\">GitHub Issues</a> — you can attach save states and screenshots directly (zip the <code>.p2s</code> first). No GitHub account? Reply in the <a href=\"https://www.reddit.com/r/wizardry/comments/1uiapnh/busin_0_ps2_translation_beta/\" target=\"_blank\" rel=\"noopener\">r/wizardry release thread</a> instead.",

      "footer.disclaimer": "Unofficial fan project. Not affiliated with or endorsed by Atlus or RACJIN. You must legally own the original game. No copyrighted game data is distributed — this is a patch you apply to your own disc dump.",
      "footer.source": "Source on GitHub",
      "footer.portfolio": "Back to the portfolio",
      "footer.madeby": "Made by Fabian Trunz",

      "lightbox.close": "Close",
      "lightbox.prev": "Previous",
      "lightbox.next": "Next"
    },

    de: {
      "a11y.skip": "Zum Inhalt springen",
      "nav.about": "Über",
      "nav.gallery": "Screenshots",
      "nav.download": "Download",
      "nav.changelog": "Changelog",
      "nav.bugs": "Fehler",
      "nav.source": "Quellcode",

      "hero.badge": "Öffentliche Beta",
      "hero.pitch": "Eine inoffizielle englische Fan-Übersetzung eines nur in Japan erschienenen PS2-Dungeon-Crawlers.",
      "hero.cta_download": "Patch holen",
      "hero.cta_gallery": "Screenshots ansehen",

      "about.title": "Über das Projekt",
      "about.intro": "Busin 0 ist ein über 70 Stunden langer Dungeon-Crawler aus der Ego-Perspektive im Stil von Wizardry, der Japan nie verlassen hat. Dieses Projekt bringt ihn ins Englische, indem es die Disc-Daten selbst patcht — so läuft er auf echter PS2-Hardware, nicht nur auf Emulatoren.",

      "feat.crawler.title": "Ein verlorener JP-Crawler",
      "feat.crawler.body": "Ein über 70 Stunden langer Ego-Dungeon-Crawler in der Wizardry-Tradition, jetzt auf Englisch spielbar.",
      "feat.hardware.title": "Echte PS2-Kompatibilität",
      "feat.hardware.body": "Der Patch verändert die echten Disc-Daten — Schriften, Skripte, Menüs — und funktioniert daher auf Hardware, nicht nur über Emulator-Overlays.",
      "feat.lines.title": "~83'000 übersetzte Zeilen",
      "feat.lines.body": "Dialoge, Erzähltexte, Menüs und Gegenstandstexte im ganzen Spiel übersetzt.",
      "feat.tooling.title": "~13'000 Zeilen Werkzeuge",
      "feat.tooling.body": "Eigene Reverse-Engineering-Werkzeuge wurden von Grund auf geschrieben, um die Formate des Spiels zu entschlüsseln und Englisch wieder einzufügen.",
      "feat.localized.title": "Vollständig lokalisierte Systeme",
      "feat.localized.body": "Charaktererstellung, Kampf, Aufträge, Ausrüstung und Menüs sind alle auf Englisch.",
      "feat.beta.title": "Eine lebendige öffentliche Beta",
      "feat.beta.body": "Die grossen Systeme funktionieren von Anfang bis Ende; Fehlerberichte der Spieler treiben das Projekt voran.",

      "gallery.title": "Screenshots",
      "gallery.intro": "Im Spiel aus dem übersetzten Build aufgenommen. Klicke auf ein Bild zum Vergrössern.",
      "cap.battle": "Rundenbasierter Kampf gegen einen Oger, komplett auf Englisch.",
      "cap.chargen_race": "Charaktererstellung — Wahl des Volkes.",
      "cap.chargen_status": "Übersetzte Werte und Persönlichkeitszüge.",
      "cap.roster": "Die Abenteurer-Liste mit englischen Biografien.",
      "cap.equipment": "Ausrüstung und Gegenstandsbeschreibungen auf Englisch.",
      "cap.requests": "Auftrags- und Anfragetafel, übersetzt.",

      "dl.title": "Patch holen",
      "dl.intro": "Die Übersetzung kommt als xdelta-Patch, den du auf dein eigenes legales japanisches Disc-Abbild anwendest. Es werden keine Spieldaten mitgeliefert.",
      "dl.button": "Patch herunterladen",
      "dl.beta": "Beta",
      "cl.download": "Diese Version laden",
      "dl.readme": "README lesen",
      "dl.callout": "Du musst deine eigene, legal erstellte japanische Disc beisteuern (SLPM-65378, v2.01). Es werden keine urheberrechtlich geschützten Spieldaten verbreitet.",
      "dl.apply_title": "So wird angewendet",
      "dl.apply_verify": "Prüfe, ob die MD5 deiner JP-ISO mit dem Quell-Hash unten übereinstimmt.",
      "dl.apply_cli": "Mit xdelta3 auf der Kommandozeile anwenden:",
      "dl.apply_gui": "Oder eine grafische Oberfläche wie <a href=\"https://github.com/marco-calautti/DeltaPatcher\" target=\"_blank\" rel=\"noopener\">Delta Patcher</a> verwenden: Originaldatei = deine JP-ISO, Patch = busin0_en_v182.xdelta, dann Anwenden.",
      "dl.apply_boot": "Starte die entstandene ISO frisch vom Titelbildschirm. Lade keinen alten Save-State von vor dem Patchen.",
      "dl.md5_source": "Quell-ISO MD5",
      "dl.md5_patched": "Gepatchte ISO MD5",
      "dl.copy_aria": "In die Zwischenablage kopieren",

      "cl.title": "Changelog",
      "cl.intro": "Was sich in jeder Version geändert hat. Version aufklappen für Details.",
      "cl.exp": "bootet nicht",
      "cl.v182.date": "Juli 2026",
      "cl.v182.sub": "Das Sprach-Update: ~1.500 Dialogzeilen vollständig neu geschrieben, Questziele korrigiert, Persönlichkeits-Eigenschaften repariert — das tiefste Text-Update bisher.",
      "cl.v182.i1": "Story-Dialoge neu aufgebaut (ab B4F): rund 1.500 Zeilen, die als Telegramm-Fragmente ausgeliefert wurden, sind jetzt vollwertige Dialoge — inklusive der kompletten Ansprachen vor der finalen Schlacht. Quelle: der klassische Fan-Übersetzungsguide, Zeile für Zeile gegengeprüft.",
      "cl.v182.i2": "Questziele korrigiert: mehrere Aufträge zeigten auf das falsche Objekt oder den falschen Ort — Gins Questreihe will ein Schwert (keine Rüstung), ein Auftrag führt in die Taverne (nicht ins Schloss), das B10F-Wahrzeichen ist ein Kristallraum, und eine Belohnung ist eine Leprechaun-Maske. Falls eine Quest je unverständlich wirkte: deshalb.",
      "cl.v182.i3": "Gegenstände entwirrt: eine ganze Accessoire-Kategorie war falsch beschriftet — Ringe, Talismane und Magiesteine sind jetzt, was sie behaupten; die Katana-Leiter trägt ihre echten berühmten Schwertnamen; „Mad King“-Items sind nicht mehr „Demon King“.",
      "cl.v182.i4": "Persönlichkeits-Eigenschaften doppelt repariert: einige waren von Anfang an falsch übersetzt (die Eigenschaft „Bold“ ist eigentlich die einfältige, jetzt „Stupid“; „Narcissist“ heißt jetzt „Vain“), und ALLE Namen passen jetzt in den Rekrutierungsbildschirm — keine Persönlichkeit mehr mit Beschreibung, aber ohne Namen.",
      "cl.v182.i5": "Beta-Report-Fixes: das Taverne-Intro verrät keinen Namen mehr zu früh, die Fallenspiel-Boxen zeigen die richtigen Beschriftungen, und die Gasthaus-Begrüßung hat ihr verirrtes „Waitress:“-Präfix verloren (danke SirDragoon für die messerscharfen Reports). Dazu eine Schreibweise pro Name überall — Kunnal, Milly, Romi, Guillaume und Co.",
      "cl.v182.i6": "Unter der Haube: Dutzende neue Build-Sicherungen; der Spielcode ist byte-identisch zu v180/v181, die Stabilität also unverändert.",
      "cl.v181.date": "Juli 2026",
      "cl.v181.sub": "Konsistenz-Politur: Eigenschaftsnamen stimmen jetzt überall überein, MacBain vereinheitlicht — gleicher Spielcode wie v180, plus massive Build-Sicherheitsgurte.",
      "cl.v181.i1": "Zwei verschiedene Persönlichkeits-Eigenschaften hießen beide „Narzisst“. Die selbstbezogene heißt jetzt „Selfish“ (die eitle bleibt Narcissist).",
      "cl.v181.i2": "Die Persönlichkeits-Seiten der Bibliothek verwenden jetzt dieselben Eigenschaftsnamen wie die Charaktererstellung — Superstitious, Selfish und Bold standen dort noch unter ihren alten Vor-v168-Namen (Sensitive, Masochist, Simple).",
      "cl.v181.i3": "„Mac Bain“ heißt jetzt überall „MacBain“.",
      "cl.v181.i4": "Unter der Haube: die Kampfspeicher-Sicherheitsregel und die gesamte Build-Pipeline haben harte Regressions-Gates bekommen. Der Spielcode ist byte-identisch zu v180 — wenn v180 bei dir lief, läuft v181 genauso, nur mit den Textkorrekturen.",
      "cl.v180.date": "Juli 2026",
      "cl.v180.sub": "Der echte Kampf-Fix: leere Kämpfe sind endgültig Geschichte — dazu wiederhergestellter Charaktererstellungs-Feinschliff und eine breitere Gegenstandsnamen-Kapsel.",
      "cl.v180.i1": "Der Leerer-Kampf-Softlock ist diesmal wirklich behoben. Die Ursache waren Übersetzungs-Schriftdaten im Kampfspeicher des Spiels, die den Monster-Loader sporadisch blockieren konnten. Diese Daten liegen jetzt an einer sicheren Stelle in der EXE (keine Header-Tricks — anders als bei v174 hat der Konsolen-Loader nichts abzulehnen), und der Kampfspeicher bleibt unangetastet. Im Spiel bestätigt — inklusive des Harpyien-Kampfes, der den Fehler immer wieder ausgelöst hat. Danke an SirBewm für die Save-States, die den Fall geknackt haben.",
      "cl.v180.i2": "Charaktererstellung wieder voll poliert: der korrekte Buchstabenabstand ist zurück (v173 musste ihn opfern), die ♂/♀-Geschlechtssymbole werden korrekt gezeichnet, und das weiße Beschreibungsbanner unten am Bildschirm — seit v173 verschwunden — ist wieder da.",
      "cl.v180.i3": "Die Gegenstandsnamen-Kapsel (Shop- & Synthese-Listen) ist jetzt ein Drittel breiter, damit lange englische Namen besser passen. Das wurde im Spiel noch nicht gegengeprüft — falls es seltsam aussieht, bitte melden.",
      "cl.v180.i4": "Unter der Haube: neue Regressionstests sichern Banner, Kampfspeicher und Kapsel-Daten ab, damit nichts davon unbemerkt wieder kaputtgehen kann. (v175–v179 waren interne Iterationen.)",
      "cl.v174.date": "Juli 2026",
      "cl.v174.sub": "⚠ ZURÜCKGEZOGEN — dieser Build bootet ins PS2-BIOS und läuft nicht. Nutze einen früheren Patch unten.",
      "cl.v174.i1": "Diesen Build NICHT verwenden. Er bootet ins PS2-BIOS, statt das Spiel zu laden — der Konsolen-Loader hat die veränderte EXE abgelehnt. Ein korrigierter Fix ist in Arbeit und wird vor der Rückkehr erneut getestet. Bitte nutze in der Zwischenzeit einen früheren Patch weiter unten.",
      "cl.v174.i2": "Entschuldigung für das Hin und Her.",
      "cl.v173.date": "Juli 2026",
      "cl.v173.sub": "Das Kampf-Fix-Update: der Leerer-Kampf-Softlock endlich gel\u00f6st, dazu ausw\u00e4hlbare Optionen, Dungeon-Schilder & L\u00e4den und Namens-/Men\u00fc-Korrekturen.",
      "cl.v173.i1": "Der Leerer-Kampf-Softlock ist noch NICHT vollständig behoben. Diese Version hat einige Schriftdaten der Charaktererstellung aus dem Kampfspeicher verschoben, aber Berichte zeigen, dass Kämpfe weiterhin kein Monster / eine blockierte Kamera zeigen können. Die eigentliche Ursache ist jetzt gefunden und eine richtige Lösung ist in Arbeit. Falls du es erlebst, ist ein älterer Patch unten vorerst evtl. stabiler.",
      "cl.v173.i2": "Auswahlm\u00f6glichkeiten funktionieren wieder. Ereignisse, die statt Optionen einen leeren Weiter-Pfeil zeigten (das \u201eGl\u00fccksjob\u201c-Spiel, die Wiederbelebungszeremonie, Kampf/Flucht-Abfragen), lassen dich jetzt wirklich w\u00e4hlen.",
      "cl.v173.i3": "Dungeon-Schilder und der Selbstbedienungsladen sind wieder lesbar \u2014 der verstreute/falsche Text ist behoben.",
      "cl.v173.i4": "Namens-Korrekturen: \u201eAdventurer\u201c \u2192 \u201eFighter\u201c und \u201eSorcerer\u201c \u2192 \u201eMage\u201c, die Party-Namen Vago und MacBain erscheinen jetzt auf Englisch, und ein Ritter-NPC hei\u00dft \u201eKnight\u201c statt \u201eKnights\u201c.",
      "cl.v173.i5": "Men\u00fc- & Beschriftungs-Feinschliff: Statuswert-Beschreibungen der Charaktererstellung (Geschlecht, Mensch, Elf), Taverne- und Lager-Beschriftungen, die Synthese-Abfrage \u201eForm up?\u201c, ein breiteres Gegenstandsnamen-Feld im Schatz-Bildschirm und Zauberbuch-Beschreibungen, die umbrechen statt aus dem Bild zu laufen.",
      "cl.v173.i6": "Hinweis: Der Leerer-Kampf-Fix ist ein tiefer Engine-Eingriff. Falls du noch einen Kampf ohne Monster oder mit blockierter Kamera erlebst, melde es bitte \u2014 das hilft sehr.",
      "cl.v168.date": "Juli 2026",
      "cl.v168.sub": "Formulierung der Charaktereigenschaften.",
      "cl.v168.i1": "Drei Charaktereigenschaften an den japanischen Wortlaut angepasst: \u201eSimple\u201c \u2192 Bold, \u201eSensitive\u201c \u2192 Superstitious und \u201eMasochist\u201c \u2192 Narcissist.",
      "cl.v167.date": "Juli 2026",
      "cl.v167.sub": "Feinschliff: eine korrigierte Klassenbeschreibung, sauberere Dialoge und Item-Namen, vereinheitlichte Schreibweisen.",
      "cl.v167.i1": "Die Bishop-Klassenbeschreibung korrigiert \u2014 sie sagte \u201eStellt HP wieder her\u201c, doch der Bishop identifiziert tats\u00e4chlich Items gratis bei der Charaktererstellung.",
      "cl.v167.i2": "Mehrere markierte Dialogzeilen bereinigt und Item-Namen an die Item-Datenbank angepasst (Id Bracelet, Wishing Bow\u2026), dazu eine fehlende Stadtzeile erg\u00e4nzt.",
      "cl.v167.i3": "Einheitlichere Schreibweisen im ganzen Spiel (Orogad, Langobalt), und das \u201eHoly\u201c-Magieschul-Label passt jetzt zu den Klassenbeschreibungen.",
      "cl.v167.i4": "Unter der Haube: eine gr\u00f6ssere automatische Testsuite und sauberere Build-Pr\u00fcfung \u2014 keine Fehlalarme mehr bei den zwei absichtlichen Gender-Glyphen-Checks.",
      "cl.v166.date": "Juli 2026",
      "cl.v166.sub": "Das Bibliotheks-Update: die komplette Spielbibliothek \u00fcbersetzt, dazu ~900 reparierte oder neue Dialogzeilen.",
      "cl.v166.i1": "Die BIBLIOTHEK im Spiel ist jetzt zu 100% Englisch \u2014 Monster-Kompendium (offizielle US-Bestiariumsnamen + alle Biografien), Magie-Bibliothek, Lidis Duhan-F\u00fchrer, Glossar, Schl\u00fcsselitems, B\u00fcchertexte und Simzons Expeditionstagebuch.",
      "cl.v166.i2": "Sogar die Schmuckgrafiken der Bibliothek: Sektionsbanner (Library, Bestiary, Glossary\u2026), Untertabs und Fusszeilen-Hinweise sind auf Englisch neu gezeichnet.",
      "cl.v166.i3": "~560 Dialogzeilen eines Stadt-Skripts zeigten Text aus einem ANDEREN Skript \u2014 alle entfernt und frisch \u00fcbersetzt (Geist-Wahrsagerin Romi, die Medaillenb\u00f6rse, der Vago-Nebenplot u.m.). Ein Schwester-Skript mit verschobenen Zeilen wurde ebenfalls repariert.",
      "cl.v166.i4": "Kampftechniken komplett: Namen, Beschreibungen, Gruppen-Anforderungen und Setup-Meldungen, dazu Item-Aktivierungs- und Gruppenrang-Meldungen.",
      "cl.v166.i5": "Eine Schreibweise \u00fcberall: Skedim, Vigger, Duhan, Fudo, Vago, Venoa, MacBain und Co. im ganzen Spiel vereinheitlicht.",
      "cl.v166.i6": "Tiefenreparaturen: Die F\u00e4higkeits-Beschreibungen der Bibliothek waren seit der ersten Version um zwei Eintr\u00e4ge verschoben; eine Datenkorruption im Bibliotheksindex wurde behoben.",
      "cl.v162.date": "Juli 2026",
      "cl.v162.sub": "Das Vollst\u00e4ndigkeits-Update: Abspann-Erz\u00e4hlung, hunderte fehlende Zeilen, Namen \u00fcberall.",
      "cl.v162.i1": "Die ABSPANN-Erz\u00e4hlung ist jetzt auf Englisch \u2014 die Schlussszene des Spiels war noch japanisch.",
      "cl.v162.i2": "~440 bisher fehlende kurze Dialogzeilen in den Stadt-Hubs (Ladengespr\u00e4che, Hebel-Meldungen, Geisterfl\u00fcstern, Lotterie).",
      "cl.v162.i3": "NPC-Namensschilder \u00fcbersetzt (Knight Commander, Adlige, Zauberer\u2026) und ein echter Schnitzer behoben: Die Ritterschaft hiess bisher \u201eAdventurer\u201c.",
      "cl.v162.i4": "Kampftechnik-Namen (AA), Beschreibungen und Gruppen-Anforderungen jetzt auf Englisch, passend zum Setup-Men\u00fc.",
      "cl.v162.i5": "Alle Gef\u00e4hrten-Namen romanisiert (Yoppen, Lidi, Turgot, Bertin, Weil, Belgran\u2026).",
      "cl.v162.i6": "Charaktererstellung poliert: Drei Klassennamen sassen in falschen Slots (Knight/Onmitsu/Shogun), mehrere Wesenszuege hatten verkehrte Bedeutungen (\u201eFrugal\u201c war eigentlich Wasteful, \u201eBrave\u201c ein Feigling), und Kurznamen wie Fight/Alchem sind jetzt Fighter/Alchemist.",
      "cl.v162.i7": "Beschw\u00f6rungen erscheinen wie vorgesehen (\u201eEst Repere Burae\u2026\u201c), dazu Auftragslog-Themen und Klassenlisten.",
      "cl.v162.i8": "Hinweis: Der Abspann ist \u00fcbersetzt, aber render-ungetestet \u2014 wer das Spiel durchspielt: ein Screenshot waere Gold wert.",
      "cl.v160.date": "Juli 2026",
      "cl.v160.sub": "Das Text-Korrektheits-Update: Zauberdaten, Kampftexte und die Textsetzung.",
      "cl.v160.i1": "Alle Zauberbeschreibungen gegen die Originaldaten geprüft — 46 von 56 waren falsch (die meisten zeigten den Text eines anderen Zaubers; der Basis-Heilzauber behauptete, ein Angriffs-Buff zu sein). Jetzt stimmen alle mit der echten Wirkung überein.",
      "cl.v160.i2": "Zaubernamen an die offizielle US-Lokalisierung der Serie angeglichen: Feal, Leap, Barrets, Kuld, Spleem und mehr.",
      "cl.v160.i3": "Kampf-Prompts korrigiert: Die Zugbestätigung fragte „Open box?“ — jetzt „Start turn?“ mit Go!!/Redo, und das Angriffs-Popup zeigt Atk statt Gain. (Ursache: Ein fehlerhaftes Dekodier-Wörterbuch hatte Kampftext als Schatztruhen-Text übersetzt.)",
      "cl.v160.i4": "Kampf-Popup-Beschriftungen erscheinen jetzt in ihren Boxen statt eine Zeile darunter — ein Fehler seit der ersten Version.",
      "cl.v160.i5": "Ungleichmässige Buchstabenabstände spielweit behoben („Ge nde r se ts“ → „Gender sets“) — bei Charaktererstellung, Status und Auftragsbrett. Die Engine vermass eine andere Schrift, als sie zeichnete.",
      "cl.v160.i6": "Bibliothek: Kategoriezeilen jetzt auf Englisch (Guide / Books).",
      "cl.v160.i7": "Unter der Haube: vollständiges Projekt-Audit, 279 Regressionstests und Reparatur des Glyphen-Wörterbuchs, das mehrere Fehlübersetzungen verursacht hatte.",
      "cl.v151.date": "Juni 2026",
      "cl.v151.sub": "Erste öffentliche Beta.",
      "cl.v151.i1": "~83'000 übersetzte Zeilen: Dialoge, Erzähltext, Aufträge, Items und Menüs.",
      "cl.v151.i2": "Alle grossen Systeme auf Englisch: Charaktererstellung, Kampf, Ausrüstung, Läden, Einrichtungen und Schwarzes Brett.",
      "cl.v151.i3": "Proportionale Textdarstellung mit automatischem Umbruch und Seitenwechsel.",
      "cl.v151.i4": "Läuft auf echter PS2-Hardware — der Patch ändert die Disc-Daten selbst, keine Emulator-Overlays.",
      "cl.v151.i5": "Gebaut mit ~13'000 Zeilen eigenem Reverse-Engineering-Tooling.",

      "bugs.title": "Fehler melden",
      "bugs.intro": "Dies ist eine öffentliche Beta — Fehlerberichte sind der eigentliche Sinn. Tiefe und späte Spielinhalte sind grösstenteils ungetestet.",
      "bugs.what": "Wenn etwas kaputtgeht, ist das Nützlichste ein Spielstand, von dem aus sich der Fehler reproduzieren lässt. Bitte füge bei:",
      "bugs.item_state": "Einen PCSX2-Save-State (Standardtaste F1) von kurz vor einem Absturz — nicht erst beim eingefrorenen Bild.",
      "bugs.item_mcard": "Einen Memory-Card-Spielstand im Spiel nahe am Problem.",
      "bugs.item_repro": "Eine einzeilige Beschreibung, was du getan hast.",
      "bugs.item_shot": "Einen Screenshot bei fehlerhaftem Text, Formatierung oder unübersetztem Inhalt.",
      "bugs.item_version": "Die Patch-Version (v182 Beta).",
      "bugs.item_emu": "Deinen Emulator und dessen Version (oder \"echte PS2\") sowie deinen PCSX2-Renderer (Hardware oder Software) bei Grafikfehlern.",
      "bugs.contact": "Der beste Ort für Fehlerberichte ist <a href=\"https://github.com/Fabulu/Busin0Translation/issues\" target=\"_blank\" rel=\"noopener\">GitHub Issues</a> — Save-States und Screenshots können direkt angehängt werden (die <code>.p2s</code> vorher zippen). Kein GitHub-Konto? Antworte stattdessen im <a href=\"https://www.reddit.com/r/wizardry/comments/1uiapnh/busin_0_ps2_translation_beta/\" target=\"_blank\" rel=\"noopener\">r/wizardry-Release-Thread</a>.",

      "footer.disclaimer": "Inoffizielles Fan-Projekt. Nicht mit Atlus oder RACJIN verbunden oder von ihnen unterstützt. Du musst das Originalspiel legal besitzen. Es werden keine urheberrechtlich geschützten Spieldaten verbreitet — dies ist ein Patch, den du auf deinen eigenen Disc-Abzug anwendest.",
      "footer.source": "Quellcode auf GitHub",
      "footer.portfolio": "Zurück zum Portfolio",
      "footer.madeby": "Erstellt von Fabian Trunz",

      "lightbox.close": "Schliessen",
      "lightbox.prev": "Zurück",
      "lightbox.next": "Weiter"
    }
  };

  var LANG_KEY = "busin0_lang";
  var current = "en";

  function detectLang() {
    try {
      var stored = localStorage.getItem(LANG_KEY);
      if (stored === "de" || stored === "en") return stored;
    } catch (e) { /* ignore */ }
    return "en"; // default to English regardless of browser locale
  }

  function t(key) {
    var dict = I18N[current] || I18N.en;
    return dict[key] != null ? dict[key] : (I18N.en[key] != null ? I18N.en[key] : key);
  }

  function setLang(lang) {
    if (lang !== "de" && lang !== "en") lang = "en";
    current = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    document.documentElement.setAttribute("lang", lang);

    // textContent strings
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    // innerHTML strings (for the few that carry inline markup)
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    // aria-label attributes
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    // language toggle active state
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    // refresh lightbox caption if open
    if (lb && !lb.hidden) updateLightbox();
  }

  /* ---------------- Lightbox ---------------- */
  var shots = [];
  var lbIndex = 0;
  var lb, lbImg, lbCap;

  function captionForIndex(i) {
    var cap = shots[i] ? shots[i].querySelector(".shot-cap") : null;
    return cap ? cap.getAttribute("data-i18n") : null;
  }

  function imgForIndex(i) {
    return shots[i] ? shots[i].querySelector("img") : null;
  }

  function updateLightbox() {
    var img = imgForIndex(lbIndex);
    if (!img) return;
    lbImg.src = img.src;
    lbImg.alt = img.alt || "";
    var capKey = captionForIndex(lbIndex);
    lbCap.textContent = capKey ? t(capKey) : "";
  }

  function openLightbox(i) {
    lbIndex = i;
    updateLightbox();
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    var closeBtn = document.getElementById("lb-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    lb.hidden = true;
    document.body.style.overflow = "";
  }

  function step(delta) {
    if (!shots.length) return;
    lbIndex = (lbIndex + delta + shots.length) % shots.length;
    updateLightbox();
  }

  /* ---------------- Clipboard ---------------- */
  function copyText(text, btn) {
    function flash() {
      if (!btn) return;
      btn.classList.add("copied");
      setTimeout(function () { btn.classList.remove("copied"); }, 1200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(flash, function () { fallback(text, flash); });
    } else {
      fallback(text, flash);
    }
  }
  function fallback(text, done) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      if (done) done();
    } catch (e) { /* graceful no-op */ }
  }

  /* ---------------- Scroll reveal ---------------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ---------------- Wire up ---------------- */
  function init() {
    // language buttons
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { setLang(btn.getAttribute("data-lang")); });
    });

    // gallery / lightbox
    shots = Array.prototype.slice.call(document.querySelectorAll(".shot"));
    lb = document.getElementById("lightbox");
    lbImg = document.getElementById("lb-img");
    lbCap = document.getElementById("lb-cap");

    document.querySelectorAll(".shot-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openLightbox(parseInt(btn.getAttribute("data-index"), 10) || 0);
      });
    });
    var closeBtn = document.getElementById("lb-close");
    var prevBtn = document.getElementById("lb-prev");
    var nextBtn = document.getElementById("lb-next");
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (prevBtn) prevBtn.addEventListener("click", function () { step(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { step(1); });
    if (lb) lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });

    document.addEventListener("keydown", function (e) {
      if (!lb || lb.hidden) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    });

    // copy buttons
    document.querySelectorAll(".copy-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        copyText(btn.getAttribute("data-copy"), btn);
      });
    });

    initReveal();
    setLang(detectLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
