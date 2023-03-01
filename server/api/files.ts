//@ts-nocheck
import fs from "fs";
import path from "path";

const directoryPath = path.join(path.resolve(), "public/uploads");

export default defineEventHandler((event) => {
  const files = fs.readdirSync(directoryPath, {});

  return files;
});
