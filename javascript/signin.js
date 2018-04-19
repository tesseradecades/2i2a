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
}

function signOut(){
    $("#loggedOutDropdown").show();
    $("#userDropdown").text("");
    $("#loggedInDropdown").hide();
}