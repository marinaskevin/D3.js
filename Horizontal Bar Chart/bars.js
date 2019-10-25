var bars = d3.select("body")
           .selectAll("div")
           .data([15,32,10,8,60,24]);

bars.enter().append("div")
           .style("border","2px solid black")
           .style("background-color", function(d){ return "rgb(0,"+d*4+",0)"; })
           .style("width",function(d){ return d+"%"; })
           .text(function(d){ return d; });
