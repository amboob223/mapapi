mapboxgl.accessToken = 'pk.eyJ1IjoibW9uazQwNCIsImEiOiJjbG52NHF0amIwaDliMmtzYW1xN2ZuN3U1In0.UKjl4M79UvKOVOEK9eANAg';

// to get the current location, use the navigator API
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

function successLocation(position) {
    console.log(position.coords.longitude);
    console.log(position.coords.latitude);

    setupMap([position.coords.longitude, position.coords.latitude]);
}

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15

    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');



}

function errorLocation(location) {
    setupMap([-2.24, 53.48])
}
