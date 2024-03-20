import Atman from './Atman.js';

import Geometry from './Geometry.js';

export default class Port extends Atman {
    constructor(type, entity, relatihonship_data, rectum) {
        super(type==='from' ? 'PORT-FROM' : 'PORT-TO', relatihonship_data);

        this._rectum = rectum;

        this._id = relatihonship_data.id + '_' + entity._id; // Idenrifier-Instance

        this._owner = entity;

        this._type = type;

        this._core = relatihonship_data[type];

        this._position = relatihonship_data.position || { x:0, y:0 };

        this.addPort2Entity(entity);

        this._entity  = null;

        this.geometry = new Geometry();

        this._cardinality_distance = 11;
        this._optionality_distance = 22;

        this._line = null;
        this._cardinality = null;
        this._optionality = null;
    }
    rectum () {
        return this._rectum;
    }
    style () {
        return this.rectum().style();
    }
    core () {
        return this._core;
    }
    degree () {
        return this._core.position || 0;
    }
    position (v) {
        if (arguments.length===1) {
            this._position = v;

            const line = this.linePosition(this.calLinePoints());

            this.cardinalityPosition(this.positionCardinality(line));
            this.optionalityPosition(this.positionOptionality(line));
        }

        return this._position;
    }
    positionOptionality (line_port_to_entity) {
        const distance = this.optionalityDistance();

        // d.optionality: 1, 0
        switch (this.optionality()) {
        case 0:
            return this.calCircle(
                line_port_to_entity.from,
                line_port_to_entity.to,
                distance);
        case 1:
            return this.calOneLine(
                line_port_to_entity.from,
                line_port_to_entity.to,
                distance);
        default:
            return null;
        }
    }
    positionCardinality (line_port_to_entity) {
        const distance = this.cardinalityDistance();

        // cardinality: 1, 3
        switch (this.cardinality()) {
        case 1:
            return this.calOneLine(
                line_port_to_entity.from,
                line_port_to_entity.to,
                distance);
        case 3:
            return this.calThreeLine(
                line_port_to_entity.from,
                line_port_to_entity.to,
                distance);
        default:
            return null;
        }
    }
    owner () {
        return this._owner;
    }
    entity () {
        return this._entity;
    }
    relationship () {
        return this._relationship;
    }
    cardinality () {
        return this.core().cardinality;
    }
    optionality () {
        return this.core().optionality;
    }
    linePosition (v) {
        if (arguments.length===1)
            this._line = v;

        return this._line;
    }
    cardinalityDistance () {
        return this.style().port.cardinality.distance;
    }
    optionalityDistance () {
        return this.style().port.optionality.distance;
    }
    cardinalityPosition (v) {
        if (arguments.length===1)
            this._cardinality = v;

        return this._cardinality;
    }
    optionalityPosition (v) {
        if (arguments.length===1)
            this._optionality = v;

        return this._optionality;
    }
    /* **************************************************************** *
     *  Data manegement
     * **************************************************************** */
    /**
     * entity と port
     */
    calLinePoints () {
        const entity = this.owner();
        const entity_position = entity.position;
        const entity_size = entity.size;

        const rect = {
            position: {
                x: entity_position.x,
                y: entity_position.y,
            },
            size: {
                w: entity_size.w,
                h: entity_size.h,
            }
        };

        const geometry = this.geometry;

        const margin = this.style().entity.margin;

        // entity の四辺
        const four_side_lines = geometry.getFourSideLines(rect, 4, margin);

        // port と entityの中心との直線。
        const line_port = geometry.getPortLine(this.degree(), rect);

        // port と entityの中心との直線 と entity の四辺の交点。
        // 交点 と どの辺 が返ってくる。
        const cross_point = geometry.getCrossPoint(four_side_lines, line_port);

        // entity と port との距離
        const len = margin + 4; // 4: ?

        // point の位置を返す
        const to_point = cross_point.point;
        const from_point = ()=> {
            switch (cross_point.target) {
            case 'top':    return { x: to_point.x,       y: to_point.y + len };
            case 'right':  return { x: to_point.x - len, y: to_point.y };
            case 'bottom': return { x: to_point.x,       y: to_point.y - len };
            case 'left':   return { x: to_point.x + len, y: to_point.y };
            default: throw new Error('!!!');
            }
        };

        return {
            from: from_point(),
            to:   to_point,
        };
    }
    /** **************************************************************** *
     * port と entity の間の向きを返します。
     * **************************************************************** */
    portDirection (from, to) {
        // 縦
        if (from.x===to.x) {
            if (from.y < to.y) return 'DOWN';
            if (from.y > to.y) return 'UP';
        }

        // 横
        if (from.y===to.y) {
            if (from.x < to.x) return 'RIGHT';
            if (from.x > to.x) return 'LEFT';
        }

        // これはありえないはず。
        throw new Error('Can Not Found Direction.');
    }
    /** **************************************************************** *
     * 1 line (cardinaly: 1)
     * Cardinary： n ケースの座標を計算する。
     *
     * Line の from, to で向きを決める。
     *
     * d: port
     * distance: between port and entity
     * **************************************************************** */
    calOneLine (from, to, distance) {
        const r = 11;

        switch (this.portDirection(from, to)) {
        case 'DOWN':
            return {
                from: { x: from.x + r, y: from.y + distance },
                to:   { x: from.x - r, y: from.y + distance },
            };
        case 'DOWN':
            return {
                from: { x: from.x + r, y: from.y - distance },
                to:   { x: from.x - r, y: from.y - distance },
            };
        case 'RIGHT':
            return {
                from: { x: from.x + distance, y: from.y + r },
                to:   { x: from.x + distance, y: from.y - r },
            };
        case 'LEFT':
            return {
                from: { x: from.x - distance, y: from.y + r },
                to:   { x: from.x - distance, y: from.y - r },
            };
        default:
            return {
                from: { x:0, y:0 },
                to:   { x:0, y:0 },
            };
        }
    };
    /**
     * 3 line (cardinaly: n)
     * Cardinary： n ケースの座標を計算する。
     *
     * Line の from, to で向きを決める。
     *
     * d: port
     * distance: between port and entity
     * **************************************************************** */
    calThreeLine (from, to, distance) {
        switch (this.portDirection(from, to)) {
        case 'DOWN':
            return [
                [ from.x - distance, from.y ],
                [ from.x,            from.y + distance ],
                [ from.x + distance, from.y ],
            ];
        case 'DOWN':
            return [
                [ from.x - distance, from.y ],
                [ from.x,            from.y - distance ],
                [ from.x + distance, from.y ],
            ];
        case 'RIGHT':
            return [
                [ from.x,            from.y - distance ],
                [ from.x + distance, from.y ],
                [ from.x,            from.y + distance ],
            ];
        case 'LEFT':
            return [
                [ from.x,            from.y - distance ],
                [ from.x - distance, from.y ],
                [ from.x,            from.y + distance ],
            ];
        default:
            return [
                [0, 0],
                [0, 0],
                [0, 0],
            ];
        }
    };
    /** **************************************************************** *
     * null のための 丸
     * **************************************************************** */
    calCircle (from, to, distance) {
        // const distance = 28;

        switch (this.portDirection(from, to)) {
        case 'DOWN':
            return {
                x:from.x,
                y:from.y + distance,
            };
        case 'DOWN':
            return {
                x:from.x,
                y:from.y - distance,
            };
        case 'RIGHT':
            return {
                x:from.x + distance,
                y:from.y
            };
        case 'LEFT':
            return {
                x:from.x - distance,
                y:from.y
            };
        default:
            return { x:0, y:0 };
        }
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
