import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import DiagramClassAttributes from './DiagramClassAttributes.js';
import DiagramClassMethods from './DiagramClassMethods.js';

export default function DiagramClass (props) {
    const data = props.data;

    return (
        <Card>
          <CardHeader title={data.name}/>

          <CardContent>
            <DiagramClassAttributes attributes={data.attributes}/>
          </CardContent>

          <CardContent>
            <DiagramClassMethods methods={data.methods} />
          </CardContent>
        </Card>
    );
}
