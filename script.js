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

function reset(){
  let output = document.getElementById("output");
  let result = document.getElementById("result");
  let build = "";
for(let i = 0; i < data.length; i+=1){
    let sq = data[i];
if(sq.primary_fur_color == null){
  sq.primary_fur_color = ""
}
    build += `<div class="fitted card">
  <h1>ID: ${sq.unique_squirrel_id} </h1> 
  <p>Coordinates: ${sq.x}, ${sq.y}</p>
  <p>Fur color: </p> <p>${sq.primary_fur_color}</p>
              </div>`    
              

  }
  output.innerHTML = build;
  result.innerHTML = ""
}