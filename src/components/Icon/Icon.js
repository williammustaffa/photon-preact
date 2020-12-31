
import { h } from 'preact';
import { IconStyled } from './Icon.styles';

export function Icon({ children, ...props }) {
  return (
    <IconStyled {...props}>{children}</IconStyled>
  );
}