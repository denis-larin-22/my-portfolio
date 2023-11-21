import { useState } from "react";
import { motion } from "framer-motion";
import { Feedback } from "../../api/swagger";

export const InputForm = () => {
    const inputStyles = 'bg-[#000] outline-none border-[1px] border-grey-bcg rounded-2xl px-[20px] py-[10px] focus:border-green';
    const [isSent, setIsSent] = useState(false);
    const initInputState = {
        email: '',
        text: ''
    }
    const [inputValue, setInputValue] = useState(initInputState);

    const btnHandler = async () => {
        let token = '';
        const feedback = new Feedback();

        await feedback.login().then(tokenValue => token = tokenValue);
        await feedback.postMessage({
            value: `${inputValue.email} // ${inputValue.text}`,
        }, token)
        // 
        setIsSent(true);
        setTimeout(() => setIsSent(false), 5000);

        setInputValue(initInputState);
    }

    return (
        <motion.div layout className="w-full px-[2em] py-[1.6em] rounded-2xl bg-grey-bcg">
            <h3 className="text-m-xl font-bold text-green mb-[20px]">Follow <span className="text-white">the white rabbit</span> and contact me</h3>
            <form className="relative text-white flex flex-col">
                <input
                    type="email"
                    className={inputStyles}
                    placeholder="email@adress.com"
                    value={inputValue.email}
                    onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
                />
                <input
                    type="text" placeholder="Your message"
                    className={inputStyles + ' mt-[20px] h-[123px] whitespace-pre-wrap'}
                    value={inputValue.text}
                    onChange={(e) => setInputValue({ ...inputValue, text: e.target.value })}
                />
                {inputValue.email && inputValue.text && <button onClick={btnHandler} className="max-w-[200px] self-center border-2 border-green mt-[20px] px-[30px] py-[15px] duration-200 shadow-green hover:bg-green focus:bg-green hover:text-[#000] focus:text-[#000]">Send</button>}

                {isSent && <p className="mt-4 text-center text-m-md">✔ Sent</p>}
            </form>
        </motion.div>
    )
}