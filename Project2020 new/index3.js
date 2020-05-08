var firebaseConfig = {
    apiKey: "AIzaSyAOuNIQv1iMORCR1zCg4Mmfmr3cK1pKHgU",
    authDomain: "runforlifeweb-2020.firebaseapp.com",
    databaseURL: "https://runforlifeweb-2020.firebaseio.com",
    projectId: "runforlifeweb-2020",
    storageBucket: "runforlifeweb-2020.appspot.com",
    messagingSenderId: "342595571444",
    appId: "1:342595571444:web:01caa13fe98166815698a1",
    measurementId: "G-WBZ3WFXQ1N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL;
  firebase.auth().signOut();
//LOGIN
let btnLogin = document.getElementById('btnlogin')

btnLogin.addEventListener('click',()=> {
  var email = document.getElementById('txtEmail').value;
  var password = document.getElementById('txtPassword').value;

  if(email !="" && password != ""){
    var result = firebase.auth().signInWithEmailAndPassword(email,password);
    result.catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
     
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message:"+errorMessage);
       location.reload(true)
    });
    
  }
  else
  {
    window.alert("Form is incomplete.Please fill out all fields.");
  }
});
//
//SIGN UP
let btnSignup = document.getElementById('btnSignup');

  btnSignup.addEventListener('click',()=>{
    var mail = document.getElementById('Email').value;
    var pass = document.getElementById('password').value;
    var cpass = document.getElementById('repeat').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    var cmt = document.getElementById("comment_m");
    var vl  = document.getElementById("valid_m") 
    let comment =document.getElementById("comment")
    let valid = document.getElementById("valid") 
    var cmt_p = document.getElementById("comment_p");
    var vl_p  = document.getElementById("valid_p") 
    if(mail != "" && pass !="" && cpass !=""){
      if(pass.length < 4){
        // alert("password not strong enough ucl.")
        
        comment.innerHTML = "Enter another password"
        valid.innerHTML = " ";
      }
      else{
        comment.innerHTML = " "
      }
      if (!filter.test(mail)) {
       
        cmt.innerHTML = 'Hay nhap dia chi email hop le.\nExample@gmail.com';
        vl.innerHTML = " "
        mail.focus;
        return false;
      }
      else{
        cmt.innerHTML = " "
      }
      if(pass != cpass){
       
        cmt_p.innerHTML ="Pass not match";
        vl_p.innerHTML = " "
      }
      else{
        cmt_p.innerHTML = " "
      }
      if(pass === cpass){
        var result = firebase.auth().createUserWithEmailAndPassword(mail,pass);
      result.catch(function(error){
        // var errorCode = error.code;
        // var errorMessage = error.message;
       
        // console.log(errorCode);
        // console.log(errorMessage);
        // window.alert("Message:"+errorMessage);
        switch (error.code) {
          case 'auth/email-already-in-use':
            console.log(`Email address ${mail} already in use.`);
          
        
          case 'auth/invalid-email':
            console.log(`Email address ${mail} is invalid.`);
           
          case 'auth/operation-not-allowed':
            console.log(`Error during sign up.`);
            
          default:
            console.log(error.message);
            alert("Account is exsist. Pls choose another email.")
            location.reload(true)}
      });
      }
      // else{
      //   alert('Pass not match')
      // }
    }
  else{
      console.log('ERROR')
  }  
  })
  //