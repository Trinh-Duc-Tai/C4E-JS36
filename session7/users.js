const context = {
    users: null,

}
window.onload = async () => {
    await getUsers();
    renderUser();
    userDetail();
}

const getUsers = async () => {
    const usersAPI = await fetch('https://reqres.in/api/users');
    const usersData = await usersAPI.json();
    const users = usersData.data;
    // console.log(users);
    context.users = users;
}

const renderUser = () => {
    // console.log("RENDER USER");
    // console.log(context.users);
    const ulUsers = document.getElementById("users");
    context.users.forEach((user,index)=>{
        const liUser = `<li id="user-${index}">${user.first_name} ${user.last_name}</li>`;
        ulUsers.innerHTML += liUser;
    })
}
const userDetail = () => {
    const divUser = document.getElementById('user-detail');
    for(let i = 0; i < context.users.length; i++){
        const eachUser = document.getElementById(`user-${i}`);
        // console.log(eachUser);
        const user = context.users[i];
        eachUser.addEventListener('click',()=>{
            const displayUser = `
            <div>
            <img src = "${user.avatar}" alt = ""> <br>
            <b>Name: </b><span>${user.first_name} ${user.last_name}</span> <br>
            <b>Email: </b><span>${user.email}</span>
            </div>
            `
            divUser.innerHTML = displayUser;
        })
    }
}