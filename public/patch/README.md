# Busin 0: Wizardry Alternative Neo — English Translation (PUBLIC BETA)

An unofficial English fan translation of **Busin 0: Wizardry Alternative Neo** (PS2, **SLPM-65378**).

> **This is a BETA / public test.** The major systems are translated and the game is
> playable start-to-finish in principle, but it has **NOT been fully play-tested**.
> Expect untranslated lines, formatting glitches, or crashes in deeper/late content.
> **Your bug reports are the point of this release** — please read "How to report bugs."

## Requirements

- **Your own legally-dumped copy** of the original Japanese disc: **SLPM-65378** (Busin 0, v2.01).
  - **Verify your ISO before patching** — MD5 must be: `48a5639afdf9931913c7dde298dc5349`
  - If your MD5 differs, you have a different dump/version and the patch will NOT apply correctly.
- An emulator (**PCSX2** recommended) or real PS2 hardware (modchip / Free MCBoot). The translation is built to be **real-hardware compatible** (it patches the actual disc data, not emulator texture overlays).
- A patch tool: **xdelta3** (CLI) or a GUI like **[Delta Patcher](https://github.com/marco-calautti/DeltaPatcher)** / **xdelta UI**.

## Applying the patch

CLI:
```
xdelta3 -d -s "Busin 0 - Wizardry Alternative Neo (Japan) (v2.01).iso" busin0_en_v185.xdelta BUSIN0_EN.iso
```
GUI ([Delta Patcher](https://github.com/marco-calautti/DeltaPatcher)): Original file = your JP ISO, Patch = `busin0_en_v185.xdelta`, then Apply.

**Verify your patched output** (optional but recommended) — the resulting ISO MD5 should be:
`748f7a5ffa53da5e03679a6cee8fb2ff`. If it matches, the patch applied perfectly.

Boot the resulting `BUSIN0_EN.iso`:
- **PCSX2:** File → Boot ISO. **Boot fresh from the title screen** — do NOT load an old save state from before patching (save states embed the old game data and will show stale/Japanese content regardless of the ISO).
- **Real PS2:** burn to DVD-R or load via USB/HDD with your loader of choice.

## Known issues / what to expect (BETA)

> **Real PS2 hardware:** the translation is built to be hardware-compatible (it patches
> the disc, not the emulator) and there is no known reason it won't run on a real console —
> but so far it has **only been tested on PCSX2**. If you run it on a real PS2 (burned DVD-R,
> or via FMCB / USB / HDD loader), **please report whether it boots and plays.** Those reports
> are the single most valuable thing right now — it's the one thing an emulator can't confirm.

- **Deep / late content is largely UNTESTED.** Expect bugs past the early dungeon — that's what this beta is for.
- **Battle was recently fixed** (an "empty arena / enemies never appear / camera pans forever" bug). If you hit a fight like that, it's a regression — **please send a save** (see below).
- **Fixed in v183:** the inline-speaker-prefix cleanup — speaker names no longer print twice (~600 lines), wrong nameplates corrected (Knight->Adventurer, Pixie->Elf Merchant), elf clerk gender fixed, Regina/Belgrano story-accuracy fixes, ~750 decorative quotes removed, currency ->G. Game code identical to v182. Disc = SLPM-65378 (v1.03).
- **Fixed in v182:** ~1,500 story dialogue lines rebuilt in full (B4F+, incl. final-battle speeches), quest objectives corrected (sword/tavern/crystal/mask), item categories fixed (rings/talismans/stones, Mad King, real katana names), personality traits corrected + all fit the recruitment screen, trap-game/tavern/inn beta reports fixed, one spelling per name. Game code byte-identical to v181.
- **Fixed in v181:** duplicate “Narcissist” trait resolved (self-centered one = “Selfish”), library personality pages renamed to match character creation (Superstitious/Selfish/Bold), “MacBain” spelling unified. Game code identical to v180.
- **Fixed in v180:** the empty-battle softlock is fixed for real this time — the translation font data that could stall the monster loader now lives safely inside the executable, and battle memory ships untouched (verified in play, including the harpy fight). Character creation is back to full polish: correct letter spacing, correct gender symbols, and the white description banner restored. The item-name capsule is a third wider (not yet eyeballed in-game — report oddities). v173's earlier fixes (choices, dungeon signs, honesty-box shop, name fixes) are all included.
- **Likely still Japanese or unverified:** equipment **type icons** (weapon/armor category labels), the **credits / staff roll** (probably a video stream), some **late-game/ending text fit**. Reports welcome.
- **Minor cosmetic:** the **L1/R1** bottom-bar hints and a few late-game screens are still unverified; some NPC nameplates and library entries remain Japanese (queued for the next update).
- **Sparse untranslated dialogue** may still appear in side content (not every resource has been scanned).

## How to report bugs — PLEASE READ, this is the whole point

The single most useful thing you can send is **a save I can reproduce from.**

**For a CRASH or softlock:**
1. Make a **PCSX2 save state** (default hotkey **F1**) and an **in-game memory-card save** from **SHORTLY BEFORE** the crash — not at the crash.
2. Note in one line **what you did** (e.g. "walked into the 3rd patroller on B2, fight loaded with no enemies").
> A save state *at* the frozen screen is much less useful than one from *just before*, because by then the failure has already happened.

**For bad text / formatting / untranslated content:**
1. A **save state (or memory-card save) near that screen** + a **screenshot** + **which screen/menu** it is.

**Always include:**
- The **patch version** (v183 beta)
- **Emulator + version** (or "real PS2"), and your **PCSX2 renderer** (Hardware vs Software) if it's a graphics glitch
- Where to send: **[ YOUR CONTACT / SUBREDDIT / DISCORD / EMAIL HERE ]**

## Disclaimer

Unofficial fan project. **Not affiliated with or endorsed by Atlus or RACJIN.** You must legally own the original game. **No copyrighted game data is distributed** — this is a patch you apply to your own disc dump. If you enjoy the game, support an official release if one ever becomes available.
