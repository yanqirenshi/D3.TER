import { OrganismClass } from '../models/index.js';
import { Relationship } from '../lib/neo4j/index.js';

class SephirothicTree {
    constructor () {
        this._root = null;
        this._nodes = { ht: {}, list: [] };
        this._edges = { ht: {}, list: [] };
    }
    nodes () {
        return this._nodes;
    }
    getNode (id) {
        return this.nodes().ht[id] || null;
    }
    edges () {
        return this._edges;
    }
    getEdge (id) {
        return this.edges().ht[id] || null;
    }
    graphData () {
        return {
            nodes: this._nodes.list,
            edges: this._edges.list,
        };
    }
    makeNodeData (data) {
        const x = {
            id: data.id(),
            x: data.x(),
            y: data.y(),
            move: data.move(),
            label: {
                text: data.label(),
                font: { size: 12 },
            },
            circle: {
                r: 33,
                fill: '#eeeeee',
                stroke: { color: '#eeeeee', width: 5 },
            },
            _core: data,
        };

        return x;
    }
    makeNode (data) {
        const node = this.getNode(data.id);

        if (node) {
            node._core.change(data);

            return node;
        }

        const core =  new OrganismClass(data);

        const new_node = this.makeNodeData(core);

        this.addNode(new_node);

        return new_node;
    }
    makeEdgeData (type, data, source, target) {
        return {
            id: data.id(),
            source: source.id,
            target: target.id,
            type: type,
            _class: 'XXX',
            _core: data,
        };
    }
    makeEdge (data, parent, child) {
        const edge = this.getEdge(data.id);

        if (edge) {
            edge._core.change(data);
            return edge;
        }

        const core = new Relationship(data);

        const new_edge = this.makeEdgeData('HAVE-TO', core, parent, child);

        this.addEdge(new_edge);

        return new_edge;
    }
    record2node (data) {
        const core = new OrganismClass(data);

        return this.makeNodeData(core);
    }
    rootNode (v) {
        if (arguments.length > 0) {
            this._root = v;
            this.addNode(v);
        }

        return this._root;
    }
    addNode (node) {
        const is_exist = this._nodes.ht[node.id];

        this._nodes.ht[node.id] = node;

        if (is_exist) {
            // TODO: node を入れ替える。
        } else {
            this._nodes.list.push(node);
        }
    }
    addEdge (edge) {
        const is_exist = this._edges.ht[edge.id];

        this._edges.ht[edge.id] = edge;

        if (is_exist) {
            // TODO: edge を入れ替える。
        } else {
            this._edges.list.push(edge);
        }
    }
}

const SEPHIROTHIC_TREE = new SephirothicTree();

export default SEPHIROTHIC_TREE;
