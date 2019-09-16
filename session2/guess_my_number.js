const so = Math.floor(Math.random()*101)

console.log(so);

for ( ; ; ) {
    let x = Number(prompt("Enter number"));
    if(x < so){
        alert("Too small");
    }else if(x > so){
        alert('Too large');
    }else if(x===so){
        alert("Bingo!");
        break;
    }
}
