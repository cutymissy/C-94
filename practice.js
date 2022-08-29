
var firebaseConfig = {
    apiKey: "AIzaSyDWY6fD0xWoB_Tw3i60Yf_eI4FnBLRauNg",
    authDomain: "kwitter-6f036.firebaseapp.com",
    databaseURL: "https://kwitter-6f036-default-rtdb.firebaseio.com",
    projectId: "kwitter-6f036",
    storageBucket: "kwitter-6f036.appspot.com",
    messagingSenderId: "796553571763",
    appId: "1:796553571763:web:8d1b884f82edd568ee2fc6"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function adduser()
{
    user_name = document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose:"hello"
    })
}