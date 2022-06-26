import React,{useState,useEffect} from 'react'
import useInput from '../../hooks/validateInput'



const Checkout = () => {
    const [isError, setError] = useState(false);
	const [formIsValid, setFormIsValid] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);
    const {
        value: name,
        valueIsValid: nameIsValid,
        hasError: nameHasError,
        inputChangeHandler: nameChangeHandler,
        reset: nameReset,
    } = useInput((val) => val.trim() !== "");
    const {
		value: email,
		valueIsValid: emailIsValid,
		hasError: emailHasError,
		inputChangeHandler: emailChangeHandler,
		reset: emailReset,
	} = useInput((val) => val.includes("@") && val.includes("."));
	// for name setting
    	const {
		value: phoneNumber,
		valueIsValid: phoneNumberIsValid,
		hasError: phoneNumberHasError,
		inputChangeHandler: phoneNumberChangeHandler,
		reset: phoneNumberReset,
	} = useInput((val) => val.trim() !== "");    	
    const {
		value: city,
		valueIsValid: cityIsValid,
		hasError: cityHasError,
		inputChangeHandler: cityChangeHandler,
		reset: cityReset,
	} = useInput((val) => val.trim() !== "");    	
    const {
		value: address,
		valueIsValid: addressIsValid,
		hasError: addressHasError,
		inputChangeHandler: addressChangeHandler,
		reset: addressReset,
	} = useInput((val) => val.trim() !== "");
    	useEffect(() => {
		if (nameIsValid && emailIsValid && phoneNumberIsValid && cityIsValid&& addressIsValid) {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	}, [nameIsValid, emailIsValid, phoneNumberIsValid,cityIsValid,addressIsValid]);
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
		phoneNumberReset();
		emailReset();
		nameReset();
        addressReset();
        cityReset();
	};
    const style ={
    wrapper:' bg-white my-12  w-[65%] md:w-[50%] lg:w-[40%] mx-auto py-4',  
    smallHeading: 'border-b-2 border-stone-200 text-2xl md:text-3xl max-w-fit mx-auto py-2 text-stone-800 ',
    form:'flex flex-col my-6',
    input:'px-3  md:px-4 py-2 md:py-3 placeholder:text-stone-500 ring-none outline-none bg-[#F5F4F4] my-4 w-[90%] md:w-[85%] mx-auto',
    btn:'bg-opacity-[0.8] hover:bg-opacity-[0.95] transition duration-[300ms] my-6 bg-red-400 mx-auto px-8 md:px-12 py-2 md:py-3 text-stone-800 font-bold tracking-wide',

}
  return (
    <div className={style.wrapper}>
       <h2 className={style.smallHeading} style={{ fontFamily: 'Yeseva One, cursive' }} >Billing Details</h2>
       <form className={style.form} onSubmit={submitHandler}>
        <input type="text" className={style.input} placeholder="Your Name here..." value={name}/>
        <input type="email" className={style.input} placeholder="Your Email here... " value={email}/>
        <input type="text" className={style.input} placeholder="Your Phone here... " value={phoneNumber}/>
        <input type="text" className={style.input} placeholder="Your City here... " value={city}/>
        <input type="text" className={style.input} placeholder="Your Address here... " value={address}/>
    </form>
    </div>
  )
}

export default Checkout