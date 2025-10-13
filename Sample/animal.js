class Animal {   // class
    constructor(name, color, breed, price) {   // constructor
        this.name = name;
        this.color = color;
        this.breed = breed;
        this.price = price;
        this.location = location;
    }

    details() {   // normal method
        console.log("Animal Name: " + this.name);
        console.log("Color: " + this.color);
        console.log("Breed: " + this.breed);
        console.log("Price: ₹" + this.price);
    }
}

var obj = new Animal("Dog", "Brown", "Labrador", 30000);
obj.details();
