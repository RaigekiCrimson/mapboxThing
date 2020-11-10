mapboxgl.accessToken = 'pk.eyJ1IjoicmFpZ2VraWNyaW1zb24iLCJhIjoiY2toY2xxaHgwMDF5ajJ3dDl3ZGFrNXcxYiJ9.dbSPkYsu8ilovfkzHCg0BA'

// Get current location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-80.84, 35.22])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 16
    })

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');
}