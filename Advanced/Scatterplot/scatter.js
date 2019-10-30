var width = 800;
var height = 500;
var margins = {
    left: 30,
    right: 30,
    top: 30,
    bottom: 40
};
var circleData = [
    {
        x: 7,
        y: 4,
        radius: 4
    },
    {
        x: 2,
        y: 8,
        radius: 8
    },
    {
        x: 8,
        y: 2,
        radius: 5
    },
    {
        x: 3,
        y: 3,
        radius: 2
    },
    {
        x: 6,
        y: 8,
        radius: 1
    },
    {
        x: 1,
        y: 1,
        radius: 5
    },
];
var xscale = d3.scaleLinear()
                .domain([0,10])
                .range([0,width-margins.left-margins.right]);
var yscale = d3.scaleLinear()
                .domain([0,10])
                .range([height-margins.top-margins.bottom,0]);
var xaxis = d3.axisBottom(xscale)
                .ticks(10);
var yaxis = d3.axisLeft(yscale)
                .ticks(10);
var svg = d3.select("svg") // eventually we needed to get our svg element selected and definitely
                           // before we append any <g>'s to it
            .attr("width", width)
            .attr("height", height);
// buried in the string concatenation, we'll see .attr("transform", "translate(30,30)")
svg.append("g")
        .attr("transform","translate("+margins.left+","+margins.top+")")
        .call(yaxis);
// for the x-axis, we need it to translate near the bottom. Simple math points to the y coordinate being the height of our container (500) - the bottom margin (40)
svg.append("g")
        .attr("transform","translate("+margins.left+","+(height-margins.bottom)+")")
        .call(xaxis);
var circles = d3.select("#chart").select("svg")
           .selectAll("circle")
           .data(circleData);
circles.enter().append("circle")
           .attr("cx",function(d){ return xscale(d.x); })
           .attr("cy",function(d){ return yscale(d.y); })
           .attr("r",function(d){ return d.radius*10; })
           .attr("transform","translate("+margins.left+","+margins.top+")");
