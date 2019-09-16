let teencode = {
    stt: "status",
    hc: "hoc",
    lm: "lam",
}


for(;;){
    let words = Object.keys(teencode);
    // console.log(teencode);
    
    words.forEach((word, index) =>{
        console.log(`${index+1}.${word}`)
    })
    
    let answer = prompt("Code? ")
    
    // alert(`It means ${teencode[answer]}`)
    if(answer in teencode){
        alert(`It means ${teencode[answer]}`)
    }else{
        let yOrN = prompt("Contribute? (Y/N)").toLowerCase();
        if( yOrN === 'y'){
            let translate = prompt("Translate?");
            teencode[answer] = translate;
        }else{
            break;
        }
    }
}