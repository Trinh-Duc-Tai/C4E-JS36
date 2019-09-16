
//object

let person = {
    name: "Duc",
    age: 20,
    major: "Chinese",
    university: "FTU",
}
//property: value,
//1. READ

console.log(person.age);

//2. CREATE /UPDATE
// update 
person.age = 25

//create
person.hobby = "sleep"
console.log(person)

// 3. DELETE
delete person.university;
console.log(person);

let a = "age";
console.log(person[a])
