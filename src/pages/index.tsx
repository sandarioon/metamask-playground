import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import { setUserWallet } from '@/store/actions';
import { IState } from '@/types/types';

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state: IState) => state.user);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const connectWallet = async () => {
    // Metamask expands window object and adds ethereum param to it.
    // If we don;t have window.ethereum, that means that extension is not installed yet

    if (user.wallet) {
      router.push('/balancer');
      return;
    }

    // @ts-ignore
    if (typeof window.ethereum !== 'undefined') {
      // @ts-ignore
      window.ethereum.request({ method: 'eth_requestAccounts' }).then((accountsArray) => {
        dispatch(setUserWallet(accountsArray[0]));
      });
      setErrorMessage('');
      router.push('/balancer');
    } else {
      setErrorMessage('Metamask is not installed');
    }
  };

  return (
    <div className="">
      <Head>
        <title>Novus Balancer</title>
      </Head>
      <main className="w-screen h-screen bg-black">
        <div className="flex flex-col pl-20 pt-12 h-full">
          <div className="flex">
            <div className="">
              <Link href="/" className="font-['Open Sans'] text-white text-base font-bold">
                BALANCER
              </Link>
              <p className="mt-24 font-['Open Sans'] text-white text-[40px] font-bold max-w-lg">
                Track Your Crypto Wealth with Our Wallet Balance Service
              </p>
              <button type="button" className="bg-white rounded h-12 font-bold min-w-[550px] mt-36" onClick={connectWallet}>{user.wallet === '' ? 'METAMASK' : 'GO TO BALANCER'}</button>
              {errorMessage && (
              <p className="mt-6 text-[#FF6666] animate-bounce">
                You should install
                {' '}
                <a href="https://metamask.io/" className="hover:text-[#ffffff] text-[#FF6666] font-bold underline animate-bounce">Metamask</a>
                {' '}
                first!
              </p>
              )}
            </div>
            <div className="flex ml-20">
              <div className="flex-col">
                <div className="ml-12 mt-40 h-[88px] w-[88px] bg-[#FF6666] rounded-[44px]" />
              </div>
              <div className="flex-col ml-6">
                <div className="h-[88px] w-[88px] bg-[#FFC700] mt-48" />
                <div className="h-[88px] w-[88px] bg-[#FFC700] mt-20" />
              </div>
              <div className="flex-col ml-4">
                <div className="h-[88px] w-[88px] bg-[#4478FF] rounded-[44px] ml-16 mt-16" />
                <div className="h-[88px] w-[88px] bg-[#4478FF] rounded-[44px] mt-44" />
                <div className="h-[88px] w-[88px] bg-[#FF6666] rounded-[44px] mt-8 ml-12" />
              </div>
              <div className="flex-col ml-3">
                <div className="h-[88px] w-[88px] bg-[#FFC700] mt-32" />
                <div className="h-[88px] w-[88px] bg-[#FFC700] mt-72" />
              </div>
            </div>
          </div>
          <div className="grow" />
          <div className="flex">
            <Link href="/policy" className="text-white underline font-['Open Sans'] text-[14px] opacity-50 mb-20">PRIVACY POLICY</Link>
            <div className="grow" />
            <div className="">
              <span className="text-white font-['Open Sans'] text-[16px] mb-20 mr-20 font-normal">
                ©
                {' '}
                {new Date().getFullYear()}
                {' '}
                All rights reserved
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
