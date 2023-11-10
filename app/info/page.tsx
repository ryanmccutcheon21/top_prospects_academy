'use client'

import Image from 'next/image'
import buildingImg from '../../public/front_building.jpeg'
import { schoolDates, tpaDescriptors } from '../../constants'
import { formatPhoneNumber } from '../../utils'
import { AcademyCostInfo, AsideInformation } from '../../types'

const info = () => {
    const {
        paragraph1,
        paragraph2,
        paragraph3,
        academyCost: { fullTimeStudent, partTimeStudent, commuterStudent, asideInformation },
        howItWorksSection: { title, p1, p20, p21, p2PhoneNumber, p3 },
    } = tpaDescriptors

    const renderAcademyCost = (info: AcademyCostInfo) => (
        <div className='px-5'>
            <p>
                {info.studentType} ({info.daysPerWeek} Days/Week)= {info.cost}/Year or financed monthly {info.financedDownPayment} down then {info.financedMonthlyPayment}/Month for 9 Months (August is {info.financedDownPayment} then {info.financedMonthlyPayment} for the remaining months through May)
            </p>
            <ul className='pl-10 py-2'>
                <li>School Year is August 21st - May 23rd</li>
                <li>School begins at 8:30 AM</li>
                <li>{info.trainingTime}</li>
            </ul>
        </div>
    )

    const renderAsideInformation = (info: AsideInformation) => (
        <>
            {info.asideInformation.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </>
    )

    const fullTimeInfo: AcademyCostInfo = {
        studentType: 'Full-Time Student Athlete',
        daysPerWeek: fullTimeStudent.daysPerWeek,
        cost: `${fullTimeStudent.cost}`,
        financedDownPayment: `${fullTimeStudent.financedDownPayment}`,
        financedMonthlyPayment: `${fullTimeStudent.financedMonthlyPayment}`,
        trainingTime: `${fullTimeStudent.trainingTime}`,
    }

    const partTimeInfo: AcademyCostInfo = {
        studentType: 'Part-Time Student Athlete',
        daysPerWeek: partTimeStudent.daysPerWeek,
        cost: `${partTimeStudent.cost}`,
        financedDownPayment: `${partTimeStudent.financedDownPayment}`,
        financedMonthlyPayment: `${partTimeStudent.financedMonthlyPayment}`,
        trainingTime: `${partTimeStudent.trainingTime}`,
    }

    const commuterInfo: AcademyCostInfo = {
        studentType: 'Commuter Student Athlete',
        daysPerWeek: 0,
        cost: `${commuterStudent.cost}`,
        financedDownPayment: `${commuterStudent.financedDownPayment}`,
        financedMonthlyPayment: `${commuterStudent.financedMonthlyPayment}`,
        trainingTime: `${commuterStudent.trainingTime}`,
    }

    const asideInfo: AsideInformation = {
        asideInformation: asideInformation,
    }

    return (
        <main className='px-5 font-inter flex flex-col justify-center items-center bg-black text-white pb-20'>
            {/* Academy Info */}
            <section className='flex flex-col items-center py-5'>
                <h2 className='text-[2.5rem] font-lead-text text-primary1 pb-5'>Academy Information</h2>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
                <p>{paragraph3}</p>
            </section>

            {/* Top Prospects Building Image */}
            <section className='py-5'>
                <div style={{ maxWidth: '50%', margin: '0 auto' }}>
                    <Image
                        src={buildingImg}
                        alt='Top Prospects Practice Facility Building'
                        sizes='100vw'
                    />
                </div>
            </section>

            {/* How it works section */}
            <section className='flex flex-col items-center py-5'>
                <h2 className='text-[2.5rem] font-lead-text text-primary1 pb-5'>{title}</h2>
                <p>{p1}</p>
                <p>
                    {p20}{' '}
                    <a href={`tel:${p2PhoneNumber}`} className='p-0 no-underline text-primary1 hover:underline cursor-pointer'>
                        {formatPhoneNumber.formatPhoneNumber(`${p2PhoneNumber}`)}{' '}
                    </a>
                    {p21}
                </p>
                <p>{p3}</p>
            </section>

            <section className='flex flex-col items-center py-5'>
                <h2 className='text-[2.5rem] font-lead-text text-primary1 pb-5'>Academy Cost</h2>
                <div>
                    {renderAcademyCost(fullTimeInfo)}
                    {renderAcademyCost(partTimeInfo)}
                    {renderAcademyCost(commuterInfo)}
                    {renderAsideInformation(asideInfo)}
                </div>
            </section>

            {/* School Dates */}
            <section className='flex flex-col items-center py-5'>
                <h2 className='text-[2.5rem] font-lead-text text-primary1 pb-5'>Important Dates</h2>
                <p>OPEN HOUSE: AUG 8TH AND 9TH 7:00pm-9:00pm</p>
                <ul className='list-none text-[1.25rem] text-center'>
                    {schoolDates.map((date, index) => (
                        <li key={index} className='py-2'>
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default info
