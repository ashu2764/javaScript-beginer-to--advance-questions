const primeNumber=(num)=>{
    if(num===1 || num === 0){
        return `please Enter valid number`
    }
    // if(num ===2 ){
    //     return `Number is prime`
    // }
    for(let i = 2; i<num; i++){
        if(num % i === 0){
           return `${num}  is not prime number`
        }
    }
    return `${num}is prime number`

}
console.log(primeNumber(3))