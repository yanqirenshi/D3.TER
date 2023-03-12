import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {Footer} from '../components/Common.js';

import TabsClasses from './TabsClasses.js';

import Overview from './data/Overview.js';
import Entity from './data/Entity.js';
import IdentifierInstance from './data/IdentifierInstance.js';
import AttributeInstance from './data/AttributeInstance.js';
import Identifier from './data/Identifier.js';
import Attribute from './data/Attribute.js';
import Relationship from './data/Relationship.js';
import Port from './data/Port.js';
import Others from './data/Others.js';

export default function Data () {
    const [tabs, setTabs] = useState({
        selected: 'overview',
        list: [
            { code: 'overview',            label: 'Overviw',            active:  true },
            { code: 'entity',              label: 'Entity',             active: false },
            { code: 'identifier_instance', label: 'IdentifierInstance', active: false },
            { code: 'attribute_instance',  label: 'AttributeInstance',  active: false },
            { code: 'identifier',          label: 'Identifier',         active: false },
            { code: 'attribute',           label: 'Attribute',          active: false },
            { code: 'relationship',        label: 'Relationship',       active: false },
            { code: 'port',                label: 'Port',               active: false },
            { code: 'others',              label: 'Others',             active: false },
        ],
    });

    const clickTab = (new_tabs) => setTabs(new_tabs);

    const isActive = (k) => tabs.selected===k;

    return (
        <Box style={{width:'100%', height: '100%', overflow:'auto'}}>

          <Box style={{marginTop: 22, marginBottom: 22, display: 'flex', justifyContent: 'center'}}>
            <TabsClasses tabs={tabs} onClickTab={clickTab} />
          </Box>

          {isActive('overview')            && <Overview />}
          {isActive('entity')              && <Entity />}
          {isActive('identifier_instance') && <IdentifierInstance />}
          {isActive('attribute_instance')  && <AttributeInstance />}
          {isActive('identifier')          && <Identifier />}
          {isActive('attribute')           && <Attribute />}
          {isActive('relationship')        && <Relationship />}
          {isActive('port')                && <Port />}
          {isActive('others')              && <Others />}

          <Footer />
        </Box>
    );
}
