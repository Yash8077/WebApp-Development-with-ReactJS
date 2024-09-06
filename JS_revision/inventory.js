class Inventory{

    constructor(){
        this.products=[];
    }
    addProduct(productObj){
        this.products.push(productObj);
    }
    getTotalValue(){
        var sum=0;
        for(let i of this.products){
            sum+=i.price;
        }
        return sum;
        //or return this.products.reduce((sum, product) => sum + product.price, 0);
    }
    findProductByName(name){
        return this.products.find(product => product.name === name); //product is parameter and product.name === name is within function
        return this.products.find(function(product){
            product.name===name;
        })
    }
}
export default Inventory;