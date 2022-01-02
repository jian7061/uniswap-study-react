import { useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { NavLink } from 'react-router-dom';
import { Web3Provider } from '@ethersproject/providers';
import styled from 'styled-components';
import { injected, walletconnect } from '../../constants/connectors';
import { Button, Logo } from '.';
import { WalletInfo } from './WalletInfo';
import { DialogContext } from '../../contexts/DialogContext';

// enum ConnectorNames {
//     Injected = 'Injected',
//     WalletConnect = 'WalletConnect'
// };

// const connectorsByName: { [key in ConnectorNames]: AbstractConnector } = {
//     [ConnectorNames.Injected]: injected,
//     [ConnectorNames.WalletConnect]: walletconnect,
// };

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  & > * {
    max-height: 65px;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 1rem;
  font-size: ${(props) => props.theme.size.body};

  & > * {
    margin: 0 1rem;
  }
`;

const Alert = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: #da3434;
  color: #fffafa;
  font-family: Anonymous Pro;
  font-style: bold;
  font-size: ${(props) => props.theme.size.h3};
  line-height: ${(props) => props.theme.size.h3};
`;

export const DialogBody = (): JSX.Element => {
  const context = useWeb3React<Web3Provider>();
  const { activate } = context;
  return (
    <>
      <Button
        size={'medium'}
        onClick={() => {
          activate(walletconnect);
        }}>
        WalletConnect
      </Button>
      <Button
        size={'medium'}
        onClick={() => {
          activate(injected);
        }}>
        브라우저 확장
      </Button>
    </>
  );
};

export const Navbar = (): JSX.Element => {
  const { handleDialog } = useContext(DialogContext);
  const context = useWeb3React<Web3Provider>();
  const { chainId, account } = context;

  const handleConnect = () => {
    handleDialog(<DialogBody />);
  };

  return (
    <>
      {chainId === undefined ? (
        ''
      ) : chainId !== 1 ? (
        <Alert>현재 Ethereum 메인넷만 지원하며, 지원하지 않는 네트워크로 연결되어 있습니다.</Alert>
      ) : (
        ''
      )}
      <StyledNavbar>
        <Logo />
        <StyledContainer>
          <NavLink to='/claim' activeClassName='hurray'>
            Claim
          </NavLink>
          <NavLink to='/rule' activeClassName='hurray'>
            Rule
          </NavLink>
        </StyledContainer>
        {account === undefined ? (
          <Button size={'medium'} onClick={handleConnect}>
            Connect
          </Button>
        ) : (
          <WalletInfo>
            {account?.substring(0, 6)}...{account?.substring(account.length - 4)}
          </WalletInfo>
        )}
      </StyledNavbar>
    </>
  );
};
