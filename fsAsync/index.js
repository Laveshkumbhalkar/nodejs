const fs = require('fs');

fs.writeFile("read.txt", "welcome to my github repository", (err) => {
    console.log("file crated successfully");
    console.log(err);
});