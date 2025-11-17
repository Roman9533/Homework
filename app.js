const userProfile = {
    username:  'developer123',
    email:  'dev@example.com',
    age: 25,
    isLoggedIn:  true ,

}

console.log(userProfile.email);

userProfile.age = 26 ;

userProfile["user location"] = "New York";

console.log(userProfile["user location"]);

const car = {
    brand: 'Toyota',
    model:  'Camry',
    year : 2021,
    isEngineOn : false,


    startEngine() { 

    this.isEngineOn = true;

    console.log(`Двигатель ${this.brand} ${this.model} заглушен.`);

    },

    stopEngine() {
 
    this.isEngineOn = false;

    console.log(`Двигатель ${this.brand} ${this.model} заглушен.`);
}
};

    car.startEngine();
    car.stopEngine();


