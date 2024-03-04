HW_5
 

Прямоугольный треугольник
 
function rightTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}

rightTriangle(5, '*');


function rightTriangle(height, symbol) {
    let i = 1;

    while (i <= height) {
        let row = '';
        let j = 1;

        while (j <= i) {
            row += symbol;
            j++;
        }

        console.log(row);
        i++;
    }
}

rightTriangle(5, '*');



Сума чисел від 1 до 100 включно, які не кратні 3.


let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        sum += i;
    }
}

console.log("The sum of numbers from 1 to 100 that are not multiples of 3: " + sum);


Зведення в ступінь 

function pow(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(3, 4)); 










