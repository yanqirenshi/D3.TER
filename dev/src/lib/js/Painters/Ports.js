import * as d3 from 'd3';

export default class Ports {
    /* **************************************************************** *
     *  Draw
     * **************************************************************** */
    drawLine (g) {
        const lines = g.selectAll('line')
              .data((d) => { return d._ports ? d._ports : []; },
                    (d) => { return d._id; });

        // delete
        lines.exit().remove();

        // update
        lines
            .each((d, i) => {
                const line = this.calLinePoints(d);

                d.position = line.to;
                d.line = line;
            })
            .attr("x1", d => d.line.from.x)
            .attr("y1", d => d.line.from.y)
            .attr("x2", d => d.line.to.x)
            .attr("y2", d => d.line.to.y)
            .attr("stroke-width",3)
            .attr("stroke","#a3a3a2");

        // add
        lines
            .enter()
            .each((d, i) => {
                const line = this.calLinePoints(d);

                d.position = line.to;
                d.line = line;
            })
            .append("line")
            .attr("x1", d => d.line.from.x)
            .attr("y1", d => d.line.from.y)
            .attr("x2", d => d.line.to.x)
            .attr("y2", d => d.line.to.y)
            .attr("stroke-width",3)
            .attr("stroke","#a3a3a2");
    }
    drawCardinalityOne (g) {
        const filter = (ports=[]) => {
            return ports.filter(d => {
                return d.cardinality===1;
            });
        };

        const optionalities = g.selectAll('line.cardinality')
              .data((d) => { return filter(d._ports); },
                    (d) => { return d._id; });

        optionalities
            .attr("x1", d => d.line_cardinality.from.x)
            .attr("y1", d => d.line_cardinality.from.y)
            .attr("x2", d => d.line_cardinality.to.x)
            .attr("y2", d => d.line_cardinality.to.y)
            .attr("stroke-width",3)
            .attr("stroke","#a3a3a2");

        optionalities
            .enter()
            .each((d) => d.line_cardinality = this.calOneLine(d, 11))
            .append('line')
            .classed( "cardinality", true )
            .attr("x1", d => d.line_cardinality.from.x)
            .attr("y1", d => d.line_cardinality.from.y)
            .attr("x2", d => d.line_cardinality.to.x)
            .attr("y2", d => d.line_cardinality.to.y)
            .attr("stroke-width",3)
            .attr("stroke","#a3a3a2");
    }
    drawCardinalityThree (g) {
        const filter = (ports=[]) => {
            return ports.filter(d => {
                return d.cardinality===3;
            });
        };

        const optionalities = g.selectAll('path.cardinality')
              .data((d) => { return filter(d._ports); },
                    (d) => { return d._id; });

        const line = d3.line()
              .x(function(d) {return d[0];})
              .y(function(d) {return d[1];});

        optionalities
            .each((d) => d.line_cardinality_three = this.calThreeLine(d, 11))
            .attr('d', d => line(d.line_cardinality_three))
            .attr("stroke-width",3)
            .attr("stroke","#a3a3a2");

        optionalities
            .enter()
            .each((d) => d.line_cardinality_three = this.calThreeLine(d, 11))
            .append('path')
            .classed( "cardinality", true )
            .attr('d', d => line(d.line_cardinality_three))
            .attr("fill", 'none')
            .attr("stroke-width",3)
            .attr("stroke","#a3a3a2");
    }
    drawCardinality (g) {
        // E1のインスタンス1つに対応する、E2のインスタンスの最大数
        this.drawCardinalityOne(g);
        this.drawCardinalityThree(g);
    }
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
    drawOptionality (g) {
        // E1のインスタンス1つに対応する、E2のインスタンスの最小数
        this.drawOptionalityOne(g);
        this.drawOptionalityZero(g);
    }
    // draw (g) {
    //     this.drawLine(g);
    //     this.drawCardinality(g);
    //     this.drawOptionality(g);
    // }
    /* **************************************************************** *
     *  Old
     * **************************************************************** */
    // protected
    drawPortsCore (ports) {
        ports
            .attr('class', 'entity-port')
            .attr('cx', (d)=> {
                return d.position.x;
            })
            .attr('cy', (d)=> {
                return d.position.y;
            })
            .attr('r', 4)
            .attr('fill', '#fff')
            .attr('stroke', '#000')
            .attr('stroke-width', 0.5)
            .attr('degree', (d)=> {
                return d._owner._core.position || 0;
            })
            .attr('port-id', (d)=> {
                return d._id;
            });
    }
    // public
    drawPorts (groups) {
        let ports = groups
            .selectAll('circle.entity-port')
            .data((d)=> {
                return d.ports.items.list;
            })
            .enter()
            .append('circle');

        this.drawPortsCore(ports);
    }
}
