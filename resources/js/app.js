function initialize() {

		var myLatlng = new google.maps.LatLng(48.856614,2.352222),
	  mapOptions = {
	    zoom: 2,
	    center: myLatlng,
	    scrollwheel: false,
	    streetViewControl: false,
	    mapTypeControl: false,
	  },
	  styles = [{"featureType":"all","elementType":"all","stylers":[{"weight":"1"}]},{"featureType":"all","elementType":"geometry","stylers":[{"color":"#07a1b3"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"weight":".5"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#038b9e"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#0097a9"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"color":"#03a2b6"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"color":"#04acc0"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"color":"#03a2b6"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#03a2b6"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"weight":"1.00"},{"color":"#04b2c6"}]},{"featureType":"poi.place_of_worship","elementType":"geometry","stylers":[{"color":"#03a2b6"}]},{"featureType":"poi.school","elementType":"geometry","stylers":[{"color":"#03a2b6"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"color":"#03a2b6"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#008b9d"},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#027184"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#03778a"}]}];
	  
/* 	  styles = [{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#07a1b3"}]},{"featureType":"all","elementType":"all","stylers":[{"weight":"1"}]},{"featureType":"all","elementType":"geometry","stylers":[{"color":"#07a1b3"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"weight":".5"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"visibility":"off"},{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#038b9e"},{"weight":0.6}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#0097a9"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"color":"#03a2b6"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"color":"#04acc0"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"color":"#03a2b6"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#03a2b6"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#04b2c6"},{"weight":"1.00"}]},{"featureType":"poi.place_of_worship","elementType":"geometry","stylers":[{"color":"#03a2b6"}]},{"featureType":"poi.school","elementType":"geometry","stylers":[{"color":"#03a2b6"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"color":"#03a2b6"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"color":"#008b9d"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#027184"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#03778a"}]},{"featureType":"administrative.province","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#03778a"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#0a5561"}]}]; */
	
	
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
	
	var galleries = [france, italy, seattle, japan, china];
	
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
	var hash = window.location.hash;
	if(hash) {
		hash = hash.replace("#", "");
		var gallery = getGallery(galleries, hash);
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

// Animate photo fade on scroll
$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $("#photos").scroll( function(){
        /* Check the location of each desired element */
        $('.gallery-img').each( function(i){
            var bottom_of_object = $(this).offset().top + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                var img = $(this);
								TweenMax.to(img, 1, {opacity: 1, transform: "translateY(-5px)", ease: Sine.easeOut});
            }
        }); 
    });
});
