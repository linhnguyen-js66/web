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
  // firebase.analytics();
  firebase.auth.Auth.Persistence.LOCAL;
  // //Get element
  firebase.auth().signOut();
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('click', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  let btnReset = document.getElementById("btn-resetPassword");
  btnReset.addEventListener('click',()=>{
      var auth= firebase.auth();
      var email = document.getElementById("txtEmail").value;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var cmt = document.getElementById("comment_m");
        var vl  = document.getElementById("valid_m") 
      if (!filter.test(email)) {
        
        cmt.innerHTML = 'Hay nhap dia chi email hop le.\nExample@gmail.com';
        vl.innerHTML = " "
        email.focus;
        return false;
      }
      else{
          cmt.innerHTML = " "
      }
      if(email != ""){
        auth.sendPasswordResetEmail(email).then(function(){
            window.alert("Email has been sent to you, Please check and verify.");
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
           
            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message:"+errorMessage);
        });
      }
      else{
          alert("ERROR")
      }
  })