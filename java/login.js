function login(){
    var pw = document.getElementById("pw").value;
    var id = document.getElementById("id").value;
    password = pw;
    ID = id;
    if (password == 'zse45rdx' && ID == 'kim123family'){
        location.replace('main.html')
    }
    else{
        alert("아이디 또는 비밀번호가 잘못되었습니다.")
        location.reload('login.html')
    }
}