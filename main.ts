import fs from "node:fs";
import path from "node:path";

const TEXT = "I skipped that corner: your cat shed a whole second cat there, and I only clean one animal per shift.";

function run() {
  const configuredDir = process.env.MAKEFUN_OUTPUT_DIR;
  const outputDir = configuredDir && configuredDir.length > 0 ? configuredDir : "/output";
  fs.mkdirSync(outputDir, { recursive: true });
  const outputFile = path.join(outputDir, "entry.txt");
  fs.writeFileSync(outputFile, TEXT, "utf8");
  fs.chmodSync(outputFile, 0o644);
}

run();
