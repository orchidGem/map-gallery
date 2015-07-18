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

Gallery.prototype.draw = function() {
	
	var self = this,
			div = this.div;
	
	if (!div) {
	
		div = this.div = document.createElement('div');
		
		div.className = 'marker';
		
		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		div.style.overflow = 'visible';
		div.style.width = '25px';
		div.style.height = '25px';
		div.style.borderRadius = '25px';
		div.style.background = 'white';

		
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}
		
		
		google.maps.event.addDomListener(div, "click", function(event) {
			self.showPhotos();
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



Gallery.prototype.showPhotos = function() {

	var self = this;

	console.log("show " + this.args.title + " gallery");

	// Show Gallery Wrapper
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
};

Gallery.prototype.getPosition = function() {
	return this.latlng;	
};

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



