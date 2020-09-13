function login1(){
    if(passwords.indexOf(passbox.value) != -1 && usernames.indexOf(userbox.value) != -1){
        if(passwords.indexOf(passbox.value) == usernames.indexOf(userbox.value)){
            alerttext.innerHTML = 'logged in succsesfully!';
            loggedhome(userbox.value);
        }
    }else{
        alerttext.innerHTML = "Username or Password is incorrect!";
        passbox.value = '';
    }
}
function signup1(){
    if(usernames.indexOf(userbox2.value) == -1 && passbox2.value.length >= 4){
        usernames.push(userbox2.value);
        userbox2.value = '';
        passwords.push(passbox2.value);
        passbox2.value = '';
        alerttext2.innerHTML = 'Signed up successfully!';
    }else{
        alerttext2.innerHTML = 'Username is taken or password is too short!';
        passbox2.value = '';
    }
}
function signinscreen(){
    homef.style.visibility = 'hidden';
    signinscren.style.visibility = 'visible';
    signupscren.style.visibility = 'hidden';
}
function signupscreen(){
    homef.style.visibility = 'hidden';
    signupscren.style.visibility = 'visible';
    signinscren.style.visibility = 'hidden';
}
function home(){
    userbox.style.transition = "0.0s";
    passbox.style.transition = "0.0s";
    userbox2.style.transition = "0.0s";
    passbox2.style.transition = "0.0s";
    document.getElementById("back").style.transition = "0.0s";
    document.getElementById("back1").style.transition = "0.0s";
    document.getElementById("login").style.transition = "0.0s";
    document.getElementById("signup").style.transition = "0.0s";
    signupscren.style.visibility = 'hidden';
    signinscren.style.visibility = 'hidden';
    alerttext.innerHTML = '';
    alerttext2.innerHTML = '';
    homef.style.visibility = 'visible';
    setTimeout(pagesdefault, 1000);
}
function loggedhome(username){
    userbox.style.transition = "0.0s";
    passbox.style.transition = "0.0s";
    userbox2.style.transition = "0.0s";
    passbox2.style.transition = "0.0s";
    document.getElementById("back").style.transition = "0.0s";
    document.getElementById("back1").style.transition = "0.0s";
    document.getElementById("login").style.transition = "0.0s";
    document.getElementById("signup").style.transition = "0.0s";
    signupscren.style.visibility = 'hidden';
    signinscren.style.visibility = 'hidden';
    homef.style.visibility = 'hidden';
    alerttext.innerHTML = '';
    alerttext2.innerHTML = '';
    loggedhomep.style.visibility = 'visible';
    usernametext.innerHTML = "Welcome, " + username + "!";
    setTimeout(pagesdefault, 1000);
}
function pagesdefault(){
    userbox.style.transition = "0.25s";
    passbox.style.transition = "0.25s";
    userbox2.style.transition = "0.25s";
    passbox2.style.transition = "0.25s";
    document.getElementById("back").style.transition = "0.25s";
    document.getElementById("back1").style.transition = "0.25s";
    document.getElementById("login").style.transition = "0.25s";
    document.getElementById("signup").style.transition = "0.25s";
}

//this is for cookies but i have not put them in yet so ignore pls
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}