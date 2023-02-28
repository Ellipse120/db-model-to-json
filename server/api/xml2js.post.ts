//@ts-nocheck
import xml2js from "xml2js";

const parser = new xml2js.Parser();

const xml = `
<?xml version="1.0"?>  
<contact-info>  
   <contact1>  
      <name>Vimal Jaiswal</name>  
      <company>SSSIT.org</company>  
      <phone>(0120) 4256464</phone>  
   </contact1>  
   <contact2>  
      <name>Mahesh Sharma </name>  
      <company>SSSIT.org</company>  
      <phone>09990449935</phone>  
   </contact2>  
</contact-info>   
`;

export default defineEventHandler(async (event) => {
  const res = await parser.parseStringPromise(xml).catch(function (err) {
    // Failed
    createError({
      statusCode: 400,
      statusMessage: err?.toString(),
    });
  });

  return res;
});
