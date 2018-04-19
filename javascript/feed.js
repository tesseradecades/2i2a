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
    /*document.querySelector("#basketballcontent").innerHTML = "<b>Loading news...</b>";
    $("#content2").fadeOut(250);
    document.querySelector("#baseballcontent").innerHTML = "<b>Loading news...</b>";
    $("#content3").fadeOut(250);*/
    //fetch the data
    $.get(url).done(function(data){xmlLoaded(data,"football");});
    $.get(url2).done(function(data){xmlLoaded(data,"basketball");});
    $.get(url3).done(function(data){xmlLoaded(data,"baseball");});
    //alert(data);
}

function xmlLoaded(obj,n){
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
        var line = '<div class="item '+n+'item">';//+'<td><img src="assets/pointed-star-silhouette_318-35987.jpg" width="16" height="16" onclick="favorite(this)"></td><td>';
        line += "<h2>"+title+"</h2>";
        line += '<p><i>'+pubDate+'</i> - <a href="'+link+'" target="_blank">See original</a></p></td>';
        line += "</div>";
        
        html += line;
    }
    if(document.querySelector("#content").innerHTML == "<b>Loading news...</b>"){
        document.querySelector("#content").innerHTML = html;
    }else{
        document.querySelector("#content").innerHTML += html;
    }
    //document.querySelector("#"+n+"content").innerHTML = html;
        
    $("#content").fadeIn(1000);

}

function favorite(obj){
    console.log(obj['src']);
    var unfav = "assets/pointed-star-silhouette_318-35987.jpg";
    if(obj['src'] == unfav){
        obj['src'] = "assets/Gold_Star.png";

    }else{
        obj['src'] = unfav;
    }
}

function filterFeed(){
    $('.filter').toArray().forEach(element => {
        console.log(element['name']);
        var fil = 'div.item.'+element['name']+'item';
        
        if(element.checked == true){
            $(fil).show();
        }else{
            $(fil).hide();
        }
    });
}

function toggleFilter(filter){
    var fil = 'div.item.'+filter+'.item';
    console.log(fil);
    $(fil).toggle();
}