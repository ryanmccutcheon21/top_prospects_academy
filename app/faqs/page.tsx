'use client'

import { useState } from 'react';
import { FAQs } from '../../constants';


const Faqs: React.FC = () => {
    const initialVisibleFAQs = 5;
    const [faqStates, setFaqStates] = useState(
        FAQs.slice(0, initialVisibleFAQs).map((faq) => ({
            question: faq[0],
            answer: faq[1],
            isOpen: false,
        }))
    )
    const [visibleFAQs, setVisibleFAQs] = useState(initialVisibleFAQs)

    const toggleFaq = (index: number) => {
        const updatedFaqStates = [...faqStates]
        updatedFaqStates[index].isOpen = !updatedFaqStates[index].isOpen
        setFaqStates(updatedFaqStates)
    }

    const handleViewMore = () => {
        const additionalFAQs = FAQs.slice(
            visibleFAQs,
            visibleFAQs + 5
        ).map((faq) => ({
            question: faq[0],
            answer: faq[1],
            isOpen: false,
        }))
        setFaqStates((prevFaqStates) => [...prevFaqStates, ...additionalFAQs]);
        setVisibleFAQs((prevVisibleFAQs) => prevVisibleFAQs + 5);
    }

    return (
        <main className='min-h-screen p-5 pb-20 bg-black text-white md:text-xs'>
            <h1 className='text-[2.5rem] font-lead-text text-primary1 flex justify-center md:text-[1.75rem] mb-10'>Frequently Asked Questions</h1>

            <ul className='list-none bg-darkslategray p-3 rounded-md max-w-[60%] md:max-w-[90%] mx-auto flex flex-col justify-between font-bebas-neue tracking-wider hover:cursor-pointer text-[1rem]'>
                {faqStates.map((faq, index) => (
                    <div key={index} className={`my-5 faq-item ${faq.isOpen ? 'open' : ''}`}>
                        <li onClick={() => toggleFaq(index)} className={`mr-5 ${faq.isOpen ? '' : 'hover:text-primary1 transition-all'}`}>{faq.question}</li>
                        <div className={`answer font-inter ${faq.isOpen ? 'open' : ''}`}>
                            {faq.isOpen && <p>{faq.answer}</p>}
                        </div>
                    </div>
                ))}
            </ul>

            {visibleFAQs < FAQs.length && (
                <div className="flex justify-center mt-5">
                    <button
                        onClick={handleViewMore}
                        className="text-primary1 bg-transparent border border-solid border-primary1 rounded px-3 py-1 hover:bg-primary1 hover:text-black transition-all"
                    >
                        View More
                    </button>
                </div>
            )}
        </main>
    )
}

export default Faqs


