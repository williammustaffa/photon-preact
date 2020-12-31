import { h } from 'preact';
import { ButtonGroupStyled } from './ButtonGroup.styles';

export function ButtonGroup({ children, ...props }) {
  return (
    <ButtonGroupStyled {...props}>{children}</ButtonGroupStyled>
  );
}