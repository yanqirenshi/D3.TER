import * as d3 from 'd3';

export default class PortCardinality {
    constructor (parent) {
        this._parent = parent;
    }
    rectum () {
        return this._parent.rectum();
    }
    style () {
        return this.rectum().style();
    }
    /* **************************************************************** *
     *  Draw Line (port to entity)
     * **************************************************************** */
    drawLine (g) {
        const lines = g.selectAll('line')
              .data((d) => d.ports.items.list,
                    (d) => d.id());

        console.log();
        console.log();

        const draw = (selection)=> {
            selection
            .attr("x1", d => d.linePosition().from.x)
            .attr("y1", d => d.linePosition().from.y)
            .attr("x2", d => d.linePosition().to.x)
            .attr("y2", d => d.linePosition().to.y)
            .attr("stroke-width", this.style().port.stroke.width)
            .attr("stroke", this.style().port.stroke.color);
        };

        // delete
        lines.exit().remove();

        // update
        draw(lines);

        // add
        const add_targets =
              lines
              .enter()
              .append("line");

        draw(add_targets);
    }
    drawCardinalityOne (g) {
        const filter = (ports=[]) => {
            return ports.filter(port => {
                return port.cardinality()===1;
            });
        };
        const cardinalities = g.selectAll('line.cardinality')
              .data((d) => filter(d.ports.items.list),
                    (d) => d.id());

        const draw = (selection)=> {
            selection.attr("x1", d => d.cardinalityPosition().from.x)
                .attr("y1", d => d.cardinalityPosition().from.y)
                .attr("x2", d => d.cardinalityPosition().to.x)
                .attr("y2", d => d.cardinalityPosition().to.y)
                .attr("stroke-width", this.style().port.stroke.width)
                .attr("stroke", this.style().port.stroke.color);
        };

        // delete
        cardinalities.exit().remove();

        // update
        draw(cardinalities);

        // add
        const add_targets = cardinalities
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

        const cardinalities = g.selectAll('path.cardinality')
              .data((d) => filter(d.ports.items.list),
                    (d) => d.id());

        const line = d3.line()
              .x(function(d) {return d[0];})
              .y(function(d) {return d[1];});

        const draw = (selection)=> {
            selection
                .attr('d', d => line(d._cardinality))
                .attr("fill", 'none')
                .attr("stroke-width", this.style().port.stroke.width)
                .attr("stroke", this.style().port.stroke.color);
        };

        // delete
        cardinalities.exit().remove();

        // update
        draw(cardinalities);

        // add
        const add_targets = cardinalities
              .enter()
              .append('path')
              .classed("cardinality", true);

        draw(add_targets);
    }
    draw (g) {
        this.drawLine(g);
        this.drawCardinalityOne(g);
        this.drawCardinalityThree(g);
    }
}
