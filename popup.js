$(function(){
	chrome.tabs.executeScript(null, {file: "autoFill.js" });
  	window.close();
})
