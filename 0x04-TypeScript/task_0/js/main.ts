interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const stud1: Student = {
    firstName: "Abdulmejid",
    lastName: "Kedir",
    age: 20,
    location: "Hawassa"
}, stud2: Student = {
    firstName: "Biniam",
    lastName: "Tefera",
    age: 20,
    location: "Hawassa"
};
const studentsList: Student[] = [stud1, stud2];

const tbl = document.createElement('table');

studentsList.map((item: Student) => {
    const trow = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.innerHTML = item.firstName;
    const tdLocation = document.createElement('td');
    tdLocation.innerHTML = item.location;
    trow.appendChild(tdName);
    trow.appendChild(tdLocation);

    tbl.appendChild(trow)

})
document.body.appendChild(tbl);
