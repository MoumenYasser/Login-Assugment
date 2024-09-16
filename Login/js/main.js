var user = [];

user = JSON.parse(localStorage.getItem('user'))

var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');

document.getElementById('login').addEventListener('click', function (){
    if(signinEmail.value == '' || signinPassword.value == '') {
        document.getElementById('incorrect').innerHTML = `<p class='text-center'>All Inputs is Required</p>`;
    } else {
        checkUser();
    }
})


function checkUser() {
    for(var i = 0; i < user.length; i++){
        if(signinEmail.value == user[i].email && signinPassword.value == user[i].password){
            var y = user[i].name;
            localStorage.setItem('userName', y);
            location.href = '../../Home/index.html';
            break;
        }
    }
}