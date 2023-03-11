import React from 'react';

import { Heading, Section} from 'react-bulma-components';

import Method from './Method.js';

export default function Methods (props) {
    const item_class = 'pool-item-method';
    const options = {
        columnWidth: 100,
        itemSelector: `.${item_class}`,
        gutter: 10,
        itemClass: item_class, // original parameter
    };

    const methods = props.data.methods.reduce((list, d) => {
        if ("string"===(typeof d.type) && 'group'===d.type)
            list = list.concat(d.list || []);
        else
            list.push(d);

        return list;
    }, []);

    return (
        <div>
          <Heading size={1}>
            Methods
          </Heading>

          <div>
            {methods.map(d=> {
                return (
                    <Method data={d}/>
                );
            })}
          </div>
        </div>
    );
}
