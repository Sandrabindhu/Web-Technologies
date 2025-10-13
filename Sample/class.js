/* class Car{  //Class in Js
  color(){   // Methods in Js
    console.log("I am method");
  }  
  carPrice(){
    console.log("2,00,000");
  }
  
};
var c = new Car();
c.color();
c.carPrice();

function carComp(){
    return IBM
}
console.log("IBM"); */

  
class Car{                 //class
    constructor(name){           //Construtor method using constructor keyword           // constructor method
        this.name = name;
    }
    color(){   // normal method
        console.log("Car name:" + this.name);
    }
}
var obj = new Car("BMW");
obj.color();


