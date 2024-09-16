var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var user = [];

if(localStorage.getItem('user') != null ) {
    user = JSON.parse(localStorage.getItem('user'));
} else {
    user = [];
}

function add() {
    if(signupName.value == '' || signupEmail == '' || signupPassword == '') {
        document.getElementById('message').innerHTML = `<p class='text-center'>All Inputs is Required</p>`
    } else {
        var obj = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value
        }
        user.push(obj);
        location.href = '../../Login/index.html'
        localStorage.setItem('user', JSON.stringify(user));
    }
}