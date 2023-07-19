//Import external objects
const students = require('./testObjects')

//Student list method
const listStudent = () => {
    students.map((student => {
        console.log(student.name);
    }));
};

//Student add method
const addStudent = (newStudent) => {
    const studentPromise = new Promise((resolve, reject) => {
        resolve(students.push(newStudent));
        reject('Program Crashed');
    });
    return studentPromise;
};

//Student add method run
addStudent({name: 'James', Age: 22})
    .then(() => {
        console.log('Student Added');
        listStudent();
    })
    .catch((error) => {
        console.log(error);
    })