function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function signin(){
    $("#loggedOutDropdown").hide();
    var username = $("#inputUsername").val();
    console.log(username);
    $("#userDropdown").text(username);
    $("#loggedInDropdown").show();
    $('#lastVisited').text(localStorage['lastVisited']);
    var d = new Date();
    localStorage['nextVisited'] = "Last Visited "+d.toLocaleDateString()+" "+d.toLocaleTimeString();
}

function signOut(){
    $("#loggedOutDropdown").show();
    $("#userDropdown").text("");
    $("#loggedInDropdown").hide();
    localStorage['lastVisited']=localStorage['nextVisited'];
    $('#lastVisited').text("");
}