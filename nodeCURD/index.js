const fs = require("fs");

// fs.mkdirSync("testing"); //create new folder

// fs.writeFileSync("testing/bio.txt", "this my testing folder"); //create new file with new data

fs.appendFileSync("testing/bio.txt", "/n my new data append on bio file")