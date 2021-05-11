function log_in() {
    if(document.getElementById("user_name").value=="")
  {
  
    document.getElementById("user_name").placeholder="must";
  }
  else{
  
  
    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  }