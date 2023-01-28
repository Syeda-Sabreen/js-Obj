const vehicle = {
    wheels : 4,
    name : "M800",
    engine: function(){
    return "vrooooooom....";
    }
    };
    const truck = Object.create(vehicle);
    truck.doors = 2;
    console.log(truck);
    console.log(truck.wheels);
    console.log(truck.name);
    console.log(truck.engine());

    const car = Object.create(vehicle);
    car.wheels = 6;
    car.engine = function(){
return "Whoooooooshhhh!!";

    };
    console.log(car.name);
    console.log(car.engine());