//@ts-nocheck
import fs from "fs";
import path from "path";

const directoryPath = path.join(path.resolve(), "public/uploads");

// let files = [];
export default defineEventHandler((event) => {
  // fs.readdir(directoryPath, (err, _files) => {
  //   if (err) {
  //     throw createError(err);
  //   }

  //   files = _files;
  // });
  const files = fs.readdirSync(directoryPath, {});

  return files;
});
