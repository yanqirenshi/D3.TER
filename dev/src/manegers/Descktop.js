class Descktop {
    constructor () {
        this._masonry = {
            itemSelector: '.grid-item',
            columnWidth: 100,
            gutter: 20,
        };

        this._cards = {
            _id: 1,
            ht: {},
            list: [],
        };
    }
    masonryOptions () {
        return {
            itemSelector: this._masonry.itemSelector,
            columnWidth:  this._masonry.columnWidth,
            gutter: this._masonry.gutter,
        };
    }
    gutter () {
        return this._masonry.gutter;
    }
    cardWidth (card) {
        return card.col_w * this._masonry.columnWidth
            + ((card.col_w - 1) * this._masonry.gutter);
    }
    cardHeight (card) {
        return card.col_h * this._masonry.columnWidth
            + ((card.col_h - 1) * this._masonry.gutter);
    }
    calCardsWidth (max_width) {
        const col_width = this._masonry.columnWidth + this._masonry.gutter;

        const col_count = Math.floor(max_width / col_width);

        const margin_col_size = 2;

        return (col_count - margin_col_size) * col_width - this.gutter();
    }
    cards () {
        return this._cards;
    }
    addCardRandom () {
        const getRandomInt = (max)=> {
            return Math.floor(Math.random() * max) + 1;
        };

        const cards = this.cards();

        const card = {
            id: cards._id++,
            label: '????????',
            col_w: getRandomInt(3),
            col_h: getRandomInt(3),
        };

        cards.ht[card.id] = card;
        cards.list.push(card);
    }
}

const descktop = new Descktop ();

export default descktop;
