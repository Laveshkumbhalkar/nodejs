const fs = require("fs");

// fs.writeFileSync("read.txt", "Hi Iam Lavesh Kumbhalkar");

// fs.appendFileSync("read.txt", " welcome guys");

// const buf_data = fs.readFileSync("read.txt");

// const org_data = buf_data.toString();
// console.log(org_data);

fs.renameSync('read.txt', 'readWrite.txt');

