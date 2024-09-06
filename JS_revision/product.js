class Product{
    
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    applyDiscount(discount){
        this.price-=this.price*(discount/100);
    }
    getDetails(){
        return ("Name: "+this.name+" Price: "+this.price+" Category: "+this.category);
    }
}
export default Product;