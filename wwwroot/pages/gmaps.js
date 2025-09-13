/*
 Template Name: Upcube - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Google Maps
 */

!function ($) {
  "use strict";

  var GoogleMap = function () { };


  //creates map with markers
  GoogleMap.prototype.createMarkers = function ($container, $counter) {
    var count = $counter
    var lat = parseFloat($('#lat-' + count)[0].innerText) + Math.random()/500;
    var long = $('#long-' + count)[0].innerText;
    const localeDate = new Date();
    var text =  localeDate.toLocaleString();
    var map = new GMaps({
      div: $container,
      lat: lat,
      lng: long
    });

    //sample markers, but you can pass actual marker data as function parameter
    map.addMarker({
      lat: lat,
      lng: long,
      title: text
    });
    return map;
  },
    //init
    GoogleMap.prototype.init = function () {
      var $this = this;
      $('#enter-exit-button').on('click', function () {
        setTimeout(function () {
            var count = $('#map')[0].getAttribute('data-item-count')
            console.log("lat" + count + ":" + $('#lat-' + count)[0].innerText);
            if ($('#lat-' + count)[0].innerText != "") {
              $this.createMarkers('#gmaps-markers-' + count, count);
            }
          }, 400);
      });
    },
    //init
    $.GoogleMap = new GoogleMap, $.GoogleMap.Constructor = GoogleMap
}(window.jQuery),

  //initializing 
  function ($) {
    "use strict";
    $.GoogleMap.init()
  }(window.jQuery);