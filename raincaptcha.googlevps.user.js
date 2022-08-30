// ==UserScript==
// @name         raindz
// @author		 raindz
// @version      5.1
// @license      MIT
// @namespace    raindz
// @description	 raindz
// @copyright    2022
// @updatetype	 24
// @include		https://raincaptcha.com/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// @connect     raw.githubusercontent.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==


setInterval( () => {
		if(document.querySelector('canvas[id=rc-canvas]') == null) {
			
			return;
		}
		// let link = document.createElement('a');
        // link.download = 'raincaptcha.png';
        // link.href = document.querySelector('canvas[id=rc-canvas]').toDataURL();
        // link.click();
              
        // setTimeout(() => {
          // link.remove();
        // }, 0);
		
		
		var vuong =//'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAwElEQVRYR+2YMQ7CMBRDXxnpzGVQr8A5mStGzgVjVUVQCVWoioOXCnd2HPflN7LasZOn20lOEtR9UiEaom4Cbr/MaIhWEuiBY6V2S/YEHoqPOqMn4AZMyiYr7eG9/qx4tAQdAWmTVaDysrJHgm4ca4h+wmmikRl1z1eIhuiLQNMHmQvfPT4hGqKV3XDpo5dK/TdZKd5XtSqqM1oa/v2HkMvSUrwHxUcNqnhbtQlqxQn57egGGqIhaifgNsw9+rdEZ9cZJytGhSigAAAAAElFTkSuQmCC';
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAR0lEQVRYhe3WsQkAIBAEQfvvzZ6MzZdHYQY+9TZ0LQCA245uJPSFN0ZGhNYjQusRofWI0HpEaD0itB4RWo+MhX7xcQYA/nEA3F42dcYrsX8AAAAASUVORK5CYII=';
		var thoi=//'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAA90lEQVRYR+3WSw6CMBRG4Z/lONbtuDpZjo5djuYmNmGA5D5OBySXkYNaPg4Fuugkx3ISpxpK36ku2kXpAvR8vUa7KF2Anm/WGv1Iukl6UeAZUEPeJT1ILA0dyPev5JPCktAtctzyqyQES0H3kGN5IlgCeoTEsFWoB4lgK9AIsozNQjPIEjYDrSAHdsyxej8IGWj1KU5daAZqEbLYFNJOmIVmsGlkFRrBlpAE1IMtIynoERZBktA9LIakoVus/bY9qW33kM1z5an/9662V9eFRM4o6v3QhMfNKBpGeP7QUE+lyJguGqnlGdtFPZUiY7popJZn7GmKfgGo/VQri+t6YgAAAABJRU5ErkJggg==';
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAkElEQVRYhe3UsQ2AMAxE0atZJyWjsP8cUEQnRQhIAlF8EvcHsJ5dGHDOOeec628HkKIRtXYAG8SxRC7ISElsiWRy2Cskk8E+IVk4tgXJwrA9SDYd+wbJpmG/IMsZ6xjOfV8vMmLR5t5ipyJZLzYEyVqxoUhWw0og2R1WCsnOWEkkI1YayRLyM5dGOueccz/pAOWCMGkzYOhyAAAAAElFTkSuQmCC';//
		var tron= //'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAABUUlEQVRYR+3XsS4FQRTG8d8tJXoFb6AQURAPQKnSiUStEpVGoVGJSi0RnUrJAwiFiMIbUOglWjnJXm4E987uFHdkpt2zZ/77nW/Ome0pZPUK4VRBc1eqKloVza1A7nzVo1XRDArMYxZTTa5XPOEhQ+4sk2kDm5jEHZ4bsBks4g1nOO8C3OUwTeMQEzjC7S8gS9jFO/bw0ga4LWhAnuKqgRxl74BdxVYb2LagUcrHBMj+hwTsXGOVUT7uM6YNaHhyDetJO30FX+Ay1bNtQK+x/4cnh/GHZw+wMixw8HkqaLSgEyynbPJD7A22U1pXKmiUfQE7HUGPcZ9S/lTQOAyxoh11Wcl5/i1oMaUv5jCFL4toTwFaTMMP2CJGaIAWcynpw479NW+w2Y/9xfn7ZBr7X5Euo3Tkd1NH6MiJcwdW0KpobgVy56serYrmViB3vmI8+gGO2kQrFvr5hwAAAABJRU5ErkJggg==';
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAABKUlEQVRYhe3WQWrCQBTG8f8pKuYIpa3LIs0VJF6iSsXgostCFWLEA0juUBEvUtAruXjTTWEmMXlJNu8HswnJ44OZ9yZgjDHGmJ5FQALM3ZoCw14T/RMDBfAL5MC3W1v3rADeekvn5MAP8Bh45wk4IsF78YlscVULYNVSFq+c+0L++QAy5SxeMbLddZ2AsVKWoILwmSzzDByUsnhFSCc3dQEGCnW8EnS6dw9MFOp4zZEZ2dQX8K5Qx0sr6BqYKdTxSpDR1NSOlrd+iE4zXYEHhTpBBTJi6hrRwXgC+cE4Nvj+DLwqZSmVIXf3vVJgoxul3Aq5u6tKgWVLWUplyN39EnhnhGz3potAIWOkOS7IjbN2a4d094EOz2QVA2Q2ztya0MEIMsYYY0zQDaUnK0F6UAvVAAAAAElFTkSuQmCC';
		var so_vuong=[];
		var so_tron=[];
		var so_thoi=[];

		for (var j = 0; j < 8; j++)
		{
			var b = document.querySelector('canvas[id=b'+j+']').toDataURL();
			console.log(b);
			if(b==vuong){
				so_vuong.push(j);
			}else if(b==tron){
				so_tron.push(j);
			}else if(b==thoi){
				so_thoi.push(j);
			}
		}
		console.log(so_vuong.length + ' vuong ' + so_tron.length + ' tron ' + so_thoi.length + ' thoi  ');
		if(so_vuong.length+so_tron.length+so_thoi.length != 8) return;
		var lMax = Math.max(so_vuong.length,so_tron.length,so_thoi.length);
		if(so_vuong.length == lMax){
			so_vuong.forEach( s => {
				document.querySelector('canvas[id=b'+s+']').click();
			});
		}
		if(so_tron.length == lMax){
			so_tron.forEach( s => {
				document.querySelector('canvas[id=b'+s+']').click();
			});
		}
		if(so_thoi.length == lMax){
			so_thoi.forEach( s => {
				document.querySelector('canvas[id=b'+s+']').click();
			});
		}
		setTimeout(()=>{document.querySelector('a[id=s]').click();},2000);
		
},5000);

setInterval( () => {
	if(document.querySelector('canvas[id=rc-canvas]') == null) {
		if(document.querySelector('div[id=rc-checkbox]'))
		document.querySelector('div[id=rc-checkbox]').click();
		return;
	}
},5000);