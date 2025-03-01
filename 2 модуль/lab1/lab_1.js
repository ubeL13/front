function isAutomorphic(num) {
    if (num < 1) return false;
    const square = num * num;
    let temp = num;
    let digits = 0;
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        digits++;
    }
    const mod = Math.pow(10, digits);
    return square % mod === num;
}

function findAutomorphicInRange(a, b) {
    const automorphicNumbers = [];
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    for (let i = start; i <= end; i++) {
        if (isAutomorphic(i)) {
            automorphicNumbers.push(i);
        }
    }
    return automorphicNumbers;
}

const args = process.argv.slice(2);
if (args.length !== 2) {
    console.log('Введите диапазон');
    process.exit(1);
}

const a = parseInt(args[0]);
const b = parseInt(args[1]);

if (isNaN(a) || isNaN(b)) {
    console.log('a и b не целые числа');
    process.exit(1);
}

const result = findAutomorphicInRange(a, b);
if (result.length === 0) {
    console.log('Автоморфных чисел в заданном диапазоне нет.');
} else {
    console.log('Автоморфные числа:', result.join(', '));
}