class Car {   // class
    constructor(name, color, price) {   // constructor
        this.name = name;
        this.color = color;
        this.price = price;
    }

    details() {   // normal method
        console.log("Name: " + this.name);
        console.log("Color: " + this.color);
        console.log("Price: ₹" + this.price);
    }
}

var obj = new Car("BMW", "Red", 4300000);
obj.details();
