interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}


interface printTeacherFunction {
    (fName:string, lName:string) : string;
}

const printTeacher: printTeacherFunction = function(firstName, lastName) {
    return `${firstName[0]} ${lastName}`;
}

interface iStudentClassConstructor {
    new(fName:string, lName:string): iStudentClass
}
interface iStudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements iStudentClass {
    firstName: string
    lastName: string

    constructor(fName:string, lName:string) {
        this.firstName = fName
        this.lastName = lName
    }

    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName
    }
}