function verifySession(){
    let user = sessionStorage.getItem('USER') || "";
    if(user == ""){
      alert("Session Expired/ Not logged In.. Please login again");
      window.location.href = "./index.html";
    }
  }

class UserSession{
    checkLogin(uName, pswd){
        // let uName = document.getElementById('uName').value;
        // let pswd = document.getElementById('pswd').value;

        if(uName == 'arunkumar' && pswd == 'lala'){
            sessionStorage.setItem('USER', uName);
            window.location.href = './aboutus.html';
        }else{
            sessionStorage.removeItem('USER');
            alert('Invalid Username/Password');
        }
    }

    verifySession(){
        let user = sessionStorage.getItem('USER') || "";
        if(user == ""){
          alert("Session Expired/ Not logged In.. Please login again");
          window.location.href = "./index.html";
        }
      }
}