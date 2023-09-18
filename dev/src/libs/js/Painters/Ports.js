export default class Ports {
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
