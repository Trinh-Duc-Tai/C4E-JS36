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
            <div class="card-user">
            <img class="image-user" src = "${user.avatar}" alt = ""> 
            <div class="user-info">
                <span class="user-fullname">${user.first_name} ${user.last_name}</span> 
                <span>${user.email}</span>
            </div>
            </div>
            `
            divUser.innerHTML = displayUser;
        })
    }
}