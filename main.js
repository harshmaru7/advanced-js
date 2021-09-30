// document.getElementById('button1').addEventListener('click',loadData);

// function loadData(){
//     fetch("./battles.json")
// .then(res => res.json())
// .then(data => console.log(data))
    
// }

// fetch("battles.json")
//   .then(response => response.json())
//   .then(json => console.log(json));

fetch("./battles.json")
.then(response => {
return response.json();
})
.then(data => {console.log(data)
        document.querySelector("#debug").innerText=data
});

