import React from 'react'



const style = {
    wrapper: 'flex flex-col',
    smallHeading: 'border-b-2 border-stone-200 text-2xl md:text-3xl max-w-fit mx-auto py-2 text-stone-800 ',
    btn: 'bg-opacity-[0.8] hover:bg-opacity-[0.95] transition duration-[300ms] my-6 bg-red-400 mx-auto px-8 md:px-12 py-2 md:py-3 text-stone-800 font-bold tracking-wide',
    subtotal: ' text-stone-400 text-stone-400 flex border-b-[1px] border-stone-400 w-[75%] md:w-[50%] mx-auto my-6 ',
    para: '  flex-1',
    amount: '',
    orderTotal:'text-red-400 w-[75%] md:w-[50%] mx-auto my-6 font-normal flex'
}
const PaymentDetails = () => {
    return (
        <div className={style.wrapper}>
            <h2 className={style.smallHeading} style={{ fontFamily: 'Yeseva One, cursive' }} >Payment Details</h2>
            <div className={style.subtotal} style={{ fontFamily: 'Poppins, sans-serif' }}>
                <p className={style.para}>Cart Subtotal </p>
                <p className={style.amount}>Rs. 5000</p>
            </div>
            <div className={style.orderTotal}style={{ fontFamily: 'Poppins, sans-serif' }}>
                <p className={style.para}>Order Total </p>
                <p className={style.amount}>Rs. 10100</p>
            </div>
            <button className={style.btn}>PLACE ORDER</button>

        </div>
    )
}

export default PaymentDetails;