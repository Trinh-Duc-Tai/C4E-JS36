let a = prompt("Enter a")
let b = prompt("Enter b")
let c = prompt("Enter c")
const delta = b**2 - 4*a*c;

if(delta<0){
    console.log("VN");
}else if(delta == 0 ){
    console.log("Nghiem kep");
    const x = -b/(2*a);
    console.log(`Phuong trinh co nghiem la ${x}`);
}else{
    console.log("2 nghiem phan biet");
    const x1 = (-b - delta**0.5)/(2*a)
    const x2 = (-b + delta**0.5)/(2*a)
    console.log(`Phuong trinh co 2 nghiem la ${x1} va ${x2}`)
}