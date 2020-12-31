import { h } from 'preact';
import styled from 'styled-components';
import { Theme, Button } from '@components';

const Container = styled.div`
  width: 100%auto;
  max-width: 787px;
  margin: 0 auto;
`

const Section = styled.div`
  overflow: hidden;
  display: block;
`

export function Demo() {
  return (
    <Theme>
      <Container>
        <Section>
          <h2>Button types</h2>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button positive>Positive</Button>
          <Button negative>Negative</Button>
          <Button warning>Warning</Button>
        </Section>
        <Section>
          <h2>Button sizes</h2>
          <Button secondary large>Primary</Button>
          <Button secondary mini>Primary</Button>
        </Section>
        <Section>
          <h2>Button icons</h2>
          <Button secondary icon="globe">Icon</Button>
          <Button secondary icon="cw">Icon</Button>
        </Section>
        <Section>
          <h2>Float</h2>
          <Button secondary pullRight>Fist</Button>
          <Button secondary pullLeft>Second</Button>
        </Section>
        <Section>
          <h2>Dropdown</h2>
          <Button secondary dropdown>Fist</Button>
        </Section>
      </Container>
    </Theme>
  );
}