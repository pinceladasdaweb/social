/*
*
* Social 2.2
* Copyright 2013, Pedro Rogerio (https://github.com/pinceladasdaweb)
* Description: Lazy Loader Social Buttons
* Licensed under the WTFPL licenses (http://www.wtfpl.net/).
*
*/

var Social = {
    init: function () {
        this.fetch();
    },
    getScript: function (url, callback) {
        var head   = document.getElementsByTagName("head")[0], done = false, script = document.createElement("script");
        script.src = url;

        script.onload = script.onreadystatechange = function () {
            if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                done = true;
                if (callback && typeof ("callback") === "function") {
                    callback();
                }
                script.onload = script.onreadystatechange = null; // Handle memory leak in IE
            }
        }

        head.appendChild(script);
        return undefined; // We handle everything using the script element injection
    },
    fetch: function () {
        var self = this;

        if (typeof (twttr) !== 'undefined') {
            twttr.widgets.load();
        } else {
            self.getScript('//platform.twitter.com/widgets.js');
        }

        if (typeof (FB) !== 'undefined') {
            FB.init({ status: true, cookie: true, xfbml: true, oauth: true });
        } else {
            self.getScript("//connect.facebook.net/pt_BR/all.js#xfbml=1", function () {
                FB.init({ status: true, cookie: true, xfbml: true, oauth: true });
            });
        }

        if (typeof (gapi) !== 'undefined') {
            var matches = document.body.querySelectorAll('.g-plusone'), index = 0, length = matches.length;
            while (index += 1 < length) {
                gapi.plusone.go();
            }
        } else {
            self.getScript('//apis.google.com/js/plusone.js');
        }

        if (typeof (IN) !== 'undefined') {
            IN.parse();
        } else {
            self.getScript("//platform.linkedin.com/in.js");
        }
    }
};

Social.init();