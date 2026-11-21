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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
