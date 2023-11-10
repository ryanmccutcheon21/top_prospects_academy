'use client'

import { studentServicesConstants } from "../constants"
import { StudentInfoFormProps } from "../types"

const StudentInfoForm: React.FC<StudentInfoFormProps> = ({ formData, handleChange }) => {
    const {
        fullName,
        dob,
        gradeLevel,
        streetAddress,
        city,
        zipCode,
        studentType,
        topProspectsInterest,
    } = formData

    return (
        <div className="md:text-xs flex flex-col py-2">
            <div className='flex flex-col py-2'>
                <label htmlFor='fullName' className='mb-2'>Student's Full Name</label>
                <input className="text-black pl-2" type='text' name='fullName' id='fullName' value={fullName} onChange={handleChange} />
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor='dob' className='mb-2'>Date of Birth</label>
                <input className="text-black pl-2 min-w-full" type='date' name='dob' id='dob' value={dob} onChange={handleChange} />
            </div>
            <div className='flex flex-col py-2'>
                <label className='mb-2'>Grade Level</label>
                <div className="flex md:flex-col">
                    {["4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"].map((grade, index) => (
                        <div key={index} className="flex items-center">
                            <input
                                type="radio"
                                name="gradeLevel"
                                id={`gradeLevel${grade}`}
                                value={grade}
                                onChange={handleChange}
                                checked={gradeLevel === grade}
                                className='ml-2'
                            />
                            <label className="ml-1" htmlFor={`gradeLevel${grade}`}>{grade}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor='streetAddress' className='mb-2'>Street Address</label>
                <input className="text-black pl-2"
                    type='text' name='streetAddress' id='streetAddress' value={streetAddress} onChange={handleChange} />
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor='city' className='mb-2 '>City</label>
                <input className="text-black pl-2"
                    type='text' name='city' id='city' value={city} onChange={handleChange} />
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor='zipCode' className='mb-2'>Zip Code</label>
                <input className="text-black pl-2"
                    type='number' name='zipCode' id='zipCode' value={zipCode} onChange={handleChange} />
            </div>

            <h3>Student's current status</h3>
            <div className='flex flex-col justify-between mb-10'>
                <div>
                    <input
                        type='radio'
                        name='studentType'
                        id='currentEpicStudent'
                        value='Current Epic Student'
                        onChange={handleChange}
                        checked={studentType === 'Current Epic Student'}
                    />
                    <label htmlFor='currentEpicStudent' className='mb-2 ml-1'>Student is currently an Epic student</label>
                </div>
                <div>
                    <input
                        type='radio'
                        name='studentType'
                        id='homeschoolStudent'
                        value='homeschoolStudent'
                        onChange={handleChange}
                        checked={studentType === 'homeschoolStudent'}
                    />
                    <label htmlFor='homeschoolStudent' className='mb-2 ml-1'>Student is currently a homeschool student</label>
                </div>
            </div>

            <h3>My Epic student receives services for:</h3>
            <div className="flex flex-col mb-10">
                {studentServicesConstants.map((service, i) => (
                    <div key={i}>
                        <input type="checkbox" name={service} id='service' value={service} onChange={handleChange} />
                        <label className="ml-1" htmlFor='service'>{service}</label>
                    </div>
                ))}
            </div>

            <h3>Are you interested in your child playing for a Top Prospects baseball team if spots and grade level are available?</h3>
            <div className='flex flex-col py-2 justify-between'>
                <div>
                    <input
                        type='radio'
                        name='topProspectsInterest'
                        id='interested'
                        value='Yes'
                        onChange={handleChange}
                        checked={topProspectsInterest === 'Yes'}
                    />
                    <label htmlFor='interested' className='mb-2 ml-1'>Yes</label>
                </div>
                <div>
                    <input
                        type='radio'
                        name='topProspectsInterest'
                        id='notInterested'
                        value='no'
                        onChange={handleChange}
                        checked={topProspectsInterest === 'no'}
                    />
                    <label htmlFor='notInterested' className='mb-2 ml-1'>No</label>
                </div>
                <div>
                    <input
                        type='radio'
                        name='topProspectsInterest'
                        id='alreadyOnTeam'
                        value='alreadyOnTeam'
                        onChange={handleChange}
                        checked={topProspectsInterest === 'alreadyOnTeam'}
                    />
                    <label htmlFor='alreadyOnTeam' className='mb-2 ml-1'>Already on a Top Prospects team</label>
                </div>
            </div>
        </div>
    )
}

export default StudentInfoForm