// console.log("logic.js is connected to the index.html");


var geojsonURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
// console.log("Geo JSON data loaded");

//  heatmap-style colores 
function getColor(depth) {
    switch (true) {
        case depth > 90:
            return "#FF0000";
        case depth > 70:
            return "#FFA500";
        case depth > 50:
            return "#F8d568";
        case depth > 30:
            return "#FFFF00";
        case depth > 10:
            return "#9acd32";
        default:
            return "#00FF00";
    }
}

//  map
function drawMap(earthquakes) {
    
    // Create the tile layer to be the background the map
    var outdoorsMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "outdoors-v11",
        accessToken: API_KEY
    });

    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v10",
        accessToken: API_KEY
    });

    // Create a baseMaps 
    var baseMaps = {
        "Geography Map": outdoorsMap,
        "Light Map": lightmap
    };

    // overlayMaps to hold the earthquake layer
    var overlayMaps = {
        "Earthquakes": earthquakes
    };
  