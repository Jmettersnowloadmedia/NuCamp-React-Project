class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(newStudent) {
        if (this.students.filter(s => s.email === student.email).length) { 
            console.log(`The student ${newStudent.email} is already registered!`);
        } else {
            this.students.push(newStudenttudent);
            console.log(`Registering ${newStudent.email} to the bootcamp ${this.name}.`);
        }
        return this.students;
    }
}