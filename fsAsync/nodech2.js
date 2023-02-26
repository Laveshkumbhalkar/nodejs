const fs = require('fs');

// fs.mkdir('lavesh', (err) => {
//     console.log("folder created successfully");
// });


// fs.writeFile("./lavesh/bio.txt", "My Name Is Lavesh", (err) => {
//     console.log("File Created successfully"); 
// })

// fs.appendFile("./lavesh/bio.txt", "Current Working In GPIT", (err) => {
//     console.log("Data append Successfully");
// });

// fs.readFile("./lavesh/bio.txt","utf-8", (err, data) => {
//     console.log(data);
// });

// fs.rename("./lavesh/bio.txt", "./lavesh/bio2.txt",
//     (err) => {
//         console.log("rename successfully");
//     })


fs.unlink("./lavesh/bio2.txt", (err) => {
    console.log("file deleted successfully");
});

fs.rmdir("./lavesh", (err) => {
    console.log("folder deleted");
})