import React, { useState } from 'react';

import {Footer} from '../../components/Common.js';

import TabsClasses from './TabsClasses.js';

import Overview from './classes/Overview.js';
import Entity from './classes/Entity.js';
import EntityTailor from './classes/EntityTailor.js';
import Builder from './classes/Builder.js';
import ColumnInstance from './classes/ColumnInstance.js';
import IdentifierInstance from './classes/IdentifierInstance.js';
import AttributeInstance from './classes/AttributeInstance.js';
import Identifier from './classes/Identifier.js';
import Attribute from './classes/Attribute.js';
import Relationship from './classes/Relationship.js';
import Port from './classes/Port.js';
import Pool from './classes/Pool.js';

import * as data from '../../data/Classes.js';

export default function Classes() {
    const [tabs, setTabs] = useState([
        { code: 'overview',            label: 'Overviw',            active:  true },
        { code: 'entity',              label: 'Entity',             active: false },
        { code: 'entity_tailor',       label: 'EntityTailor',       active: false },
        { code: 'builder',             label: 'Builder',            active: false },
        { code: 'column_instance',     label: 'ColumnInstance',     active: false },
        { code: 'identifier_instance', label: 'IdentifierInstance', active: false },
        { code: 'attribute_instance',  label: 'AttributeInstance',  active: false },
        { code: 'identifier',          label: 'Identifier',         active: false },
        { code: 'attribute',           label: 'Attribute',          active: false },
        { code: 'relationship',        label: 'Relationship',       active: false },
        { code: 'port',                label: 'Port',               active: false },
        { code: 'pool',                label: 'Pool',               active: false },
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

          <div style={{marginTop: 22, display: 'flex', justifyContent: 'center'}}>
            <TabsClasses tabs={tabs} onClickTab={clickTab} />
          </div>

          {isActive('overview')            && <Overview />}
          {isActive('entity')              && <Entity             data={data.entity} />}
          {isActive('entity_tailor')       && <EntityTailor       data={data.entity_tailor} />}
          {isActive('builder')             && <Builder            data={data.builder} />}
          {isActive('column_instance')     && <ColumnInstance     data={data.column_instance} />}
          {isActive('identifier_instance') && <IdentifierInstance data={data.identifier_instance} />}
          {isActive('attribute_instance')  && <AttributeInstance  data={data.attribute_instance} />}
          {isActive('identifier')          && <Identifier         data={data.identifier} />}
          {isActive('attribute')           && <Attribute          data={data.attribute} />}
          {isActive('relationship')        && <Relationship       data={data.relationship} />}
          {isActive('port')                && <Port               data={data.port} />}
          {isActive('pool')                && <Pool               data={data.pool} />}

          <Footer />
       </div>
    );
}
