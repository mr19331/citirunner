
let map;
function initMap() {
	map = new google.maps.Map( document.getElementById( 'map' ), {
		center: {
			lat: 40.7625587,
			lng: -73.9733541
		},
		zoom: 14
    });


 let marker = new google.maps.Marker({
	position: {
		lat: 40.7625587,
		lng: -73.9733541
	},
	map: map,
	title: '<h2>Your Hotel Location'</h2>
});
let infoWindow = new google.maps.InfoWindow ({
    content: 'Vista Gym Club NY'
});
marker.addListener('click',function(){
  infoWindow.open( map,marker);  
});
}