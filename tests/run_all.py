#!/usr/bin/env python3
"""Run every test in this folder. Exit 0 only if all pass (77 = skipped is OK)."""
import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
TESTS = ["test_site.py", "test_patch_roundtrip.py"]

rc = 0
for t in TESTS:
    print("\n" + "=" * 60)
    print("RUN " + t)
    print("=" * 60)
    r = subprocess.run([sys.executable, os.path.join(HERE, t)])
    if r.returncode == 77:
        print("(skipped)")
    elif r.returncode != 0:
        rc = 1
sys.exit(rc)
