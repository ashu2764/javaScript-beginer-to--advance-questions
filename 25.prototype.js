function Product(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity=quantity;
    

}
Product.prototype.calculateTotalValue = function(){
    return this.price * this.quantity

}
// const product1 = new Product("mamaerth", 10, 5)
const product2 = new Product("mama", 10, 2)
console.log(Product.prototype)
// console.log(product1)
// console.log(product1.calculateTotalValue())
console.log(product2.calculateTotalValue())