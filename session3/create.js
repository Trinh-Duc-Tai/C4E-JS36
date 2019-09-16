let menu = ["Com","Canh","Tom","Rau","Ca"];

menu.forEach((food,index)=>{
    console.log(`${index+1}.${food}`);
})

let answer = prompt("Add food? (Y/N)").toLowerCase();

if(answer === 'n'){
    alert("Good bye!");
}else if(answer === 'y'){
    let newFood = prompt("Food name?");
    menu.push(newFood);
}
menu.forEach((food,index)=>{
    console.log(`${index+1}.${food}`);
})