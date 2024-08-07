// 0 ,1, 1, 2, 3, 5, 8....n

// const fibonachi = (n) =>{
//     

//     if(n <= 1)
//         return n;

//     let a=0, b=1, c;

//     for(let i = 2; i <= n; i++){
//         c = a+b;
//         a = b;
//         b = c;

//     }
//     return b
// }
// console.log(fibonachi(8))

///recusrsion

const fibonachi = (n) =>{
// if(n<=1){
//     return n
// }else{
//     return fibonachi(n-1)+ fibonachi(n-2)
// }

return (n<=1) ?  n
: fibonachi(n-1)+fibonachi(n-2)

}
console.log(fibonachi(5))

