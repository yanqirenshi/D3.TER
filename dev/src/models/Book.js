import Neo4jNode from './Neo4jNode.js';

export default class Book extends Neo4jNode{
    constructor (data) {
        super(data);

        this._title = null; // タイトル
        this._isbn10 = null; // ISBN-10
        this._isbn13 = null; // ISBN-13
        this._paper_size = null; // 判型
        this._page_count = null; // ページ数
        this._price_amount = null;// 定価
        this._price_unit = null;// 定価
        this._publication_date = null; // 発行年月日
        this._release_date = null; // 発売日

        if (data) {
            this._title = data.title;
            this._isbn10 = data.isbn10;
            this._isbn13 = data.isbn13;
            this._paper_size = data.paper_size;
            this._page_count = data.page_count;
            this._price_amount = data.price_amount;
            this._price_unit = data.price_unit;
            this._publication_date = data.publication_date;
            this._release_date = data.release_date;
            this._description = data.description;
        }

        this._neo4j_label = 'BOOK';

        this._attributes = this.makeAttributes([
            'title',            's', ()=>this.title(),
            'isbn10',           's', ()=>this.isbn10(),
            'isbn13',           's', ()=>this.isbn13(),
            'paper_size',       's', ()=>this.paperSize(),
            'page_count',       'n', ()=>this.pageCount(),
            'price_amount',     'n', ()=>this.priceAmount(),
            'price_unit',       's', ()=>this.priceUnit(),
            'publication_date', 's', ()=>this.publicationDate(),
            'release_date',     's', ()=>this.releaseDate(),
            'description',      's', ()=>this.description(),
        ]);
    }
    cypherLabels () {
        return this._neo4j_label;
    }
    cypherAttributes () {
        return this._attributes;
    }
    title () {
        return this._title;
    }
    isbn10 () {
        return this._isbn10;
    }
    isbn13 () {
        return this._isbn13;
    }
    paperSize () {
        return this._paper_size;
    }
    pageCount () {
        return this._page_count;
    }
    priceAmount () {
        return this._price_amount;
    }
    priceUnit () {
        return this._price_unit;
    }
    // 発行年月日
    publicationDate () {
        return this._publication_date;
    }
    // 発売日
    releaseDate () {
        return this._release_date;
    }
    description () {
        return this._description;
    }
    // 出版社
    publisher () {
        return null;
    }
    // 著
    writers () {
        return null;
    }
    // form
    makeFormData () {
        return {
            title: '',
            isbn10: '',
            isbn13: '',
            paper_size: '',
            page_count: 0,
            price_amount: 0,
            price_unit: '円',
            publication_date: '',
            release_date: '',
            description: '',
        };
    }
    importFormData (data) {
         this._title = data.title;
         this._isbn10 = data.isbn10;
         this._isbn13 = data.isbn13;
         this._paper_size = data.paper_size;
         this._page_count = data.page_count * 1;
         this._price_amount = data.price_amount * 1;
         this._price_unit = data.price_unit;
         this._publication_date = data.publication_date;
         this._release_date = data.release_date;
         this._description = data.description;
    }
}
