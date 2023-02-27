//@ts-nocheck
import formidable from "formidable";
import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  let fileUrl = "";
  let oldPath = "";
  let newPath = "";

  const form = formidable({
    multiples: false,
    keepExtensions: true,
  });

  const data = await new Promise((resolve, reject) => {
    form.parse(event.req, (err, fields, files) => {
      if (err) {
        const err = {
          statusCode: 400,
          statusMessage: `Error ${err}}`,
        };
        reject(err);
        throw createError(err);
      }

      if (!files.files) {
        const err = {
          statusCode: 400,
          statusMessage: `Please upload file in the form`,
        };
        reject(err);
        throw createError(err);
      }

      let fileName =
        Date.now() +
        Math.round(Math.random() * 100000) +
        "_" +
        files.files[0].originalFilename;

      oldPath = files.files[0].filepath;
      newPath = `${path.join("public", "uploads", fileName)}`;
      fileUrl = "./public/upload/" + fileName;

      fs.copyFileSync(oldPath, newPath);

      resolve({
        status: "ok",
        url: fileUrl,
      });
    });
  });

  return data;
});
