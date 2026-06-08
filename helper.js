// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// showMap() displays the map for a location [lat, lon] in the right panel
function showMap(lat, lon){
  //alert(location);
  let location = [lat, lon];
  //Line below needed to create the map object once.
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);// [lat, lon], zoom

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map
}

// card() accepts JSON of one complaint and returns a card for the complaint
function card( info ){ 

  let location = [info.x, info.y];
  //Some complaints may not have latitudes and longitudes
  //only create a button if these values exists
  let mapButton = "";
  if(info.x && info.y){
    mapButton = `<input type="button" onclick="showMap( ${location} )" value="Map">`
  }

    build += `<div class="fitted card">
                  <h1>ID: ${sq.unique_squirrel_id} </h1> 
                  <p>Coordinates: ${sq.x}, ${sq.y}</p>
                  <p>${sq.primary_fur_color}</p>
                  <h3>${sq.age}</h3>
                  <p>${sq.specific_location}</p>
                  <p>${sq.other_activities}</p>
                  ${mapButton}
              </div>`    
              ;
  return build;
}