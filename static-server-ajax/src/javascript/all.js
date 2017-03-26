/**
 * @file all.js
 * @author William Bruno <wbrunom@gmail.com>
 * @date 2014-02-20
 */

(function(window, document, undefined){
    "use strict";

    /**
     * Variables
     */
    var $navAs = document.getElementById("nav").getElementsByTagName("a"),
        $content = document.getElementById("content");

    $navAs = [].slice.call($navAs);


    /**
     * Functions
     */
    function getPage (event) {
        var $this = this,
            href = $this.getAttribute("href");
        event.preventDefault();

        XHR.get(href, function(data){
            var json = JSON.parse(data);

            $content.innerHTML = json.content;

            history.pushState(href, json.title, href);
            
            document.title = json.title;
            document.querySelector("meta[name='description']").setAttribute("content", json.description);
        });
    }


    /**
     * Event Listeners
     */
    $navAs.forEach(function($a){
        $a.addEventListener("click", getPage);
    });
    window.addEventListener("popstate", function(e) {

    });


}(window, document));