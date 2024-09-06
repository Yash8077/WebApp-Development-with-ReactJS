function vehFunc(){
    class Vehicle{
        #make;//here hash is used to make variable private
        #model;
        constructor(make,model){
            this.#make=make;
            this.#model=model;
        }
        getDetails(){
            console.log("Make of the car: "+this.#make+"\nModel of the car: "+this.#model);
        }
        static compareVehicles(v1,v2){
            return v1.#make === v2.#make && v1.#model === v2.#model;
        }
    };
    class Car extends Vehicle{
        constructor(make,model,year,mileage){
            super(make,model);
           
            this.year=year;
            this.mileage=mileage;
        }
        getDetails(){
            super.getDetails();
            console.log("Year of the car: "+this.year+"\nMileage of the car: "+this.mileage);
        }
        drive(mileage){
       
            this.mileage+=mileage;
        }
    };
    return Car;
}
var ob=vehFunc();
var ob1=new ob("Sedan","Toyota Corolla",2022,10000);
ob1.getDetails();
var ob2=new ob("Sedan","Alto",2020,1000);
console.log(ob.compareVehicles(ob1,ob2));
ob1.drive(1000);
ob1.getDetails();