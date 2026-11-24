// One-Line Office Joke: 24-Hour Sprint
// Entry program for make.fun competition
// u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162
//
// Writes exactly one line — a one-line joke about office life — to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Deterministic: no randomness, no network, no time, no environment
// dependence beyond the output directory. Node 22+, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My boss calls it a 'quick sync' the way my dentist calls it 'a little pinch'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
