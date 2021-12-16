import React from "react";
import { atom, useRecoilState } from "recoil";

import "@/styles/page.css";

const CounterData = atom({
  key: "Counter",
  default: 0,
});

const Counter = () => {
  const [count, setCount] = useRecoilState(CounterData);
  return (
    <div className='border-1 border-orange-50'>
      <div className='text-bold text-xl text-blue-600 text-center p-2'>
        <span className='border-2 p-2 inline-block'>{count}</span>
      </div>
      <div className='text-center'>
        <button className='button' onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className='button ml-4' onClick={() => setCount(count - 1)}>
          Decrease
        </button>
      </div>
    </div>
  );
};

const RecoilPage = () => {
  return (
    <div className='page'>
      <Counter />
    </div>
  );
};

export default RecoilPage;
