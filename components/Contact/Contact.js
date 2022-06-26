import React from 'react'
import Header from '../Header/Header'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import ContactForm from './ContactForm'


const style = {
  wrapper: 'bg-[#F5F4F4] flex flex-col ',
  contactContainer: 'px-3 md:px-5 py-5 md:py-6 w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white my-16',
  smallHeading: 'border-b-2 border-stone-200 text-2xl md:text-3xl max-w-fit mx-auto py-2 text-stone-800 my-6',
  singleContactContainer: 'flex items-center ',
  para: 'text-stone-600 text-sm md:text-sm my-2 md:my-4 hover:text-stone-900',

}
const Contact = () => {
  return (
    <div className={style.wrapper}>
      <Header headingText="CONTACT" />
      <div className={style.contactContainer}>
        <h2 className={style.smallHeading} style={{ fontFamily: 'Yeseva One, cursive' }} >Contact Details</h2>
        <div className={style.singleContactContainer} style={{ fontFamily: 'Poppins, sans-serif' }}>
          <HiOutlineLocationMarker className="text-3xl text-stone-600 bg-stone-300 rounded-full p-1 mx-4"/>
          <p className={style.para}>28 Green Tower, Street Name,Islamabad, Pakistan</p>
        </div>
        <div className={style.singleContactContainer}>
          <AiOutlinePhone className="text-3xl text-stone-600 bg-stone-300 rounded-full p-1 mx-4"/>
          <p className={style.para}>+923174290702</p>
        </div>
        <div className={style.singleContactContainer}>
          <AiOutlineMail className="text-3xl text-stone-600 bg-stone-300 rounded-full p-1 mx-4"/>
          <p className={style.para}>shariqueimam7777@gmail.com</p>
       </div>
{/* contact form */}
<ContactForm/>
      </div>
    </div>)
}

export default Contact