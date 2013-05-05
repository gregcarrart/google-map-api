var myCenter = new google.maps.LatLng(33.95646052534845, -118.32618713378906);

function initialize() {
	var mapProp = {
		center:myCenter,
		zoom: 10,
		mapTypeControlOptions: {
			mapTypeId:[google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp)

	var marker=new google.maps.Marker({
	  position:myCenter,
	  icon:'img/icon.png'
  	});

	var myCity = new google.maps.Circle({
	  center:myCenter,
	  radius:10000,
	  strokeColor:"red",
	  strokeOpacity:0.8,
	  strokeWeight:2,
	  fillColor:"red",
	  fillOpacity:0.4
  	});

  	var infowindow = new google.maps.InfoWindow({
  	  content:"gcd zone"
  	});

  	var styles = [
	    {
	      stylers: [
	        { "hue": "#ffa200" },
	        { "saturation": -100 },
	        { "invert_lightness": false },
	        { lightness: -50 }
	      ]
	    },{
	      featureType: "road.arterial",
    		elementType: "geometry",
    		stylers: [
      		{ hue: "#00ffee" },
      		{ saturation: 50 },
      		{ lightness: 80 }
    	  ]
	    },{
	      featureType: "road",
	      elementType: "labels",
	      stylers: [
	        { visibility: "off" }
	      ]
	    },{
	      featureType: "water",
	      stylers: [
	      	{ hue: "#ff000" },
	      	{ lightness: -100 }
	      ]

	    }


  	];

  	var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

  	marker.setMap(map);
  	myCity.setMap(map); 
  	
  	google.maps.event.addListener(marker, 'click', function() {
  		infowindow.open(map,marker);
  	});
}

google.maps.event.addDomListener(window, 'load', initialize);