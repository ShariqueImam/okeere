import react, { useState } from "react";

const useInput = (validationFn) => {
	const [enteredValue, setValue] = useState("");
	const [isTouched, setTouched] = useState(false);
	// check if the enteredValue is valid or not
	const enteredValueIsValid = validationFn(enteredValue);
	// if touched then check for error
	const hasError = !enteredValueIsValid && isTouched;

	const inputChangeHandler = (event) => {
		setValue(event.target.value);
		setTouched(true);
	};
	const inputBlurHandler = () => {
		setTouched(true);
		if (!enteredValueIsValid) {
			return;
		}
	};
	const reset = () => {
		setValue("");
		setTouched(false);
	};
	return {
		value: enteredValue,
		isTouched,
		valueIsValid: enteredValueIsValid,
		hasError,
		inputChangeHandler,
		inputBlurHandler,
		reset,
	};
};
export default useInput;
