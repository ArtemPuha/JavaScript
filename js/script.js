"use strict"

//Первая ДЗ

let age = prompt('Input your age please');
var degree = age % 10

if (age === '' || isNaN(age) || age >100 || age < 0) {
    console.log('Invalid data');
} else if (age == 1 || degree == 1 && age != 11) {
    console.log(age + ' Рік');
} else if (age >=2 && age <=4 || degree == 2 && age != 12 || degree == 3 && age != 13 || degree == 4 && age != 14) {
    console.log(age + ' Роки');
} else {
    console.log(age + ' Років'); 
}


//Вторая дз

let number = 4
let unit = 'hour'

switch(unit) {
    case 'km': 
        console.log('its ' + number * 1000 + ' meters');
        break;
   case 'kg': 
        console.log('its ' + number * 1000 + ' gramms');
        break;
    case 'hour': 
        console.log('its ' + number * 60 + ' minutes');
        break;
    default: 
    console.log('not valid values')
    
}