import React,{useState,useEffect} from 'react'
import useInput from '../../hooks/validateInput'

const style = {
    wrapper: '',
    smallHeading: 'border-b-2 border-stone-200 text-2xl md:text-3xl max-w-fit mx-auto py-2 text-stone-800 my-8 md:my-10',
    formContainer:'flex flex-col',
    input:'px-3  md:px-4 py-2 md:py-3 placeholder:text-stone-500 ring-none outline-none bg-[#F5F4F4] my-4 w-[90%] md:w-[85%] mx-auto',
    btn:'bg-opacity-[0.8] hover:bg-opacity-[0.95] transition duration-[300ms] my-6 bg-red-400 mx-auto px-8 md:px-12 py-2 md:py-3 text-stone-800 font-bold tracking-wide',

}

const ContactForm = () => {
    const [isError, setError] = useState(false);
const [formIsValid, setFormIsValid] = useState(false);
const [isSubmit, setIsSubmit] = useState(false);
const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    reset: emailReset,
} = useInput((val) => val.includes("@") && val.includes("."));
// for name setting
const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    reset: nameReset,
} = useInput((val) => val.trim() !== "");
    const {
    value: message,
    valueIsValid: messageIsValid,
    hasError: messageHasError,
    inputChangeHandler: messageChangeHandler,
    reset: messageReset,
} = useInput((val) => val.trim() !== "");
    useEffect(() => {
    if (nameIsValid && emailIsValid && messageIsValid) {
        setFormIsValid(true);
    } else {
        setFormIsValid(false);
    }
}, [nameIsValid, emailIsValid, messageIsValid]);
const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
        setError(true);
        return;
    }
    const sendData = async () => {
        // send the data to the database
        setIsSubmit(true);
        // to represent the success message
        const flashTime = setTimeout(() => {
            setIsSubmit(false);
        }, 2000);
        return () => {
            clearTimeout(flashTime);
        };
    };
    sendData();
    messageReset();
    emailReset();
    nameReset();
    messageReset();
};
    return (
        <div className={style.wrapper}>
            <h2 className={style.smallHeading} style={{ fontFamily: 'Yeseva One, cursive' }} >Send Message</h2>
            <form className={style.formContainer} onSubmit={submitHandler} style={{ fontFamily: 'Poppins, sans-serif' }}>
                <input type="name" className={style.input} placeholder="Your Name here..." value={name} onChange={nameChangeHandler}/>
                <input type="email" className={style.input} placeholder="Your Email here... " value={email} onChange={emailChangeHandler}/>
                <textarea rows="10" col="20" className={style.input} placeholder="Your Message here... " value={message} onChange={messageChangeHandler}></textarea>
                <button className={style.btn}>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm