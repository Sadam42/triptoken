// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCtNG5bd8LCa1C_Z1QSp2TGp8gGi1jPvSk",
    authDomain: "trip-token.firebaseapp.com",
    projectId: "trip-token",
    storageBucket: "trip-token.appspot.com",
    messagingSenderId: "437838752784",
    appId: "1:437838752784:web:960adc870374dcb5296e95",
    measurementId: "G-44RZDFEVEN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signup(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  login(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut
