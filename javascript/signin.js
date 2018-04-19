function signin(){
    var username = $("#inputUsername").val();
    if(username){
        $("#loggedOutDropdown").hide();
        
        localStorage['username'] = username;
        $("#userDropdown").text(localStorage['username']);
        $("#loggedInDropdown").show();
        $('#lastVisited').text(localStorage['lastVisited']);
        var d = new Date();
        localStorage['nextVisited'] = "Last Visited "+d.toLocaleDateString()+" "+d.toLocaleTimeString();

        $("#inputUsername").val("");
        $("#inputPassword").val("");
    }else{
        alert("Please fill out the username field.");
    }
    
    
}

function signOut(){
    $("#loggedOutDropdown").show();
    $("#userDropdown").text("");
    localStorage['username'] = "";
    $("#loggedInDropdown").hide();
    localStorage['lastVisited']=localStorage['nextVisited'];
    $('#lastVisited').text("");
    $("#inputUsername").val("");
    $("#inputPassword").val("");
    
}
$(document).ready(function(){
    if(localStorage['username']){
        $("#loggedOutDropdown").hide();
        $("#userDropdown").text(localStorage['username']);
        $("#loggedInDropdown").show();
        $('#lastVisited').text(localStorage['lastVisited']);
        
        $("#inputUsername").val("");
        $("#inputPassword").val("");
    }else{
        $("#loggedOutDropdown").show();
        $("#userDropdown").text("");
        localStorage['username'] = "";
        $("#loggedInDropdown").hide();
        $('#lastVisited').text("");
        $("#inputUsername").val("");
        $("#inputPassword").val("");
    }
});