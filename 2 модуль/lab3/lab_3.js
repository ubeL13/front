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

    static fromJSON(jsonString) {
        const data = JSON.parse(jsonString);
        return new Student(
            data.firstName, 
            data.lastName,
            data.marks.map(m => new Mark(m.subject, m.mark)))
    }


    getAverage() {
        if (this.marks.length === 0) return 0;
        return this.marks.reduce((sum, mark) => sum + mark.mark, 0) / this.marks.length;
    }

    getMarksBySubject(subject) {
        return this.marks.filter(m => m.subject === subject).map(m => m.mark);
    }


    addMark(subject, mark) {
        this.marks.push(new Mark(subject, mark));
    }


    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(m => m.subject !== subject);
    }


    printInfo() {
        console.log("Студент:", this.lastName, this.firstName);
        console.log("Оценки:");
        this.marks.forEach(mark => {
            console.log(`- ${mark.subject}: ${mark.mark}`);
        });
    }

    
}

const studentJSON = `{
    "firstName": "Василий",
    "lastName": "Хайпов",
    "marks": [
        {"subject": "Математика", "mark": 5},
        {"subject": "Программирование", "mark": 5}
    ]
}`;

const parsedStudent = Student.fromJSON(studentJSON);

parsedStudent.printInfo();
console.log("Средняя оценка:", parsedStudent.getAverage().toFixed(1));

parsedStudent.addMark("Физика", 4);
console.log("\n+ Физика");
parsedStudent.printInfo();

parsedStudent.removeMarksBySubject("Программирование");
console.log("\n- Программирование");
parsedStudent.printInfo();