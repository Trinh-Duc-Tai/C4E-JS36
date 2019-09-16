const checkAnswer = (errNumber, answer) =>{
    let notice = ' ';
    if(errNumber === 0){
        if(answer === 'y'){
            notice = "Congrat";
        }else if (answer === 'n'){
            notice = "Wrong";
        }
    }else{
        if(answer === 'y'){
            notice = "Wrong";
        }else if(answer === 'n'){
            notice = "Congrat";
        }
    }
    return notice;
}
const calc = (x,y,op)=>{
    let result = 0;

    if(op === '+'){
        result = x + y;
    }else if (op === '-'){
        result = x - y;
    }else if (op === '*'){
        result = x * y;
    }else if (op === '/'){
        result = x / y;
    }
    return result; 
}