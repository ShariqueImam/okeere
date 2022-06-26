import React from 'react'
import Header from '../Header/Header'
import Link from 'next/link'
import LoginForm from './LoginForm'
const style = {
  wrapper: 'bg-[#F5F4F4] flex flex-col ',
  loginContainer: 'px-3 md:px-5 py-5 md:py-6 w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white my-16',
  smallHeading: 'border-b-2 border-stone-200 text-2xl md:text-3xl max-w-fit mx-auto py-2 text-stone-800 ',
  para: 'text-stone-600 text-sm md:text-sm my-6 md:my-8 hover:text-stone-900',
  form: 'flex flex-col'

}
const Login = () => {
  return (
    <div className={style.wrapper}>
      <Header headingText="LOGIN" />
      {/* the main login feature */}
      <div className={style.loginContainer}>
        <h2 className={style.smallHeading} style={{ fontFamily: 'Yeseva One, cursive' }} >Login to Okeere</h2>
        <p className={style.para} style={{ fontFamily: 'Poppins, sans-serif' }}>If you have an account with us, Please <Link href="/login"><span className="border-b-2 border-stone-600 cursor-pointer"> login!</span></Link></p>
        <form className={style.form}>
          <LoginForm />
        </form>
      </div>
    </div>
  )
}

export default Login