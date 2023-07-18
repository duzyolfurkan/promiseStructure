const students = require('./testObjects')

const listStudent = () => {
    students.map((student => {
        console.log(student.name);
    }));
};

const addStudent = (newStudent) => {
    const studentPromise = new Promise((resolve, reject) => {
        resolve(students.push(newStudent));
        reject('Program Crashed');
    });
    return studentPromise;
};

addStudent({name: 'James', Age: 22})
    .then(() => {
        console.log('Student Added');
        listStudent();
    })
    .catch((error) => {
        console.log(error);
    })