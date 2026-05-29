let data, output, result;
async function init(){
  let link = "data.json"
  info = await fetch(link);
  data = await info.json();
}

/*function display(){
    build = ""
    output = document.getElementById("output")
    result = document.getElementById("result")
    for(let i = 0; i<data.length; i += 1){
      sq = data[i]
    build += `<div class = "fitted card">
    <h2>${sq.x}</h2>`
    }
    output.innerHTML = build;
    result.innerHTML = ""
}
*/

function  display(){
  let output = document.getElementById("output");
  let result = document.getElementById("result");
  let build = "";
for(let i = 0; i < data.length; i+=1){
    let sq = data[i];
if(sq.primary_fur_color == null){
  sq.primary_fur_color = ""
}
if(sq.age == null){
  sq.age = ""
}

if(sq.specific_location == null){
  sq.specific_location = ""
}

if(sq.other_activities == null){
  sq.other_activities = ""
}

    build += `<div class="fitted card">
  <h1>ID: ${sq.unique_squirrel_id} </h1> 
  <p>Coordinates: ${sq.x}, ${sq.y}</p>
  <p>${sq.primary_fur_color}</p>
  <h3>${sq.age}</h3>
  <p>${sq.specific_location}</p>
  <p>${sq.other_activities}</p>
              </div>`    
              

  }
  output.innerHTML = build;
  result.innerHTML = ""
}