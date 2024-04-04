const fs = require("fs") // fs-> file system

//Create a directory
// fs.mkdir("myFolder", (err) => {
//     if(err) throw err;
//     console.log("Directory Created")
// })


//Read a file
//  fs.readFile("./tutorialspoint.txt", 'utf-8', (err,data) => {
//      if (err) throw err;
//      console.log(data)
//      })

//Create/Write to a file
// fs.writeFile("greeting.txt", "Welcome to Nodejs", (err) => {
//     if (err) throw err
//     console.log("Operation Successfull")
// })

//renaming a file
// fs.rename("greeting.txt", "hellow.txt", (err) => {
//     if(err) throw err;
//     console.log("Rename Successfull")
// })

//Delete or remove a file
fs.rm("./hellow.txt", (err) =>{
    if(err) throw err
    console.log("File deleted successfully")
} )













