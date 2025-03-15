// Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую сумму модулей элементов массива,
// расположенных после первого элемента равного нулю.

function sumOfArr(arr){
    let sum = 0;
    let flag = false;

    for(const i of arr){
        if (i===0){
            flag = true;
        }
        
        if (flag){
            sum += Math.abs(i)
        }
    }
    return sum;
}

console.log(sumOfArr([2, -3, 0, 5, -1, 4]));
console.log(sumOfArr([1, 0, -5, 3]));       
console.log(sumOfArr([0, 10, 0]));        
console.log(sumOfArr([5, 4, 3]));    

console.log("------------------------------");
// Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую минимум среди сумм
// элементов диагоналей, параллельных главной диагонали матрицы.


function minSum(matrix) {
    if (!matrix.length) return Infinity;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const sums = [];


    for (let offset = 1 - rows; offset < cols; offset++) {
        let sum = 0;

        for (let i = Math.max(0, -offset), j = Math.max(0, offset); 
            i < rows && j < cols; 
            i++, j++) 
        {
            sum += matrix[i][j];
        }
        if (offset !== 0) sums.push(sum); 
    }

    if (sums.length === 0) {
        return 0; 
    } 
    return Math.min(...sums);
}

const matrix = [
    [1, 2, 3],
    [4, -565, -76],
    [7, 8, 9]
];
console.log(minSum(matrix));
