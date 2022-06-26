import React from 'react'
import { ImCross } from 'react-icons/im'


const style = {
    wrapper: 'flex my-6 items-center justify-around text-xs md:text-lg',
    nameContainer:'flex items-center justify-center w-[20%]',
    item:'w-[20%] flex items-center justify-center',
    img:'w-[7vw] h-[3vh] md:h-[12vh]',
    name:' text-sm'
}
const SingleCartItem = ({ item }) => {
    return (
        <div className={style.wrapper} style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className={style.nameContainer}>
                <div className={style.img}>
                    <img src={`${item.img}`} className={style.img}/>
                </div>
                <div className={style.name}>
                    {item.name}
                </div>
            </div>
            <div className={style.item}>
                {item.price}
            </div>
            <div className={style.item}>
                {item.quantity}
            </div>
            <div className={style.item}>
                {item.price * item.quantity}
            </div>
            <div className={style.item}>
                <ImCross className="transition-all duration-[300ms] text-stone-700 cursor-pointer hover:bg-stone-300 text-3xl p-2 rounded-full"/>
            </div>
            
        </div>


    )
}

export default SingleCartItem