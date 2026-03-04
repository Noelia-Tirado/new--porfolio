let options = { 
    enableHighAccurancy: true,
    timeout: 5000,
    maximumAge: 0
}

//--------Para acceder a la geolocalización------

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    )
} else{
    alert("Los servicios de geolocalización no están disponibles")
}


//------Si todo va bien da la posición-------


function success(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map',  
        {center:[latitude, longitude],
        zoom: 10
    })

    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Mi openStreetMap'}).addTo(map)

    //-----Definimos los iconos--------


    let inicio = L.icon({
    iconUrl:'./assets/imgs/logo.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [-3, -20]
})

    let final = L.icon({
    iconUrl:'./assets/imgs/logo.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [-3, -20]
})


    
    //----Calculamos ruta----
    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(43.254917, -5.778434)
        ],

        language: 'es',
        createMarker: function(i, wp, nWps){
            switch(i){
                case 0:
                    return L.marker(wp.latLng,{icon: inicio, draggable:true}).bindPopup("Tu ubicación");

                case nWps-1:
                     return L.marker(wp.latLng,{icon: final, draggable:true}).bindPopup("C. Luis Braille, 2. Mieres - Asturias");
            }
        }

    }).addTo(map)

    
}

//------Función por si hay un error-------

function error(){
    let map = L.map('map', {
    center: [43.254917, -5.778434],
    zoom: 15})

      L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Mi openStreetMap'}).addTo(map)
}



