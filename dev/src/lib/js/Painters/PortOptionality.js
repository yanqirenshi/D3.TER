import * as d3 from 'd3';

export default class PortOptionality {
    constructor (parent) {
        this._parent = parent;
    }
    rectum () {
        return this._parent.rectum();
    }
    style () {
        return this.rectum().style();
    }
    selections (g, selector, filter) {
        return g.selectAll(selector)
              .data((d) => filter(d.ports.items.list),
                    (d) => d.id());
    }
    drawOptionalityOne (g) {
        const filter = (ports=[])=> ports.filter(d => d.optionality()===1);

        const selector = 'line.optionality';
        const optionalities = this.selections(g, selector, filter);

        const draw = (selection)=> {
            selection
                .attr("x1", d => d.optionalityPosition().from.x)
                .attr("y1", d => d.optionalityPosition().from.y)
                .attr("x2", d => d.optionalityPosition().to.x)
                .attr("y2", d => d.optionalityPosition().to.y)
                .attr("stroke-width", this.style().port.stroke.width)
                .attr("stroke", this.style().port.stroke.color);
        };

        // delete
        optionalities.exit().remove();

        // update
        draw(optionalities);

        // add
        const add_taregts = optionalities
              .enter()
              .append('line')
              .classed( "optionality", true );

        draw(add_taregts);
    }
    drawOptionalityZero (g) {
        const filter = (ports=[]) => {
            return ports.filter(d => d.optionality()===0);
        };

        const selector = 'circle.optionality';
        const optionalities = this.selections(g, selector, filter);

        const draw = (selection)=> {
            selection
                .attr("cx", d => d.optionalityPosition().x)
                .attr("cy", d => d.optionalityPosition().y)
                .attr("r", 5)
                .attr("fill","#fefefe")
                .attr("stroke-width", this.style().port.stroke.width)
                .attr("stroke", this.style().port.stroke.color);
        };

        // delete
        optionalities.exit().remove();

        // update
        draw(optionalities);

        // add
        const add_taregts = optionalities
              .enter()
              .append("circle")
              .classed("optionality", true);
        draw(add_taregts);
    }
    draw (g) {
        this.drawOptionalityOne(g);
        this.drawOptionalityZero(g);
    }
}
