'use client'

import { waiverInfo } from '../constants'
import { WaiverFormProps } from '../types'
import WaiverModal from './WaiverModal'

const WaiverForm: React.FC<WaiverFormProps> = ({ formData, handleChange }) => {

    return (
        <div className='md:text-xs'>
            {waiverInfo.map(({ nameAndID, text, type }) => (
                <div className='flex flex-col py-2' key={nameAndID}>
                    <label htmlFor={nameAndID} className='mb-2'>{text}</label>
                    <input className="text-black pl-2"
                        type={type} name={nameAndID} id={nameAndID} onChange={handleChange} />
                </div>
            ))}
            <div className='flex flex-col items-center'>
                <WaiverModal />
                <div>
                    <input
                        type='checkbox'
                        name='waiverAgreement'
                        id='agreeToTerms'
                        value='Yes'
                        onChange={handleChange}
                        checked={formData.waiverAgreement === 'Yes'}
                    />
                    <label htmlFor='agreeToTerms'> I agree to the terms &amp; conditions</label>
                </div>
            </div>
        </div>
    )
}

export default WaiverForm