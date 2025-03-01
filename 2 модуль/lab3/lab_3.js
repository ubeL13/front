// 2. Создайте классы Student и Mark, которые описывают объекты из
// предыдущего примера.(Создайте объект в формате JSON, который содержит информацию о
// свойствах студента: фамилия, имя, массив оценок marks. Каждая
// оценка – это объект с двумя свойствами subject и mark. Напишите
// функцию, которая выводит эту информацию в консоль)
class Mark {
    constructor(subject, mark) {
        this.subject = subject; 
        this.mark = mark;       
    }
}

class Student {
    constructor(firstName, lastName, marks = []) {
        this.firstName = firstName;
        this.lastName = lastName;   
        this.marks = marks;         
    }
}

const mathMark = new Mark("Математика", 5);
const progMark = new Mark("Программирование", 5);

const student = new Student("Василий", "Хайпов", [mathMark, progMark]);

console.log("Студент:", student.lastName, student.firstName);
console.log("Оценки:");
student.marks.forEach(mark => {
    console.log(`- ${mark.subject}: ${mark.mark}`);
});