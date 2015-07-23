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
			
	var france = new Gallery( myLatlng, map, { 
		title: "france",
		description: "Honeymoon to France, 2015",
		numImages: 8,
	});
	
	new Gallery( new google.maps.LatLng(43.769560, 11.255814), map, { 
		title: "italy",
		description: "Study abroad in college, 2003",
		numImages: 6,
	});
	
	new Gallery( new google.maps.LatLng(47.606209, -122.332071), map, { 
		title: "seattle",
		description: "Visit Nathania with Raelyn, 2007",
		numImages: 2,
	});
	
	new Gallery( new google.maps.LatLng(36.204824, 138.252924), map, { 
		title: "japan",
		description: "Visit Sarah in Japan, 2009",
		numImages: 2,
	});
	
	myvar = getQueryVariable("show");
	if(myvar) {
		france.showPhotos();
	}
	
}
				
google.maps.event.addDomListener(window, 'load', initialize);

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

