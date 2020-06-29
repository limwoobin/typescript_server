interface Person3 {
    name: string;
    age?: number;
}

interface Student extends Person3 {
    grade: number;
}


const student: Student = {
    name: 'Lee',
    age: 20,
    grade: 3
}


interface Developer {
    skills: string[];
}

interface WebDeveloper extends Person3 , Developer {}

const webDeveloper : WebDeveloper = {
    name: 'Lee',
    age: 30,
    skills: ['HTML' , 'CSS' , 'JS']
}