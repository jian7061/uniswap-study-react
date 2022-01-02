import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { network } from '../../constants/connectors';
import { useEagerConnect, useInactiveListener } from '../../hooks';

export const Web3ReactManager = ({ children }: { children: React.ReactElement }): JSX.Element => {
  const { active } = useWeb3React();
  const { active: networkActive, error: networkError, activate: activateNetwork } = useWeb3React('NETWORK');

  const triedEager = useEagerConnect();

  useEffect(() => {
    if (triedEager && !networkActive && !networkError && !active) {
      activateNetwork(network);
    }
  }, [triedEager, networkActive, networkError, activateNetwork, active]);

  useInactiveListener(!triedEager);

  // handle delayed loader state
  // const [showLoader, setShowLoader] = useState(false)
  // useEffect(() => {
  //     const timeout = setTimeout(() => {
  //     setShowLoader(true)
  //     }, 600)

  //     return () => {
  //     clearTimeout(timeout)
  //     }
  // }, [])

  // if (!triedEager) {
  //     return (<></>);
  // }

  return children;
};
