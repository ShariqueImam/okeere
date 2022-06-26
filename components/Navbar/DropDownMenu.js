import React from 'react'


const style = {
    wrapper: 'bg-gray-50 flex flex-col text-md md:text-md tracking-wider mx-auto',
    list: 'mx-auto block my-2 py-2 px-2 text-gray-900 border-b border-gray-100 hover:bg-gray-50  md:border-0  font-bold md hover:text-[#EFC262]  transition duration-[300ms] ',


}
const DropDownMenu = () => {
    return (
        <ul clasName={style.wrapper} style={{fontFamily: 'Poppins, sans-serif'}}>
                <li>
                    <a href="/" className={style.list} aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/about" className={style.list}>About</a>
                </li>
                <li>
                    <a href="/products" className={style.list}>Products</a>
                </li>
                <li>
                    <a href="/contact" className={style.list}>Contact</a>
                </li>
                <li>
                    <a href="/login" className={style.list}>Login</a>
                </li> 
                <li>
                    <a href="/register" className={style.list}>Register</a>
                </li>
        </ul>
    )
}

export default DropDownMenu;