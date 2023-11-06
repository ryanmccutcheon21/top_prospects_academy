'use client'

import React from 'react'
import { ProgressBarProps } from '../types'

const steps = ['Student Info', 'Waiver', 'Student Plan']

const ProgressBar: React.FC<ProgressBarProps> = ({ step, setStep }) => {
    return (
        <div>
            <h1 className='text-[2rem] font-lead-text text-primary1 flex justify-center mt-5 md:text-[1.5rem] text-center mb-5'>Please fill out this form to enroll in Top Prospects Academy</h1>
            <div>
                {/* Header, progress bar, and description */}
                <div className='flex justify-center font-lead-text font-extrabold'>
                    {steps.map((s, index) => (
                        <div key={index} className='flex items-center'>
                            {index <= 1 ? (
                                <>
                                    <div onClick={() => setStep(index + 1)} className={`hover:cursor-pointer h-8 w-8 md:h-4 md:w-4 rounded-full mr-2 ${step === index + 1 ? 'bg-primary1' : 'bg-slate-400'}`} />
                                    <p className='mr-2'>{s}</p>
                                    <div className='w-20 md:w-8 bg-slate-400 h-0.5 mr-2' />
                                </>
                            ) : (
                                <>
                                    <div onClick={() => setStep(index + 1)} className={`hover:cursor-pointer h-8 w-8 md:h-4 md:w-4 rounded-full ml-2 ${step === index + 1 ? 'bg-primary1' : 'bg-slate-400'}`} />
                                    <p className='ml-2'>{s}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
