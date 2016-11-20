;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		$('.slider-intro .slides').slick({
			autoplay: true,
			autoplaySpeed: 6000,
			arrows: true,
			dots: false,
		});

		$('.gallery .gallery-background').each(function(){
			var introImageSource = $(this).find('img').attr('src')
			$(this).css({'background-image' : 'url('+introImageSource+')', }) 
		});

		$(".popup-button").magnificPopup({type:'image'});

		$('.nav-trigger').on('click', function (event) {
		    $(this).toggleClass('active');  
		    
		    $('.nav-holder').toggleClass('active')
		    
		    event.preventDefault();
		});
	});

		$(function() {
			var map;

			function initialize() {
			
			// Create an array of styles.
			var styles = [
			    {
			        "featureType": "all",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "saturation": 0
			            },
			            {
			                "color": "#c1c1c1"
			            },
			            {
			                "lightness": 40
			            }
			        ]
			    },
			    {
			        "featureType": "all",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            },
			            {
			                "color": "#c1c1c1"
			            },
			            {
			                "lightness": 0
			            }
			        ]
			    },
			    {
			        "featureType": "all",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#c1c1c1"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#c1c1c1"
			            },
			            {
			                "lightness": 17
			            },
			            {
			                "weight": 0
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f1f1f1"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#c1c1c1"
			            },
			            {
			                "lightness": 21
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 0
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 29
			            },
			            {
			                "weight": 0
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 0
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 0
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#c1c1c1"
			            },
			            {
			                "lightness": 0
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#dfdfdf"
			            },
			            {
			                "lightness": 17
			            }
			        ]
			    }
			];

			var styledMap = new google.maps.StyledMapType(styles,
	    	{name: "Styled Map"});

	    	var isDraggable = $(document).width() > 480 ? true : false;

			var map_element = $('#googlemap');
			var bounds = new google.maps.LatLngBounds();
			var myLatLng = new google.maps.LatLng(map_element.data('lat'),map_element.data('lng'));
			var mapOptions = {
				zoom: 16,
				center: myLatLng,
				disableDefaultUI: true,
				mapTypeControl: false,
				draggable: isDraggable,
				scrollwheel: true,
				zoomControl: false,
				zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL
				},
				panControl:true
			};

			bounds.extend(myLatLng);

			map = new google.maps.Map(document.getElementById('googlemap'),
			mapOptions);

			var image = 'css/images/marker.png';

			var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image
			});
			 
			google.maps.event.addDomListener(window, "resize", function() {
			    google.maps.event.trigger(map, "resize");
			    map.setCenter( bounds.getCenter() );
			});
						  

			map.mapTypes.set('map_style', styledMap);
			map.setMapTypeId('map_style');
			}

			if ($('.section-map').length > 0) {
			google.maps.event.addDomListener(window, 'load', initialize);
			}
		});
})(jQuery, window, document);
