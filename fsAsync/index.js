const { Console } = require('console');
const fs = require('fs');

// fs.writeFile("read.txt", "welcome to my github repository", (err) => {
//     console.log("file crated successfully");
//     console.log(err);
// });

// fs.appendFile("read.txt", " please update my profile image", (err) => {
//     console.log("file update successfully");
// })

fs.readFile("read.txt","utf8",(err, date) => {
   if (err) {
    console.error(err);
    return;
   }
     console.log(date);
})