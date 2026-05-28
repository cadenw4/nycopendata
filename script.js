let data, output, result;
async function init(){
  let link = "data.json"
  info = await fetch(link);
  data = await info.json();
}

function display(){
    build = ""
    output = document.getElementById("output")
    for(let i = 0; i<data.length; i += 1){
      sq = data[i]
    build += `<div class = "fitted card">`
    }
}
