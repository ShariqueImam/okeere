import React from 'react'
import Counter from './Counter/Counter'
import Header from '../Header/Header'

const style = {
    about: 'w-[95%] md:w-[90%] mx-auto flex flex-col items-center justify-center',
    side1: 'w-full md:w-[45%] h-full mx-auto',
    side2: 'w-full md:w-[45%] flex items-center justify-center mx-auto',
    heading: 'font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl my-8 text-stone-700',
    details: 'p-3 text-stone-600',
    divider: 'border-b-[1px] border-gray-200 p-2',
    coutnerContainer: '',
    signature: 'my-8 flex justify-around items-center w-[70%] md:w-[60%] mx-auto md:mx-0',
    img: '',
    name: 'text-xl sm:text-xl md:text-3xl lg:text-3xl italic ',
    signatureImg: 'scale-[0.7] md:scale-[0.95]'
}
const About = () => {
    return (
        <div className={style.about}>
            <Header headingText="ABOUT " />
            <div className="flex my-24 mx-auto">
                <div className={style.side1}>
                    <h2 className={style.heading} style={{ fontFamily: 'Poppins, sans-serif' }}>We Provide Everything Best That You Needed</h2>
                    <p className={style.details} style={{ fontFamily: 'Poppins, sans-serif' }}>We have 2+ years of experience in selling online products we are the leading online marketplace for selling all kinds of goods from house hold items and clothes</p>
                    <div className={style.divider}></div>
                    <div className={style.coutnerContainer}>
                        <Counter />
                    </div>
                    {/* adding the signature */}
                    <div className={style.signature}>
                        <img src="https://res.cloudinary.com/shariqcloud/image/upload/v1649881629/Estate1/1649881617380_fsgbp2.png" alt="" className={style.signatureImg} />
                        <h2 className={style.name} style={{ fontFamily: 'Cormorant Garamond, serif' }}>_Sharique</h2>
                    </div>
                </div>
                <div className={style.side2}>
                    <img src="/img/about.webp" alt="" className={style.img} style={{ clipPath: 'polygon(0 0, 100% 10%, 100% 88%, 1% 100%)' }} />
                </div>
            </div>
        </div >

    )
}

export default About