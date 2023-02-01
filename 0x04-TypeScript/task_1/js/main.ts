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