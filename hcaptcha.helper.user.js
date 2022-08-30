// ==UserScript==
// @name         Hcaptcha Helper
// @namespace    Hcaptcha Helper
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://newassets.hcaptcha.com/captcha/v1/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dropz.xyz
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @grant        none
// ==/UserScript==


var folderWrite = 'C%3A%5Cblob%5Ccaptcha';
var folderRead = 'C%3A%5Cblob%5Csolve';
var host = "http://localhost/hivemic/";
/*
var folderWrite = 'blobcaptcha';
var folderRead = 'blobsolve';
var host = "https://dev.vn.euroland.com/tools/sharegraph/hive.aspx/";*/
var utc = '';
var lastImg = '';
setInterval(()=>{	
		if(document.querySelector('.prompt-text') == null) {
			if(document.getElementById('checkbox') !=null){
				document.getElementById('checkbox').click();
			}
		}
},2000);
setInterval( () => {		
		var divs = document.querySelectorAll('div.image-wrapper>div');

		if(divs.length == 0) { return;}

		var curImg = divs[0].style.background;
		console.log(curImg);
		console.log(lastImg);
		console.log(curImg == lastImg);
		if(curImg == lastImg) {
			try{
			$.get(host + "?site=hcaptcha&read=true&folder="+ folderRead +"&file=" + utc,
			function(data){
				
				 var spankq = data.split('<span id=\'ketqua\'>')[1];
				 if(!spankq) return;
				 var kq = spankq.split('</span>')[0].trim();

				 kq.split('|').forEach(p => {
					if(divs[p])
						divs[p].click();
				 });
				 setTimeout(function(){document.querySelector('div.button-submit').click();},200);

			 }).always(function(){
				 console.log('in always');
			 });
			}catch(eee){

			}
			 return;
		}



		if(document.querySelector('.prompt-text') == null) return;
		var prompttext = document.querySelector('.prompt-text').innerText;
		var now = new Date();
		utc =  now.getTime() + now.getTimezoneOffset() * 60000;
		var content = prompttext+'\r\n';
		var loadOk = true;
		for (i = 0; i < divs.length; i++) {
			content  += divs[i].style.background+'\r\n';
			if(divs[i].style.background == ''){
				loadOk = false;
				break;
			}
		}
		if(loadOk){
		$.post(host + "?site=hcaptcha&write=true&folder=" + folderWrite+ "&file=" + utc,
			{saveastext: content}
			, function(result){

			}).always(function() {lastImg = curImg});
		}

},5000);







