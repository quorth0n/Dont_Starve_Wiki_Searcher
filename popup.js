function awesomeTask() {
 var searchText=document.getElementById("search").value;

 searchText=searchText.replace(" ", "+");

 chrome.tabs.create({url: "http://dont-starve-game.wikia.com/wiki/Special:Search?ns0=1&ns14=1&search=" + searchText});
 //window.location ="http://dont-starve-game.wikia.com/wiki/Special:Search?ns0=1&ns14=1&search=" + searchText;
}

function search(e)
{

 setTimeout(awesomeTask, 1000);
}

function enterSearch(e){
 if (e.keyCode == 13){
  search();
 }
}

chrome.contextMenus.create({
	"title": "Search the Don't Starve Wiki for '%s'",
	"type": "normal",
	"contexts": ["selection"],
	});


chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab){
	chrome.tabs.create({url: "http://dont-starve-game.wikia.com/wiki/Special:Search?ns0=1&ns14=1&search=" + info.selectionText});
}

//Put Some stuff here!


document.addEventListener('DOMContentLoaded', function (){
 document.querySelector('button').addEventListener('click', search);
});

document.addEventListener('DOMContentLoaded', function (){
 document.getElementById('search').addEventListener('keydown', enterSearch);
});