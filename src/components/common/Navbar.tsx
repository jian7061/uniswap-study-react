import { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { NavLink } from 'react-router-dom';
import { Web3Provider } from '@ethersproject/providers';
import styled from 'styled-components';
import { injected, walletconnect } from '../../constants/connectors';
import { Button, Logo, Dialog } from '.';
import { WalletInfo } from './WalletInfo';

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
  font-size: 25.92px;
  line-height: 26px;
`;

export const Navbar = (): JSX.Element => {
  const [dialog, setDialog] = useState(false);
  const context = useWeb3React<Web3Provider>();
  const { chainId, account, activate, deactivate } = context;

  const handleConnect = () => {
    setDialog(true);
  };

  const onCancel = () => {
    setDialog(false);
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
      <Dialog headertitle={'연결할 지갑을 선택하세요'} onCancel={onCancel} visible={dialog}>
        <Button
          size={'medium'}
          onClick={() => {
            activate(walletconnect);
            onCancel();
          }}>
          WalletConnect
        </Button>
        <Button
          size={'medium'}
          onClick={() => {
            activate(injected);
            onCancel();
          }}>
          브라우저 확장
        </Button>
      </Dialog>
    </>
  );
};
