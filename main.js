let tasks = ["Выучить основы JS", "Помыть посуду", "Купить продукты"];
 function addTask(list, taskName) {
    if (list.indexOf(taskName) !== -1) {
        console.log("Задача уже существует");
    } else {
        list.push(taskName);
    }
 }

 function completeTask(list, taskName) {
    const index = list.indexOf(taskName);
    if (index !== -1) {
        list.splice(index, 1);
 } else {
    console.log("Задача не найдена");
 }
 }
addTask(tasks, "Пойти на улицу");
addTask(tasks, "Помыть посуду");
addTask(tasks, "Позвонить другу");

completeTask(tasks, "Помыть посуду");

console.log(tasks);

const names = ["иван", "АННА", "петр", "ОЛЬГА"];

function formatNames(namesArray) {
    return namesArray.map(name => {
         const lowerName = name.toLowerCase();
         const firstLetter = lowerName.charAt(0).toUpperCase();
         const tail = lowerName.slice(1);
         return firstLetter + tail;
});
}
const formattedNames = formatNames(names);
console.log(formattedNames);

const students = [
  { name: "Иван", score: 120 },
  { name: "Мария", score: 95 },
  { name: "Алексей", score: 150 },
  { name: "Светлана", score: 80 },
  { name: "Дмитрий", score: 101 }
];

 function getPassingStudents(studentsList, passingScore) {
    return studentsList.filter(student => student.score > passingScore);

 }

    const passingStudents = getPassingStudents(students, 100);
    console.log(passingStudents);
    
function changeText() {
    document.getElementById("text-element").textContent = "Текст был изменен!";
}

function addText() {
    const p = document.getElementById("text-element");
    p.textContent += " (дополнено)";
}

function resetText() {
    document.getElementById("text-element").textContent = originalText;
}

let originalText = "Исходный текст этого параграфа";

