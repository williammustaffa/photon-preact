import styled, { css } from 'styled-components';
import { TitleStyled } from '@components/Title'

export const ToolbarStyled = styled.div`
  min-height: 22px;
  box-shadow: inset 0 1px 0 #f5f4f5;
  background-color: #e8e6e8;
  background-image: linear-gradient(to bottom, #e8e6e8 0%, #d1cfd1 100%);

  &:before, &:after {
    display: table;
    content: " ";
  }

  &:after {
    clear: both;
  }

  ${props => props.header && css`
    border-bottom: 1px solid #c2c0c2;

    ${TitleStyled} {
      margin-top: 1px;
    }
  `}

  ${props => props.footer && css`
    border-top: 1px solid #c2c0c2;
    -webkit-app-region: drag;
  `}

  ${props => props.borderless && css`
    border-top: 0;
    border-bottom: 0;
  `}
`