import React, { useEffect, useState } from "react";
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { NavLink } from "react-router-dom";
// import {
//   NoEthereumProviderError,
//   UserRejectedRequestError as UserRejectedRequestErrorInjected
// } from '@web3-react/injected-connector';
// import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector';
import { Web3Provider } from '@ethersproject/providers';
import { useEagerConnect, useInactiveListener } from '../../hooks/web3';
import styled, { css } from 'styled-components';
import { AbstractConnector } from '@web3-react/abstract-connector';
import {
    injected,
    network,
    walletconnect
  } from '../../constants/connectors';
import { Button, Logo } from ".";
import { WalletInfo } from "./WalletInfo";

// enum ConnectorNames {
//     Injected = 'Injected',
//     Network = 'Network',
//     WalletConnect = 'WalletConnect'
// };
  
// const connectorsByName: { [key in ConnectorNames]: AbstractConnector } = {
//     [ConnectorNames.Injected]: injected,
//     [ConnectorNames.Network]: network,
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
    background: #DA3434;
    color: #FFFAFA;
    font-family: Anonymous Pro;
    font-style: bold;
    font-size: 25.92px;
    line-height: 26px;
`;

export const Navbar = (): JSX.Element => {
    const context = useWeb3React<Web3Provider>()
    const { connector, library, chainId, account, activate, deactivate, active, error } = context;

    const [activating, setActivating] = useState<boolean>(false);
    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = useState<any>()

    useEffect(() => {
        console.log(account);
        console.log(chainId);
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector])

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect()

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector)

    return (
        <>
        { chainId === undefined ? '' : chainId !== 1 ? <Alert>현재 Ethereum 메인넷만 지원하며, 지원하지 않는 네트워크로 연결되어 있습니다.</Alert>: ''}
            <StyledNavbar>
                <Logo/>
                <StyledContainer>
                    <NavLink to="/claim" activeClassName="hurray">
                        Claim
                    </NavLink>
                    <NavLink to="/rule" activeClassName="hurray">
                        Rule
                    </NavLink>
                </StyledContainer>
                {account === undefined ? 
                    <Button size={'medium'}
                        onClick={() => {
                            setActivatingConnector(injected)
                            activate(injected)
                        }}>Connect
                    </Button> : <WalletInfo>{account?.substring(0, 6)}...{account?.substring(account.length - 4)}</WalletInfo>
                }
            </StyledNavbar>
        </>
    );
}