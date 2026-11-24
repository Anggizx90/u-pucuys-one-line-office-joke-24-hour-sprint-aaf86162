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

// Mirrors the kit gate: the entry must be 1-200 chars, non-whitespace,
// and a single line (no newline). Fail fast instead of writing an
// invalid entry that the scorer would reject with Valid 0.
function assertGate(line: string): void {
  if (line.length === 0 || line.length > 200) {
    throw new Error(`gate: entry must be 1-200 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("gate: entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("gate: entry must be a single line");
  }
}

assertGate(LINE);

// Why the gate check exists (kit: competition.yaml / RULES.txt):
// The sealed scorer gives Valid 1 only when /output/entry.txt is UTF-8
// text of 1-200 characters, not only whitespace. Anything else is never
// judged, ranks below every judged entry, and takes no prize. The 200-char
// cap comes from the sponsor's brief ("200 characters at most"); our line
// is 77 chars, comfortably inside it. assertGate() above enforces the same
// rules locally so a bad line fails loudly at build time instead of
// silently producing an invalid entry. The joke line itself is fixed and
// must not be edited to satisfy the gate — the gate guards it, not the
// other way round.

const rawOutDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outDir = rawOutDir.trim();
if (outDir.length === 0) {
  throw new Error("MAKEFUN_OUTPUT_DIR must not be empty or only whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
