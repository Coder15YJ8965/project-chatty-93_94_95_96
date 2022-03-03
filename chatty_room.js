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
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
         purpose : " adding room name"
   })

   localStorage.setItem("room_name", room_name);

   window.location = "chatty_page.html"
;}
function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name" , name);
   window.location = "chatty_page.html";
}