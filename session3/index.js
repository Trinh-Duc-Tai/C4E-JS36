//Array

// let menu = ["Com","Canh","Tom","Rau","Ca"];

//1. READ
//index
//1.1 READ ONE
// console.log(menu[2]);
// console.log(menu.length);
// console.log(menu[menu.length-1]);

// // 1.2 Read all 
// for(let i = 0; i < menu.length; i++){
//     console.log(menu[i])
// }

// 2. CREATE
// let newFood = "Thit";
// menu.push(newFood);
// console.log(menu);

let menu = ["Com","Canh","Tom","Rau","Ca"];
// 3.UPDATE
// menu[1] = "Dau";
// console.log(menu);

let indexOfFood = menu.indexOf("Rau");
menu[indexOfFood] = "Dau";

// 4. DELETE
//menu.splice(2,2); //2 là vị trí, 1 là số phần tử muốn xóa để xóa
// console.log(menu);
// let indexFood = menu.indexOf("Tom");
// menu.splice(indexFood, 1);
// console.log(menu);

menu.splice(1,0,"Thit","K1","K2");// so 1 la tu vi tri 1, so 0 la 0 xoa phan tu nao, Thit,K1,K2 la phan tu them vao
console.log(menu);
