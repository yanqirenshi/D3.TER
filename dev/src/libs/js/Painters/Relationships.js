export default class Relationships {
    // public
    drawRelationshipsCore (edges) {
        edges
            .attr('x1', (d)=> {
                let port = d.from;
                let entity = d.from._entity;

                return port.position.x + entity.position.x;
            })
            .attr('y1', (d)=> {
                let port = d.from;
                let entity = d.from._entity;

                return port.position.y + entity.position.y;
            })
            .attr('x2', (d)=> {
                let port = d.to;
                let entity = d.to._entity;

                return port.position.x + entity.position.x;
            })
            .attr('y2', (d)=> {
                let port = d.to;
                let entity = d.to._entity;

                return port.position.y + entity.position.y;
            })
            .attr('stroke', '#888888')
            .attr('stroke-width', 1);
    }
    drawRelationships (place, relationships) {
        let data = relationships.list.filter((edge)=> {
            return edge.from._class==='PORT-FROM' && edge.to._class==='PORT-TO';
        });

        let edges = place
            .selectAll('line.connector')
            .data(data, (d)=> d._id)
            .enter()
            .append('line')
            .attr('class', 'connector');

        this.drawRelationshipsCore(edges);
    }
}
