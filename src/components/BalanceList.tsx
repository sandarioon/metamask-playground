import React from 'react';
import { IBalance } from '@/types/types';

function BalanceList({ balances }: { balances: IBalance[] }) {
  return (
    <div className="flex flex-col">
      <div className="bg-[#F7F7F7] items-center h-[48px] rounded-t-lg drop-shadow-md flex">
        <span className="ml-10 min-w-[180px] text-[#2E2E2E]">Token</span>
        <span className="ml-32 min-w-[100px] text-[#2E2E2E]">Balance</span>
      </div>
      {balances.map((balance, index) => (
        <div key={index} className="bg-white items-center h-[48px] border-[#F7F7F7] border-y drop-shadow-md flex">
          <div className="flex flex-col">
            <span className="ml-10 min-w-[180px] text-[14px] text-[#2E2E2E]">{balance.token}</span>
            <span className="ml-10 min-w-[180px] text-[12px] text-[#5D5D5D]">{balance.description || `Description for token ${balance.token}`}</span>
          </div>
          <span className="ml-32 text-[#2E2E2E]">{balance.amount}</span>
        </div>
      ))}
      <div className="bg-white items-center h-[56px] rounded-b-lg drop-shadow-md flex">
        <div className="grow" />
        <div className="flex w-[40px] h-[40px] justify-center items-center bg-[#F0F8FF] rounded">
          <p className="text-[#0080FF] text-[14px]">
            1
          </p>
        </div>
        <div className="grow" />
      </div>
    </div>
  );
}

export default BalanceList;
