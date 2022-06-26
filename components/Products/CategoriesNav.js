import React from 'react'

const style ={
    wrapper:'my-8 flex items-center justify-around w-[100%] md:w-[60%] lg:w-[50%] mx-auto flex-wrap',
    singleNav:'text-stone-500 border-move-animation-products cursor-pointer mx-4',
}

const CategoriesNav = (props) => {
    const handleNavClick =(value)=>{
        props.clickedCategory(value)
    }
  return (
    <ul className={style.wrapper} style={{ fontFamily: 'Poppins, sans-serif' }}>
        <li className={style.singleNav} onClick={()=>handleNavClick('allproducts')}>All Products</li>
        <li className={style.singleNav} onClick={()=>handleNavClick('clothes')}>Clothes</li>
        <li className={style.singleNav} onClick={()=>handleNavClick('watches')}>Watches</li>
        <li className={style.singleNav} onClick={()=>handleNavClick('shoes')}>Shoes</li>
        <li className={style.singleNav} onClick={()=>handleNavClick('electronics')}>Electronics</li>
        <li className={style.singleNav} onClick={()=>handleNavClick('books')}>Books</li>
    </ul>
  )
}

export default CategoriesNav