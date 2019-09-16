let menu = ["Com", "Canh", "Tom", "Rau", "Ca"];
for(let i=0; i < menu.length; i++){
    console.log(`${i+1}.${menu[i]}`)
}

//optional
menu.forEach((food, index) => {
    console.log(`${index+1}.${food}`)
})