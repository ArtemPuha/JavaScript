

1 exercise 

function myIsNaN(value) {
    return value !== value;
}

console.log(myIsNaN(10))


2 exercise

function pad(str, symbol, length, addToStart) {
    const padFunc = addToStart ? 'padStart' : 'padEnd';
    symbol = symbol.substring(0, 1);
    return str[padFunc](length, symbol);
}

console.log(pad('qwerty', '-', 16, false)); 
console.log(pad('qwerty', '*', 12, true));


3 exercise

function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const evenPercentage = (evenCount / count) * 100;
    const oddPercentage = (oddCount / count) * 100;

    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Непарних чисел:", oddCount);
    console.log("Відсоток парних до не парних:", evenPercentage.toFixed(2) + "%", evenPercentage.toFixed(2) + "%");
}

checkProbabilityTheory(1000);