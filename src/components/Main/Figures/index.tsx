import React from 'react'

interface FiguresProps {
    heading: string;
    desc: string
}

const Figures: React.FC<FiguresProps> = ({heading, desc}) => {
  return (
    <div>
        <div className='mx-auto'>
            <h1 className='py-2 md:py-6 text-center font-bold font-space text-[#892CDC] text-2xl md:text-[5.25rem] mx-[0.5rem] '>{heading}</h1>
            <p className='text-xs text-center font-normal text-[#292D32] pt-[0.25rem] md:text-2xl md:pt-[1.25rem]'>{desc}</p>
        </div>
    </div>
  )
}

export default Figures