function checkPassword() {
    var password = document.getElementById('password').value;
    var correctPassword = 'sasi'; // Đổi 'yourPassword' thành mật khẩu của bạn

    if (password === correctPassword) {
        document.getElementById('login-wrapper').style.display = 'none';
        document.getElementById('wrapper').style.display = 'block';
    } else {
        alert('Incorrect password!');
    }
}
function checkEnter(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
}

function hien() {
    var hideElement = document.getElementById('hide');
    hideElement.classList.toggle('hidden');
}
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    return false;
    }
    }
    document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    return false;
    }
    }
    document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    return false;
    }
    }
    jQuery(document).ready(function($){
        $(document).keydown(function(event) {
        var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
        
        if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
        alert('Sorry, This Functionality Has Been Disabled!');
        //disable key press porcessing
        return false;
        }
        });
        });
