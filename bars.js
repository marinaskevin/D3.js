var bars = d3.select("#chart")
    .selectAll("div")
    .data([4, 8, 15, 16, 20, 12])
bars.enter().append("div")
    .text(function(d){ return d; })
    .style("height", function(d){ return d*20+"px" })
// function for generating random length (betweeen 0 and 20) array of random values (between 0 and 20)
function randomsGenerator(){
    var nums = [];
    var size = Math.floor(Math.random()*20);
    for (var i = 0; i < size; i++){
        nums.push(Math.floor(Math.random()*20));
    }
    buildChart(nums);
}
function buildChart(newdata){
    var bars = d3.select("#chart")
        .selectAll("div")
        .data(newdata)
        .text(function(d){ return d; })
        .style("height", function(d){ return d*20+"px" })
    bars.enter().append("div")
        .text(function(d){ return d; })
        .style("height", function(d){ return d*20+"px" })
        .style("background-color", "lightblue");
    bars.exit().remove();
}
