import React, { useState } from 'react';

import {Footer} from '../../components/Common.js';
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
    const [tabs, setTabs] = useState([
        { code: 'overview',            label: 'Overviw',            active:  true },
        { code: 'entity',              label: 'Entity',             active: false },
        { code: 'identifier_instance', label: 'IdentifierInstance', active: false },
        { code: 'attribute_instance',  label: 'AttributeInstance',  active: false },
        { code: 'identifier',          label: 'Identifier',         active: false },
        { code: 'attribute',           label: 'Attribute',          active: false },
        { code: 'relationship',        label: 'Relationship',       active: false },
        { code: 'port',                label: 'Port',               active: false },
        { code: 'others',              label: 'Others',             active: false },
    ]);

    const clickTab = (code) => {
        setTabs(tabs.map(d => {
            d.active = d.code===code;
            return d;
        }));
    };
    const isActive = (k) => tabs.find(d=>d.code===k).active;

    return (
        <div style={{width:'100%'}}>

          <div style={{marginTop: 22, marginBottom: 22, display: 'flex', justifyContent: 'center'}}>
            <TabsClasses tabs={tabs} onClickTab={clickTab} />
          </div>

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
        </div>
    );
}
