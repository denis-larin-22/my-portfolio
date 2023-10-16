export const InputForm = () => {
    const inputStyles = 'bg-[#000] outline-none border-[1px] border-grey-bcg rounded-2xl px-[20px] py-[10px] focus:border-green';

    return (
        <div className="w-full px-[2em] py-[1.6em] rounded-2xl bg-grey-bcg">
            <h3 className="text-m-xl font-bold text-green mb-[20px]">Follow <span className="text-white">the white rabbit</span> and contact me</h3>
            <form className="relative text-white flex flex-col">
                <input className={inputStyles} type="email" placeholder="email@adress.com" />
                <input className={inputStyles + ' mt-[20px] h-[123px] whitespace-pre-wrap'} type="text" placeholder="Your message" />
                <button className="max-w-[200px] self-center border-2 border-green mt-[20px] px-[30px] py-[15px] duration-200 shadow-green hover:bg-green focus:bg-green hover:text-[#000] focus:text-[#000]">Send</button>
            </form>
        </div>
    )
}