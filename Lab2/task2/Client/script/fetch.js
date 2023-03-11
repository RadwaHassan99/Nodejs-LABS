document.getElementById('ajx').addEventListener('click',function(){
    fetch('../../Server/data.json')
    .then(res => res.json())
    .then(json => document.getElementById("all").textContent=
    JSON.stringify(json))
})
