import { h, Fragment } from 'preact';
import { ThemeProvider } from 'styled-components';
import { get, isFunction } from 'lodash';
import { GlobalPageStyles } from './Theme.styles';
import defaultTheme from './defaultTheme';

export const getProps = (path, callback) => props => {
  const value = get(props.theme, path);
  return isFunction(callback) ? callback(value) : value;
}

export function Theme({ children, overrideTheme = {} }) {
  const theme = { ...defaultTheme, ...overrideTheme };

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalPageStyles />
        {children}
      </Fragment>
    </ThemeProvider>
  )
}