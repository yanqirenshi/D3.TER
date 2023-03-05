import React from 'react';

import { Section, Container, Heading, } from 'react-bulma-components';

import Base from './Base.js';

export default function Relationship (props) {
    return (
        <Base json={template}>

          <Section>
            <Container>
              <Heading>
                Section
              </Heading>
              <Heading subtitle>
                A simple container to divide your page into{' '}
                <strong>
                  sections
                </strong>
                , like the one you are currently reading
              </Heading>
            </Container>
          </Section>

        </Base>
    );
}

const template ={
    id: 1,
    from: {
        id: 2,
        position: 90
    },
    to: {
        id: 3,
        position: 180
    }
};
