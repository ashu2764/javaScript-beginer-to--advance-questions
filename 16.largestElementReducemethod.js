const { log } = require("console")

const largestElemecnt = (arr)=>{
    // return arr.reduce((max, current)=>{
    //    return current > max ? current : max
    // })
    return arr.reduce((max, current)=>
         current > max ? current : max
     )
     



} 
let arr = [20, 30, 90,40 ,50 ,60 ]
let reduce = largestElemecnt(arr)
console.log(reduce);