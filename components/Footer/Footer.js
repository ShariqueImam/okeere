import React from 'react'
import Signature from './Signature'
import Social from './Social'
import MainFooter from './MainFooter'
const style = {
  wrapper: 'bg-[#CFCBC9] pt-12',

}

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <MainFooter />
      </div>
      <div className={style.social}>
        <Social />
      </div>
      <div className={style.signature}>
        <Signature />
      </div>
    </div>
  )
}

export default Footer