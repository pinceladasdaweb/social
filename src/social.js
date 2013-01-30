/*
*
* Social 1.0
* Copyright 2013, Pedro Rogerio (https://github.com/pinceladasdaweb)
* Description: Lazy Loader Social Buttons
* Licensed under the WTFPL licenses (http://www.wtfpl.net/).
*
*/

var Social = {
	init: function() {
		if (typeof (twttr) != 'undefined') {
			twttr.widgets.load();	
		} else {
			$.getScript('//platform.twitter.com/widgets.js');	
		}
		
		if (typeof (FB) != 'undefined') {
			FB.init({ status: true, cookie: true, xfbml: true });
		} else {
			$.getScript("//connect.facebook.net/pt_BR/all.js#xfbml=1", function () {
				FB.init({status:true, cookie:true, xfbml:true, oauth:true});
			});
		}
		
		if (typeof (gapi) != 'undefined') {
			$(".g-plusone").each(function () {
				gapi.plusone.render($(this).get(0));
			});
		} else {
			$.getScript('//apis.google.com/js/plusone.js');	
		}
	}	
}

Social.init();