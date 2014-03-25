(function(){
    "use strict";

    var $prev = document.getElementById("prev"),
        $next = document.getElementById("next"),
        $wrap = document.getElementById("wrap-slider"),
        slide = 1;

    $next.addEventListener("click", function(){
        $wrap.classList.remove("slider-step-1", "slider-step-2", "slider-step-3");
        slide = slide < 3 ? slide + 1 : 1;
        $wrap.classList.add("slider-step-" + slide);
    });
    $prev.addEventListener("click", function(){
        $wrap.classList.remove("slider-step-1", "slider-step-2", "slider-step-3");
        slide = slide > 1 ? slide - 1 : 3;
        $wrap.classList.add("slider-step-" + slide);
    });
}());