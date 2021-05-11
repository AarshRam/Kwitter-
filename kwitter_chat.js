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

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("chat_area")
    window.location = "kwitter_login.html";
}

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("chat_area");

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name : user_name,
    message : msg,
    like : 0,
  });
  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output_page").innerHTML = ""; snapshot.forEach(function(childSnapshot)
 { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
  console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];
  line_1 = "<center>" + "<h4 class='aarsh'>" + name + "<img class='user_tick' src='tick.png'/> </h4>" + "</center";
  line_2 = "<center>" + "<h4 class='message_h4'>" + message + "</h4>" + "</center>";
  line_3 =  "<button class='btn' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>" 
  line_4 =  "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>" ;
  row = line_1 + line_2 + line_3 + line_4 ;
  document.getElementById("output_page").innerHTML += row;
 }});});}getData();
 function updateLike(message_id) { console.log("clicked on like button - " + message_id);
  button_id = message_id; likes = document.getElementById(button_id).value; 
 updated_likes = Number(likes) + 1; console.log(updated_likes); firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); }