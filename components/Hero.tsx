import Image from 'next/image'
import logoImg from '../public/logo.jpg'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='mb-20 text-center'>
            <div style={{ maxWidth: '50%', margin: '0 auto' }}>
                <Image
                    src={logoImg}
                    alt='Top Prospects Academy'
                    width={600} // Specify the width of the image
                    height={600} // Specify the height of the image
                    layout="responsive" // Allow the image to scale within specified dimensions
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

            <p className='mx-auto mt-10 font-lead-text text-white w-[50%] justify-center text-xl md:text-xs'>"Empowering student-athletes to thrive both academically and athletically, Top Prospects Academy is where the synergy of education and sports fosters personal growth and prepares future Life Champions."</p>
        </div>
    )
}

export default Hero