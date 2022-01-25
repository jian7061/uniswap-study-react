// import styled from 'styled-components';
// import { Button, InputField } from '../components/common';
// // import { ABI } from '../constants/abi';
// import { useJianToken } from '../hooks/useContract';
// import { useState, useEffect } from 'react';
// import { BigNumber } from '@ethersproject/bignumber';
// import { useWeb3React } from '@web3-react/core';
// import { formatEther, parseUnits } from '@ethersproject/units';
// import { AddressInput } from '../components/AddressInput';

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
//   grid-gap: 16px;

//   & > Main {
//     grid-column: 2 / 12;
//   }
// `;

// type BalanceFormData = {
//   address: string;
// };

// type TransferFormData = {
//   address: string;
//   value: BigNumber;
// };

// type MintFormData = {
//   value: any;
// };

// type BurnFormData = {
//   value: any;
// };

// export function Dev(): JSX.Element {
//   const jianToken = useJianToken();

//   const Balance = () => {
//     const [balance, setBalance] = useState<BigNumber>(BigNumber.from('0'));

//     async function handleBalance(data: BalanceFormData) {
//       // setBalance(await jianToken?.balanceOf(data?.address)?.toString());
//       console.log('balance', await jianToken?.balanceOf(data?.address));
//     }
//     return (
//       <div>
//         {/* 처음에는 잔액 안 보이다가 submit 보여주고 싶은디.. */}
//         <p>1. get one's balance: {balance !== BigNumber.from('0') ? formatEther(balance) : null}</p>
//         <label htmlFor='name'>Address</label>
//       </div>
//     );
//   };

//   const Transfer = () => {
//     const [address, setAddress] = useState<string>('');
//     const [value, setValue] = useState<string>('');

//     const addressHandler = (address: string): void => {
//       setAddress(address);
//     };
//     const valueHandler = (value: string): void => {
//       setValue(value);
//     };

//     return (
//       <div>
//         <p>2. transfer</p>
//         <InputField uniqueKey={'address'} value={address} onChange={addressHandler} />
//         <InputField uniqueKey={'value'} value={value} onChange={valueHandler} />
//         <Button
//           onClick={async () => {
//             await jianToken?.transfer(address, parseUnits(value));
//           }}>
//           transfer
//         </Button>
//       </div>
//     );
//   };

//   const Mint = () => {
//     const [value, setValue] = useState<BigNumber>(BigNumber.from('0'));

//     async function handleMint(data: MintFormData) {
//       console.log('mint', (await jianToken?.mint(data?.value))?.toString());
//       //confirm 하면 mint 결과 [object Object]이렇게 나옴 -> 결과 처리?
//     }
//     return (
//       <div>
//         <p>3. Mint</p>
//         <label htmlFor='name'>Value</label>
//       </div>
//     );
//   };

//   const Burn = () => {
//     const [value, setValue] = useState<BigNumber>(BigNumber.from('0'));

//     async function handleBurn(data: BurnFormData) {
//       console.log('burn', (await jianToken?.burn(data?.value))?.toString());
//       //confirm 하면 burn 결과 [object Object]이렇게 나옴 -> 결과 처리?
//     }
//     return (
//       <div>
//         <p>4. Burn</p>
//         <label htmlFor='name'>Value</label>
//       </div>
//     );
//   };

//   return (
//     <Container>
//       <>
//         <Balance />
//         <Transfer />
//         <Mint />
//         <Burn />
//       </>
//     </Container>
//   );
// }

import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { formatEther, parseUnits } from '@ethersproject/units';
import styled from 'styled-components';
import { BigNumber } from '@ethersproject/bignumber';
import { Web3Provider, Provider } from '@ethersproject/providers';
import { Button, Main, Container, InputField, Validation, ERROR } from '../components/common';
import { AddressInput } from '../components/AddressInput';
import { useParams } from 'react-router';
import claim from '../claim.json';
import GetPairPoolPrice from '../components/GetPairPoolPrice';
import { useTokenContract } from '../hooks/useContract';
import { useActiveWeb3React } from '../hooks';
import { Contract, ethers } from 'ethers';

// // default uses “http://localhost:8545”
// // can also input your own connection with "https://mainnet.infura.io/v3/<YOUR-ENDPOINT-HERE>" as an input
// // export const JsonRpcProvider = new ethers.providers.JsonRpcProvider();
// export const JsonRpcProvider = new ethers.providers.JsonRpcProvider(
//   'https://mainnet.infura.io/v3/798b6859162b4ff0864a9da8fc56b806'
// );

// // pool address for DAI/USDC 0.05%
// // const poolAddress = '0x6c6bc977e13df9b0de53b251522280bb72383700';

// const USDCAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
// const wethAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';

// // For this example, we will set the pool fee to 0.3%.
// const poolFee = 3000;
// const FactoryContract = useFactoryContract('0x1F98431c8aD98523631AE4a59f267346ea31F984');

// // const poolContract = new ethers.Contract(poolAddress, IUniswapV3PoolABI, JsonRpcProvider);
// const pairPoolAddress = FactoryContract?.getPool(wethAddress, USDCAddress, poolFee);

// const pairPoolContract = new ethers.Contract(pairPoolAddress, IUniswapV3FactoryABI, JsonRpcProvider);

// interface Immutables {
//   factory: string;
//   token0: string;
//   token1: string;
//   fee: number;
//   tickSpacing: number;
//   maxLiquidityPerTick: ethers.BigNumber;
// }

// interface State {
//   liquidity: ethers.BigNumber;
//   sqrtPriceX96: ethers.BigNumber;
//   tick: number;
//   observationIndex: number;
//   observationCardinality: number;
//   observationCardinalityNext: number;
//   feeProtocol: number;
//   unlocked: boolean;
// }

// async function getPoolImmutables() {
//   const immutables: Immutables = {
//     factory: await pairPoolContract.factory(),
//     token0: await pairPoolContract.token0(),
//     token1: await pairPoolContract.token1(),
//     fee: await pairPoolContract.fee(),
//     tickSpacing: await pairPoolContract.tickSpacing(),
//     maxLiquidityPerTick: await pairPoolContract.maxLiquidityPerTick(),
//   };
//   return immutables;
// }

// async function getPoolState() {
//   const slot = await pairPoolContract.slot0();
//   const PoolState: State = {
//     liquidity: await pairPoolContract.liquidity(),
//     sqrtPriceX96: slot[0],
//     tick: slot[1],
//     observationIndex: slot[2],
//     observationCardinality: slot[3],
//     observationCardinalityNext: slot[4],
//     feeProtocol: slot[5],
//     unlocked: slot[6],
//   };
//   return PoolState;
// }

// async function liquidityExamples(sender: string, exampleType: number) {
//   const immutables = await getPoolImmutables();
//   const state = await getPoolState();
//   const WETH = new Token(1, immutables.token0, 18, 'WETH', 'Wrapped Ether');
//   const USDC = new Token(1, immutables.token1, 6, 'USDC', 'USD Coin');
//   const block = await JsonRpcProvider.getBlock(JsonRpcProvider.getBlockNumber());
//   const deadline = block.timestamp + 200;

//   //create a pool
//   const WETH_USDC_POOL = new Pool(
//     WETH,
//     USDC,
//     immutables.fee,
//     state.sqrtPriceX96.toString(),
//     state.liquidity.toString(),
//     state.tick
//   );

//   const token0Price = WETH_USDC_POOL.token0Price;
//   const token1Price = WETH_USDC_POOL.token1Price;

//   const Q96 = BigNumber.from('2').pow('96').toString();
//   const Q192 = BigNumber.from('2').pow('192').toString();

//   const sqrtPriceX96 = state.sqrtPriceX96.toString();

//   const numerator = BigNumber.from(sqrtPriceX96).mul('2');
//   const denominator = BigNumber.from(Q192);

//   console.log(token0Price.toFixed(), token1Price.toFixed());

// // call the example function by passing the sender, e.g.:
// liquidityExamples('0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf', 0);

const TokenInfo = () => {
  const { library } = useWeb3React();

  const context = useWeb3React<Web3Provider>();
  const { account } = context;

  const AddressCheck: Validation = (value: string): ERROR => {
    if (/^(0x)[a-fA-F0-9]{40}$/.exec(value) === null) return [true, '이더리움 주소 형식과 다릅니다'];
    return [false, ''];
  };

  const params = useParams();

  const param = params[0];

  const [ContractAddress, setContractAddress] = useState(param);

  const [tokenName, setTokenName] = useState<string>('');
  const [tokenSymbol, setTokenSymbol] = useState<string>('');
  const [decimals, setDecimals] = useState<number>();
  const [balance, setBalance] = useState<BigNumber>(BigNumber.from('0'));
  const [show, setShow] = useState(false);
  const TokenContract = useTokenContract(ContractAddress);

  const provider = ethers.getDefaultProvider();

  function resolver() {
    async function resolve() {
      setContractAddress(await provider.getResolver(param));
    }
    resolve();
  }

  function getTokenInfo() {
    async function getTokenName() {
      setTokenName(await TokenContract?.name());
    }
    getTokenName();
    async function getTokenSymbol() {
      setTokenSymbol(await TokenContract?.symbol());
    }
    getTokenSymbol();

    async function getDecimal() {
      setDecimals(await TokenContract?.decimals());
    }
    getDecimal();
    async function getBalance() {
      setBalance(await TokenContract?.balanceOf(account));
    }
    getBalance();
  }

  function AddressTypeCheck() {
    if (param.startsWith('0x')) {
      setContractAddress(param);
    } else {
      resolver();
    }
  }

  // useEffect(() => {
  //   if (ContractAddress === undefined) {
  //     setTimeout(() => AddressTypeCheck, 3000);
  //   }
  //   AddressTypeCheck();
  //   getTokenInfo();
  // }, [library]);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    if (show) {
      clearTimeout(timer);
      getTokenInfo();
    }
  }, [library, show]);
  return (
    <Container>
      <Main>
        <h3>Address:[{ContractAddress}]</h3>
        <p>Name:[{tokenName}]</p>
        <p>Symbol:[{tokenSymbol}]</p>
        <p>Decimal:[{decimals}]</p>
        <p>Balance:[{balance !== BigNumber.from('0') ? formatEther(balance) : null}]</p>
        <p>Price:</p>
      </Main>
    </Container>
  );
};

const Transfer = () => {
  const pathname = window.location.pathname.slice(1);
  const TokenContract = useTokenContract(pathname);
  const [address, setAddress] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [decimals, setDecimals] = useState<number>();

  const addressHandler = (address: string): void => {
    setAddress(address);
  };
  const valueHandler = (value: string): void => {
    setValue(value);
  };

  function getTokenInfo() {
    async function getDecimal() {
      setDecimals(await TokenContract?.decimals());
    }
    getDecimal();
  }

  useEffect(() => {
    const timer = setTimeout(getTokenInfo, 1000);
    if (decimals) {
      clearTimeout(timer);
      getTokenInfo();
    }
  }, [decimals]);

  return (
    <div>
      <p>Transfer</p>
      <InputField placeholder='reciever(address)' uniqueKey={'address'} value={address} onChange={addressHandler} />
      <InputField placeholder='number of tokens(amount)' uniqueKey={'value'} value={value} onChange={valueHandler} />
      <Button
        onClick={async () => {
          await TokenContract?.transfer(address, parseUnits(value, decimals));
        }}>
        transfer
      </Button>
    </div>
  );
};

const Approve = () => {
  const pathname = window.location.pathname.slice(1);
  const TokenContract = useTokenContract(pathname);
  const [address, setAddress] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const addressHandler = (address: string): void => {
    setAddress(address);
  };
  const valueHandler = (value: string): void => {
    setValue(value);
  };

  return (
    <div>
      <p>Approve</p>
      <InputField placeholder='spender(address)' uniqueKey={'address'} value={address} onChange={addressHandler} />
      <InputField placeholder='number of tokens(amount)' uniqueKey={'value'} value={value} onChange={valueHandler} />
      <Button
        onClick={async () => {
          await TokenContract?.approve(address, parseUnits(value));
        }}>
        approve
      </Button>
    </div>
  );
};

const Tokens = () => {
  return (
    <div>
      <TokenInfo />
      <Transfer />
      <Approve />
    </div>
  );
};

export default Tokens;
