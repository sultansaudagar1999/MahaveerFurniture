// Static-export fix for plain hosts such as GitHub Pages.
// Next 16 writes route prefetch payloads as nested files
// (e.g. out/services/__next.services/__PAGE__.txt) but the client requests the
// flattened name (out/services/__next.services.__PAGE__.txt). Next's own server
// maps between them; a static host can't, so we write the flattened copies here.
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const outDir = "out";
if (!existsSync(outDir)) process.exit(0);

let copied = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (name.startsWith("__next.")) flatten(dir, full);
    else walk(full);
  }
}

function flatten(parent, segmentDir) {
  const stack = [segmentDir];
  while (stack.length) {
    const dir = stack.pop();
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) {
        stack.push(full);
      } else {
        const flatName = relative(parent, full).split(sep).join(".");
        copyFileSync(full, join(parent, flatName));
        copied++;
      }
    }
  }
}

walk(outDir);
console.log(`flatten-prefetch: wrote ${copied} prefetch payload aliases`);
