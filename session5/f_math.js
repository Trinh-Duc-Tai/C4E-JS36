window.onload = () => {
    let x = Math.floor(Math.random()*11); //sẽ được số từ 0 đến 10, Math.floor làm tròn
    let y = Math.floor(Math.random()*11); //sẽ được số từ 0 đến 10, Math.floor làm tròn
    let operators = ["+","-","*","/"];
    let indexOp = Math.floor(Math.random()*operators.length);
    
    let op = operators[indexOp];
    
    let result = calc(x,y,op);
    
    // alert(result);
    let errors = [ 1, 0, -1];
    let indexOfError = Math.floor(Math.random()*errors.length);
    let errNumber = errors[indexOfError];
    let displayResult = result + errNumber;
    alert(`${x} ${op} ${y} = ${displayResult}`);
    
    let answer = prompt("(Y/N)?").toLowerCase();
    let notice = checkAnswer(errNumber,answer);
    alert(notice);
}