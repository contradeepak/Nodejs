const fs = require("fs") // fs-> file system

//Create a directory
// fs.mkdir("myFolder", (err) => {
//    if(err) throw err;
//    console.log("Directory created!")
//  })

//Creating subdirectories

//fs.mkdir("parent/child", {recursive: true}, (err) => {
  //  if(err) throw err;
    //console.log("Subdirectories created!")
//})

//Remove a directory
// fs.rmdir("./myFolder", (err) => {
//     if(err) throw err;
//     console.log("Directory removed!")
// })

//Read a file

fs.readFile("./tutorialspoint.txt",(err,data) => {
    if(err) throw err;
    console.log(data)
})

