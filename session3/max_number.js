let numbers = [7, 5, 9, -3, 0, 80, 9, 7, 5];

let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > max){
        max = numbers[i];
    }
}

console.log(max);