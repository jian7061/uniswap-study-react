import { useEffect, useState } from "react";
import { useWeb3React } from '@web3-react/core';
import { formatEther } from '@ethersproject/units';

import styled from 'styled-components';
import { BigNumber } from '@ethersproject/bignumber';
import { Contract } from "ethers";

import { Button, Main } from "../components/common";
import { AddressInput } from "../components/AddressInput";
import { MERKLE_DISTRIBUTOR_ADDRESS } from "../constants";

import claim from "../claim.json";
import MerkleDistributorABI from "../ABIs/MerkleDistributor.json";

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

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 16px;

  & > Main {
    grid-column: 2 / 12;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

export function Claim(): JSX.Element {
  const { library } = useWeb3React();
  const [Distributor, setDistributor] = useState<Contract>();
  const [result] = useState<ClaimType>(claim);
  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<BigNumber>(BigNumber.from("0"));
  const [proof, setProof] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(999);

  const changeHandler = (value: string): void => {
    setAddress(value);
  };

  useEffect(() => {
    setDistributor(new Contract(MERKLE_DISTRIBUTOR_ADDRESS[1], MerkleDistributorABI, library?.getSigner()));

    if(result.claims[`${address}`] !== undefined) {
      Distributor?.isClaimed(result.claims[`${address}`].index).then(claimed => {
        setIndex(result.claims[`${address}`].index);
        setProof(result.claims[`${address}`].proof);
        claimed ? setAmount(BigNumber.from("0")) : setAmount(BigNumber.from(result.claims[`${address}`].amount));
      });
    } else {
      setAmount(BigNumber.from("0"));
      setProof([]);
      setIndex(999);
    }
  }, [address, library])

  return (
    <>
    <Container>
      <Main>
        <article>
          <h1>Drop the bean</h1>
          <h3 className='subheader'>아무런 대가 없이 호기심만으로 With☕️ 토큰을 사용하셨기에, bean the DAO의 거버넌스 토큰인 $BEAN을 드립니다.</h3>
        </article>

        <article>
          <p><strong>청구 가능한 수량:</strong> {formatEther(amount)}</p>
          <InputGroup>
            <AddressInput 
              uniqueKey={'addr'}
              size={'medium'}
              value={address}
              placeholder={"주소를 입력하세요"}
              onChange={changeHandler}/>
            <Button
              size={'medium'}
              onClick={async () => {
                await Distributor?.claim(index, address, amount, proof, { gasLimit: '320000' });
              }} outline>Claim</Button>
          </InputGroup>
        </article>
      </Main>
    </Container>
    {/* <div className="App"> */}
      {/* {Object.keys(connectorsByName).map(name => {
          const currentConnector  = connectorsByName[name];
          const activating = currentConnector === activatingConnector;
          const connected = currentConnector === connector;
          const disabled = !triedEager || !!activatingConnector || connected || !!error;

          return (
            <button
              style={{
                height: '3rem',
                borderRadius: '1rem',
                borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
                cursor: disabled ? 'unset' : 'pointer',
                position: 'relative'
              }}
              disabled={disabled}
              key={name}
              onClick={() => {
                setActivatingConnector(currentConnector)
                activate(connectorsByName[name])
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'black',
                  margin: '0 0 0 1rem'
                }}
              >
                {activating && 'spinner'}
                {connected && (
                  <span role="img" aria-label="check">
                    ✅
                  </span>
                )}
              </div>
              {name}
            </button>
          )
        })} */}
    {/* </div> */}
    </>
  );
}

