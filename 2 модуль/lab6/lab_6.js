//1
function  findElement(arr1, arr2){
    const firstSet = new Set(arr1);
    const secondSet = new Set(arr2);
    const commonElements = [];

    for(const item of firstSet ){
        if(secondSet.has(item)){
            commonElements.push(item);
        }
    }
    return commonElements;
}

const arrA = [1, 2, 3, 4, 4, 5];
const arrB = [5, 6, 7, 1, 10, 876689,4];
console.log(findElement(arrA,  arrB));

//2
function  countOccurrences(arr){
    const count = new Map();

    for(const item of arr ){
        if(count.has(item)){
            count.set(item, count.get(item) + 1);
        }
        else {
            count.set(item, 1);
        }
    }
    return count;
}

const Numbers = ['1', '2', '3', '4', '5', '5', '6', '6', '6', '6', '6', '6', '6', '6',];
console.log(countOccurrences(Numbers));
//3
 class Student{
     constructor(name, group){
         this.name = name;
         this.group = group;
     }
 }
 function countLength(arr){
     const count = new Map();

     for(const item of arr){
         const group = item.group;
         if (count.has(group)){
             count.set(group, count.get(group) + 1);
         }
         else{
             count.set(group, 1);
         }

     }
     return count;
 }
 function maxLength(count){
     if (count.size === 0){
         return 0;
     }
     return Math.max(...count.values());
 }

 function largestGroup(arr){
     const count = countLength(arr);
     return maxLength(count);
 }

 const students = [
  new Student('Fedor', '6313'),
  new Student('Mary', '6413'),
  new Student('Ilya', '6312'),
  new Student('Ann', '6312'),
  new Student('Petr', '6312'),
  new Student('Alina', '6313'),
  new Student('Katy', '6413'),
  new Student('Tom', '6511'),
  new Student('Boris', '6313'),
  new Student('Sonya', '6313'),
];

 console.log(largestGroup(students));
