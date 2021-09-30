fetch('battles.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    InsightData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
            
function InsightData(data) {
// var mainContainer = document.getElementById("myData");
// for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
//     div.innerHTML = 'Name: ' + data[i].name + ' ' + data[i].year;
//     mainContainer.appendChild(div);
// }
    var countRepeats = {};
    data.forEach(function(obj) {
    if (countRepeats.hasOwnProperty(obj.attacker_king)) {
        countRepeats[obj.attacker_king]++;
    } else {
        countRepeats[obj.attacker_king] = 1;
    }
    });

    console.log(countRepeats);
    var maxRepeats=0;
    var maxRepeatsValue;
    for(var repeated in countRepeats){
        if(countRepeats[repeated]>maxRepeats){
            maxRepeats=countRepeats[repeated];
            maxRepeatsValue=repeated;
            }
            }
            // console.log(maxRepeats);
    console.log(maxRepeatsValue);
    var attacker_x = maxRepeatsValue;
    document.getElementById("attacker").innerHTML = "attacker_king : " +maxRepeatsValue;
    
    var countRepeatsD = {};
    data.forEach(function(obj) {
        if (countRepeatsD.hasOwnProperty(obj.defender_king)) {
            countRepeatsD[obj.defender_king]++;
        } else {
            countRepeatsD[obj.defender_king] = 1;
        }
        });
    
        console.log(countRepeatsD);
        var maxRepeats=0;
        var maxRepeatsValue;
        for(var repeated in countRepeatsD){
            if(countRepeatsD[repeated]>maxRepeats){
                maxRepeats=countRepeatsD[repeated];
                maxRepeatsValue=repeated;
                }
                }
                // console.log(maxRepeats);
        console.log(maxRepeatsValue);
        var defender_x = maxRepeatsValue;
        document.getElementById("defender").innerHTML = "defender_king : " +maxRepeatsValue;

        var countRepeatsR = {};
        data.forEach(function(obj) {
        if (countRepeatsR.hasOwnProperty(obj.region)) {
            countRepeatsR[obj.region]++;
        } else {
            countRepeatsR[obj.region] = 1;
        }
        });
        
        console.log(countRepeatsR);
        var maxRepeats=0;
        var maxRepeatsValue;
        for(var repeated in countRepeatsR){
            if(countRepeatsR[repeated]>maxRepeats){
                maxRepeats=countRepeatsR[repeated];
                maxRepeatsValue=repeated;
                }
                }
                // console.log(maxRepeats);
        console.log(maxRepeatsValue);
        var region_x = maxRepeatsValue;
        document.getElementById("region").innerHTML =  "region: " +maxRepeatsValue;

        var myproj; 
        var myindex;
        data.map(function (proj) {
        if (proj.region == region_x && proj.attacker_king== attacker_x && proj.defender_king==defender_x) {
            myproj = proj;
            myindex = proj.name;
            } 
        });    


        document.getElementById("name").innerHTML =  "name: " +myindex;
        var totalWins = data.filter(function(d) { return d.attacker_outcome === "win"; }).length,
        totalLosses = data.filter(function(d) { return d.attacker_outcome === "loss"; }).length;
    
    document.getElementById("wins").innerText = "win: " +totalWins;
    document.getElementById("loss").innerText = "loss: " +totalLosses;

    const uniquex = [...new Set(data.map(item => item.battle_type))]; // [ 'A', 'B']
    
    console.log(uniquex)
    document.getElementById("btypes").innerText = "battle_type: [" +uniquex +"]";

    min = Math.min.apply(null, data.map(function(item) {
        return item.defender_size;
      })),
      max = Math.max.apply(null, data.map(function(item) {
        return item.defender_size;
      }));
    //   average = Math.average.apply(null, data.map(function(item) {
    //     return item.defender_size;
    //   }));  
    
    //   const sum = Object.values(data).reduce((acc, current) => acc + current.defender_size, 0);

    //   const average = sum / Object.values(data.defender_size).length;

    var sum = data.reduce(function(sum, current) {
        return sum + current.defender_size;
      }, 0)

      var l = Object.keys(data).length;

      average = sum/l;
      console.log(average);  

    console.log('min', min);
    console.log('max', max);
    console.log('average',average);
    document.getElementById("avgs").innerText = "Average Value: " +average;    
    document.getElementById("maxds").innerText = "Minimum value : "+min;  
    document.getElementById("minds").innerText = "Maximum value : "+max;
}


        