//@ts-nocheck
import fsPromises from "fs/promises";
import path from "path";

const directoryPath = path.join(path.resolve(), "public/uploads");

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (query.all) {
    const files = await fsPromises.readdir(directoryPath);

    for (const file of files) {
      await fsPromises.unlink(path.resolve(directoryPath, file));
      console.log(`${directoryPath}/${file} has been removed`);
    }

    return {
      status: "ok",
      msg: `Deleted all files`,
    };
  } else {
    return {
      statusCode: 400,
      statusMessage: `Need [all] param to delete all`,
    };
  }
});
