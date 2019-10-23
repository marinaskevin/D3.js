var bars = d3.select("body")
           .selectAll("div")
           .data([24,16,18,12,22,16])
bars.enter().append("div")
            .style("background-color", function(d){ return "rgb(0,"+((255*2)-d*20)+","+(d*20-255)+")"; })
            .style("height", function(d){ return d*20+"px"; });
