import React, { useState } from 'react';

import Box from '@mui/material/Box';

import {Footer} from '../components/Common.js';

import TabsClasses from './TabsClasses.js';

import Overview from './ClassesData/Overview.js';
import Entity from './ClassesData/Entity.js';
import ColumnInstance from './ClassesData/ColumnInstance.js';
import IdentifierInstance from './ClassesData/IdentifierInstance.js';
import AttributeInstance from './ClassesData/AttributeInstance.js';
import Identifier from './ClassesData/Identifier.js';
import Attribute from './ClassesData/Attribute.js';
import Relationship from './ClassesData/Relationship.js';
import Port from './ClassesData/Port.js';
import Pool from './ClassesData/Pool.js';

import * as data from '../data/Classes.js';

export default function ClassesData () {
    const [tabs, setTabs] = useState({
        selected: 'overview',
        list: [
            { code: 'overview',            label: 'Overviw',            active:  true },
            { code: 'entity',              label: 'Entity',             active: false },
            { code: 'column_instance',     label: 'ColumnInstance',     active: false },
            { code: 'identifier',          label: 'Identifier',         active: false },
            { code: 'attribute',           label: 'Attribute',          active: false },
            { code: 'identifier_instance', label: 'IdentifierInstance', active: false },
            { code: 'attribute_instance',  label: 'AttributeInstance',  active: false },
            { code: 'relationship',        label: 'Relationship',       active: false },
            { code: 'port',                label: 'Port',               active: false },
            { code: 'pool',                label: 'Pool',               active: false },
        ],
    });

    const clickTab = (new_tabs) => setTabs(new_tabs);

    const isActive = (k) => tabs.selected===k;

    return (
        <Box style={{width:'100%', height: '100%', overflow:'auto'}}>

          <Box style={{marginTop: 22, display: 'flex', justifyContent: 'center'}}>
            <TabsClasses tabs={tabs} onClickTab={clickTab} />
          </Box>

          {isActive('overview')            && <Overview />}
          {isActive('entity')              && <Entity             data={data.entity} />}
          {isActive('column_instance')     && <ColumnInstance     data={data.column_instance} />}
          {isActive('identifier_instance') && <IdentifierInstance data={data.identifier_instance} />}
          {isActive('attribute_instance')  && <AttributeInstance  data={data.attribute_instance} />}
          {isActive('identifier')          && <Identifier         data={data.identifier} />}
          {isActive('attribute')           && <Attribute          data={data.attribute} />}
          {isActive('relationship')        && <Relationship       data={data.relationship} />}
          {isActive('port')                && <Port               data={data.port} />}
          {isActive('pool')                && <Pool               data={data.pool} />}

          <Footer />
        </Box>
    );
}
