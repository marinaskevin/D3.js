// you will need to provide a lot more code, but here are your starting dimensions & two sets of data
var height = 500;
var width = 800;
var margins = {
    left: 40,
    top: 40,
    right: 40,
    bottom: 40
}
var barData = [ // meant for starting image
    {strength:38},
    {strength:13},
    {strength:24},
    {strength:5},
    {strength:48},
    {strength:30},
    {strength:16},
    {strength:43},
    {strength:14},
    {strength:8},
    {strength:22},
    {strength:35}
]
var barData2 = [  // transition to this set of data after 5 seconds
    {strength:13},
    {strength:5},
    {strength:22},
    {strength:16},
    {strength:40},
    {strength:49},
    {strength:27},
    {strength:28},
    {strength:34},
    {strength:19},
    {strength:39},
    {strength:35}
]
// the bar width
var barWidth = Math.floor((width-margins.left-margins.right)/barData.length);
// to wait 5 seconds before the transition starts, use setTimeout(function(){...}, 5000)
setTimeout(function(){
    //
}, 5000)

var xscale = d3.scaleLinear()
                .domain([0,12.5])
                .range([0,width-margins.left-margins.right]);
var yscale = d3.scaleLinear()
                .domain([0,50])
                .range([height-margins.top-margins.bottom,0]);

var xaxis = d3.axisBottom(xscale)
                .ticks(12);
var yaxis = d3.axisLeft(yscale)
                .ticks(10);

var svg = d3.select("#chart").select("svg")
               .attr("width",width)
               .attr("height",height);

svg.append("g")
     .attr("transform","translate("+margins.left+","+margins.top+")")
     .call(yaxis);
svg.append("g")
     .attr("transform","translate("+margins.left+","+(height-margins.bottom)+")")
     .call(xaxis);

var i=0.5;

var bars = d3.select("#chart").select("svg")
               .selectAll("rect")
               .data(barData);
bars.enter().append("rect")
               .attr("width",barWidth)
               .attr("height",function(d){ return yscale(d.strength); } )
               .attr("transform",function(d){ return "translate("+(margins.left+xscale(i++))+","+(height-margins.bottom-yscale(d.strength))+")"; });
