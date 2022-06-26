import React,{useState,useEffect} from 'react'
import useInput from '../../hooks/validateInput'



const LoginForm = () => {
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
		value: password,
		valueIsValid: passwordIsValid,
		hasError: passwordHasError,
		inputChangeHandler: passwordChangeHandler,
		reset: passwordReset,
	} = useInput((val) => val.trim() !== "");
    	useEffect(() => {
		if (nameIsValid && emailIsValid && passwordIsValid) {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	}, [nameIsValid, emailIsValid, passwordIsValid]);
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
		messageReset();
	};
    const style ={
        wrapper:'flex flex-col',
        input:'px-3  md:px-4 py-2 md:py-3 placeholder:text-stone-500 ring-none outline-none bg-[#F5F4F4] my-4 w-[90%] md:w-[85%] mx-auto',
		btn:'bg-opacity-[0.8] hover:bg-opacity-[0.95] transition duration-[300ms] my-6 bg-red-400 mx-auto px-8 md:px-12 py-2 md:py-3 text-stone-800 font-bold tracking-wide',

        }
  return (
    <form className={style.wrapper} onSubmit={submitHandler}>
        <input type="email" className={style.input} placeholder="Your Email here..." />
        <input type="password" className={style.input} placeholder="Password " />
        <button className={style.btn}>Login</button>
    </form>
  )
}

export default LoginForm