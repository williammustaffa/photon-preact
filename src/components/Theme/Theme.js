import { h, Fragment } from 'preact';
import { ThemeProvider } from 'styled-components';
import { GlobalPageStyles } from './Theme.styles';
import { get, isFunction } from 'lodash';

export const getProps = (path, callback) => props => {
  const value = get(props.theme, path);
  return isFunction(callback) ? callback(value) : value;
}

export function Theme({ children }) {
  const theme = {
    fontSize: 12,
    flat: false,
    primary: {
      color: '#fff',
      background: '#6eb4f7',
      gradient: '#1a82fb',
      border: '#388df8',
      borderBottom: '#0866dc',
      active: {
        background: '#3e9bf4',
        gradient: '#0469de'
      }
    },
    positive: {
      color: '#fff',
      background: '#5bd46d',
      gradient: '#29a03b',
      border: '#29a03b',
      borderBottom: '#248b34',
      active: {
        background: '#34c84a',
        gradient: '#248b34'
      }
    },
    negative: {
      color: '#fff',
      background: '#fd918d',
      gradient: '#fb2f29',
      border: '#fb2f29',
      borderBottom: '#fb1710',
      active: {
        background: '#fc605b',
        gradient: '#fb1710'
      }
    },
    warning: {
      color: '#fff',
      background: '#fece72',
      gradient: '#fcaa0e',
      border: '#fcaa0e',
      borderBottom: '#ee9d02',
      active: {
        background: '#fdbc40',
        gradient: '#ee9d02'
      }
    },
    secondary: {
      color: '#333',
      background: '#fcfcfc',
      gradient: '#f1f1f1',
      border: '#a19fa1',
      borderBottom: '#c2c0c2',
      active: {
        background: '#ddd',
        gradient: '#ddd'
      }
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalPageStyles />
        {children}
      </Fragment>
    </ThemeProvider>
  )
}