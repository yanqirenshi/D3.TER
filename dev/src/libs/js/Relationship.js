import Atman from './Atman.js';

import Pool from './Pool.js';

export default class Relationship extends Atman {
    constructor(data, port_from, port_to) {
        super('RELATIONSHIP', data);

        this.from = port_from;
        this.to = port_to;

        port_from._relationship = this;
        port_to._relationship   = this;
    }
    list2pool (list) {
        let pool = new Pool().list2pool (list, (d) => {
            return d;
        });

        pool.indexes ={
            from: {},
            to: {},
        };

        return pool;
    }
    template () {
        return {
            _id: null,
            _class: 'RELATIONSHIP',
            from: null,
            to: null,
        };
    }
    build (core, port_from, port_to) {
        let element = this.template();

        element._id = this.i++;

        element.from = port_from;
        element.to = port_to;

        port_from._relationship = element;
        port_to._relationship   = element;

        element._core = core;
        core._element = element;

        return element;
    }
    /* **************************************************************** *
     *                                                                  *
     * **************************************************************** */
    drawCore (edges) {
        edges
            .attr('x1', (d) => {
                let port = d.from;
                let entity = d.from._entity;

                return port.position.x + entity.position.x;
            })
            .attr('y1', (d) => {
                let port = d.from;
                let entity = d.from._entity;

                return port.position.y + entity.position.y;
            })
            .attr('x2', (d) => {
                let port = d.to;
                let entity = d.to._entity;

                return port.position.x + entity.position.x;
            })
            .attr('y2', (d) => {
                let port = d.to;
                let entity = d.to._entity;

                return port.position.y + entity.position.y;
            })
            .attr('stroke', '#888888')
            .attr('stroke-width', 1);
    }
    draw (place, relationships) {
        let data = relationships.list.filter((edge) => {
            return edge.from._class==='PORT-FROM' && edge.to._class==='PORT-TO';
        });

        let edges = place
            .selectAll('line.connector')
            .data(data, (d) => { return d._id; })
            .enter()
            .append('line')
            .attr('class', 'connector');

        this.drawCore(edges);
    }

}
