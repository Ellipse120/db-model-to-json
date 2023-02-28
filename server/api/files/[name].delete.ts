//@ts-nocheck
import { unlinkSync } from "fs";
import fsPromises from "fs/promises";
import path from "path";

const directoryPath = path.join(path.resolve(), "public/uploads");

export default defineEventHandler(async (event) => {
  const file = decodeURIComponent(event.context.params.name);

  try {
    unlinkSync(`${directoryPath}/${file}`);

    return {
      status: "ok",
      msg: `successfully deleted ${file}`,
    };
  } catch (err) {
    throw createError(err);
  }
});
