let students = [
    { name: 'Gio', grade: 85 },
    { name: 'Dani', grade: 72 },
    { name: 'Dati', grade: 90 },
    { name: 'Barbare', grade: 65 }
];

let passedStudents = students.filter(function(student) {
    return student.grade > 75;
});

console.log(passedStudents);
