import React, { useState } from 'react'
import Header from '../Header/Header'
import SingleCartItem from './SingleCartItem'
import PaymentDetails from './PaymentDetails'
import Checkout from './Checkout'
const style = {
  wrapper: 'bg-[#F5F4F4] pb-8',
  cartNav: 'flex w-[98%] md:w-[70%] lg:w-[55%] mx-auto justify-around',
  nav1: 'px-6 md:px-32 py-4 md:py-6 bg-stone-400 text-stone-100 font-bold tracking-wide w-[45%] flex items-center justify-center cursor-pointer hover:bg-stone-500 transition-all duration-[350ms] my-8 text-xs md:text-sm',
  itemsContainer: 'bg-white px-4 md:px-6 py-6 md:py-8 w-[95%] lg:w-[85%] mx-auto',
  itemsNav: ' bg-[#F5F4F4] flex text-stone-700 py-2 items-center justify-around',
  para: ' text-center w-[20%] text-xs md:text-sm',
  singleItemListContainer: 'flex flex-col',
  paymentDetails: 'my-12 bg-white w-[65%] md:w-[50%] lg:w-[40%] mx-auto',
}
const item1 = {
  img: '/img/products/product-1.webp',
  name: 'Bag',
  price: 3300,
  quantity: 2
}
const item2 = {
  img: '/img/products/product-2.webp',
  name: 'Shoes',
  price: 1500,
  quantity: 1
}
const item3 = {
  img: '/img/products/product-3.webp',
  name: 'Glasses',
  price: 2000,
  quantity: 1
}
const Cart = () => {
  const [menu, setMenu] = useState('shoppingcart')
  const handleMenuClick =(value)=>{
    setMenu(value)
  }
  return (
    <div className={style.wrapper}>
      <Header headingText="CART" />
      {/* adding the cart nav (cart and checkout)*/}
      <div className={style.cartNav}>
        <div className={style.nav1} onClick={()=>{handleMenuClick('shoppingcart')}}>
          SHOPPING CART
        </div>
        <div className={style.nav1} onClick={()=>{handleMenuClick('checkout')}}>
          CHECKOUT
        </div>
      </div>

      {/* adding the items container */}
      {menu === 'shoppingcart' ? <div className={style.itemsContainer}>
        {/* nav */}
        <div className={style.itemsNav} style={{ fontFamily: 'Poppins, sans-serif' }}>
          <p className={style.para}>PRODUCT</p>
          <p className={style.para}>PRICE</p>
          <p className={style.para}>QUANTITY</p>
          <p className={style.para}>TOTAL</p>
          <p className={style.para}>REMOVE</p>
        </div>
        {/* mapping the items-list */}

        <div className={style.singleItemListContainer}>
          <SingleCartItem item={item1} />
          <SingleCartItem item={item2} />
          <SingleCartItem item={item3} />
        </div>
        {/* adding the payment details */}
      </div> : <Checkout />}

      <div className={style.paymentDetails}>
        <PaymentDetails />
      </div>
    </div>
  )
}

export default Cart