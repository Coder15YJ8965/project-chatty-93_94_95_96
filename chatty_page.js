  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDDASY--leF1VX8wXpXd-hhab3wEkH9CCI",
    authDomain: "my-chatty-app-c-93-to-c-97.firebaseapp.com",
    databaseURL: "https://my-chatty-app-c-93-to-c-97-default-rtdb.firebaseio.com",
    projectId: "my-chatty-app-c-93-to-c-97",
    storageBucket: "my-chatty-app-c-93-to-c-97.appspot.com",
    messagingSenderId: "388661009425",
    appId: "1:388661009425:web:49e196b2df9719f3d825b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });

    document.getElementById("msg").value="";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
      window.location = "index.html";
}