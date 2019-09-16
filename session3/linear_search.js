// let numbers = [6, 5, 9, -3, 0];
// cach 1: chi in ra dc 1 so o 1 vi tri 
// let n = Number(prompt("Enter a number? "));
// let indexOfN = -1;

// numbers.forEach((number, index)=>{
//     console.log(`${index+1}.${number}`)
//     if(number === n){
//         indexOfN = index;
//     }
// })

// if(indexOfN === -1){
//     alert("Not found");
// }else{
//     alert(`${n} at ${indexOfN}`);
// }

// -----------------------
// Cách 2
let numbers = [6, 5, 9, -3, 0, 9, 9, 7, 5];
// cách 2: in ra 1 số có thể ở nhiều vị trí
let n = Number(prompt("Enter a number? "));
let indexOfN = [];

numbers.forEach((number, index)=>{
    console.log(`${index+1}.${number}`)
    if(number === n){
        indexOfN.push(index);
    }
})

if(indexOfN === -1){
    alert("Not found");
}else{
    alert(`${n} at ${indexOfN}`);
}