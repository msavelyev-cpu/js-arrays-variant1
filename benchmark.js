const {
    bubbleSort,
    quickSort,
    getBubbleComparisons,
    getQuickComparisons,
    resetQuickComparisons
} = require("./sorting");

function generateStudents(size) {

    const faculties = [
        "IT",
        "Economics",
        "Law",
        "Medicine"
    ];

    const students = [];

    for (let i = 0; i < size; i++) {

        students.push({
            name: `Student${i + 1}`,
            age: Math.floor(Math.random() * 8) + 18,
            gpa: Math.floor(Math.random() * 101),
            faculty:
                faculties[
                    Math.floor(Math.random() * faculties.length)
                ]
        });

    }

    return students;
}

function compareAlgorithms() {

    const sizes = [100, 1000, 5000];

    sizes.forEach(size => {

        const data = generateStudents(size);

        let start = Date.now();

        bubbleSort(data, "gpa");

        let bubbleTime =
            Date.now() - start;

        const bubbleCount =
            getBubbleComparisons();

        resetQuickComparisons();

        start = Date.now();

        quickSort(data, "gpa");

        let quickTime =
            Date.now() - start;

        const quickCount =
            getQuickComparisons();

        console.log(`\n===== ${size} STUDENTS =====`);

        console.log(
            `Bubble Sort: ${bubbleTime} ms`
        );

        console.log(
            `Bubble Comparisons: ${bubbleCount}`
        );

        console.log(
            `Quick Sort: ${quickTime} ms`
        );

        console.log(
            `Quick Comparisons: ${quickCount}`
        );
    });
}

module.exports = compareAlgorithms;