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
			
	var france = new Gallery( "france", myLatlng, map, { 
		title: "france",
		description: "Honeymoon to France, 2015",
		numImages: 8,
	});
	
	var italy = new Gallery("italy", new google.maps.LatLng(43.769560, 11.255814), map, { 
		title: "italy",
		description: "Study abroad in college, 2003",
		numImages: 6,
	});
	
	var seattle = new Gallery("seattle", new google.maps.LatLng(47.606209, -122.332071), map, { 
		title: "seattle",
		description: "Visit Nathania with Raelyn, 2007",
		numImages: 2,
	});
	
	var japan = new Gallery("japan", new google.maps.LatLng(36.204824, 138.252924), map, { 
		title: "japan",
		description: "Visit Sarah in Japan, 2009",
		numImages: 2,
	});
	
	var china = new Gallery("china", new google.maps.LatLng(39.904211, 116.407395), map, { 
		title: "china",
		description: "Highschool trip",
		numImages: 10,
	});	
	
	var galleries = [france, italy, seattle, japan, china]
	
	// Check for hash tag in URL
	var galleryHash = window.location.hash;
	if(galleryHash) {
		galleryHash = galleryHash.replace("#", "");
		var gallery = getGallery(galleries, galleryHash);
		if(gallery) {
			gallery.showPhotos();
		}
	} else {
		console.log("show main page");
	}
	
	google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
    console.log("map loaded");
    var header = document.getElementsByTagName('header');
    TweenMax.to(header, 1.5, {opacity: 1, scale: 1, ease:Power2.easeOut});
});
	
} // End Initialize
				
google.maps.event.addDomListener(window, 'load', initialize);




function getGallery(array, searchTerm){
	for (var i = 0; i < array.length; i++) {
		if (array[i].title == searchTerm) {
			return array[i];
		}
	}
}
