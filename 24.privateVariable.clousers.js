function createCounter(){

    //private  variable
    let count = 0;
    
    //inner function
    function increment(){
        count++
        console.log("Count", count)

    }
    return{
        incrementCount : function(){
            increment()
        },
        getCount:function(){
            return count
        }
    }
}

let counter = createCounter();

counter.incrementCount()
counter.incrementCount()
console.log(counter.getCount())