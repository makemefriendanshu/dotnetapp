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
  GoogleMap.prototype.createMarkersIn = function ($container) {
    var lat = $('#lat-in')[0].innerText;
    var long = $('#long-in')[0].innerText;
    var text = "Enter";
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

    GoogleMap.prototype.createMarkersOut = function ($container) {
      var lat = $('#lat-out')[0].innerText;
      var long = $('#long-out')[0].innerText;
      var text = "Exit";
      var map = new GMaps({
        div: $container,
        lat: lat,
        lng: long
      });

      //sample markers, but you can pass actual marker data as function parameter
      map.addMarker({
        lat: parseFloat(lat) + 0.001,
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
          if ($('#lat-in')[0].innerText != "") {
            console.log("lat:" + $('#lat-in')[0].innerText);
            $this.createMarkersIn('#gmaps-markers-in');
          }
        }, 100);

        setTimeout(function () {
          if ($('#lat-out')[0].innerText != "") {
            console.log("lat:" + $('#lat-out')[0].innerText);
            $this.createMarkersOut('#gmaps-markers-out');
          }
        }, 100);

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