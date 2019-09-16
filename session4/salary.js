

let salaryTable = [
    {
        name: "Duc",
        salary: 30000,
        hours: 5,
        days: 20,
    },
    {
        name: "Linh",
        salary: 50000,
        hours: 7,
        days: 25,
    },
    {
        name: "Thao",
        salary: 60000,
        hours: 8,
        days: 28,
    },
];

let totalSalary = 0;

// console.log(salaryTable[2].name);
salaryTable.forEach((person, index) =>{
    let salary = person.salary * person.hours * person.days;
    totalSalary += salary;
    console.log(`${person.name}: ${salary}`);
})

console.log(`Total: ${totalSalary}`);
