// ==UserScript==
// @name         Hcaptcha Send Site Key
// @namespace    Hcaptcha Send Site Key
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://newassets.hcaptcha.com/captcha/v1/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dropz.xyz
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @grant        none
// ==/UserScript==

var folderWrite = 'C%3A%5Czbila%5Ccaptcha';
var folderRead = 'C%3A%5Czbila%5Csolve';
var host = "http://localhost/hivemic/";
var utc = 'xxx';
var step = 'next';

setInterval( () => {

	console.log('start ', step);

	if(step == 'wait'){
		console.log('read captcha');
		$.get(host + "?site=hcaptcha&read=true&folder="+ folderRead +"&file=" + utc, function(data){
			
			 var spankq = data.split('<span id=\'ketqua\'>')[1];
			 if(!spankq) return;
			 var kq = spankq.split('</span>')[0].trim();
			 
			 console.log('kq = ', kq);
			 $('textarea[name=g-recaptcha-response]').show();
				 $('textarea[name=h-captcha-response]').show();
				 $('textarea[name=g-recaptcha-response]').val(kq);
				 $('textarea[name=h-captcha-response]').val(kq);
			
			 
			 
		 }).done(function(data) {
			 
		step = 'wait';
	  })
	  .fail(function() {
		console.log( "error" );
	  })
	  .always(function() {
		console.log( "finished" );
	  });;
		 return;
	}

	var sitekey = $('.h-captcha').attr('data-sitekey');
	console.log('site key = ' ,sitekey);
	
	if(!sitekey) return;

	var domain = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
	
	
	
	utc = 'usersession_' + new Date().getTime();
	console.log('post ajax ', utc);
	
	$.post(host + "?site=hcaptcha&write=true&folder=" + folderWrite+ "&file=" + utc,
		{
			saveastext: sitekey +'\r\n'+domain
		}, function(result){
			
			
		}
	)  .done(function() {
		step = 'wait';
	  })
	  .fail(function() {
		console.log( "error" );
	  })
	  .always(function() {
		console.log( "finished" );
	  });
				
		
},10000);







