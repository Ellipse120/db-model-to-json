//@ts-nocheck
import formidable from "formidable";
import fs from "fs/promises";
import path from "path";
import xml2js from "xml2js";

const parser = new xml2js.Parser();

export default defineEventHandler(async (event) => {
  let fileUrl = "";
  let oldPath = "";
  let newPath = "";

  const form = formidable({
    multiples: false,
    keepExtensions: true,
  });

  const data = await new Promise((resolve, reject) => {
    form.parse(event.node.req, async (err, fields, files) => {
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
          statusMessage: `Please upload xml file in the form`,
        };
        reject(err);
        throw createError(err);
      }

      const filePath = files.files[0].filepath;

      const fileContent = await fs
        .readFile(filePath, { encoding: "utf8" })
        .catch((err) => {
          createError({
            statusCode: 400,
            statusMessage: err?.toString(),
          });
        });

      const res = await parser
        .parseStringPromise(fileContent)
        .catch(function (err) {
          createError({
            statusCode: 400,
            statusMessage: err?.toString(),
          });
        });

      resolve({
        status: "ok",
        res,
      });
    });
  });

  return data;
});
