'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { StudentPlanForm, WaiverForm, StudentInfoForm, EnrollButton, ProgressBar } from '../../components'
import { formatDate } from '../../utils'

const enroll: React.FC = () => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        gradeLevel: '',
        streetAddress: '',
        city: '',
        zipCode: '',
        parentFullName: '',
        parentEmail: '',
        parentPhone: '',
        studentPlan: 'Plan 1',
        studentType: 'currentEpicStudent',
        service: [] as string[],
        topProspectsInterest: 'Yes',
        waiverAgreement: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target

        if (type === 'checkbox' && name !== 'waiverAgreement') {
            const checkboxInput = e.target as HTMLInputElement // Type assertion

            if (checkboxInput.checked) {
                // Add the service to the array if it's checked
                setFormData({
                    ...formData,
                    service: [...formData.service, name],
                })
            } else {
                // Remove the service from the array if it's unchecked
                setFormData({
                    ...formData,
                    service: formData.service.filter(service => service !== name),
                })
            }
        } else {
            if (name === 'waiverAgreement') {
                // Handle waiverAgreement separately
                setFormData({
                    ...formData,
                    [name]: value,
                })
            } else {
                // Handle other input types
                setFormData({
                    ...formData,
                    [name]: value,
                })
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const { fullName, dob, gradeLevel, streetAddress, city, zipCode, parentFullName, parentEmail, parentPhone, studentPlan, studentType, service, topProspectsInterest, waiverAgreement } = formData

        const formattedDob = formatDate(dob)

        // Handle form submission here
        await emailjs.send(
            'service_e1rm8cc',
            'template_ujfycfn',
            {
                user_name: fullName,
                to_name: 'Steve & Ann McCutcheon',
                to_email: 'topprospectsacademy@gmail.com',
                from_fullName: fullName,
                from_dob: formattedDob,
                from_gradeLevel: gradeLevel,
                from_streetAddress: streetAddress,
                from_city: city,
                from_zipCode: zipCode,
                from_parentFullName: parentFullName,
                from_parentEmail: parentEmail,
                from_parentPhone: parentPhone,
                from_studentPlan: studentPlan,
                from_studentType: studentType,
                from_studentServices: service,
                from_topProspectsInterest: topProspectsInterest,
                from_waiverAgreement: waiverAgreement,
            },
            'user_9hz0OeDfaAL1qLpg4a9xW'
        )
            .then((result) => {
                // Sending email successful
                console.log(result.text)

                // Clear form data
                setFormData({
                    fullName: '',
                    dob: '',
                    gradeLevel: '',
                    streetAddress: '',
                    city: '',
                    zipCode: '',
                    parentFullName: '',
                    parentEmail: '',
                    parentPhone: '',
                    studentPlan: 'Full-time',
                    studentType: 'Current Epic Student',
                    service: [] as string[],
                    topProspectsInterest: 'Yes',
                    waiverAgreement: '',
                })
            })
            .catch((error) => {
                // Sending email failed
                console.log(error.text)
            })
    }

    return (
        <div className='bg-black text-white min-h-screen p-5 pb-20'>
            <ProgressBar step={step} setStep={setStep} />
            <form className='bg-darkslategray px-5 py-10 font-bebas-neue tracking-wider rounded-md max-w-[90%] flex flex-col mx-auto mt-5' onSubmit={handleSubmit}>
                {step === 1 && <StudentInfoForm formData={formData} handleChange={handleChange} />}
                {step === 2 && <WaiverForm formData={formData} handleChange={handleChange} />}
                {step === 3 && <StudentPlanForm formData={formData} handleChange={handleChange} />}

                <EnrollButton step={step} setStep={setStep} />
            </form>
        </div>
    )
}

export default enroll