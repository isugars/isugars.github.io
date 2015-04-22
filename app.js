(function() {
	"use strict";
    
	var main = function() {
			var url='http://www.telize.com/geoip?callback=?';
            $.getJSON(url, function(json){
                var $ip = $('<p>');
                $ip.append(json.ip);
                var $appTable=$('<table>');
                for (var prop in json) {
                    var $item = $('<tr>');
                    var $itemProp = $('<td>').text(prop);
                    var $itemVal = $('<td>').text(json[prop]);
                    switch (json[prop]){
                     case json.country: 
                            $item.append($itemProp);
                            $item.append($itemVal);
                            $appTable.append($item);
                            break;
                     case json.region: 
                            $item.append($itemProp);
                            $item.append($itemVal);
                            $appTable.append($item);
                            break;
                     case json.city:
                            $item.append($itemProp);
                            $item.append($itemVal);
                            $appTable.append($item);
                            break;
                     case json.latitude:
                            $item.append($itemProp);
                            $item.append($itemVal);
                            $appTable.append($item);
                            break;
                     case json.longitude:
                            $item.append($itemProp);
                            $item.append($itemVal);
                            $appTable.append($item);
                            break;
                    }
			    }
                $ip.addClass("rainbow");
                $('main').append($ip);
                $('main').append($appTable);
                
                var mapDelta=.02;
                var swlat=parseFloat(json.latitude)-mapDelta;
                var swlon=parseFloat(json.longitude)-mapDelta;
                var nelat=parseFloat(json.latitude)+mapDelta;
                var nelon=parseFloat(json.longitude)+mapDelta;
                
                var myRequest = new panoramio.PhotoRequest({
                'rect': {'sw': {'lat': swlat, 'lng': swlon}, 'ne': {'lat': nelat, 'lng': nelon}}
                });
               var myOptions = {
               'width': 950,
               'height': 200,
               'columns': 9,
               'croppedPhotos': true,
                };
               var widget = new panoramio.PhotoListWidget('wapiblock', myRequest, myOptions);
                widget.setPosition(0);
                                          
            });
        
        };
	$(document).ready(main);
}());