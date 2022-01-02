import styled, { css } from 'styled-components';
import { hexToRgbWithOpacity } from '../utils';
import { Close } from '.';
import { useContext } from 'react';
import { DialogContext } from '../../contexts/DialogContext';

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

const BodyGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;

  & > * {
    margin-bottom: 1rem;
  }
`;

export function Dialog(): JSX.Element {
  const { dialogContent, handleDialog, dialog } = useContext(DialogContext);

  // useEffect(() => {
  //   const bind = (e) => {
  //     // ESC
  //     if (e.keyCode !== 27) {
  //       return;
  //     }
  //     if (document.activeElement && ['INPUT', 'SELECT'].includes(document.activeElement.tagName)) {
  //       return;
  //     }
  //     // handleDialog();
  //   };
  //   document.addEventListener('keyup', bind);
  //   return () => document.removeEventListener('keyup', bind);
  // }, [dialogContent, handleDialog]);

  return (
    <>
      {dialog ? (
        <DarkBackground>
          <DialogBlock>
            <DialogHeader>
              <Close onClick={handleDialog} />
            </DialogHeader>
            <BodyGroup>{dialogContent}</BodyGroup>
          </DialogBlock>
        </DarkBackground>
      ) : (
        <></>
      )}
    </>
  );
}
