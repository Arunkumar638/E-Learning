function initialize(){
    var myLatlng = new google.maps.LatLng(9.866687,78.200243);
    var myOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
     map = new google.maps.Map(document.getElementById("map"), myOptions);
     var marker = new google.maps.Marker({
         position: myLatlng, 
         map: map,
     title:"Fast marker"
    });
} 
google.maps.event.addDomListener(window,'load', initialize);