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

