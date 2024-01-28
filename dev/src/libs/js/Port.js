import Atman from './Atman.js';

import Geometry from './Geometry.js';

export default class Port extends Atman {
    constructor(type, entity, relatihonship_data) {
        super(type==='from' ? 'PORT-FROM' : 'PORT-TO', relatihonship_data);

        this._id = relatihonship_data.id + '_' + entity._id; // Idenrifier-Instance

        this._owner = entity;

        this._type = type;

        this._core = relatihonship_data[type];

        this.position = relatihonship_data.position || { x:0, y:0 };

        this.addPort2Entity(entity);

        this._entity  = null;

        this.geometry = new Geometry();
    }
    /* **************************************************************** *
     *  Data manegement
     * **************************************************************** */
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

        if (d.line.from.x===d.line.to.x) {
            // 縦
            if (d.line.from.y < d.line.to.y) { // (2)
                return {
                    from: { x:d.line.from.x + r, y:d.line.from.y + distance },
                    to:   { x:d.line.from.x - r, y:d.line.from.y + distance },
                };
            } else if (d.line.from.y > d.line.to.y) { // (1)
                return {
                    from: { x:d.line.from.x + r, y:d.line.from.y - distance },
                    to:   { x:d.line.from.x - r, y:d.line.from.y - distance },
                };
            }
        } else if (d.line.from.y===d.line.to.y) {
            // 横
            if (d.line.from.x < d.line.to.x) { // (2)
                return {
                    from: { x:d.line.from.x + distance, y:d.line.from.y + r },
                    to:   { x:d.line.from.x + distance, y:d.line.from.y - r },
                };
            } else if (d.line.from.x > d.line.to.x) { // (1)
                return {
                    from: { x:d.line.from.x - distance, y:d.line.from.y + r },
                    to:   { x:d.line.from.x - distance, y:d.line.from.y - r },
                };
            }
        }

        return {
            from: { x:0, y:0 },
            to:   { x:0, y:0 },
        };
    };
    calThreeLine (d, distance) {
        if (d.line.from.x===d.line.to.x) {
            // 縦
            if (d.line.from.y < d.line.to.y) {
                return [
                    [d.line.from.x - distance, d.line.from.y],
                    [d.line.from.x,            d.line.from.y + distance],
                    [d.line.from.x + distance, d.line.from.y],
                ];
            } else if (d.line.from.y > d.line.to.y) {
                return [
                    [d.line.from.x - distance, d.line.from.y],
                    [d.line.from.x,            d.line.from.y - distance],
                    [d.line.from.x + distance, d.line.from.y],
                ];
            }
        } else if (d.line.from.y===d.line.to.y) {
            // 横
            if (d.line.from.x < d.line.to.x) {
                return [
                    [d.line.from.x,            d.line.from.y - distance],
                    [d.line.from.x + distance, d.line.from.y],
                    [d.line.from.x,            d.line.from.y + distance],
                ];
            } else if (d.line.from.x > d.line.to.x) {
                return [
                    [d.line.from.x,            d.line.from.y - distance],
                    [d.line.from.x - distance, d.line.from.y],
                    [d.line.from.x,            d.line.from.y + distance],
                ];
            }
        }

        return {
            from: { x:0, y:0 },
            to:   { x:0, y:0 },
        };
    };
    calCircle (d) {
        const distance = 22;

        if (d.line.from.x===d.line.to.x) {
            // 縦
            if (d.line.from.y < d.line.to.y) { // (2)
                return {
                    x:d.line.from.x,
                    y:d.line.from.y + distance,
                };
            } else if (d.line.from.y > d.line.to.y) { // (1)
                return {
                    x:d.line.from.x,
                    y:d.line.from.y - distance,
                };
            }
        } else if (d.line.from.y===d.line.to.y) {
            // 横
            if (d.line.from.x < d.line.to.x) { // (2)
                return {
                    x:d.line.from.x + distance,
                    y:d.line.from.y
                };
            } else if (d.line.from.x > d.line.to.x) { // (1)
                return {
                    x:d.line.from.x - distance,
                    y:d.line.from.y
                };
            }
        }

        return { x:0, y:0 };
    };
    /* **************************************************************** *
     *  
     * **************************************************************** */
    addPort2Entity (entity) {
        const port = this;

        entity.ports.items.ht[port.id()] = port;
        entity.ports.items.list.push(port);
    }
    position_degree () {
        return this._core.position % 360;
    }
}
