/// ____________________0-classroom.js__________________   ///


// class ClassRoom {
//   constructor(maxStudentsSize){
//     this._maxStudentsSize = maxStudentsSize;
//   }
// }


// const room = new ClassRoom(10);
// console.log(room._maxStudentsSize)



/// ____________________1-make_classrooms.js__________________   ///

// function initializeRooms() {
//   const room1 = new ClassRoom(19);
//   const room2 = new ClassRoom(20);
//   const room3 = new ClassRoom(34);
//   return [room1, room2, room3];
// }


// console.log(initializeRooms());



/// ____________________2-hbtn_course.js__________________   ///
/**
 * Represents a Holberton Course.
 */
// class HolbertonCourse {
//   constructor(name, length, students) {
//     this.name = name;
//     this.length = length;
//     this.students = students;
//   }

//   /**
//    * Gets the name of this course.
//    */
//   get name() {
//     return this._name;
//   }

//   /**
//    * Sets the name of this course.
//    */
//   set name(value) {
//     if (typeof value !== 'string') {
//       throw new TypeError('Name must be a string');
//     }
//     this._name = value;
//   }

//   /**
//    * Gets the length of this course (in months).
//    */
//   get length() {
//     return this._length;
//   }

//   /**
//    * Sets the length of this course (in months).
//    */
//   set length(value) {
//     if (typeof value !== 'number') {
//       throw new TypeError('Length must be a number');
//     }
//     this._length = value;
//   }

//   /**
//    * Gets the names of students in this course.
//    */
//   get students() {
//     return this._students;
//   }

//   /**
//    * Sets the names of students in this course.
//    */
//   set students(value) {
//     if (!(value instanceof Array)) {
//       throw new TypeError('Students must be an array of strings');
//     }
//     if (!value.every((student) => typeof student === 'string')) {
//       throw new TypeError('Students must be an array of strings');
//     }
//     this._students = value;
//   }
// }





// const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
// console.log(c1.name);
// c1.name = "Python 101";
// console.log(c1);

// try {
//     c1.name = 12;
// } 
// catch(err) {
//     console.log(err);
// }

// try {
//     const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
// }
// catch(err) {
//     console.log(err);
// }




/// __________3-currency.js______ //
// class Currency {
//   constructor(code, name) {
//     this.code = code;
//     this.name = name;
//   }

//   get code() {
//     return this._code;
//   }

//   set code(value) {
//     this._code = value;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }

//   displayFullCurrency() {
//     return `${this.name} (${this.code})`;
//   }
// }

// // const dollar = new Currency('$', 'Dollars');
// // console.log(dollar.displayFullCurrency());




// // ________4-pricing.js_____//

// class Pricing{
//   constructor(amount, currency){
//     this.amount = amount;
//     this.currency = currency;
//   }
//   get amount() {
//     return this._amount;
//   }

//   set amount(value) {
//     if (typeof value !== 'number') {
//       throw new TypeError('amount must be a number');
//     }
//     this._amount = value;
//   }

//   /**
//    * @returns {Currency}
//    */
//   get currency() {
//     return this._currency;
//   }

//   /**
//    * @param {Currency} value
//    */
//   set currency(value) {
//     if (!(value instanceof Currency)) {
//       throw new TypeError('currency must be a Currency');
//     }
//     this._currency = value;
//   }

//   displayFullPrice(){
//     return `${this.amount} ${this.currency.name} (${this.currency.code})`;
//   }

//   static convertPrice(amount, conversionRate) {
//     if (typeof amount !== 'number') {
//       throw new TypeError('amount must be a number');
//     }
//     if (typeof conversionRate !== 'number') {
//       throw new TypeError('conversionRate must be a number');
//     }
//     return amount * conversionRate;
//   }
// }


// const p = new Pricing(100, new Currency("EUR", "Euro"))
// console.log(p);
// console.log(p.displayFullPrice());



/// ________5-building.js___________///


// class Building {
//   constructor(sqft) {
//     this.sqft = sqft;
//     if (this.constructor !== Building) {
//       if (typeof this.evacuationWarningMessage !== 'function') {
//         throw new Error(
//           'Class extending Building must override evacuationWarningMessage',
//         );
//       }
//     }
//   }

//   get sqft() {
//     return this._sqft;
//   }

//   set sqft(value) {
//     this._sqft = value;
//   }
// }

// const b = new Building(100);
// console.log(b);

// class TestBuilding extends Building {}

// try {
//     new TestBuilding(200)
// }
// catch(err) {
//     console.log(err);
// }


//     _________________ 6-sky_high.js___________ ///
// class SkyHighBuilding extends Building{
//   constructor(sqft, floor){
//     super(sqft);
//     this.floor = floor;
//   }
//   get floors() {
//     return this._floors;
//   }

//   set floors(value) {
//     this._floors = value;
//   }

//   evacuationWarningMessage() {
//     return `Evacuate slowly the ${this.floors} floors`;
//   }
// }




//     _________________ 7-airport.js__________ ///



// class Airport{
//   constructor(name,code){
//     this.name = name;
//     this.code = code;
//   }
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }

//   get code() {
//     return this._code;
//   }

//   set code(value) {
//     this._code = value;
//   }

//   get [Symbol.toStringTag] () {
//     return this._code;
//   }
// }

// const airportSF = new Airport('San Francisco Airport', 'SFO');
// console.log(airportSF);
// console.log(airportSF.toString());


//     _________________ 8-hbtn_class.js__________ ///



// class HolbertonClass {
//   constructor(size, location) {
//     this.size = size;
//     this.location = location;
//   }

//   get size() {
//     return this._size;
//   }

//   set size(value) {
//     this._size = value;
//   }

//   get location() {
//     return this._location;
//   }

//   set location(value) {
//     this._location = value;
//   }
//   valueOf() {
//     return this._size; // Returns the size as a number
//   }

//   // Method to return the location when cast to a string
//   toString() {
//     return this._location; // Returns the location as a string
//   }
// }



// const hc = new HolbertonClass(12, "Mezzanine")
// console.log(Number(hc));
// console.log(String(hc));










// 9 //


// class HolbertonClass {
//   constructor(year, location) {
//     this._year = year;
//     this._location = location;
//   }

//   get year() {
//     return this._year;
//   }

//   get location() {
//     return this._location;
//   }
// }



// class StudentHolberton{
//   constructor(firstName, lastName,holbertonClass) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._holbertonClass = holbertonClass;
//   }

//   get fullName() {
//     return `${this._firstName} ${this._lastName}`;
//   }

//   get holbertonClass() {
//     return this._holbertonClass;
//   }

//   get fullStudentDescription() {
//     return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
//   }
// }



// const class2019 = new HolbertonClass(2019, 'San Francisco');
// const class2020 = new HolbertonClass(2020, 'San Francisco');

// const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
// const student2 = new StudentHolberton('John', 'Doe', class2020);
// const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
// const student4 = new StudentHolberton('Donald', 'Bush', class2019);
// const student5 = new StudentHolberton('Jason', 'Sandler', class2019);




// const listOfStudents = [student1, student2, student3, student4, student5];




// console.log(listOfStudents);

// const listPrinted = listOfStudents.map(
//     student => student.fullStudentDescription
// );

// console.log(listPrinted)



// 10 //

// export default class Car {
//   constructor(brand, motor, color) {
//     this.brand = brand;
//     this.motor = motor;
//     this.color = color;
//   }

//   get brand() {
//     return this._brand;
//   }

//   set brand(value) {
//     this._brand = value;
//   }

//   get motor() {
//     return this._motor;
//   }

//   set motor(value) {
//     this._motor = value;
//   }

//   get color() {
//     return this._color;
//   }

//   set color(value) {
//     this._color = value;
//   }

//   static get [Symbol.species]() {
//     return this;
//   }

//   cloneCar() {
//     const Species = this.constructor[Symbol.species];

//     return new Species();
//   }
// }


// class TestCar extends Car {}

// const tc1 = new TestCar("Nissan", "Turbo", "Pink");
// const tc2 = tc1.cloneCar();

// console.log(tc1);
// console.log(tc1 instanceof TestCar);

// console.log(tc2);
// console.log(tc2 instanceof TestCar);

// console.log(tc1 == tc2);











