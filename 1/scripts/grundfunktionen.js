var ie = false;
var nn = false;
var ns5 = false;

// Browserabfrage
if ( navigator.appName.indexOf("Microsoft Internet Explorer") != -1 ){
        ie = true;
}else if ( navigator.appName.indexOf("Netscape") != -1 ){
	if (navigator.appVersion.substring(0,1) == "5"){
		ns5 = true;
        }else{
        	nn = true;
	}
}

// Liefert aktuelle Fensterbreite
function get_window_width(){
	if ( ie ){
		return document.body.clientWidth;	
	}else{
		return window.innerWidth;
	}
}

// Liefert aktuelle Fensterhoehe
function get_window_height(){
	if ( ie )	{
		return document.body.clientHeight;	
	}else{
		return window.innerHeight;
	}
}

// Blendet Layer ein
function show ( layername ){
        if ( ie  )        {
                document.all[layername].style.visibility = "visible";
        }else if ( nn ){
                document[layername].visibility = "show";
        }else if ( ns5 ){
                window.document.getElementById(layername).style.visibility="visible";
        }
}


// Blendet Layer aus
function hide ( layername ){
        if ( ie  ){
                document.all[layername].style.visibility = "hidden";
        }else if ( nn ){
                document[layername].visibility = "hide";
        }else if ( ns5 ){
                window.document.getElementById(layername).style.visibility="hidden";
        }
}

// Layer bewegen
function move_to ( layername, px, py ){
        if ( ie ){
                document.all[layername].style.left = px;
                document.all[layername].style.top = py;
        }else if ( nn ){
                document[layername].left = px;
                document[layername].top = py;
        }else if ( ns5 ){
                window.document.getElementById(layername).style.left = px;
                window.document.getElementById(layername).style.top = py;
        }
}
function move_y ( layername,  py ){
        if ( ie ){
				document.all[layername].style.top = py;
        }else if ( nn ){
                document[layername].top = py;
        }else if ( ns5 ){
                window.document.getElementById(layername).style.top = py;
        }
}

function move_x ( layername,  px ){
        if ( ie ){
		document.all[layername].style.left = px;
        }else if ( nn ){
                document[layername].left = px;
        }else if ( ns5 ){
                window.document.getElementById(layername).style.left = px;
        }
}


// Liefert X-Koordinate des Layers; Aufruf: var x = get_left ( "meinLayer" );
function get_left ( layername ){
        if ( ie )
                return document.all[layername].style.pixelLeft;
        else if ( nn )
                return document[layername].left;
        else if ( ns5 )
                return parseInt(window.document.getElementById(layername).style.left);
        return false;
}

// Liefert Y-Koordinate des Layers; Aufruf: var y = get_top ( "meinLayer" );
function get_top ( layername ){
        if ( ie )
                return document.all[layername].style.pixelTop;
        else if ( nn )
                return document[layername].top;
        else if ( ns5 )
                return parseInt(window.document.getElementById(layername).style.top);
        return false;
}

// Liefert Breite des Layers; Aufruf: var breite = get_width ( "meinLayer" );
function get_width ( layername ){
        if ( ie )
                return document.all[layername].clientWidth;
        else if ( nn )
                return document[layername].document.width;
        else if ( ns5 )
                return window.document.getElementById(layername).offsetWidth;
        return false;
}

// Liefert Hoehe des Layers; Aufruf: var hoehe = get_height ( "meinLayer" );
function get_height ( layername ){
        if ( ie )
                return document.all[layername].clientHeight;
        else if ( nn )
                return document[layername].document.height;
        else if ( ns5 )
                return window.document.getElementById(layername).offsetHeight;
        return false;
}
// Layerinhalt ändern
function write_layer ( layername, inhalt ){
        if ( ie ){
                document.all[layername].innerHTML = inhalt;
        }else if ( nn ){
                document[layername].document.open();
                document[layername].document.write ( inhalt );
                document[layername].document.close();
        }else if ( ns5 ){
                window.document.getElementById(layername).innerHTML = inhalt;
        }
}

function get_layer_inhalt (layername){
        var inhalt;
		if ( ie ){
                inhalt=window.document.getElementById(layername).innerHTML;
        }else if ( nn ){
               inhalt=document[layername].document.open();               
        }else if ( ns5 ){
               inhalt=window.document.getElementById(layername).innerHTML;
        }
		return inhalt;
}
// Austausch eines Bildes in einem Layer; Aufruf: change_layer_image ( "meinLayer", "Doofesbild", "../images/coolesbild.gif" );
function change_layer_image ( layername, bildnahme, sorce ){
        if ( ie ){
                document.all[bildnahme].src = sorce;
        }else if ( nn ){
                document[layername].document.images[bildnahme].src = sorce;
        }else if ( ns5 ){
                window.document.getElementById(bildnahme).src = sorce;
        }
}

// Austausch eines Bildes
function change_image (  bildnahme, sorce ){
        if ( ie ){
                document.all[bildnahme].src = sorce;
        }else if ( nn ){
                document.images[bildnahme].src = sorce;
        }else if ( ns5 ){
                window.document.getElementById(bildnahme).src = sorce;
        }
}


// Laden einer HTML-Seite in einen Frame
function change_frame ( whichframe, source ){
		parent.frames[whichframe].location.href = source;
}


// Öffnen und zentrieren eines Popup-Windows; Aufruf : open_Window('../flash/flashversion.htm','NewWindow','700','400','width=700,height=400');
function open_Window (theURL,winName,winWidth,winHeight,features ){
  		fenster=window.open(theURL,winName,features );
		fenster.moveTo(((screen.width/2)-(winWidth/2)),((screen.height/2)-(winHeight/2)-50));
		fenster.focus();
}

// Layer dynamisch erzeugen
function create_layer ( layername, content ){
	if ( ie ){
		var str = "<div id='" + layername + "' style='position:absolute;visibility:visible;'>";	
		str += content;
		str += "</div>";
		document.body.insertAdjacentHTML ( "beforeEnd", str );
		return document.all[layername].style;
	}else if ( nn ){
		var myLayer = new Layer ( 300 );
		myLayer.name = layername;
		myLayer.document.open();
		myLayer.document.write ( content );
		myLayer.document.close();
		myLayer.visibility = "show";
		return myLayer;
	}
}

function colorate ( layername,  colorwert ){
        if ( ie ){
		document.all[layername].style.background = colorwert;
        }else if ( nn ){
                document[layername].background = colorwert;
        }else if ( ns5 ){
                window.document.getElementById(layername).style.background = "#"+colorwert;
        }
}

//***************************************************************************
// Mauskoordinaten abfragen

		// Event abfangen
		if ( ie ){	
			document.onmousemove = getpos_ie;	
		}else if ( nn || ns5 ){
			window.captureEvents ( Event.MOUSEMOVE );
			window.onmousemove = getpos_nn;
		}
		
       	// Koordinaten je nach Browser abfragen und an react() weiterleiten
		function getpos_ie(){
			react ( window.event.x, window.event.y );
		}
		
		function getpos_nn ( e ){
			react ( e.pageX, e.pageY );		
		}
var globMx;
var globMy;
		// Hier kommen die Werte an und können verwendet werden	
		function react ( mx, my ){
			globMx=mx;
			globMy=my; 
		}
		
//******************************************************************************
// Tastatur abfragen

                // Eventabfrage
                if ( ie ){
                        document.onkeypress = key_ie;
                        document.onkeyup = keyup_ie;
                }else if ( nn || ns5 ){
                        window.captureEvents ( Event.KEYPRESS|Event.KEYUP);
                    	window.onkeypress = key_nn;
                        window.onkeyup = keyup_nn;
                }
		// keycode bei keyDown je nach Browser abfragen und an react_to_key() weiterleiten
		function key_ie(){
                        react_to_key ( window.event.keyCode );
                }
                
                function key_nn ( e ){
                        react_to_key ( e.which );
                }
                
		// keycode bei keyUp je nach Browser abfragen und an stop_key() weiterleiten
                function keyup_ie(){
                        stop_key ( window.event.keyCode );
                }
                
                function keyup_nn ( e ){
                        stop_key ( e.which );
                }
                
		// Hier kommen die Werte an und können verwendet werden
                function react_to_key ( theCode ){
                        switch ( theCode ){
                                //case 97: machwas();
                                 //         break;       
                        }
                }
                
                function stop_key ( theCode ){
                        switch ( theCode ){
                                //case 97: machwas();
                                 //         break;        
                        }
                }
//**********************************************************************
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//**********************************************************************
function email(name,domain,tld,link) {

    if (link) {
        var link = "<a href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;"+name+"&#64;"+domain+"&#46;"+tld+"' title='e-Mail an "+link+" verfassen'>"+link+"</a>";
    } else {
        var link = "<a href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;"+name+"&#64;"+domain+"&#46;"+tld+"' title='e-Mail an "+name+"&#64;"+domain+"&#46;"+tld+" verfassen'>"+name+"&#64;"+domain+"&#46;"+tld+"</a>";
    }
    
    document.write(link);

}
