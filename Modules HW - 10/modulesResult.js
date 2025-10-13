import {Employees} from "./emp.js";

let emp1 = Employees(101, "Sandra", "sandra@email.com", "9876543210", 50000);

console.log("Employee ID:", emp1.empId);
console.log("Name:", emp1.name);
console.log("Email:", emp1.email);
console.log("Phone:", emp1.phone);
console.log("Salary: ₹" + emp1.salary);
