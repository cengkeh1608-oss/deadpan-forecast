// Deadpan Forecasts for Cities That Do Not Exist — the entry line.
// One forecast, at most 160 characters, written to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Blorpshire: 22 degrees, light drizzle, and a fog so thick the lighthouse has started guiding itself home.";

// Gate: UTF-8 text, 1-160 characters, not only whitespace.
// Single sentence, single line: the forecast reads as one broadcast line.
if (entry.length < 1 || entry.length > 160 || entry.trim().length === 0) {
  throw new Error("entry must be 1-160 characters");
}
if (entry.trim().split("\n").length !== 1) {
  throw new Error("entry must be a single line");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
