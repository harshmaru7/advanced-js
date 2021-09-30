
// fetch('https://api.github.com/search/repositories?q=harsh')
// .then(response => response.json())
// .then(data => console.log(data));


fetch('https://api.github.com/search/repositories?q=harsh')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    InsightData(data);
    })
    .catch(function (err) {
    console.log('error: ' + err);
});

function InsightData(data){
    // var firstN = 5;
    // // var o={a:7, b:8, c:9};
    // var result = {};
    // for (var index=0; index < firstN; index++) {
    //   var key = Object.keys(data)[index];
    //   result[key] = data[key];
    // }

    // var obj = data;
    // var result = obj[Object[0]];

	// var last10 = data.filter(function(el, index) {
    //     return index >= data.length - 10;
    //   });
    // console(last10); 
    // console.log(data);
    // function InsightData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
            div.innerHTML = 'Name: ' + data[i].id;
           mainContainer.appendChild(div);
    }

}
