import React from 'react';
import { Section, Container } from 'react-bulma-components';

export default function Overview () {
    return (
        <Section>
          <Container>
            <div>
              <p style={{fontSize:16, lineHeight:'16px'}}>
                <pre>{x.join('\n')}</pre>
              </p>
            </div>
          </Container>
        </Section>
    );
}

const x = [
    '       +-------+',
    '       | Colon |',
    '       |=======|',
    '       |-------|',
    '       +-------+',
    '           ^',
    '           |',
    '  +-----------------------------+',
    '  | Rectum                      |',
    '  |=============================|',
    '  |+ callbacks                  |',
    '  |- _entities                  |',
    '  |- _relationships             |',
    '  |- _default                   |',
    '  |-----------------------------|',
    '  |- ensureCallbacks            |',
    '  |+ entities                   |',
    '  |+ bounds                     |',
    '  |+ getIdentifier              |',
    '  |- buildRelationshipsWithPort |',
    '  |+ data                       |',
    '  +-----------------------------+',
];
