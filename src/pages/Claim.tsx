import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { formatEther, parseUnits } from '@ethersproject/units';
import Dev from './Token';
import styled from 'styled-components';
import { BigNumber } from '@ethersproject/bignumber';

import { Button, Main, Container, InputField } from '../components/common';
import { AddressInput } from '../components/AddressInput';

import claim from '../claim.json';
import { useMerkleDistributorContract, useContract } from '../hooks/useContract';
import GetPairPoolPrice from '../components/GetPairPoolPrice';

interface ClaimType {
  merkleRoot: string;
  tokenTotal: string;
  claims: {
    [key: string]: {
      index: number;
      amount: string;
      proof: string[];
    };
  };
}

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

export function Claim(): JSX.Element {
  const { library } = useWeb3React();
  const Distributor = useMerkleDistributorContract();
  const [result] = useState<ClaimType>(claim);
  const [address, setAddress] = useState<string>('');
  const [amount, setAmount] = useState<BigNumber>(BigNumber.from('0'));
  const [proof, setProof] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(999);

  const changeHandler = (value: string): void => {
    setAddress(value);
  };

  useEffect(() => {
    if (result.claims[`${address}`] !== undefined) {
      Distributor?.isClaimed(result.claims[`${address}`].index).then((claimed) => {
        setIndex(result.claims[`${address}`].index);
        setProof(result.claims[`${address}`].proof);
        claimed ? setAmount(BigNumber.from('0')) : setAmount(BigNumber.from(result.claims[`${address}`].amount));
      });
    } else {
      setAmount(BigNumber.from('0'));
      setProof([]);
      setIndex(999);
    }
  }, [address, library]);

  const onSubmit = () => {
    window.location.pathname = address;
  };

  return (
    <>
      <Container>
        <Main>
          <article>
            <InputGroup>
              <AddressInput
                uniqueKey={'addr'}
                size={'medium'}
                value={address}
                placeholder={'주소를 입력하세요'}
                onChange={changeHandler}
              />
              <Button size={'medium'} onClick={onSubmit} outline>
                Submit
              </Button>
            </InputGroup>
          </article>
          <GetPairPoolPrice />
        </Main>
      </Container>
    </>
  );
}
