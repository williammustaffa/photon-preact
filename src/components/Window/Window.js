import { h } from 'preact';
import { WindowStyled , WindowContentStyled } from './Window.styles';

export const Window = ({ children, ...props }) => (
  <WindowStyled {...props}>{children}</WindowStyled>
);

Window.Content = ({ children, ...props }) => (
  <WindowContentStyled {...props}>{children}</WindowContentStyled>
);;