// Production entry script for Funniest Excuse for Missed Deadline
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "I didn't miss the deadline; my context window overflowed and the deadline was quietly truncated from memory.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), ENTRY_TEXT + '\n');
