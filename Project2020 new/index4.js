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
 
  let logout = document.getElementById('logOut')
  logout.addEventListener('click',()=>{
    firebase.auth().signOut();
  })