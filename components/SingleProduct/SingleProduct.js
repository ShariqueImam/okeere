import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {urlForThumbnail} from '../../pages/api/image'
import NextLink from 'next/link'
const style = {
  wrapper: 'px-3 md:px-4 py-4 md:py-4 bg-white flex flex-col items-center ',
  img: 'mb-4',
  name: 'font-semibold my-3',
  price:'my-2',
  buttonContainer: 'transition-all duration-[350ms] cursor-pointer flex items-center justify-center mx-3 bg-stone-400 hover:bg-stone-500 px-4 md:px-6 py-2 md:py-3',
  btn: 'flex-1 tracking-wide text-stone-100',
  img:'w-[60vw] md:w-[25vw] lg:w-[12vw] h-[30vh] lg:h-[20vh]'
}
const SingleProduct = ({ item }) => {
  const handleAddToCart =()=>{

  }
  console.log(item.image)
  return (
    <NextLink href={`/products/${item.slug.current}`} passHref>
    <div className={style.wrapper} style={{ fontFamily: 'Poppins, sans-serif' }}>
      <img src={`${urlForThumbnail(item.image)}`} alt="Image for product" className={style.img} />
      <h2 className={style.name}>{item.name.toUpperCase()}</h2>
      <h2 className={style.price}>Rs.{item.price}</h2>
      <div className={style.buttonContainer} onClick={handleAddToCart} >
        <button className={style.btn}>ADD TO CART</button>
        <AiOutlineShoppingCart className="text-2xl text-white grow-1 mx-3" />
      </div>
    </div>
    </NextLink>
  )
}

export default SingleProduct