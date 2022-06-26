import React from "react";
import SingleCounter from "./SingleCounter";

const style = {
  wrapper: 'h-[60%] flex justify-around my-6 flex-wrap',
  singleCounter: 'flex flex-col items-center justify-center w-[45%] p-4',
  details: 'text-gray-500 text-lg sm:text-lg md:text-md',
}
const Counter = () => {
  return (

    <div className={style.wrapper}>
        <div className={style.singleCounter}>
          <SingleCounter start={0} end={125} duration={2} />
          <p className={style.details}>
            Products
          </p>
        </div>


        <div className={style.singleCounter}>
          <SingleCounter start={0} end={800} duration={1} />
          <p className={style.details}>
            Products Sold
          </p>
        </div>

        <div className={style.singleCounter}>
          <SingleCounter start={0} end={300} duration={1} />
          <p className={style.details}>
            Happy Customers
          </p>
        </div>
        <div className={style.singleCounter}>
          <SingleCounter start={0} end={50} duration={2} />
          <p className={style.details}>
            Brands
          </p>
        </div>
    </div>


  );
};

export default Counter;
