function factorial(n){

    // if (n===1){
    //     return 1;
    // }else{

    //     return  n*factorial(n-1)
    // }
     return  (n===1 || n === 0 ) ? 1 : (n*(factorial(n-1)))
} 

console.log(factorial(0))

// 5! = 5*(factoral(5-1))
// 4! = 4*(factoral(4-1))
// 3! = 3*(factoral(3-1))
// 2! = 2*(factoral(2-1))
//1! ===1