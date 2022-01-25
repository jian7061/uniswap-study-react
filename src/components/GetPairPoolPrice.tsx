import { useEffect, useState } from 'react';
import { useContract } from '../hooks/useContract';
import { Contract, ethers } from 'ethers';
import { Pool, Position, NonfungiblePositionManager, nearestUsableTick } from '@uniswap/v3-sdk';
import { Address } from 'cluster';
import { Percent, Price, Token, CurrencyAmount } from '@uniswap/sdk-core';
import { abi as IUniswapV3FactoryABI } from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Factory.sol/IUniswapV3Factory.json';
import { abi as IUniswapV3PoolABI } from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json';
import { RIVET_KEY } from '../constants';
import { BigNumber } from '@ethersproject/bignumber';

const PairPrice = () => {
  const [pairPoolAddress, setPairPoolAddress] = useState<string>('');
  const [pairContract, setPairContract] = useState<Contract | undefined>(undefined);
  const JsonRpcProvider = new ethers.providers.JsonRpcProvider(
    'https://mainnet.infura.io/v3/798b6859162b4ff0864a9da8fc56b806'
  );
  const USDCAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
  const wethAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
  const poolFee = 3000;

  const FactoryContract = useContract('0x1F98431c8aD98523631AE4a59f267346ea31F984', IUniswapV3FactoryABI);

  function getPairAddress() {
    async function getAddress() {
      setPairPoolAddress(await FactoryContract?.getPool(wethAddress, USDCAddress, poolFee));
    }
    getAddress();
  }

  function getpairContract() {
    return new ethers.Contract(pairPoolAddress, IUniswapV3PoolABI, JsonRpcProvider);
  }

  useEffect(() => {
    const timer = setInterval(getPairAddress, 2000);
    if (pairPoolAddress !== '' || typeof pairContract == 'undefined') {
      clearInterval(timer);
      setPairContract(getpairContract());
    }
  }, [pairPoolAddress]);

  interface Immutables {
    factory: string;
    token0: string;
    token1: string;
    fee: number;
    tickSpacing: number;
    maxLiquidityPerTick: ethers.BigNumber;
  }

  interface State {
    liquidity: ethers.BigNumber;
    sqrtPriceX96: ethers.BigNumber;
    tick: number;
    observationIndex: number;
    observationCardinality: number;
    observationCardinalityNext: number;
    feeProtocol: number;
    unlocked: boolean;
  }

  async function getPoolImmutables() {
    const immutables: Immutables = {
      factory: await pairContract?.factory(),
      token0: await pairContract?.token0(),
      token1: await pairContract?.token1(),
      fee: await pairContract?.fee(),
      tickSpacing: await pairContract?.tickSpacing(),
      maxLiquidityPerTick: await pairContract?.maxLiquidityPerTick(),
    };
    return immutables;
  }

  async function getPoolState() {
    const slot = await pairContract?.slot0();
    console.log(pairContract);
    const PoolState: State = {
      liquidity: await pairContract?.liquidity(),
      sqrtPriceX96: slot[0],
      tick: slot[1],
      observationIndex: slot[2],
      observationCardinality: slot[3],
      observationCardinalityNext: slot[4],
      feeProtocol: slot[5],
      unlocked: slot[6],
    };
    return PoolState;
  }
  async function liquidityExamples(sender: string, exampleType: number) {
    const immutables = await getPoolImmutables();
    const state = await getPoolState();
    const WETH = new Token(1, immutables.token0, 18, 'WETH', 'Wrapped Ether');
    const USDC = new Token(1, immutables.token1, 6, 'USDC', 'USD Coin');

    //create a pool
    const WETH_USDC_POOL = new Pool(
      WETH,
      USDC,
      immutables.fee,
      state.sqrtPriceX96.toString(),
      state.liquidity.toString(),
      state.tick
    );

    const token0Price = WETH_USDC_POOL.token0Price;
    const token1Price = WETH_USDC_POOL.token1Price;
    console.log(token0Price, token1Price);
  }
  liquidityExamples('0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf', 0);
  return <div>dd</div>;
};

export default function GetPairPoolPrice() {
  return (
    <div>
      <PairPrice />
    </div>
  );
}
