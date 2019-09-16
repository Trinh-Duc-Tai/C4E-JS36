const n = prompt("Enter your number?")
if(n<2){
    console.log("Not prime!")
}
else{
    flag = true;
    for (let index = 2; index < n; index++) {
        if(n%index ===  0){
            flag = false;
        }
    }
    if(flag == true){
        console.log("Prime!")
    }else{
        console.log("Not prime!")
    }
}