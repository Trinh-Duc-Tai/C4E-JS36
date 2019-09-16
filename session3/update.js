let menu = ["Com","Canh","Tom","Rau","Ca"];

menu.forEach((food,index)=>{
    console.log(`${index+1}.${food}`);
})

console.log("---------------------------------------------");

let answer = prompt("Update? (y/n)").toLowerCase();

if(answer === 'n'){
    alert("Goodbye!");
}else if(answer === 'y'){
    let valueOrIndex = prompt("Update by value or index? (v/i)").toLowerCase();
    if(valueOrIndex === 'v'){
        let oldFood = prompt("Old food?");
        let newFood = prompt("New food?");
        let indexOfOldFood = menu.indexOf(oldFood);
        menu[indexOfOldFood] = newFood;
    }else if(valueOrIndex === 'i'){
        let indexOfFood = Number(prompt("Position of food?"));
        let newFood = prompt("New food?");
        menu[indexOfFood-1] = newFood;
    }
}

menu.forEach((food,index)=>{
    console.log(`${index+1}.${food}`);
})