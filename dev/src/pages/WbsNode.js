import React from 'react';
import { useParams } from 'react-router-dom';

import NotFound from '../wbs/NotFound.js';

export default function Wbs (props) {
    const { id } = useParams();

    const WbsNode = load(id);

    if (!WbsNode)
        return <NotFound/>;

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <WbsNode />
        </React.Suspense>
    );
}

function load (id) {
    const l = React.lazy;

    if (id==='1002')    return l(()=> import('../wbs/P1002.js'));
    if (id==='1000004') return l(()=> import('../wbs/P1000004.js'));
    if (id==='1000005') return l(()=> import('../wbs/P1000005.js'));
    if (id==='1000006') return l(()=> import('../wbs/P1000006.js'));
    if (id==='1000007') return l(()=> import('../wbs/P1000007.js'));
    if (id==='1000027') return l(()=> import('../wbs/P1000027.js'));
    if (id==='1000028') return l(()=> import('../wbs/P1000028.js'));
    if (id==='1000029') return l(()=> import('../wbs/P1000029.js'));
    if (id==='1000030') return l(()=> import('../wbs/P1000030.js'));
    if (id==='1000031') return l(()=> import('../wbs/P1000031.js'));
    if (id==='1000032') return l(()=> import('../wbs/P1000032.js'));
    if (id==='1000034') return l(()=> import('../wbs/P1000034.js'));
    if (id==='1000033') return l(()=> import('../wbs/P1000033.js'));
    if (id==='1000035') return l(()=> import('../wbs/P1000035.js'));
    if (id==='1000036') return l(()=> import('../wbs/P1000036.js'));
    if (id==='1000038') return l(()=> import('../wbs/P1000038.js'));
    if (id==='1000045') return l(()=> import('../wbs/P1000045.js'));

    return null;
}
