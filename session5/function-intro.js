//ES 5
function add(x,y){
    let result = x+y;
    return result;

};

let addResult = add(5,10);
console.log(addResult);
// -------------------------------------------
//ES 6
//arrow function
const add = (x,y) => {
    let result = x + y;
    return result;
}