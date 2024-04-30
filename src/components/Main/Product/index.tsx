import React from 'react'

const Product = () => {
  return (
    <div>
        <section className='mt-[7.5rem] mx-auto text-center md:mt-[10.75rem]'>
        <h1 className='text-2xl md:text-5xl font-medium md:font-bold font-space text-[#292D32] mx-[1.406rem] md:mx-[9.6rem] md:leading-[3.438rem]'>We made cross-boarder payouts easy for you. Explore what makes us different</h1>

    <div className='mx-auto mt-[6.313rem] flex justify-center'>
            <div className='bg-[#1C1C93] rounded-[0.557rem] w-[22.356rem]  py-[1.003rem] px-[1.04rem] md:px-[1.75rem] md:py-[1.656rem] md:w-[37.625rem]'>
                {/* White chat background */}
                <div className='bg-white w-[20.276rem] h-[14.594rem] rounded-[0.557rem] md:w-[34.125rem] md:h-[24.563rem] mx-auto my-auto '>
                    {/* Chat wrapper */}
                    <div className='pl-[1.5rem] pt-[1.226rem] pr-[1.228rem] pb-[1.411rem]'>
                        {/*White Chat div */}
                    <div className='bg-white drop-shadow-lg rounded-[1.114rem] py-[0.56rem] px-[0.957rem] max-w-[11.289rem]'>
                    <p className='text-[0.52rem] text-center text-[#292D32] font-normal'>I want to buy 24K Gold. Is it available?</p>
                    </div>

                    {/* Blue chat div */}
                    <div className='bg-[#1C1C93] drop-shadow-lg rounded-[1.114rem] py-[0.56rem] px-[0.957rem] max-w-[12rem] ml-auto mt-[1.82rem]'>
                    <p className='text-[0.52rem] text-center text-[white] font-normal'>Yes, it&apos;s available. Make payment below.</p>
                    </div>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
 
        
        </section>
    </div>
  )
}

export default Product