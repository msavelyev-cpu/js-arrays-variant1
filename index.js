process.stdout.setEncoding('utf8');
const students = require("./students");

const readline = require("readline-sync");

const { bubbleSort } = require("./sorting");

const filterStudents = require("./filters");
const getStatistics = require("./statistics");
const compareAlgorithms = require("./benchmark");

let running = true;

while (running) {

    console.log("\n===== МЕНЮ =====");

    console.log("1. Показати студентів");
    console.log("2. Фільтрація студентів");
    console.log("3. Сортування студентів");
    console.log("4. Статистика");
    console.log("5. Порівняння алгоритмів");
    console.log("0. Вихід");

    const choice = readline.question("Select: ");

    switch (choice) {

        case "1":

            console.log("\nСписок студентів:");
            console.table(students);

            break;

 case "2":

    const faculty =
        readline.question("Faculty: ");

    const minGpa =
        Number(
            readline.question(
                "Minimum GPA (0-100): "
            )
        );

    console.log("\nРезультат фільтрації:");

const filtered = filterStudents(
    students,
    faculty,
    minGpa
);

if (filtered.length === 0) {
    console.log("Студентів не знайдено.");
} else {
    console.table(filtered);
}

break;

case "3":

    const field =
        readline.question(
            "Sort by (name / age / gpa): "
        );

    const order =
        readline.question(
            "Order (ASC / DESC): "
        );

    const asc =
        order.toUpperCase() === "ASC";

    console.log("\nВідсортований список:");

    console.table(
        bubbleSort(
            students,
            field,
            asc
        )
    );

    break;

        case "4":

            const stats =
                getStatistics(students);

            console.log(
                "\nКількість студентів:",
                stats.count
            );

            console.log(
                "Середній GPA:",
                stats.averageGpa
            );

            console.log(
                "\nРозподіл по факультетах:"
            );

            console.table(
                stats.facultyDistribution
            );

            console.log("\nТОП-3 студенти:");

            console.table(
                stats.top3
            );

            break;

        case "5":

            console.log(
                "\nПорівняння алгоритмів сортування:"
            );

            compareAlgorithms();

            break;

        case "0":

            console.log(
                "\nРоботу програми завершено."
            );

            running = false;

            break;

        default:

            console.log(
                "\nПомилка! Невірний пункт меню."
            );
    }
}