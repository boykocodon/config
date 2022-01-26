// ==UserScript==
// @name         dopzx
// @author		 dopzx
// @version      2.2.5
// @license      MIT
// @namespace    coin
// @description	 coin
// @copyright    2022
// @updateURL  https://raw.githubusercontent.com/boykocodon/config/master/autodropz.user.js
// @updatetype	 24
// @include		https://my.dropz.xyz/site-friends
// @connect     raw.githubusercontent.com
// ==/UserScript==


var autoClick = true;
var autoScroll = true;
var autoWithdraw = true;
var minpay=1500;
var useFetch = true;
var idButton = '';
var countSubmitCaptcha =0;
var countCaptcha = 0;
var openNewWindow = false;
var timeWaitNextAd = 5000;

var getConfig = false;
var testUpdate = true;
fetch('https://raw.githubusercontent.com/boykocodon/config/master/1.txt')
.then((res)=>{
	console.log(res);
});

setInterval(function(){
    if(document.getElementsByName('h-captcha-response').length > 0){
        if(document.getElementsByName('h-captcha-response')[0].value != '') {
			countSubmitCaptcha++;
			document.title='Dropz submit captcha ' + countSubmitCaptcha;
			if(countSubmitCaptcha>20){
				countSubmitCaptcha = 0;
				window.location.reload();
				return;
			}
            //if(document.getElementsByClassName('btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn').length > 0){
               // document.getElementsByClassName('btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn') [0].click();
            //}else{
				if(document.getElementsByClassName('btn btn-info btn-sm mt-3 mb-4').length > 0)
					document.getElementsByClassName('btn btn-info btn-sm mt-3 mb-4')[0].click();
            //}
            
        }else{
			countCaptcha++;
			if(countCaptcha>100){
				countCaptcha = 0;
				window.location.reload();
				return;
			}
			document.title='Dropz captcha ' + countCaptcha;
		}
    }else{
        if(document.getElementsByClassName('btn btn-info btn-sm mt-3 mb-4').length > 0){
            if(autoClick)
            {
                var buttonSubmit = document.getElementsByClassName('btn btn-info btn-sm mt-3 mb-4')[0];
                if(buttonSubmit.innerText.indexOf('Website') >-1 ){
					var curIdButton = buttonSubmit.getAttribute('id')+ buttonSubmit.innerText;
					if(curIdButton != idButton  || buttonSubmit.innerText == 'Visit Website'){
						var fclick = buttonSubmit.getAttribute('onclick');
						if(fclick.indexOf(';') >-1) {
							buttonSubmit.setAttribute('onclick', fclick.split(';')[1]);
						}
						 var ref = eval(buttonSubmit.id).toString().split('ref=')[1].split('"')[0];
						 if(!openNewWindow){
							 openNewWindow = true;
							 document.title='Dropz Please wait ' + document.getElementById('pts_lbl').innerText;
							 if(useFetch){
								 fetch('redir/index.php?ref=' + ref).then(()=>{
									 setTimeout(function(){window.location.reload();},timeWaitNextAd);
								 }).catch(()=>{
									 setTimeout(function(){window.location.reload();},timeWaitNextAd);
								 });
							 }else{
								 window.open('redir/index.php?ref=' + ref, '_blank');
								 setTimeout(function(){window.location.reload();},timeWaitNextAd);
							 }
						 }
						//buttonSubmit.click();
						idButton = curIdButton;
					}
                }
            }
        }
    }
},5000);

setInterval(function(){
    if(autoScroll){
        if(document.getElementsByClassName('btn btn-info btn-sm mt-3 mb-4').length > 0){
            document.getElementsByClassName('horizontal-menu')[0].style.display='none';
            document.getElementById('payout').scrollIntoView();
        }
    }
}
,2000);

var isPay = false;
setInterval(function(){
  if(autoWithdraw){
      if(!isPay){

         if(document.getElementById('swal2-title') 
             && (document.getElementById('swal2-title').innerText == 'Payment has been sent'
             || document.getElementById('swal2-title').innerText == 'Minimum payout is 300 Drops')){
             isPay = true;
         }
         else{
			 if(document.getElementById('balance_lbl')){
				 var bl = document.getElementById('balance_lbl').innerText.split('.')[0].replace(',','');
				 if(bl>minpay){
					 if(document.getElementById('payout'))
						document.getElementById('payout').click();
				 }
			 }
         }

     }
     if(document.getElementsByClassName('swal2-confirm').length > 0){
         document.getElementsByClassName('swal2-confirm')[0].click();
     }
  }
},5000);
