import React from 'react'


const style = {
    wrapper: 'bg-stone-800 flex flex-col mx-auto items-center justify-center py-1 md:py-4',
    list: 'block my-4 py-2 px-2 md:px-4 font-sm md:text-md text-gray-100 font-bold hover:text-stone-200 hover:text-stone-400  hover:mx-3 transition-all duration-[300ms]',
    signatureContent: 'text-stone-100 text-xs md:text-sm text-gray-400 py-2',
}
const Signature = () => {
    return (
        <div className={style.wrapper}>
            <ul style={{ fontFamily: 'Poppins, sans-serif' }} className="py-0 md:py-0 flex text-xs md:text-md tracking-wider ">
                <li>
                    <a aria-label="Home" href="/home" className={style.list} aria-current="page">Home</a>
                </li>
                <li>
                    <a aria-label="About" href="/about" className={style.list}>About</a>
                </li>
                <li>
                    <a  aria-label="Services" href="/products" className={style.list}>Products</a>
                </li>
        <li>
                    <a aria-label="Contact" href="/contact" className={style.list}>Contact</a>
                </li>
                <li>
                    <a aria-label="Pricing" href="/login" className={style.list}>Login</a>
                </li>
                <li>
                    <a aria-label="Pricing" href="/register" className={style.list}>Register</a>
                </li>
            </ul>

            <div className={style.signatureContent} style={{ fontFamily: 'Poppins, sans-serif' }}>&#169; Okeere, Designed by <span className='text-stone-200'>Sharique </span></div>
        </div>
    )
}

export default Signature