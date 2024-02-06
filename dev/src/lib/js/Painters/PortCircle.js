import * as d3 from 'd3';

export default class PortCircle {
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
    draw (groups_entity) {
        let ports = groups_entity
            .selectAll('circle.entity-port')
            .data((d)=> {
                return d.ports.items.list;
            })
            .enter()
            .append('circle');

        this.drawPortsCore(ports);
    }
}
