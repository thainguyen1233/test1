const pwwd = document.getElementById('pwwd');
const chk = document.getElementById('chk');
chk.onchange = function (e){
    pwd.type = chk.checked ? "text" : "password";
};