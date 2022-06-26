import React from 'react'
import Link from 'next/link'

const style = {
    wrapper: 'flex flex-col my-12',
    headingContainer: 'flex items-center jusitfy-center flex-col my-12',
    smallHeading: ' text-4xl md:text-4xl max-w-fit mx-auto py-2 text-stone-800 ',
    btn: 'text-lg md:text-lg rounded-full px-12 md:px-24 py-4 md:py-6 max-w-fit mx-auto bg-stone-400 text-stone-100 hover:bg-stone-500 transition duration-[300ms]',
}
const ProductsButton = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.headingContainer}>
                <h2 className={style.smallHeading} style={{ fontFamily: 'Yeseva One, cursive' }} >Shop Online On Okeere</h2>
            </div>
            <Link href="/products" >
                <button className={style.btn} style={{ fontFamily: 'Poppins, sans-serif' }}>
                    View All Products
                </button></Link>

        </div>
    )
}

export default ProductsButton