'use client'

import { StudentPlanFormProps } from "../types"

const StudentPlanForm: React.FC<StudentPlanFormProps> = ({ formData, handleChange }) => {
    return (
        <div className="md:text-xs">
            <h3 className='mb-2'>Student Plan</h3>
            <div className="flex flex-col font-inter">
                <div className="flex mb-5">
                    <input
                        type='radio'
                        name='studentPlan'
                        id='plan1'
                        value='Full-time'
                        onChange={handleChange}
                        checked={formData.studentPlan === 'Full-time'}
                    />
                    <label className="px-5" htmlFor='plan1'>Full Time Student Athlete (4 Days/Week)= $5500/Year or financed monthly $300 down then $600/Month for 9 Months (August is $300 then $600 for the remaining months through May)
                        School Year is August 21st - May 23rd
                        Monday - Thursday
                        8:30am School begins
                        1:00pm - 3:00pm Training/may vary due to student schedule</label>
                </div>

                <div className="flex mb-5 font-inter">
                    <input
                        type='radio'
                        name='studentPlan'
                        id='plan2'
                        value='Part-time'
                        onChange={handleChange}
                        checked={formData.studentPlan === 'Part-time'}
                    />
                    <label className="px-5" htmlFor='plan2'>Part-Time Student Athlete (2 Days/Week) = $4600/Year or financed monthly at $250 down then $500/Month for 9 Months (August is $250 then $500 for the remaining months through May)
                        School Year is August 21st - May 23rd
                        2 Days/Week
                        8:30am School begins
                        1:00pm - 3:00pm Training/may vary due to student schedule</label>
                </div>

                <div className="flex font-inter">
                    <input
                        type='radio'
                        name='studentPlan'
                        id='plan3'
                        value='Commuter'
                        onChange={handleChange}
                        checked={formData.studentPlan === 'Commuter'}
                    />
                    <label className="px-5" htmlFor='plan3'>Commuter Student Athlete = $3700/Year or financed monthly at $200 down then $400/Month for 9 Months (August is $200 then $400 for the remaining months through May)
                        August 21st - May 23rd
                        Monday - Thursday
                        1:00pm - 3:00pm Training only</label>
                </div>
            </div>
        </div>
    )
}


export default StudentPlanForm
