/**
 * @file main.js
 * @author William Bruno <wbrunom@gmail.com>
 * @date 2014-02-21
 */

(function(window, document, undefined){
    "use strict";
    /* jslint browser: true */
    /* global XHR */

    Array.prototype.sortOn = function(key){
        this.sort(function(a, b){
            if(a[key] < b[key]){
                return -1;
            }else if(a[key] > b[key]){
                return 1;
            }
            return 0;
        });
    };

    /**
     * Variables
     */
    var $title = document.getElementById("title"),
        $list = document.getElementById("names-list");


    function drawNamesList (url) {
        XHR.get(url, function (data) {
            var json = JSON.parse(data);

            if (json.data !== undefined) {
                var title = json.data.title,
                    table = json.data.table,
                    lis = "";
                //console.table(table);

                table.sortOn("name");
                table.forEach( function (each) {
                    lis += "<li><a href=\"mailto:" + each.email + "\">" + each.name + "</a></li>";
                });

                $title.innerHTML = title;
                $list.innerHTML = lis;
            } else {
                $title.innerHTML = json.error;
            }
        });
    }

    //drawNamesList("../proxy.php");
    drawNamesList("../frontend-test-success.json");
    //drawNamesList("../frontend-test-failure.json");

    
}(window, document));