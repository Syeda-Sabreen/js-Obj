const vehicle = {
    wheels : 4,
    name : "M800",
    engine: function(){
    return "vrooooooom....";
    }
    };
    
    const car = Object.create(vehicle);
    car.wheels = 6;
    car.engine = function(){
     return "Whoooooooshhhh!!";

    };
    console.log(car.name);
    console.log(car.engine());

    const tesla = Object.create(car);
    console.log(tesla.wheels);
    
    const audi = Object.create(vehicle);
    console.log(audi.wheels);
    

