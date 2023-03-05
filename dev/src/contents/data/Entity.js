import React from 'react';

import { Section, Container, Heading, } from 'react-bulma-components';

import Base from './Base.js';

import {entity} from '../../data/TEMPLATES.js';

export default function Entity (props) {
    return (
        <Base json={entity}>

          <Section style={{paddingTop:0}}>
            <Container>
              <Heading>_id</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>_class</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>padding</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>margin</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>description</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>position</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>size</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>bar</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>background</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>name</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>type</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>identifiers</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>attributes</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

          <Section>
            <Container>
              <Heading>ports</Heading>

              <Heading subtitle></Heading>
            </Container>
          </Section>

        </Base>
    );
}
