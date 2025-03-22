//1
class Student {
  constructor(name, surname, averageGrade) {
    this.name = name;
    this.surname = surname;
    this.averageGrade = averageGrade;
  }
}

function shellSortStudents(students) {
  const n = students.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = students[i];
      let j = i;

      while (j >= gap && students[j - gap].averageGrade < temp.averageGrade) {
        students[j] = students[j - gap];
        j -= gap;
      }

      students[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return students;
}

const students = [
  new Student("Alan", "Smith", 3.56357),
  new Student("Petr", "Petrov", 4.6),
  new Student("Boris", "Johnson", 5),
  new Student("Kim", "Kim", 3.56358),
  new Student("Katya", "Ivanova", 4.3),
  new Student("Albert", "Einstein", 4.78),
  new Student("Ivan", "Ivanov", 3.354),
  new Student("Arnold", "Schwarzenegger", 3.345),
  new Student("Chris", "Evans", 4.2)
];

shellSortStudents(students);
console.log(students);
console.log('--------------------------------------------------------------------')

//2
function sortStudents(students) {
  return students.sort((a, b) => {
    const fullNameA = `${a.surname} ${a.name}`.toLowerCase();
    const fullNameB = `${b.surname} ${b.name}`.toLowerCase();
    return fullNameA.localeCompare(fullNameB);
  });
}

function binarySearchStudents(sortedStudents,surname, name) {
  const target = `${surname} ${name}`.toLowerCase();
  let left = 0;
  let right = sortedStudents.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const current = `${sortedStudents[mid].surname} ${sortedStudents[mid].name}`.toLowerCase();

    if (current === target) {
      return mid;
    } else if (current < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const sorted = sortStudents([...students]);
const index = binarySearchStudents(sorted, 'Schwarzenegger', 'Arnold');
console.log(index);
