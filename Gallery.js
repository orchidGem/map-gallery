/**
 * Gallery Travel Map
 * http://www.laura-evans.com
 *
 * 
 * Copyright 2015, Laura Evans
 * http://www.laura-evans.com
 */
 

var galleryWrapper = document.getElementById("gallery"),
		photosWrapper = document.getElementById("photos"),
		galleryTitle = document.getElementById("gallery-title"),
		closeGalleryBtn = document.getElementById("btn-close-gallery");

function Gallery(title, latlng, map, args) {
	this.title = title;
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);	2
}

Gallery.prototype = new google.maps.OverlayView();


// Create marker and attach to map
Gallery.prototype.draw = function() {
	
	var self = this,
			div = this.div;			

	if (!div) {
	
		div = this.div = document.createElement('div');
		div.className = 'marker';
		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		div.style.overflow = 'visible';
		div.style.background = "transparent";
		
		var icon = document.createElement("IMG"),
			title = document.createElement("H2");
			
		icon.setAttribute("src", "marker.png");
		icon.setAttribute("class", "marker-icon");
		title.appendChild(document.createTextNode(self.args.title));
		
		div.appendChild(icon);
		div.appendChild(title)
		
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}
		
		var icon = div.childNodes[0],
			title = div.childNodes[1];
	
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
		
	}
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		div.style.left = (point.x - 10) + 'px';
		div.style.top = (point.y - 20) + 'px';
	}
	
	// Set position of marker title based on position inside window
	if( (point.x) < (window.innerWidth / 2) ) {
		title.style.left = "2px";
		div.windowPosition = "left";
	} else {
		title.style.right = "-36px";
		div.windowPosition = "right";
	}
	
	google.maps.event.addDomListener(div, "mouseenter", function(event) {	

		TweenMax.to(icon, 0.5, {scale: 1, ease:Power1.easeOut });
		
		if(this.windowPosition === "left"){
			TweenMax.to(title, 0.2, {scale: 1, left: "50px", ease:Power1.easeOut });
		} else {
			TweenMax.to(title, 0.2, {scale: 1, right: "10px", ease:Power1.easeOut });
		}

	});
	
	google.maps.event.addDomListener(div, "mouseleave", function(event) {
			TweenMax.to(icon, 0.5, {scale: 0.9, ease:Power1.easeOut });
			if(this.windowPosition === "left"){
				TweenMax.to(title, 0.2, {scale: 0.2, left: "2px", ease:Power1.easeOut });
			} else {
				TweenMax.to(title, 0.2, {scale: 0.2, right: "-36px", ease:Power1.easeOut });
			}
			
		});
		
		google.maps.event.addDomListener(div, "click", function(event) {
			self.showPhotos();
		});
	
};


// Show Photo Gallery
Gallery.prototype.showPhotos = function() {

	galleryTitle.innerHTML = this.args.title;
	console.log(this.args.title);
	window.location.hash = this.args.title;
	
	var tl = new TimelineMax();
	tl.to(galleryWrapper, 0.8, {width: "100%", left: 0, display: "block", opacity: 1, ease:Power1.easeOut })
	.to([photosWrapper, closeGalleryBtn], 0.5, {opacity: 1, display: "block"})
	;
	
	//Append images to Gallery Wrapper
	if(this.args.numImages) {
		for(var i = 1; i <= this.args.numImages; i++) {
		    var img = document.createElement("IMG");
		    img.setAttribute("src", "photos/" + this.args.title + "0" + i + ".jpg");
		    img.setAttribute("class", "gallery-img");
		    photosWrapper.appendChild(img);			    
		}
	}
	
	photosWrapper.scrollTop = 0; // Reset scroll
	photosWrapper.onscroll = function (e) {  
		console.log("scrolling");
	} 
};

// Remove Photo Gallery
function removeGallery() {
	history.pushState("", document.title, window.location.pathname + window.location.search);
	while (photosWrapper.childNodes.length > 3) {
	    photosWrapper.removeChild(photosWrapper.lastChild);
	}		
	var tl = new TimelineMax();
	tl.to([photosWrapper, closeGalleryBtn], 0.5, {opacity: 0, display: "none"})
	.to(galleryWrapper, 0.5, {width: "0", left: "50%", display: "none", opacity: 0, ease:Power1.easeOut })
	;
}

closeGalleryBtn.addEventListener("click", function(e){
	e.preventDefault();
	removeGallery();
});

Gallery.prototype.getPosition = function() {
	return this.latlng;	
};



