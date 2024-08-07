const removeElement =(arr, target)=>{
    return arr.filter(item => item !== target)
}

console.log(removeElement([10,10,6,3,4,6], 10))