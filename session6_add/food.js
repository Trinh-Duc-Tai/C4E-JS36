let btnAdd = document.getElementById('btn-add');
let inputFood = document.getElementById('input-food');
let menu = document.getElementById('menu');
let btnRemove = document.getElementById('btn-remove');

btnAdd.addEventListener('click', ()=>{
    // console.log("button add clicked");
    // console.dir(inputFood);
    // console.dir(inputFood.value);
    // console.log(inputFood.value);
    let userInput = inputFood.value;
    let newFood = `<li>${userInput}</li>`
    menu.innerHTML += newFood;
})

let foodDelete = [];

btnRemove.addEventListener('click',()=>{
    console.dir(menu);
    //menu.lastElementChild.remove(); //xóa đi phần tử cuối cùng
    for(let i = 0; i < menu.children.length; i++){
        let liElement = menu.children[i];
        // console.dir(liElement); //để xem textContent
        if(liElement.textContent === inputFood.value){

            //Cach 1
            // i--;
            // liElement.remove(); 
            //nếu xóa này thì nhiều tên giống nhau sẽ ko xóa được nên phải dùng mảng foodDelete()
            //nhưng có thêm i-- thì lại xóa được, cách này rất hay

            //Cach 2 dùng foodDelete()
            foodDelete.push(liElement);
        }
    }
    foodDelete.forEach( food => food.remove());
})