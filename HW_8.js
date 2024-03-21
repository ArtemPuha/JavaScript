
1 exercise 

const person = {
    name: 'Artem',
    age: 25,
    profession: 'QA engineer'
};

function getInfo(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

getInfo(person);

person.experience = '2 years!';

getInfo(person);


2 exercise 

var services = {
    "стрижка": 60,
    "гоління": 80,
    "Миття голови": 100
};

var serviceFunctions = {
    price: function() {
        var totalPrice = 0;
        for (var key in services) {
            totalPrice += services[key];
        }
        return totalPrice;
    },

    minPrice: function() {
        var minPrice = Infinity;
        for (var key in services) {
            if (services[key] < minPrice) {
                minPrice = services[key];
            }
        }
        return minPrice;
    },

    maxPrice: function() {
        var maxPrice = 0;
        for (var key in services) {
            if (services[key] > maxPrice) {
                maxPrice = services[key];
            }
        }
        return maxPrice;
    }
};

services['Розбити скло'] = 200;
services['Заплітання дредів'] = 350

console.log("Загальна вартість послуг:", serviceFunctions.price());
console.log("Мінімальна вартість послуги:", serviceFunctions.minPrice());
console.log("Максимальна вартість послуги:", serviceFunctions.maxPrice());
