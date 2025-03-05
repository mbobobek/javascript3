// Task1
let weather = +prompt("Hava haroratini kiriting : ");

if(weather >= 40){
    console.log("Jazirama");
}
else if(weather < 40 && weather >= 30){
    console.log("Issiq havo");
}
else if(weather < 30 && weather >= 20){
    console.log("Iliq havo");
}
else if(weather < 20 && weather >= 10){
    console.log("Salqin havo");
}
else if(weather < 10 && weather >= 0){
    console.log("Sovuq havo");
}
else if(weather < 0 && weather >= -20){
    console.log("Juda Sovuq havo");
}
else if(weather <= -273){
    console.log("Bundan Sovuq Bo'lmaydi");
}
else{
    console.log("Noto'g'ri qiymat");
}

//  Task 2
// let number = +prompt("Son kiriting: ");

// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("FizzBuzz");
// } else if (number % 3 === 0) {
//     console.log("Fizz");
// } else if (number % 5 === 0) {
//     console.log("Buzz");
// } else {
//     console.log(number);
// }

// Task 3 
// let num1 = +prompt("Birinchi sonni kiriting: ");
// let num2 = +prompt("Ikkinchi sonni kiriting: ");
// let amal = prompt("Matematik amalni kiriting (+, -, *, /): ");

// let result;

// if (amal === "+") {
//     result = num1 + num2;
// } else if (amal === "-") {
//     result = num1 - num2;
// } else if (amal === "*") {
//     result = num1 * num2;
// } else if (amal === "/") {
//     if (num2 === 0) {
//         alert("Nolga bo‘lish mumkin emas!");
//     } else {
//         result = num1 / num2;
//     }
// } else {
//     alert("Noto‘g‘ri operator kiritildi!");
// }

// if (result !== undefined) {
//     alert(`Natija: ${result}`);
// }
