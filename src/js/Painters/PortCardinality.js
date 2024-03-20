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
              .data((d) => d.ports.items.list,
                    (d) => d.id());

        // delete
        lines.exit().remove();

        // update
        lines
            .attr("x1", d => d.linePosition().from.x)
            .attr("y1", d => d.linePosition().from.y)
            .attr("x2", d => d.linePosition().to.x)
            .attr("y2", d => d.linePosition().to.y)
            .attr("stroke-width", 1)
            .attr("stroke","#a3a3a2");

        // add
        lines
            .enter()
            .append("line")
            .attr("x1", d => d.linePosition().from.x)
            .attr("y1", d => d.linePosition().from.y)
            .attr("x2", d => d.linePosition().to.x)
            .attr("y2", d => d.linePosition().to.y)
            .attr("stroke-width", 1)
            .attr("stroke","#a3a3a2");
    }
    drawCardinalityOne (g) {
        const filter = (ports=[]) => {
            return ports.filter(port => {
                return port.cardinality()===1;
            });
        };
        const optionalities = g.selectAll('line.cardinality')
              .data((d) => filter(d.ports.items.list),
                    (d) => d.id());

        const draw = (selection)=> {
            selection.attr("x1", d => d.cardinalityPosition().from.x)
                .attr("y1", d => d.cardinalityPosition().from.y)
                .attr("x2", d => d.cardinalityPosition().to.x)
                .attr("y2", d => d.cardinalityPosition().to.y)
                .attr("stroke-width", 1)
                .attr("stroke","#a3a3a2");
        };

        // update
        draw(optionalities);

        // add
        const add_targets = optionalities
              .enter()
              .append('line')
              .classed("cardinality", true);

        draw(add_targets);
    }
    drawCardinalityThree (g) {
        const filter = (ports=[]) => {
            return ports.filter(port => {
                return port.cardinality()===3;
            });
        };

        const optionalities = g.selectAll('path.cardinality')
              .data((d) => filter(d.ports.items.list),
                    (d) => d.id());

        const line = d3.line()
              .x(function(d) {return d[0];})
              .y(function(d) {return d[1];});

        const draw = (selection)=> {
            selection
                .attr('d', d => line(d._cardinality))
                .attr("fill", 'none')
                .attr("stroke-width", 1)
                .attr("stroke","#a3a3a2");
        };

        // update
        draw(optionalities);

        // add
        const add_targets = optionalities
              .enter()
              .append('path')
              .classed( "cardinality", true );

        draw(add_targets);
    }
    draw (g) {
        this.drawLine(g);
        this.drawCardinalityOne(g);
        this.drawCardinalityThree(g);
    }
}
