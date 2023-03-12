import React from 'react';

const style ={
    display:'flex',
    justifyContent: 'center',
    width:'100vw',
    height: '100vh',
    overflow:'auto'
};

export default function P1002 () {

    return (
        <div style={style}>
          <div style={{width:400, paddingBottom: 222}}>
            <pre>{text}</pre>
          </div>
        </div>
    );
}

const text = `
                          /lib/neo4j/models
                          +---------------+
                          | Neo4jObject   | <-- 使われていない？
                          |===============|
                          | _data         |
                          |---------------|
                          | change (data) |
                          | id ()         |
                          | type ()       |
                          | deleted ()    |
                          | merge (data)  |
                          +---------------+
                                 ^
                                 |
                +----------------+-----------------------------------+
                |                                                    |
            +------+                                         +--------------+
            | Node |                                         | Relationship | <-- 使われていない？
            |======|                                         |==============|
            |------|                                         |--------------|
            +------+                                         +--------------+
                ^
/js/models      |
                |
+-------------------------------------+
| Neo4jNode                           |
|=====================================|
|-------------------------------------|
| makeAttributes (list)               |
| makeAttribute (column, type, value) |
| cypherAttributes ()                 | abstruct
| cypherLabels ()                     | abstruct
| cypherCreateAttrs ()                |
| cypherReturnAttrs (name)            |
| stmtCreate ()                       |
|                                     |
| <form>                              |
| makeFormData ()                     | abstruct
| importFormData (data)               | abstruct
+-------------------------------------+
                ^
                |
                +----------------------------------+----------------------X--------------+
                |                                  |                                     |      /manegers/neo4j
      +----------------------+         +-----------------------+             +-----------------------+
      | OrganismClass        |         | Book                  |<--- 未実装  | Book                  |<--- これは削除する。
      |======================|         |=======================|             |=======================|
      |----------------------|         |-----------------------|             | _title                |
      | <getter/setter>      |         | <getter/setter>       |             | _isbn10               |
      | label ()             |         | title ()              |             | _isbn13               |
      | x ()                 |         | isbn10 ()             |             | _paper_size           |
      | y ()                 |         | isbn13 ()             |             | _page_count           |
      | move ()              |         | paperSize ()          |             | _price_amount         |
      | nameJa ()            |         | pageCount ()          |             | _price_unit           |
      | nameEn ()            |         | priceAmount ()        |             | _publication_date     |
      | nameScientific ()    |         | priceUnit ()          |             | _release_date         |
      | rank ()              |         | publicationDate ()    |             | _description          |
      |                      |         | releaseDate ()        |             | _attributes           |
      | <overwrite abstruct> |         | description ()        |             |-----------------------|
      | cypherLabels ()      |         |                       |             | cypherLabels ()       |
      | cypherAttributes ()  |         | <get from network>    |             | cypherAttributes ()   |
      +----------------------+         | publisher ()          |             | title ()              |
                                       | writers ()            |             | isbn10 ()             |
                                       |                       |             | isbn13 ()             |
                                       | <overwrite abstruct>  |             | paperSize ()          |
                                       | cypherLabels ()       |             | pageCount ()          |
                                       | cypherAttributes ()   |             | priceAmount ()        |
                                       | makeFormData ()       |             | priceUnit ()          |
                                       | importFormData (data) |             | publicationDate ()    |
                                       +-----------------------+             | releaseDate ()        |
                                                                             | description ()        |
                                                                             |- - - - - - - - - - - -|
                                                                             | publisher ()          |
                                                                             | writers ()            |
                                                                             | makeFormData ()       |
                                                                             | importFormData (data) |
                                                                             +-----------------------+
`;
