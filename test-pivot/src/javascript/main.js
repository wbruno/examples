(function(window, document, undefined) {
  "use strict";
  /*global document:false */
  var $ = function(selector) {
    return document.querySelectorAll(selector);
  },
    $adcasts = $('.adcast-item'),
    $pagers = $('.pager-item');

  adcast.init({
    adcasts: $adcasts,
    pagers: $pagers,
    pagersClick: true
  });
}(window, document));
