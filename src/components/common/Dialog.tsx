import styled, { css } from 'styled-components';
import { hexToRgbWithOpacity } from '../utils';
import { Close } from '.';

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: ${(props) => hexToRgbWithOpacity(`${props.theme.flipground}`, 0.3)};
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  ${(props) =>
    css`
      background: ${props.theme.background};
    `}

  border-radius: 1rem;

  h3 {
    margin: 0;
    font-size: ${(props) => props.theme.size.body};
  }

  p {
    font-size: 1.125rem;
  }
`;

const DialogHeader = styled.div`
  width: 100%;
  height: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background: none;
    color: white;
    height: 100%;
  }

  margin-bottom: 1.62rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;

  & > * {
    margin-bottom: 1rem;
  }
`;

export function Dialog({ children, headertitle, onCancel, visible }): JSX.Element {
  if (!visible) return <></>;
  return (
    <DarkBackground>
      <DialogBlock>
        <DialogHeader>
          <h3>{headertitle}</h3>
          <Close onClick={onCancel} />
        </DialogHeader>
        <ButtonGroup>{children}</ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}
