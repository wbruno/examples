/**
* @file slideshow.js
* @author William Bruno
* @date 2013-05-25
*/
var adcast = (function(w) {
  "use strict";
  /*jslint plusplus: true, browser: true */
  var adcast = {
    timer : 0,
    atual : 0,
    max : 1,
    delay : 4000,
    config : function(config) {
      adcast.$adcastWrap = config.adcasts[0].parentNode;
      adcast.$adcasts = config.adcasts;
      adcast.$pagers = config.pagers;
      adcast.onChange = config.onChange;
      adcast.pagersClick = config.pagersClick || false;

      adcast.max = adcast.$adcasts.length;
    },
    each : function($elements, cb) {
      var i = $elements.length;
      while (i--) {
          cb($elements[i]);
      }
    },
    active : function() {
      var i = adcast.atual;
      adcast.$adcasts[i].classList.add('is-active');
      adcast.$pagers[i].classList.add('is-active');
      adcast.$adcastWrap.className = 'adcast-item-' + i;

      if (adcast.onChange) {
        adcast.onChange(i);
      }
    },
    none : function() {
      adcast.each(adcast.$adcasts, function($adcast) {
          $adcast.classList.remove('is-active');
      });
      adcast.each(adcast.$pagers, function($pager) {
          $pager.classList.remove('is-active');
      });
    },
    next : function() {
      var i = adcast.atual;

      adcast.none();
      adcast.active();

      adcast.atual = i < adcast.max - 1 ? parseInt(i, 10) + 1 : 0;
    },
    auto : function() {
      adcast.timer = w.setInterval(function() {
          adcast.next();
      }, adcast.delay);
    },
    events : function() {
      var $adcast = adcast;
      adcast.each(adcast.$pagers, function($element) {
          if (adcast.pagersClick) {
            $element.addEventListener('click', function() {
                var $this = this,
                  i = $this.getAttribute('data-adcast');

                w.clearInterval(adcast.timer);
                w.clearTimeout(adcast.tot);
                adcast.tot = w.setTimeout(adcast.auto, adcast.delay / 2);

                adcast.atual = i < adcast.max ? parseInt(i, 10) : 0;
                adcast.next();
            });
          } else {
            $element.addEventListener('mouseover', function() {
                var $this = this,
                  i = $this.getAttribute('data-adcast');

                adcast.atual = i;
                w.clearInterval(adcast.timer);
                $adcast.none();
                $adcast.active();
            });
            $element.addEventListener('mouseout', function() {
                var $this = this,
                  i = $this.getAttribute('data-adcast');

                adcast.atual = i < adcast.max - 1 ? parseInt(i, 10) + 1 : 0;
                adcast.auto();
            });
          }
        });
    },
    init : function(config) {
      adcast.config(config);

      if (!adcast.max || adcast.max === 1) {
        return;
      }

      adcast.next();
      adcast.auto();
      adcast.events();
    }
  };

  return {
    init : adcast.init
  };

}(window));
