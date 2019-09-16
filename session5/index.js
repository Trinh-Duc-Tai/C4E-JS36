let x = Number(prompt("Enter X: "));
let op = prompt("Enter operators");
let y = Number(prompt("Enter Y: "));


let result = 0;

if(op === '+'){
    result = x+y;
}
else if(op === '-' ){
    result = x - y;
}
else if(op === '*' ){
    result = x*y;
}else if(op === '/' ){
    if(y!=0){
        result = x/y;
    }else{
        alert(`Y = ${y} không phù hợp`);
    }
}
alert(result);

//eval('5+3'); // tự động ghép str về phép toán học rất nhanh
//refactor code
// if(op === '+'){
//     alert(x+y);
// }
// else if(op === '-' ){
//     alert(x-y);
// }
// else if(op === '*' ){
//     alert(x*y);
// }
// else if(op === '/' ){
//     if(y!=0){
//         alert(x/y);
//     }else{
//         alert(`Y = ${y} không phù hợp`);
//     }
// }
