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
	
	mapContainer = document.getElementById('map-canvas');
	map = new google.maps.Map(mapContainer, mapOptions);
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
	
	// Tiles Loaded Event Handler - show markers
	google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
    
    var header = document.getElementsByTagName('header'),
	    	footer = document.getElementsByTagName('footer'),
	    	markers = document.getElementsByClassName('marker'),
	    	tl = new TimelineMax();
	  tl  
	  .to(markers, 0, {opacity: 1})	
	  .to(mapContainer, 0.5, {opacity: 1}, "begin")
	  .fromTo(header, 2, {y: "-100"}, {y: "0", opacity: 1, scale: 1, ease:Expo.easeInOut}, "begin")
    .fromTo(footer, 2, {bottom: "-100px"}, {bottom: "10px", opacity: 1, ease:Expo.easeInOut}, "begin")
    .staggerFrom(markers, 0.6, {y:"-800px", ease: Elastic.easeOut.config(1, 1), onComplete: galleryHash(galleries) }, 0.15)
    ;	
    
});

document.getElementById("btn-about").addEventListener("click", showAbout);
document.getElementById("btn-close-about").addEventListener("click", hideAbout);
	
} // End Initialize
				
google.maps.event.addDomListener(window, 'load', initialize);

function galleryHash(galleries){
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
}


function getGallery(array, searchTerm){
	for (var i = 0; i < array.length; i++) {
		if (array[i].title == searchTerm) {
			return array[i];
		}
	}
}

function showAbout(){
	var header = document.getElementsByTagName('header'),
    	footer = document.getElementsByTagName('footer'),
    	markers = document.getElementsByClassName('marker'),
    	about = document.getElementById("about"),
    	tl = new TimelineMax();
    	
		  tl  
		  .to([mapContainer, header, footer], 0.5, {left: "320px"}, "begin")
		  .to(about, 0.5, {left: 0}, "begin")
	    ;
}

function hideAbout(){
console.log("close about");
	var header = document.getElementsByTagName('header'),
    	footer = document.getElementsByTagName('footer'),
    	markers = document.getElementsByClassName('marker'),
    	about = document.getElementById("about"),
    	tl = new TimelineMax();
    	
		  tl  
		  .to([mapContainer, header, footer], 0.5, {left: "0px"}, "begin")
		  .to(about, 0.5, {left: "-320px"}, "begin")
	    ;
}
