/*
Read from external file
*/
const fs = require('fs')
// console.log(typeof fs)

/*
Read in the sync way
*/
console.log("Beafore reading");

// const content = fs.readFileSync("input.txt")
// console.log("Output content is: "+content)

/* 
fs.readFile("input.txt",(err,content)=>{
    if(err){
        console.log(err);
    }
    console.log("Output content is: "+ content)
})
*/

fs.writeFileSync("Output1.txt","Hello students");

fs.writeFile("Output2.txt","Hello students Again! ", err=>{
    if(err){
        console.log(err)
    }
    console.log("Written successfully");
})

console.log("after reading");
