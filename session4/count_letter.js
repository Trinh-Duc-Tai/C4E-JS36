let answer = "abbcbac"; //a : 2, b : 3, c : 2

let lettersObj = {};

for (let i = 0; i < answer.length; i++) {
    let letter = answer[i];
    if(letter in lettersObj){
        lettersObj[letter] += 1;
    }else{
        lettersObj[letter] = 1;
    }
}

console.log(lettersObj);