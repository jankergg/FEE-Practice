import React from "react";
import { Observable, from, map, filter, interval, takeUntil, take } from "rxjs";
import { useObservable } from "rxjs-hooks";
import "@/styles/page.css";

const wrapArrayIntoObservable = (arr: number[]) => {
  return new Observable<number>((sub) => {
    for (let item of arr) {
      sub.next(item);
    }
  });
};

const obs = wrapArrayIntoObservable([1, 2, 3, 4, 5]);
const ob2 = from([1, 2, 3, 4, 5]);

const RxJsPage = () => {
  const value = useObservable(() =>
    interval(900).pipe(
      take(10),
      map((val) => {
        console.log("val:", val);
        return val * 3;
      })
    )
  );

  return (
    <div className='page'>
      <div className='text-3xl text-violet-500 underline'>hello,</div>
      <div className='text-5xl text-red-400'>{value}</div>
    </div>
  );
};

export default RxJsPage;
