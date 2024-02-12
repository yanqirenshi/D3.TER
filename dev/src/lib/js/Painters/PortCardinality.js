import * as d3 from 'd3';

export default class PortCardinality {
    calLinePoints (port) {
        const table = port._column_instance._table;
        const rect = {
            position: {
                x: table.x,
                y: table.y,
            },
            size: {
                w: table.w,
                h: table.h,
            }
        };

        const geometry = this.geometry;
        const four_side_lines = geometry.getFourSideLines(rect);
        const line_port = geometry.getPortLine(port, rect);

        const cross_point = geometry.getCrossPoint(four_side_lines, line_port);

        const len = 33 + 4;
        const to_point = cross_point.point;
        let from_point;
        if (cross_point.target==='top') {
            from_point = {
                x: to_point.x,
                y: to_point.y + len,
            };
        } else if (cross_point.target==='right') {
            from_point = {
                x: to_point.x - len,
                y: to_point.y,
            };
        } else if (cross_point.target==='bottom') {
            from_point = {
                x: to_point.x,
                y: to_point.y - len,
            };
        } else if (cross_point.target==='left') {
            from_point = {
                x: to_point.x + len,
                y: to_point.y,
            };
        }

        return {
            from: from_point,
            to: to_point,
        };
    }
    calOneLine (d, distance) {
        const r = 11;

        const line = d._relationship;

        if (line.from.position.x===line.to.position.x) {
            // 縦
            if (line.from.position.y < line.to.position.y) { // (2)
                return {
                    from: { x:line.from.position.x + r, y:line.from.position.y + distance },
                    to:   { x:line.from.position.x - r, y:line.from.position.y + distance },
                };
            } else if (line.from.position.y > line.to.position.y) { // (1)
                return {
                    from: { x:line.from.position.x + r, y:line.from.position.y - distance },
                    to:   { x:line.from.position.x - r, y:line.from.position.y - distance },
                };
            }
        } else if (line.from.position.y===line.to.position.y) {
            // 横
            if (line.from.position.x < line.to.position.x) { // (2)
                return {
                    from: { x:line.from.position.x + distance, y:line.from.position.y + r },
                    to:   { x:line.from.position.x + distance, y:line.from.position.y - r },
                };
            } else if (line.from.position.x > line.to.position.x) { // (1)
                return {
                    from: { x:line.from.position.x - distance, y:line.from.position.y + r },
                    to:   { x:line.from.position.x - distance, y:line.from.position.y - r },
                };
            }
        }

        return {
            from: { x:0, y:0 },
            to:   { x:0, y:0 },
        };
    };
    /* **************************************************************** *
     *  Draw Line (port to entity)
     * **************************************************************** */
    drawLine (g) {
        const lines = g.selectAll('line')
              .data(
                  // (d) => { return d._ports ? d._ports : []; },
                  (d) => d._id,
              );

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
            return ports.filter(port => {
                return port._core.cardinality===1;
            });
        };

        const optionalities = g.selectAll('line.cardinality')
              .data((d) => filter(d.ports.items.list),
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
            .each((d) => {
                d.line_cardinality = this.calOneLine(d, 11);
            })
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
    draw (g) {
        // E1のインスタンス1つに対応する、E2のインスタンスの最大数
        // this.drawLine(g);
        this.drawCardinalityOne(g);
        this.drawCardinalityThree(g);
    }
}
