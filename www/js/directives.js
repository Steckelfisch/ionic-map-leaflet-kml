angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {

      function initialize() {

        var map = new L.Map('map', {center: new L.LatLng(58.4, 43.0), zoom: 11});
        var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        var track = new L.KML("data/KML_Samples.kml", {async: true});

        track.on("loaded", function(e) { map.fitBounds(e.target.getBounds()); });

        map.addLayer(track);
        map.addLayer(osm);
        map.addControl(new L.Control.Layers({}, {'Track':track}));

      }

      console.log('Etat : '+document.readyState);

      if (document.readyState === "complete" || document.readyState === "interactive") {
        initialize();
      } else {
        alert('Erreur de chargement de la carte.');
      }
    }
  }
});
