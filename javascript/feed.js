//this forces javascript to conform to some rules, like declaring variables with var
"use strict";
var url = "http://www.espn.com/espn/rss/nfl/news";
var url2 = "http://www.espn.com/espn/rss/nba/news";
var url3 ="http://www.espn.com/espn/rss/mlb/news";
window.onload = function(){
    init(url);
}
function init(url){
    //NHL URL for ESPN RSS feed
    console.log("Entering Init");	
    

    document.querySelector("#content").innerHTML = "<b>Loading news...</b>";
    $("#content").fadeOut(250);
    document.querySelector("#content2").innerHTML = "<b>Loading news...</b>";
    $("#content2").fadeOut(250);
    document.querySelector("#content3").innerHTML = "<b>Loading news...</b>";
    $("#content3").fadeOut(250);
    //fetch the data
    $.get(url).done(function(data){xmlLoadedBase(data,"");});
    $.get(url2).done(function(data){xmlLoadedBase(data,"2");});
    $.get(url3).done(function(data){xmlLoadedBase(data,"3");});
    //alert(data);
}

function filterFeed(){
    $('.filter').toArray().forEach(element => {
        console.log(element['name']);
        if(element.checked == true){
            $("#"+element['name']+"Div").show();
        }else{
            $("#"+element['name']+"Div").hide();
        }
    });
}

function xmlLoaded(obj){
    console.log("obj = " +obj);
    var items = obj.querySelectorAll("item");
    
    //show the logo
    var image = obj.querySelector("image")
    var logoSrc = image.querySelector("url").firstChild.nodeValue;
    var logoLink = image.querySelector("link").firstChild.nodeValue;
    $("#logo").attr("src",logoSrc);
    
    //parse the data
    var html = "";
    for (var i=0;i<items.length;i++){
        //get the data out of the item
        var newsItem = items[i];
        var title = newsItem.querySelector("title").firstChild.nodeValue;
        console.log(title);
        var description = newsItem.querySelector("description").firstChild.nodeValue;
        var link = newsItem.querySelector("link").firstChild.nodeValue;
        var pubDate = newsItem.querySelector("pubDate").firstChild.nodeValue;
        
        //present the item as HTML
        var line = '<div class="item">';
        line += "<h2>"+title+"</h2>";
        line += '<p><i>'+pubDate+'</i> - <a href="'+link+'" target="_blank">See original</a></p>';
        //title and description are always the same (for some reason) so I'm only including one
        //line += "<p>"+description+"</p>";
        line += "</div>";
        
        html += line;
    }
    document.querySelector("#content").innerHTML = html;
        
    $("#content").fadeIn(1000);

}

function xmlLoadedBase(obj,n){
    console.log("obj = " +obj);
    var items = obj.querySelectorAll("item");
    
    //show the logo
    var image = obj.querySelector("image")
    var logoSrc = image.querySelector("url").firstChild.nodeValue;
    var logoLink = image.querySelector("link").firstChild.nodeValue;
    $("#logo"+n).attr("src",logoSrc);
    
    //parse the data
    var html = "";
    for (var i=0;i<items.length;i++){
        //get the data out of the item
        var newsItem = items[i];
        var title = newsItem.querySelector("title").firstChild.nodeValue;
        console.log(title);
        var description = newsItem.querySelector("description").firstChild.nodeValue;
        var link = newsItem.querySelector("link").firstChild.nodeValue;
        var pubDate = newsItem.querySelector("pubDate").firstChild.nodeValue;
        
        //present the item as HTML
        var line = '<div class="item">';
        line += "<h2>"+title+"</h2>";
        line += '<p><i>'+pubDate+'</i> - <a href="'+link+'" target="_blank">See original</a></p>';
        //title and description are always the same (for some reason) so I'm only including one
        //line += "<p>"+description+"</p>";
        line += "</div>";
        
        html += line;
    }
    document.querySelector("#content"+n).innerHTML = html;
        
    $("#content"+n).fadeIn(1000);

}