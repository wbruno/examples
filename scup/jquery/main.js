/**
 * @file main.js
 * @author William Bruno <wbrunom@gmail.com>
 * @date 2014-02-21
 */

(function(jQuery){
    "use strict";
    /* jslint browser: true */
    /* global jQuery, console */

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
    var $title = jQuery("#title"),
        $list = jQuery("#names-list");


    function drawNamesList (url) {
        jQuery.ajax({
            type: "GET",
            url: url,
            contentType: "application/json",
            success: function(json) {
                if (json.data !== undefined) {
                    var title = json.data.title,
                        table = json.data.table,
                        lis = "",
                        i = 0,
                        max = table.length;

                    table.sortOn("name");
                    for ( ;i < max; i++) {
                        lis += "<li><a href=\"mailto:" + table[i].email + "\">" + table[i].name + "</a></li>";
                    }

                    $title.html(title);
                    $list.html(lis);
                } else {
                    $title.html(json.error);
                }
            },
            error: function(e) {
               console.log(e);
            }
        });
    }


    //drawNamesList("../proxy.php");
    //drawNamesList("../frontend-test-success.json");
    drawNamesList("../frontend-test-failure.json");


}(jQuery));