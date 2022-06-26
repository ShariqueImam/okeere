import React from 'react'
import { FaMoneyBillWave } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { MdHighQuality } from 'react-icons/md'

const style = {
    wrapper: 'flex flex-col md:flex-row w-[90%] md:w-[90%] mx-auto justify-around items-center my-2 md:my-12',
    featuresContainer:"my-4 md:my-1 px-24 md:px-24 lg:px-48 py-4 md:py-8 border-[1px] border-stone-300 flex flex-col items-center justify-center",
    para:'text-gray-500 text-lg md:text-xl font-bold',

}
const Features = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.featuresContainer}>
                <MdHighQuality className="text-stone-500 text-2xl"/>
                <p className={style.para}>BEST QUALITY</p>
            </div>
            <div className={style.featuresContainer}>
                <FaMoneyBillWave className="text-stone-500 text-2xl"/>
                <p className={style.para}>MONEY BACK GUARANTEE</p>
            </div>
            <div className={style.featuresContainer}>
                <BiSupport className="text-stone-500 text-2xl"/>
                <p className={style.para}>24/7 SUPPORT</p>
            </div>

        </div>
    )
}
export default Features