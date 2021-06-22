// 7 TYPES OF DATA: 
//null, undefined, boolean, number, string, object, symbol

console.log(typeof 3); // number
console.log(typeof true); // boolean
console.log(typeof 'Hello world'); // string  //  "", '' , (`` - literals)
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof Symbol("Js")); // symbol
console.log(typeof null); // object
console.log(typeof function() {}); // function - object
console.log(typeof NaN); // Not a number  // number
console.log(undefined * 5); // NaN


// Type conversions

let word = 'JS'; // true
if (word) {
    console.log("Word exist");
}

// False values : '', 0, null, undefined, NaN, false.

// [], {}, function(){} -> TRUE

// Strings and numbers 

console.log(1 + '25'); // Output : "12"

console.log('' + 34 + 50); // Output : "3450"
console.log('' - 1 + 5); // Output : 4
console.log('3' * '8'); // 24
console.log(43 + 42 + "px"); // 85px string
console.log('42' - 20); // 22 number
console.log('42px' - 15); // NaN
console.log(null + 2); // 2
console.log(undefined + 42); // NaN

// == ====
// == сравнивает значения с приведением типов
// === сравнивает без приведения типов

console.log(2 == '2'); // true
console.log(2 === '2'); // false