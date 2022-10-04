user_name = localStorage.getItem("Username");
document.getElementById("user_name").innerHTML = "Hi, " + user_name;

function Logout() {
      window.location = "index.html";
}
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyC77Nc8yBLtIdwkAivAzT0T9DbszMAMHFU",
   authDomain: "kkproject94.firebaseapp.com",
   projectId: "kkproject94",
   storageBucket: "kkproject94.appspot.com",
   messagingSenderId: "1044728709364",
   appId: "1:1044728709364:web:c151900b2a9b7206e79ea1"
 };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      windows.location = "kwitter_room.html";
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();