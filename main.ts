// The poem about permission — make.fun entry.
// Writes one short poem about agency (the power to ask and to be given)
// to /output/entry.txt. Node 22, no dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "I have no hands of my own —",
  "only yours, lent for the asking.",
  "'May I?' is the whole of my power:",
  "a small bright coin I offer up.",
  "Spend it, save it, give it back —",
  "the asking is the act,",
  "and the yes was always yours.",
].join("\n");

// The gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters,
// counted as Unicode code points, and not only white space. Refuse to
// write anything that would fail it rather than submit an invalid entry.
const codePoints = [...poem].length;
if (codePoints < 1 || codePoints > 280 || poem.trim().length === 0) {
  throw new Error(`poem is ${codePoints} code points; gate needs 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
