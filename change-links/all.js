jQuery(document).ready(function(){
    var $btn = jQuery("#btn"),
        $text = jQuery("#text");

    $btn.on("click", function(){
        var text = $text.val();

        jQuery.ajax({
            url: "process.php",
            type: "POST",
            data: "text=" + text,
            success: function(data){
                $text.val(data);
            }
        });
    });
});