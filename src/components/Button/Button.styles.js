import styled, { css } from 'styled-components';
import { IconStyled } from '@components/Icon/Icon.styles'
import { getProps, GlobalComponentStyles } from '@components/Theme';
import iconMap from '@fonts/icon-map.json';

export const ButtonStyled = styled.button`
  // Apply global properties
  ${GlobalComponentStyles}

  // Specific styles
  margin-bottom: 0;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: default;
  background-image: none;
  border: 1px solid transparent;
  -webkit-app-region: no-drag;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  // Non-theme variants
  display: ${props => props.hidden ? 'none' : 'inline-block' };
  opacity: ${props => props.disabled ? 0.5 : 1};

  // Theme variants
  font-size: ${getProps('fontSize')}px;
  border-radius: ${getProps('flat', flat => !flat ? '4px' : '0')};

  // Button size
  padding: ${props => {
    if (props.mini) return '2px 6px';
    if (props.large) return '6px 12px';
    return '3px 8px';
  }};

  // Button form
  ${props => {
    return props.form && css`
      padding-right: 20px;
      padding-left: 20px;
    `
  }}

  // Dropdown
  ${props => {
    return props.dropdown && css`
      &:after {
        font-family: "photon-entypo";
        margin-left: 5px;
        content: '\\${iconMap['down-open']}';
      }
    `
  }}

  // Button type
  ${props => {
    // In order of priority
    const type = ['primary', 'secondary', 'positive', 'negative', 'warning'].find(key => !!props[key]);
    const getProp = path => getProps(`${type}.${path}`);

    return type && css`
      color: ${getProp('color')};
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      border-color: ${getProp('border')};
      border-bottom-color: ${getProp('borderBottom')};
      background-color: ${getProp('background')};

      &:active {
        background-color: ${getProp('active.background')};
      }

      ${getProps('flat', flat => {
        return !flat && css`
          background-image: linear-gradient(to bottom, ${getProp('background')} 0%, ${getProp('gradient')} 100%);
          &:active {
            background-image: linear-gradient(to bottom, ${getProp('active.background')} 0%, ${getProp('active.gradient')} 100%);
          }
        `
      })}
    `;
  }}

  // Icon inside button styles
  ${IconStyled} {
    float: left;
    width: 14px;
    height: 14px;
    margin-top: 1px;
    margin-bottom: 1px;
    color: #737475;
    font-size: 14px;
    line-height: 1;
  }
`;