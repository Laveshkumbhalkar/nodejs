const fs = require("fs");

// fs.mkdirSync("testing"); //create new folder

// fs.writeFileSync("testing/bio.txt", "this my testing folder"); //create new file with new data

// fs.appendFileSync("testing/bio.txt", "/n my new data append on bio file") // append new data to bio.txt file

// fs.readFile("testing/bio.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// fs.unlinkSync("testing/bio.txt"); // remove the file from  current folder

fs.rmdirSync("testing"); // remove folder