import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, "I skipped that corner: your cat shed a whole second cat there, and I only clean one animal per shift.");
chmodSync(outFile, 0o644);
