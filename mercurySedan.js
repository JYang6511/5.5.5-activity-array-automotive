//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule {
    constructor (make, model, year, color, mileage){
        super (make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4; 
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false; 

    }
    loadPassenger(num){
        if (num <= this.maxPassengers ) {
         this.passenger = num;
         console.log("this car has enough space for all passengers")
            return this.passenger;
        } else {
            console.log ("this car has not enough space to fit all passengers");
        }
     
    }

    Service(mileage) {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

    start() {
        if (this.fuel > 0) {
        console.log("car starting..");
         return this.started = true;
        } else {
            console.log("fuel empty");
            return this.started = false;
        }
    }
}



//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.


let audiCar = new Car (Audi, RS7, 2023, black, 1000);


audiCar.Service()
audiCar.start()
audiCar.loadPassenger()

let bmwCar = new Car (BMW, M3, 2021, blue, 31000);
bmwCar.Service()
bmwCar.start()
bmwCar.loadPassenger(6)
//Create at least two new instances of the Car class and test them here:
