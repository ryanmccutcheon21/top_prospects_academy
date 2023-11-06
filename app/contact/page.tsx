'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

const contact = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        emailjs.send(
            'service_e1rm8cc',
            'template_tgdt35o',
            {
                user_name: formData.fullName,
                to_name: 'Steve & Ann McCutcheon',
                from_email: formData.email,
                to_email: 'topprospectsacademy@gmail.com',
                message: formData.message,
                from_subject: formData.subject,
                from_phoneNum: formData.phoneNumber
            },
            'user_9hz0OeDfaAL1qLpg4a9xW'
        )
            .then((result) => {
                console.log(result.text)
                setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    subject: '',
                    message: '',
                })
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <div className="min-h-screen p-5 bg-black text-white">
            <h1 className="text-[2.5rem] font-lead-text text-primary1 flex justify-center">Contact Us!</h1>
            <div className='bg-darkslategray p-5 rounded-md max-w-[60%] md:max-w-[70%] mx-auto'>
                <form onSubmit={handleSubmit} className="space-y-4 font-bebas-neue tracking-wider">
                    <div className="flex flex-col">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="input-field"
                        />
                    </div>
                    <div className='w-full flex justify-center'>
                        <button type="submit" className="bg-primary1 font-button-text font-extrabold text-[1.5rem] rounded-lg px-10 text-black py-2 cursor-pointer hover:opacity-80">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default contact
