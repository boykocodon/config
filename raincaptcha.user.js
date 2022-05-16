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
		var vuong =//'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAwElEQVRYR+2YMQ7CMBRDXxnpzGVQr8A5mStGzgVjVUVQCVWoioOXCnd2HPflN7LasZOn20lOEtR9UiEaom4Cbr/MaIhWEuiBY6V2S/YEHoqPOqMn4AZMyiYr7eG9/qx4tAQdAWmTVaDysrJHgm4ca4h+wmmikRl1z1eIhuiLQNMHmQvfPT4hGqKV3XDpo5dK/TdZKd5XtSqqM1oa/v2HkMvSUrwHxUcNqnhbtQlqxQn57egGGqIhaifgNsw9+rdEZ9cZJytGhSigAAAAAElFTkSuQmCC';
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAMBJREFUWEftmDEOwjAUQ18Z6cxlUK/AOZkrRs4FY1VFUAlVqIqDlwp3dhz35Tey2rGTp9tJThLUfVIhGqJuAm6/zGiIVhLogWOldkv2BB6KjzqjJ+AGTMomK+3hvf6seLQEHQFpk1Wg8rKyR4JuHGuIfsJpopEZdc9XiIboi0DTB5kL3z0+IRqild1w6aOXSv03WSneV7UqqjNaGv79h5DL0lK8B8VHDap4W7UJasUJ+e3oBhqiIWon4DbMPfq3RGfXGScrRoUooAAAAABJRU5ErkJggg==';
		var thoi=//'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAA90lEQVRYR+3WSw6CMBRG4Z/lONbtuDpZjo5djuYmNmGA5D5OBySXkYNaPg4Fuugkx3ISpxpK36ku2kXpAvR8vUa7KF2Anm/WGv1Iukl6UeAZUEPeJT1ILA0dyPev5JPCktAtctzyqyQES0H3kGN5IlgCeoTEsFWoB4lgK9AIsozNQjPIEjYDrSAHdsyxej8IGWj1KU5daAZqEbLYFNJOmIVmsGlkFRrBlpAE1IMtIynoERZBktA9LIakoVus/bY9qW33kM1z5an/9662V9eFRM4o6v3QhMfNKBpGeP7QUE+lyJguGqnlGdtFPZUiY7popJZn7GmKfgGo/VQri+t6YgAAAABJRU5ErkJggg==';
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAPdJREFUWEft1ksOgjAURuGf5TjW7bg6WY6OXY7mJjZhgOQ+Tgckl5GDWj4OBbroJMdyEqcaSt+pLtpF6QL0fL1GuyhdgJ5v1hr9SLpJelHgGVBD3iU9SCwNHcj3r+STwpLQLXLc8qskBEtB95BjeSJYAnqExLBVqAeJYCvQCLKMzUIzyBI2A60gB3bMsXo/CBlo9SlOXWgGahGy2BTSTpiFZrBpZBUawZaQBNSDLSMp6BEWQZLQPSyGpKFbrP22Palt95DNc+Wp//eutlfXhUTOKOr90ITHzSgaRnj+0FBPpciYLhqp5RnbRT2VImO6aKSWZ+xpin4BqP1UK4vremIAAAAASUVORK5CYII=';//
		var tron= //'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAABUUlEQVRYR+3XsS4FQRTG8d8tJXoFb6AQURAPQKnSiUStEpVGoVGJSi0RnUrJAwiFiMIbUOglWjnJXm4E987uFHdkpt2zZ/77nW/Ome0pZPUK4VRBc1eqKloVza1A7nzVo1XRDArMYxZTTa5XPOEhQ+4sk2kDm5jEHZ4bsBks4g1nOO8C3OUwTeMQEzjC7S8gS9jFO/bw0ga4LWhAnuKqgRxl74BdxVYb2LagUcrHBMj+hwTsXGOVUT7uM6YNaHhyDetJO30FX+Ay1bNtQK+x/4cnh/GHZw+wMixw8HkqaLSgEyynbPJD7A22U1pXKmiUfQE7HUGPcZ9S/lTQOAyxoh11Wcl5/i1oMaUv5jCFL4toTwFaTMMP2CJGaIAWcynpw479NW+w2Y/9xfn7ZBr7X5Euo3Tkd1NH6MiJcwdW0KpobgVy56serYrmViB3vmI8+gGO2kQrFvr5hwAAAABJRU5ErkJggg==';
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAVFJREFUWEft17EuBUEUxvHfLSV6BW+gEFEQD0Cp0olErRKVRqFRiUotEZ1KyQMIhYjCG1DoJVo5yV5uBPfO7hR3ZKbds2f++51vzpntKWT1CuFUQXNXqipaFc2tQO581aNV0QwKzGMWU02uVzzhIUPuLJNpA5uYxB2eG7AZLOINZzjvAtzlME3jEBM4wu0vIEvYxTv28NIGuC1oQJ7iqoEcZe+AXcVWG9i2oFHKxwTI/ocE7FxjlVE+7jOmDWh4cg3rSTt9BV/gMtWzbUCvsf+HJ4fxh2cPsDIscPB5Kmi0oBMsp2zyQ+wNtlNaVypolH0BOx1Bj3GfUv5U0DgMsaIddVnJef4taDGlL+YwhS+LaE8BWkzDD9giRmiAFnMp6cOO/TVvsNmP/cX5+2Qa+1+RLqN05HdTR+jIiXMHVtCqaG4FcuerHq2K5lYgd75iPPoBjtpEKxb6+YcAAAAASUVORK5CYII=';
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
},10000);