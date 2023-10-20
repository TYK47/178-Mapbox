var latitude = 38.90678222783567
var longitude = -76.9139064569358
//38.90678222783567, -76.9139064569358

mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA"
var map = new mapboxgl.Map({
    container: "map",
    center:[longitude, latitude],
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 17
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy: true
        },
        trackerUserLocation: true
    })
)
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
)