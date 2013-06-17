/*
*
* Social 2.0
* Copyright 2013, Pedro Rogerio (https://github.com/pinceladasdaweb)
* Description: Lazy Loader Social Buttons
* Licensed under the WTFPL licenses (http://www.wtfpl.net/).
*
*/

var Social = {
    init: function() {
        this.fetch();
    },
    getScript: function(url, callback) {
        var head = document.getElementsByTagName("head")[0], done = false;
        var script = document.createElement("script");
        script.src = url;

        script.onload = script.onreadystatechange = function(){
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                if(callback) {
                    callback();
                }
            }
        }

        head.appendChild(script);
    },
    fetch: function() {
        var self = this;

        if(typeof (twttr) != 'undefined') {
            twttr.widgets.load();
        } else {
            self.getScript('//platform.twitter.com/widgets.js');
        }

        if (typeof (FB) != 'undefined') {
            FB.init({ status: true, cookie: true, xfbml: true });
        } else {
            self.getScript("//connect.facebook.net/pt_BR/all.js#xfbml=1", function () {
                FB.init({status:true, cookie:true, xfbml:true, oauth:true});
            });
        }

        if (typeof (gapi) != 'undefined') {
            var matches = document.body.querySelectorAll('.g-plusone');
            matches.each(function() {
                gapi.plusone.render(this);
            });
        } else {
            self.getScript('//apis.google.com/js/plusone.js');
        }
    }
}

Social.init();