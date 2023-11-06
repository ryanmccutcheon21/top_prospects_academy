import React from 'react'
import { formatPhoneNumber } from '../utils'
import { tpaDescriptors } from '../constants'
// import Map from './Map'

const Footer = () => {
    const { howItWorksSection: { p2PhoneNumber } } = tpaDescriptors
    const center = { lat: 36.015206304487855, lng: -95.79896691784117 }

    return (
        <div className='text-black bg-primary1 pt-10 flex flex-col justify-center font-lead-text items-center px-5'>
            <p> If you have a question or a special request, ask us. Send us a message, and we will get back to you as soon as we can. </p>
            <p className='mb-5'>Top Prospects Academy</p>

            {/* <Map address={`3804 South Elm Place, Broken Arrow, Oklahoma 74011, United States`} center={center} zoom={19} /> */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.220027175852!2d-95.80176125983631!3d36.01492007259601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b689079b21e40d%3A0xc8ca69ca4366d51!2sTOP%20PROSPECTS%20PRACTICE%20FACILITY!5e0!3m2!1sen!2sus!4v1699251743651!5m2!1sen!2sus"
                width="600"
                height="450"
                className="border:0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>



            <p className='mt-5'><a href="https://www.google.com/maps/dir/3804+South+Elm+Place,+Broken+Arrow,+Oklahoma+74011,+United+States" target="_blank" rel="noopener noreferrer" className='no-underline text-black hover:underline cursor-pointer'>3804 South Elm Place, Broken Arrow, Oklahoma 74011, United States</a></p>
            <p><a href={`tel: ${p2PhoneNumber}`} className='p-0 no-underline text-black hover:underline cursor-pointer'>{formatPhoneNumber.formatPhoneNumber(`${p2PhoneNumber}`)} </a></p >
            <p className='mb-20'><a href='mailto:topprospectsacademy@gmail.com' target='_blank' className='text-black no-underline hover:underline'>topprospectsacademy@gmail.com</a></p>
        </div >
    )
}

export default Footer