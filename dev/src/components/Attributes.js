import React from 'react';

import { Heading } from 'react-bulma-components';

import Attribute from './Attribute.js';

export default function Attributes (props) {
    const item_class = 'pool-item-attribute';
    const options = {
        columnWidth:  props.column_width,
        itemSelector: `.${item_class}`,
        gutter:       props.gutter,
        itemClass:    item_class, // original parameter
    };

    const attributes = props.data.attributes;

    return (
        <div>
          <Heading size={1}>
            Attributes
          </Heading>

          <div>
            {attributes.map(d=> {
                return (
                    <Attribute data={d}/>
                );
            })}
          </div>
        </div>
    );
}
