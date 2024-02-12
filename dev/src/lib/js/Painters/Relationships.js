export default class Relationships {
    constructor(parent) {
        this._parent = parent;
    }
    callbacks () {
        return this._parent.callbacks;
    }
    // public
    drawRelationshipsCore (edges) {
        edges
            .attr('x1', (d)=> {
                let port = d.from;
                let entity = d.from._owner;

                return port.position().x + entity.position.x;
            })
            .attr('y1', (d)=> {
                let port = d.from;
                let entity = d.from._owner;

                return port.position().y + entity.position.y;
            })
            .attr('x2', (d)=> {
                let port = d.to;
                let entity = d.to._owner;

                return port.position().x + entity.position.x;
            })
            .attr('y2', (d)=> {
                let port = d.to;
                let entity = d.to._owner;

                return port.position().y + entity.position.y;
            })
            .attr('stroke', '#888888')
            .attr('stroke-width', 1);
    }
    drawRelationships (place, relationships) {
        const callbacks = this.callbacks();

        let data = relationships.list.filter((edge)=> {
            return edge.from._class==='PORT-FROM' && edge.to._class==='PORT-TO';
        });

        let edges = place
            .selectAll('line.connector')
            .data(data, (d)=> d._id)
            .enter()
            .append('line')
            .on("click", (event, d)=> {
                let func = callbacks.relationship.click;

                if (func) func(d);
            })
            .attr('class', 'connector');

        this.drawRelationshipsCore(edges);
    }
}
