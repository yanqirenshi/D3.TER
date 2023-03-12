import { Book } from '../models/index.js';

class Librarian {
    constructor () {
        this._nodes = { ht: {}, list: [] };
        this._edges = { ht: {}, list: [] };
    }
    getNode (id) {
        return this._nodes.ht[id] || null;
    }
    books () {
        return this._nodes.list;
    }
    /** **************************************************************** *
     * data から Book を作る。
     * ついでに addBook をコールする。
     * **************************************************************** */
    makeBook (data) {
        const book = this.getNode(data.id);

        if (book) {
            book._core.change(data);

            return book;
        }

        const new_book =  new Book(data);

        this.addBook(new_book);

        return new_book;
    }
    /** **************************************************************** *
     * Book を Pool に追加する。
     * **************************************************************** */
    addBook (new_book) {
        const id = new_book.id();

        const book = this.getNode(id);

        if (book) {
            // TODO: node を入れ替える。
        } else {
            this._nodes.list.push(new_book);
        }
    }
}

const LIBRARIAN = new Librarian();

export default LIBRARIAN;
