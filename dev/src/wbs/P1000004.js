import React from 'react';

import BaseCypherManual from './BaseCypherManual.js';

import Codes from './1000004/Codes.js';

export default function P1000004 () {
    return (
        <BaseCypherManual title="MERGE"
                          write={<Codes/>}/>
    );
}
