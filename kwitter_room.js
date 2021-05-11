var firebaseConfig = {
    apiKey: "AIzaSyAi0kBY652qvPMBG64zDl2T1vu02nyux04",
    authDomain: "kwitter-project-ab04c.firebaseapp.com",
    databaseURL: "https://kwitter-project-ab04c-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-ab04c",
    storageBucket: "kwitter-project-ab04c.appspot.com",
    messagingSenderId: "466353237969",
    appId: "1:466353237969:web:6a121a5afff693c10e3af0"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Welcome " + user_name ;

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "Adding a room to chat with friends"
    });

    localStorage.setItem("chat_area" , room_name);

    window.location = "kwitter_chat.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("chat_area")
    window.location = "kwitter_login.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
    room_chat_area = childKey;
    console.log("Room name - " + room_chat_area);
row = "<div class='room_name' id='" + room_chat_area + "' onclick='RedirectToRoomName(this.id)'>#" + room_chat_area + "</div> <hr>"
document.getElementById("output").innerHtml += row;
});
});}

function RedirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("chat_area" ,name );
    window.location = "kwitter_chat.html";
}