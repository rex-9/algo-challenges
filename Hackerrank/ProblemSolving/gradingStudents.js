function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > 37) {
            const n = 5 - (grades[i] % 5); 
            if (n < 3) {
                grades[i] += n;
            }
        }
    }
    return grades;
}

console.log(gradingStudents([73, 67, 38, 33]))
