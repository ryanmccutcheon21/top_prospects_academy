import Image from 'next/image'
import logoImg from '../public/logo.jpg'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center pb-20 hero-div'>
            <div id='hero-section'>
                <Image
                    src={logoImg}
                    alt='Top Prospects Academy'
                    sizes="100vw"
                />
            </div>

            {/* Enroll - Call to Action */}
            <div className='flex justify-center'>
                <Link href='/enroll'>
                    <button
                        className='bg-primary1 font-button-text font-extrabold text-[2rem] rounded-lg px-10 text-black py-2 cursor-pointer hover:opacity-80'
                        type='button'
                    >
                        Enroll
                    </button>
                </Link>
            </div>

            <p className='mx-auto mt-10 font-lead-text text-white w-[75%] justify-center text-xl md:text-xs'>"Empowering student-athletes to thrive both academically and athletically, Top Prospects Academy is where the synergy of education and sports fosters personal growth and prepares future Life Champions."</p>
        </div>
    )
}

export default Hero
