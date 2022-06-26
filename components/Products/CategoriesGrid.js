import React from 'react'
import SingleProduct from '../SingleProduct/SingleProduct'
import NoProductFound from './NoProductFound'
const dummy = [
    {
        img: '/img/products/product-1.webp', name: 'School bag', price: 500 ,category:'allproducts'
    }, 
    { img: '/img/products/product-2.webp', name: 'SHoes', price: 1000 ,category:'shoes'},
    { img: '/img/products/product-3.webp', name: 'Glasses', price: 1000 ,category:'allproducts'},
    { img: '/img/products/product-4.webp', name: 'Travel Bag', price: 1000 ,category:'clothes'},
    { img: '/img/products/product-5.webp', name: 'Brown Jacket', price: 1000 ,category:'clothes'},
    { img: '/img/products/product-6.webp', name: 'Red jacket', price: 1000,category:'clothes' },
    { img: '/img/products/product-8.webp', name: 'Earphone', price: 1000 ,category:'electronics'},
    { img: '/img/products/deal-1.webp', name: 'Wallet', price: 1000 ,category:'watches'},
    { img: '/img/products/deal-2.webp', name: 'Blue Shirt', price: 1000 ,category:'clothes'},
    { img: '/img/products/deal-4.webp', name: 'Brown Shoes', price: 1000 ,category:'shoes'}, 
    { img: '/img/products/deal-3.webp', name: 'Leather Belt', price: 1000 ,category:'watches'},
     { img: '/img/products/selling-6.webp', name: 'Casual Shoes', price: 2500 ,category:'shoes'}
]
const style = {
    wrapper: 'flex flex-col md:flex-row w-[80%] md:w-[95%] lg:w-[70%] mx-auto justify-around gap-6 flex-wrap my-6',
}

const CategoriesGrid = ({category}) => {
    let filteredData =[]
    if(category!=='allproducts'){
         filteredData = dummy.filter((item)=>item.category === category)
    }else {
 filteredData = dummy
    }
    return (
        // receive the category from the previous function and show the data accordingly
        <div className={style.wrapper}>
                {filteredData.length > 0 ? filteredData.map((item)=><SingleProduct item={item}/>) : <NoProductFound/>}
        </div>
    )
}

export default CategoriesGrid