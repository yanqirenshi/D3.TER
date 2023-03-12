import {Node} from '../lib/neo4j/index.js';

export default class Neo4jNode extends Node {
    makeAttributes (list) {
        let out = [];

        const attrs = [...list];
        const len = attrs.length;
        for (let i=0 ; i<len ; i=i+3) {
            out.push(this.makeAttribute(
                attrs.shift(),
                attrs.shift(),
                attrs.shift(),
            ));
        }

        return out;
    }
    makeAttribute (column, type, value) {
        return {
            column: column,
            type: type,
            value: value,
        };
    }
    cypherAttributes () {
        throw new Error('attributes を実装してください。');
    }
    cypherLabels () {
        throw new Error('cypherLabels を実装してください。');
    }
    cypherCreateAttrs () {
        const attributes = this.cypherAttributes();

        const stmt = attributes.reduce((stmt, attr, i)=> {
            const value = attr.value();
            const v = (attr.type==='n') ? value : `'${value}'`;

            return stmt += `${i===0 ? '' : ','} ${attr.column}: ${v} `;
        }, '');

        return `{ ${stmt} }`;
    }
    cypherReturnAttrs (name) {
        const attributes = this.cypherAttributes();

        const stmt = attributes.reduce((stmt, attr)=> {
            return stmt += `, ${attr.column}: ${name}.${attr.column} `;
        }, ` id: ID(${name}), labels: labels(${name}) `);

        return `{ ${stmt} }`;
    }
    stmtCreate () {

        const node = 'n';

        const attrs_create = this.cypherCreateAttrs();
        const attrs_ret = this.cypherReturnAttrs(node);
        const labels = this.cypherLabels();

        return `CREATE (${node}:${labels} ${attrs_create}) RETURN ${attrs_ret}`;
    }
    makeFormData () {
        throw new Error('makeFormData を実装してください。');
    }
    importFormData () {
        throw new Error('importFormData を実装してください。');
    }
}
