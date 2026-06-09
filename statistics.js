function getStatistics(students) {

    const count = students.length;

    const averageGpa =
        students.reduce((sum, student) => sum + student.gpa, 0) / count;

    const top3 = [...students]
        .sort((a, b) => b.gpa - a.gpa)
        .slice(0, 3);

    const facultyDistribution = {};

    students.forEach(student => {

        if (facultyDistribution[student.faculty]) {
            facultyDistribution[student.faculty]++;
        } else {
            facultyDistribution[student.faculty] = 1;
        }

    });

    return {
        count,
        averageGpa: averageGpa.toFixed(2),
        top3,
        facultyDistribution
    };
}

module.exports = getStatistics;