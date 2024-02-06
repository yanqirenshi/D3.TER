import * as d3 from 'd3';

export default class PortOptionality {
    drawOptionalityOne (g) {
        const filter = (ports=[]) => {
            return ports.filter(d => d.optionality===1);
        };

        const optionalities = g.selectAll('line.optionality')
              .data((d) => { return filter(d._ports); },
                    (d) => { return d._id; });

        optionalities
            .enter()
            .each((d) => d.line_optionality = this.calOneLine(d, 22))
            .append('line')
            .classed( "optionality", true )
            .attr("x1", d => d.line_optionality.from.x)
            .attr("y1", d => d.line_optionality.from.y)
            .attr("x2", d => d.line_optionality.to.x)
            .attr("y2", d => d.line_optionality.to.y)
            .attr("stroke-width",3)
            .attr("stroke","#a3a3a2");
    }
    drawOptionalityZero (g) {
        const filter = (ports=[]) => {
            return ports.filter(d => d.optionality===0);
        };

        const optionalities = g.selectAll('circle.optionality')
              .data((d) => { return filter(d._ports); },
                    (d) => { return d._id; });

        optionalities
            .each((d) => d.line_circle = this.calCircle(d))
            .attr("cx", d => d.line_circle.x)
            .attr("cy", d => d.line_circle.y)
            .attr("r",5)
            .attr("fill","#fefefe")
            .attr("stroke-width",3)
            .attr("stroke","#a3a3a2");

        optionalities
            .enter()
            .each((d) => d.line_circle = this.calCircle(d))
            .append("circle")
            .classed( "optionality", true )
            .attr("cx", d => d.line_circle.x)
            .attr("cy", d => d.line_circle.y)
            .attr("r",5)
            .attr("fill","#fefefe")
            .attr("stroke-width",3)
            .attr("stroke","#a3a3a2");
    }
    draw (g) {
        // E1のインスタンス1つに対応する、E2のインスタンスの最小数
        this.drawOptionalityOne(g);
        this.drawOptionalityZero(g);
    }
}
