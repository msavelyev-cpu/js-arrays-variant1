function filterStudents(students, faculty, minGpa) {

    return students.filter(student => {

        return (
            student.faculty === faculty &&
            student.gpa >= minGpa
        );

    });

}

module.exports = filterStudents;