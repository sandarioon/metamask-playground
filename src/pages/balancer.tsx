import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Web3 from 'web3';

import BalanceList from '@/components/BalanceList';
import { setUserBalances } from '@/store/actions';
import Spinner from '@/components/UI/Spinner';
import { IState } from '@/types/types';

const abi = require('../abi');

export default function balancer() {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state: IState) => state.user);
  const tokens = useSelector((state: IState) => state.tokens);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user.wallet) {
      router.push('/');
      return;
    }

    getTokensData();
  }, []);

  // TODO: Нужно переписать потом на SSR
  const getTokensData = async () => {
    // @ts-ignore
    const web3 = new Web3(window.ethereum);
    const promisePool = [];

    // Формируем пул промисов, чтобы отправить все запросы одновременно.
    // Далее разово их дожидаемся и форматируем
    for (let i = 0; i < tokens.length; i++) {
      const contractInstance = new web3.eth.Contract(abi, tokens[i].address);
      promisePool.push(contractInstance.methods.balanceOf(user.wallet).call());
    }

    const balanceInWei = await Promise.all(promisePool);
    const userBalances = balanceInWei.map((wei, index) => ({
      token: tokens[index].token,
      description: tokens[index].description,
      amount: web3.utils.fromWei(wei)
    }));

    dispatch(setUserBalances(userBalances));
    setLoading(false);
  };

  return (
    <div className="">
      <Head>
        <title>Balancer</title>
      </Head>
      <main className="w-screen h-screen bg-[#E8EBEE]">
        <div className="flex flex-col px-20 pt-12 h-full">
          <div className="flex">
            <Link href="/" className="font-['Open Sans'] text-black text-base font-bold">
              BALANCER
            </Link>
            <div className="grow" />
            <div className="text-black opacity-50 mt-2">Account</div>
            <button type="button" className="border hover:bg-white rounded ml-3 border-[#000000] px-3 min-h-[40px] opacity-50">
              <span className="text-black">
                {user.wallet.slice(0, 6).toUpperCase()}
                {' '}
                ...
                {' '}
                {user.wallet.slice(36, 42).toUpperCase()}
              </span>
            </button>
          </div>

          <div className="text-[40px] font-bold font-['Open Sans'] my-24">Assets</div>
          {loading ? (
            <div className="flex">
              <div className="grow" />
              <Spinner />
              <div className="grow" />
            </div>
          ) : <BalanceList balances={user.balances} />}

          <div className="grow" />
          <div className="flex">
            <Link href="/policy" className="text-black underline font-['Open Sans'] text-[14px] opacity-50 mb-20">PRIVACY POLICY</Link>
            <div className="grow" />
            <div className="">
              <p className="text-black font-['Open Sans'] text-[16px] mb-20 font-normal">
                ©
                {' '}
                {new Date().getFullYear()}
                {' '}
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
