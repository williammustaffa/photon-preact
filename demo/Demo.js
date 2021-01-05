import { h } from 'preact';
import styled from 'styled-components';
import {
  Theme,
  Button,
  ButtonGroup,
  Input,
  Title,
  Window,
  Radio,
  Checkbox,
  Toolbar
} from '../src';

const Container = styled.div`
  width: 100%;
  max-width: 787px;
  margin: 0 auto;
`;

const Section = styled.div`
  display: block;
  clear: both;
`;

export function Demo() {
  return (
    <Theme>
      <Window>
        <Toolbar header>
          <Title>Toolbar header</Title>
          <Toolbar.Actions>
            <Button icon="globe" />
          </Toolbar.Actions>
        </Toolbar>
        <Window.Content>
          <Container>
            <Section>
              <h2>Button types</h2>
              <Button>Default</Button>
              <Button primary>Primary</Button>
              <Button positive>Positive</Button>
              <Button negative>Negative</Button>
              <Button warning>Warning</Button>
            </Section>
            <Section>
              <h2>Button sizes</h2>
              <Button large>Primary</Button>
              <Button mini>Primary</Button>
            </Section>
            <Section>
              <h2>Button icons</h2>
              <Button icon="globe">Icon</Button>
              <Button icon="cw">Icon</Button>
            </Section>
            <Section>
              <h2>Float</h2>
              <Button pullRight>Fist</Button>
              <Button pullLeft>Second</Button>
            </Section>
            <Section>
              <h2>Dropdown</h2>
              <Button dropdown>Fist</Button>
            </Section>
            <Section>
              <h2>ButtonGroup Icons</h2>
              <ButtonGroup>
                <Button icon="globe" />
                <Button icon="home" active />
                <Button icon="attach"/>
                <Button icon="lock" />
                <Button icon="code"/>
              </ButtonGroup>
            </Section>
            <Section>
              <h2>ButtonGroup Text</h2>
              <ButtonGroup>
                <Button icon="globe" primary active>Home</Button>
                <Button warning>Page 1</Button>
                <Button positive>Page 2</Button>
                <Button negative>Page 3</Button>
              </ButtonGroup>
            </Section>
            <Section>
              <h2>Form</h2>
              <Input label='Text field' defaultValue="Default value" />
              <Radio name="radio-group">Radio with children</Radio>
              <Radio name="radio-group">Radio with label prop</Radio>
              <Checkbox name="radio-group">Checkbox with children</Checkbox>
              <Checkbox name="radio-group">Checkbox with label prop</Checkbox>
            </Section>
            <Section>
              <h2>Title</h2>
              <Title>Example title</Title>
            </Section>
          </Container>
        </Window.Content>
        <Toolbar footer>
          <Title>Toolbar header</Title>
        </Toolbar>
      </Window>
    </Theme>
  );
}