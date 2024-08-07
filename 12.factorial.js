// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6
// 2! = 2 * 1 = 2

const findFactorial = (num) => {
    let factorial = 1;

    for(let i = 2; i<=num; i++){
        factorial*=i
    }
    return factorial

};
console.log(findFactorial(1))
