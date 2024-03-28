const ContactUs = () => {
    return (
        <>
            <div>
                <div
                    className="w-full text-black py-8 text-center rounded-2xl workSans">
                    <h1 className="text-3xl lg:text-4xl font-bold">Let's Talk</h1>
                    <p>We will get back to you in no time!</p>
                </div>
            </div>
            <div
                className="flex flex-col lg:flex-row items-center gap-8 py-4 lg:py-8 mx-auto rounded-lg w-full">
                <div className="flex-1 flex flex-col justify-center items-center">
                    <img src="/images/contactus.webp" alt="" className="w-full"/>
                </div>
                <form noValidate="" className="flex-1 space-y-6 w-full workSans">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input autoFocus={true} id="name" type="text" placeholder="" className="focus:textarea-success w-full p-3 rounded-xl bg-base-200"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="focus:textarea-success w-full p-3 rounded-xl bg-base-200"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="focus:textarea-success w-full p-3 rounded-xl bg-base-200"></textarea>
                    </div>
                    <button type="submit"
                            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded-xl bg-primaryColor text-white">Send
                        Message
                    </button>
                </form>
            </div>
        </>
    );
};

export default ContactUs;