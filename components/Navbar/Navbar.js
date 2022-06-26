import React, { useState } from 'react'
import useWindowSize from '../../hooks/windowSize'
import DropDownMenu from './DropDownMenu'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'
const Navbar = () => {

    const screenWidth = useWindowSize()
    const style = {
        wrapper: 'absolute md:relative text-gray-200 w-[100%] lg:w-[75%] mx-auto py-3',
        list: 'block my-4 py-2 pr-4 pl-3 text-stone-600 hover:text-stone-900 hover:mx-3 md:border-0 font-bold md:p-0     transition-all duration-[300ms] border-move-animation',
        listHome: 'text-stone-600 hover:text-stone-900 block my-4 py-2 pr-4 pl-3 hover:text-stone-900 hover:mx-3  font-bold md:p-0 transition-all duration-[300ms] border-move-animation' ,
        cart: `hover:scale-[1.3] hover:bg-stone-200 rounded-full px-2 py-2 md:py-2 border-2 border-white font-bold  hover:text-gray-900 transition-all duration-[300ms] cursor-pointer text-2xl ${screenWidth.width < 1024 ? 'text-gray-800' : 'text-gray-800'}`,
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleSmallMenu = () => {
        setIsMenuOpen(prevValue => !prevValue)
    }
    return (
        <div className={style.wrapper}>
            <nav className="px-2 sm:px-4 py-2.5 rounded bg-white" >
                <div className="container flex  justify-between items-center mx-auto flex-wrap">
                    {/* adding the logo */}
                    <a href="/" className="flex items-center scale-x-[1.4] scale-y-[1.2]">
                        <img src={`/img/logo.webp`} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    </a>
                    <div className="target flex items-center md:order-2">
                        <Link href="/cart">
                        <div className={style.cart}><AiOutlineShoppingCart /></div></Link>
                        {/* the hamburger button */}
                        <button aria-label="Button to toggle mobile menu" onClick={handleSmallMenu} data-collapse-toggle="mobile-menu-2" type="button" className=" inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-600 transtion duration-[300ms]" aria-controls="mobile-menu-2" aria-expanded="false">
                            {isMenuOpen ? <ImCross className={`${isMenuOpen && 'flex'}`} /> : <GiHamburgerMenu className={`${isMenuOpen && 'hidden'}`} />}
                        </button>
                    </div>
                    {/* content for small screens menu open */}
                    <div className={`w-full ${isMenuOpen ? 'flex' : 'hidden'} items-center justify-center`}>
                        <DropDownMenu />
                    </div>
                    <div style={{ fontFamily: 'Poppins, sans-serif' }} className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-md md:text-md tracking-wider ">
                            <li>
                                <a href="/" className={style.listHome} aria-current="page">Home</a>
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
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar



