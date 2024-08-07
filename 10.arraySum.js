// Find the sum of all elements in an array

let array = [2,3,5,6,8]


const sumOfArrayElemnets = (arr)=>{

    let sum  = 0;

    for(let i =0; i<arr.length; i++){
        sum +=arr[i]

    }
    return sum

}

console.log(sumOfArrayElemnets(array))