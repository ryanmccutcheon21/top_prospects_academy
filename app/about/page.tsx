import Image from 'next/image'
import { aboutPageTextContent } from '../../constants'

const about = () => {
    const { aboutUsParagraph, reviews, staffInfo, trainingInfo } = aboutPageTextContent

    return (
        <div className='bg-black text-white p-5 font-inter pb-20'>
            {/* About Us */}
            <section className='flex flex-col items-center'>
                <h2 className='text-[2.5rem] font-lead-text text-primary1'>About Us</h2>
                <p>{aboutUsParagraph}</p>
            </section>

            {/* Reviews */}
            <section>
                <h2 className='text-[2.5rem] font-lead-text text-primary1 flex justify-center'>Reviews</h2>
                {reviews.map(review => (
                    <p>{review}</p>
                ))}
            </section>

            {/* Staff Info */}
            <section>
                <h2 className='text-[2.5rem] font-lead-text text-primary1 flex justify-center'>Our Staff</h2>
                {staffInfo.map((staff, index) => (
                    <div className={`flex py-10 justify-center md:justify-evenly items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className='flex flex-col items-center'>

                            {/* Instructor Image */}
                            <h2 className='md:hidden text-[1.75rem] font-lead-text text-primary1 text-center'>{staff.name}</h2>
                            <h3 className='md:hidden font-bebas-neue text-center'>{staff.title}</h3>
                            <div style={{ maxWidth: '100%', margin: '0 auto', width: '25vw', height: '100%', paddingTop: '1.25rem' }}>
                                <Image
                                    src={staff.image}
                                    alt='Top Prospects Instructor Image'
                                    height={300}
                                    width={300}
                                    layout='responsive'
                                />
                            </div>
                        </div>

                        {/* Accolades */}
                        <div className={`flex flex-col items-center ${index % 2 === 0 ? 'pl-20' : 'pr-20'}  md:pl-0`}>
                            <h2 className='hidden md:block text-primary1 text-center font-extrabold text-[1.5rem]'>{staff.name}</h2>
                            <h3 className='hidden md:block font-bebas-neue -mt-3 text-center pt-3'>{staff.title}</h3>
                            <ul>
                                {staff.accolades.map(accolade => (
                                    <li className='py-5 md:py-1 md:w-[90%] md:mx-auto text-lg text-center list-none md:text-xs'>{accolade}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </section>

            {/* Training Info */}
            <section>
                <h2 className='text-[2.5rem] font-lead-text text-primary1 flex justify-center'>Training Philosophy</h2>
                <p>{trainingInfo.p1}</p>
                <p>{trainingInfo.philosophy.text}</p>
                <ul className='pl-10 py-2'>
                    {trainingInfo.philosophy.list.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
                <p>{trainingInfo.philosophy.paragraph}</p>
            </section>
        </div>
    )
}

export default about