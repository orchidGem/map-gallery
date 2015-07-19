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
		closeGalleryBtn = document.getElementById("btn-close-gallery");

function Gallery(latlng, map, args) {
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);	
}

Gallery.prototype = new google.maps.OverlayView();


// Create marker and attach to map
Gallery.prototype.draw = function() {
	
	var self = this,
			div = this.div,
			imgPopup = document.createElement('img'),
			imgThumb = "photos/" + self.args.title + "01.jpg";
			
	imgPopup.setAttribute("src", imgThumb );
	imgPopup.setAttribute("width", "150");
	imgPopup.setAttribute("height", "100");
	
	if (!div) {
	
		div = this.div = document.createElement('div');
		div.className = 'marker';
		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		div.style.overflow = 'visible';
		div.style.width = '25px';
		div.style.height = '21px';
		div.style.background = 'url(marker.png) no-repeat';
		
		
		div.appendChild(imgPopup);
		
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}
		
		google.maps.event.addDomListener(div, "click", function(event) {
			self.showPhotos();
		});
		
		google.maps.event.addDomListener(div, "mouseenter", function(event) {
			console.log("hovering over " + self.args.title);
			popup = this.children;
			
			TweenMax.to(popup, 0.8, 
				{
					display: "block",
					scale: 0.8,
					transformOrigin: "50% 100%",
					ease:Bounce.easeOut,
					bottom: "120px",
				}
			);
		});
		
		google.maps.event.addDomListener(div, "mouseleave", function(event) {
			imgPopup = this.children;
			TweenMax.to(imgPopup, 0.3, { scale: 0 });
		});
		
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
		
	}
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		div.style.left = (point.x - 10) + 'px';
		div.style.top = (point.y - 20) + 'px';
	}
};


// Show Photo Gallery
Gallery.prototype.showPhotos = function() {
	var self = this;
	console.log("show " + this.args.title + " gallery");
	galleryWrapper.style.display = "block";
	
	//Append images to Gallery Wrapper
	if(this.args.numImages) {
		for(var i = 1; i < this.args.numImages; i++) {
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
	console.log("remove gallery");
	while (photosWrapper.hasChildNodes()) {
	    photosWrapper.removeChild(photosWrapper.lastChild);
	}	
	galleryWrapper.style.display = "none";
}

closeGalleryBtn.addEventListener("click", function(e){
	e.preventDefault();
	removeGallery();
});

Gallery.prototype.getPosition = function() {
	return this.latlng;	
};



