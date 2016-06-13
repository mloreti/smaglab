$(function() {
  // $(".nav-links li a").click(function(e) {
  //   e.preventDefault();
  //   var dest = $(this).attr('href');
  //   alert(dest);

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

      var bittersMap = (function () {
      var myLatlng = new google.maps.LatLng(47.597467, -122.320709),
          mapCenter = new google.maps.LatLng(47.597467, -122.320709),
          mapCanvas = document.getElementById('map_canvas'),
          mapOptions = {
            center: mapCenter,
            zoom: 13,
            scrollwheel: false,
            draggable: true,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          },
          map = new google.maps.Map(mapCanvas, mapOptions);

      return {
        init: function () {
          map.set('styles', [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]);

          google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map,marker);
          });
        }
      };
    }());

    bittersMap.init();
});
