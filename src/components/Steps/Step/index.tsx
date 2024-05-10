import React from 'react'
import Image from 'next/image'

interface StepComponentProps {
    number: string;
    title: string;
    desc: string
}

const Step: React.FC<StepComponentProps> = ({number, title, desc}) => {
  return (
    <div>
        <section>
            <div className='flex  flex-col items-start justify-center space-y-[10px] md:space-y-[26.5px] mx-[22px]'>
                {/* Number and title */}
                <div className='flex items-center space-x-[21px] md:space-x-[29px]'>
                    <h1 className='text-[#1C1C93] text-base text-left font-bold md:text-5xl'>{number}</h1>
                    <h1 className='text-[#292D32] text-left text-base md:text-4xl font-bold md:font-semibold'>{title}</h1>
                </div>
                {/* Line and desc */}
                <div className='flex items-center  space-x-[21px] md:ml-[26px] md:space-x-0 md:gap-[55px] '>
                <Image src="/assets/images/stepline.svg" height={46} width={1} alt='step line mobile' className="md:hidden block mx-[10px]"/>
                    <Image src="/assets/images/steplinedesktop.svg" width={2} height={91} alt='step line desktop' className='md:block hidden mx-[26px]'/>
                    
                    <p className='text-sm text-[#292D32] leading-4 md:text-2xl text-left'>{desc}</p>
                </div>
                <div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Step