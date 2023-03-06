document.getElementById('ajx').addEventListener('click',function(){
    fetch('../../Server/data.json')
    .then(res => res.json())
    .then(json => json.clients)
    .then(function(json){
        for(let i=0;i<json.length;i++){
            document.querySelector("#all").innerHTML += `
            <h5>client${i+1}</h5>
            <p>name: ${json[i].name}</p>
            <p>email: ${json[i].email}</p>
            <p>address: ${json[i].addr}</p>
            <p>phone: ${json[i].mob}</p>
            <p>password: ${json[i].pass}</p>
            <hr> 
            `;
        }
    })

}, {once : true});

