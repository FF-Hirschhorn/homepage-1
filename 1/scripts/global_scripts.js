/*
  JS Grundfunktionen | © 2009 by de-drei.com
____________________________________________ */

$(document).ready(function(){

	$.fn.deDreiScripts = function(settings) {
		settings = jQuery.extend( {

      AnimationsZeit: '250' // Durschnittliche Zeit aller Animationen

  	},settings);

    // Animate Navigation on mouseover
    $(".nav_1_n p").css('opacity', '0.0');

    $(".nav_1_n p").hover( function () {
    		$(this).stop().animate({ opacity: '1.0' }, settings.AnimationsZeit);
      },
      function() {
    		$(this).stop().animate({ opacity: '0.0' }, settings.AnimationsZeit);
    	}
    );
    
    // Just starts gallery-scripts, if it's availible
    if ( $("#gallery").length > 0 ) {
      var gallery = $("#gallery").galleriffic("#img_navigation", {
				delay:                3000,
				numThumbs:            15,
    		renderSSControls:     false,
				imageContainerSel:    '#slideshow',
				controlsContainerSel: '#controls',
				titleContainerSel:    '#image-title',
				descContainerSel:     '#image-desc',
				imgdataContainerSel:  '#image-imgdata',
				downloadLinkSel:      '#download-link'
			});

			gallery.onFadeOut = function() {
				$("#details").fadeOut('fast');
        $(".thumbs img").css('opacity', '0.5');
			};

			gallery.onFadeIn = function() {
				$("#details").fadeIn('fast');
        $(".image-wrapper img").reflect({height: 0.18, opacity: 0.5});
        $(".thumbs img").css('opacity', '0.5');
			};

    };
    
    $(".single_download").click().toggle(function() {
      $("#downloads_left").html('');
      var DownloadImg = $(this).find(".single_download_img").html();
      $("#downloads_left").html(DownloadImg);
    }, function() {
      $("#downloads_left").html('');
    });

    $("#start_background img").reflect({height: 0.18, opacity: 0.5});

    // Disable rightclick Context-menue
  	$.extend($.fn, {
  		rightClick: function(handler) {
  			$(this).each( function() {
  				$(this).mousedown( function(e) {
  					var evt = e;
  					$(this).mouseup( function() {
  						$(this).unbind('mouseup');
  						if( evt.button == 2 ) {
  							handler.call( $(this), evt );
  							return false;
  						} else {
  							return true;
  						}
  					});
  				});
  				$(this)[0].oncontextmenu = function() {
  					return false;
  				}
  			});
  			return $(this);
  		},
  		rightMouseDown: function(handler) {
  			$(this).each( function() {
  				$(this).mousedown( function(e) {
  					if( e.button == 2 ) {
  						handler.call( $(this), e );
  						return false;
  					} else {
  						return true;
  					}
  				});
  				$(this)[0].oncontextmenu = function() {
  					return false;
  				}
  			});
  			return $(this);
  		},
  		rightMouseUp: function(handler) {
  			$(this).each( function() {
  				$(this).mouseup( function(e) {
  					if( e.button == 2 ) {
  						handler.call( $(this), e );
  						return false;
  					} else {
  						return true;
  					}
  				});
  				$(this)[0].oncontextmenu = function() {
  					return false;
  				}
  			});
  			return $(this);
  		},
  		noContext: function() {
  			$(this).each( function() {
  				$(this)[0].oncontextmenu = function() {
  					return false;
  				}
  			});
  			return $(this);
  		}
  	});
    $("img, .reflected").noContext();

	};
	
  // Activate deDreiScriptsScripts if HTML is ready
  $("html").deDreiScripts();

});
