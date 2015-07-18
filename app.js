function initialize() {

		var myLatlng = new google.maps.LatLng(48.856614,2.352222),
	  mapOptions = {
	    zoom: 3,
	    center: myLatlng,
	    scrollwheel: false,
	    streetViewControl: false,
	    mapTypeControl: false,
	  },
	  styles = [
	  {
	    "stylers": [
	      { "hue": "#00ffe6" },
	      { "saturation": 32 },
	      { "lightness": -56 },
	      { "gamma": 0.7 }
	    ]
	  },{
	    "featureType": "administrative",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      { "saturation": 74 },
	      { "hue": "#00fff7" },
	      { "visibility": "on" },
	      { "lightness": 41 }
	    ]
	  },{
	    "featureType": "road.arterial",
	    "elementType": "geometry.stroke",
	    "stylers": [
	      { "hue": "#005eff" },
	      { "visibility": "on" },
	      { "lightness": 52 },
	      { "saturation": 58 }
	    ]
	  }
	];
	
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	map.setOptions({styles: styles});
	
	overlay = new CustomMarker( myLatlng, map, { marker_id: 'my-marker' } );
	overlay2 = new CustomMarker( new google.maps.LatLng(43.769560, 11.255814), map, { marker_id: 'my-marker2' } );

}
				
google.maps.event.addDomListener(window, 'load', initialize);