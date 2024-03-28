import {useLoaderData} from "react-router-dom";

const Faq = () => {
    const faqs = useLoaderData()
    return (
        <div className="space-y-4 border border-dashed p-4 lg:p-6 rounded-xl workSans">
            <div>
                <div
                    className="w-full bg-primaryColor text-white py-8 text-center rounded-2xl text-lg lg:text-2xl font-bold workSans">
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>
            {
                faqs.map(faq => (
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked/>
                        <div className="collapse-title text-xl font-medium">
                            {faq.question}
                        </div>
                        <div className="collapse-content">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Faq;