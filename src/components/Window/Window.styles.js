import styled from 'styled-components';

export const WindowStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const WindowContentStyled = styled.div`
  position: relative;
  overflow-y: auto;
  display: flex;
  flex: 1;
`;