import EntityBuilder from './EntityBuilder.js';

export default class EntityTailor extends EntityBuilder {
    /* **************************************************************** *
     *   Size
     * **************************************************************** */
    sizingType () {
        let data = this.type;

        if (!data.contents)
            data.contents = '??';

        data.size.h = this._default.line.height + data.padding * 2;

        data.size.w =
            data.contents.length * this._default.line.font.size;
        // + data.padding * 2;
    }
    sizingName () {
        let data = this.name;

        if (!data.contents)
            data.contents = '????????';

        data.size.h = this._default.line.height + data.padding * 2;

        let type = this.type;

        data.size.w = (this.size.w - (this.padding * 2) -
                       this.bar.size.header -
                       type.size.w);
    }
    sizingIdentifiers () {
        let data = this.identifiers;
        let padding = this.padding;

        data.size.w =
            ((this.size.w - (padding * 2)) / 2) -
            (this.bar.size.contents / 2);

        data.size.h = data.contents.list.length
            * (this._default.line.height + padding * 2);
    }
    sizingAttributes () {
        let data = this.attributes;
        let padding = this.padding;

        data.size.w =
            ((this.size.w - (this.padding * 2)) / 2) -
            (this.bar.size.contents / 2);

        data.size.h = data.contents.list.length * (this._default.line.height + padding * 2);
    }
    sizingContentsArea () {
        let id_h = this.identifiers.size.h;
        let attr_h = this.attributes.size.h;

        if (id_h > attr_h)
            this.attributes.size.h = id_h;
        else
            this.identifiers.size.h = attr_h;
    }
    sizing () {
        this.sizingType();
        this.sizingName();
        this.sizingIdentifiers();
        this.sizingAttributes();
        this.sizingContentsArea();

        let padding = this.padding * 2;
        let header = this.name.size.h;
        let bar = this.bar.size.horizontal;
        let contents = this.attributes.size.h;

        this.size.h = padding + header + bar + contents;

        return this;
    }
    reSizing () {
        const entity = this;

        entity.name.size.w
            = Math.ceil(entity._max_w.name)
            + entity.name.padding * 2;

        entity.identifiers.size.w
            = Math.ceil(entity._max_w.identifier)
            + entity.identifiers.padding * 2;

        entity.attributes.size.w
            = Math.ceil(entity._max_w.attribute)
            + entity.attributes.padding * 2;

        let name_area_w =
            entity.name.size.w
            + entity.bar.size.header
            + entity.type.size.w;

        let contents_area_w =
            entity.identifiers.size.w
            + entity.bar.size.contents
            + entity.attributes.size.w;

        entity.size.w = (contents_area_w > name_area_w ? contents_area_w : name_area_w) + (entity.padding * 2);

        // fix size for attr area
        if (entity._max_w.attribute===0 || contents_area_w < name_area_w) {
            entity.attributes.size.w =
                entity.size.w
                - (entity.padding * 2)
                - entity.identifiers.size.w
                - entity.bar.size.contents;
        }

        // fix size for name area
        if (contents_area_w > name_area_w) {
            entity.name.size.w =
                entity.size.w
                - (entity.padding * 2)
                - entity.bar.size.header
                - entity.type.size.w;
        }

        return this;
    }
    /* **************************************************************** *
     *   Position
     * **************************************************************** */
    positioningName () {
        const entity = this;

        let d = entity.name;

        d.position.x = entity.padding;
        d.position.y = entity.padding;
    }
    positioningType () {
        const entity = this;

        let d = entity.type;
        let bar = this.bar.size.header;

        d.position.x = entity.padding + entity.name.size.w + bar;
        d.position.y = entity.padding;
    }
    positioningColumnItems (d) {
        let padding = d.padding;
        let start   = d.position.y + padding;
        let line_height = this._default.line.height;

        let num = 0;

        for (const item of d.contents.list) {

            item.position.x = d.position.x + padding;

            let item_h  = (line_height + item.name.padding * 2);

            item.position.y = start + num * item_h + item.name.padding;

            num++;
        }
    }
    positioningIdentifiers () {
        const entity = this;

        let d = entity.identifiers;
        let bar = this.bar.size.horizontal;

        d.position.x = entity.padding;
        d.position.y = entity.padding + entity.name.size.h + bar;

        this.positioningColumnItems(d);
    }
    positioningAttributes () {
        const entity = this;

        let d = entity.attributes;
        let bar_contents = this.bar.size.contents;
        let bar_horizontal = this.bar.size.horizontal;

        d.position.x = entity.padding + bar_contents + entity.identifiers.size.w;
        d.position.y = entity.padding + entity.name.size.h + bar_horizontal;

        this.positioningColumnItems(d);
    }
    deg2rad (degree) {
        return degree * ( Math.PI / 180 );
    }
    getPortLineLength (entity) {
        let max_length = Math.floor(Math.sqrt((entity.size.w * entity.size.w) + (entity.size.h * entity.size.h)));

        return 0.8 * max_length;
    }
    getPortLineFrom (entity) {
        return {
            x: Math.floor(entity.size.w / 2),
            y: Math.floor(entity.size.h / 2)
        };
    }
    makePortLine (entity, port) {
        let out = {
            from: {x:0, y:0},
            to:   {x:0, y:0},
        };

        let from = this.getPortLineFrom(entity);
        out.from.x = from.x;
        out.from.y = from.y;

        let x = 0;
        let y = this.getPortLineLength(entity);

        let degree = port.position_degree();

        let radian = this.deg2rad(degree);
        let cos = Math.cos(radian);
        let sin = Math.sin(radian);

        out.to.x = Math.floor(x * cos - y * sin);
        out.to.y = Math.floor(x * sin + y * cos);

        out.to.x += out.from.x;
        out.to.y += out.from.y;

        port._from = out.from;
        port._to   = out.to;

        return out;
    }
    isCorss (A, B, C, D) {
        // 二つの線分の交差チェック
        // https://www.hiramine.com/programming/graphics/2d_segmentintersection.html
        let ACx = C.x - A.x;
        let ACy = C.y - A.y;
        let BUNBO = (B.x - A.x) * (D.y - C.y) - (B.y - A.y) * (D.x - C.x);

        if (BUNBO===0)
            return false;

        let r = ((D.y - C.y) * ACx - (D.x - C.x) * ACy) / BUNBO;
        let s = ((B.y - A.y) * ACx - (B.x - A.x) * ACy) / BUNBO;

        return ((0 <= r && r <= 1) && (0 <= s && s <= 1));
    }
    getCrossPointCore (line, line_port, port) {
        // ２直線の交点を求める公式
        let out = { x:0, y:0 };

        let A = line.from;
        let B = line.to;
        let C = line_port.from;
        let D = line_port.to;

        let bunbo = (B.y - A.y) * (D.x - C.x) - (B.x - A.x) * (D.y - C.y);

        if (!this.isCorss(A, B, C, D))
            return null;

        // 二つの線分の交点を算出する。
        // http://mf-atelier.sakura.ne.jp/mf-atelier/modules/tips/program/algorithm/a1.html
        let d1, d2;

        d1 = (C.y * D.x) - (C.x * D.y);
        d2 = (A.y * B.x) - (A.x * B.y);

        out.x = (d1 * (B.x - A.x) - d2 * (D.x - C.x)) / bunbo;
        out.y = (d1 * (B.y - A.y) - d2 * (D.y - C.y)) / bunbo;

        return out;
    }
    getCrossPoint (lines, line_port, port) {
        for (let line of lines) {
            let point = this.getCrossPointCore(line, line_port, port);

            if (point)
                return point;
        }
        return null;
    }
    getEntityLines (entity) {
        let port_r = 4;
        let margin =  entity.margin + port_r;

        let w = entity.size.w;
        let h = entity.size.h;

        let top_left     = { x:0 - margin, y:0 - margin};
        let top_right    = { x:w + margin, y:0 - margin};
        let bottom_rigth = { x:w + margin, y:h + margin};
        let bottom_left  = { x:0 - margin, y:h + margin};

        return [
            { from: top_left,     to: top_right    },
            { from: top_right,    to: bottom_rigth },
            { from: bottom_rigth, to: bottom_left  },
            { from: bottom_left,  to: top_left     },
        ];
    }
    positioningPort (port) {
        const entity = this;

        let line_port = this.makePortLine(entity, port);
        let lines_entity = this.getEntityLines(entity);

        let point = this.getCrossPoint(lines_entity, line_port, port);
        if (!point)
            point = { x:0, y:0 };

        port.position = point;

        return port;
    }
    positioningPorts () {
        const ports = this.ports.items.list;

        for (let port of ports)
            this.positioningPort(port);
    }
    positioningEntity (entity, entities) {
        this.positioningName();
        this.positioningType();
        this.positioningIdentifiers();
        this.positioningAttributes();
        this.positioningPorts();
    }
    positioning () {
        this.positioningEntity(this);

        return this;
    }
}
