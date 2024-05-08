import React from 'react'
import Image from 'next/image'

const Offer = () => {
  return (
    <div>
        <section className='mt-[88px] mx-auto md:mx-[138px]'>
            <h1 className='font-space md:text-[48px] md:font-bold font-medium text-2xl text-[#292D32] text-center mx-[26.5px] md:leading-[55px] md:mx-[164px]'>Manage all business payments seamlessly with our app.</h1>
        </section>
        {/* Offers for the app */}
        <div className='flex flex-col md:flex-row mx-auto mt-[39px] ml-[23px] mr-[120px]'>
          {/* Left/Top section */}
            <div>
                <h1 className='text-left text-base font-bold font-space text-[#292D32] md:text-5xl'>A digital platform for the digital economy</h1>
                <div className='mt-[13px] flex flex-col space-y-[13px]'>
                  {/* Points */}
                  {/* Point 1 */}
                  <div className='flex items-start space-x-[13px]'>
                  
                    <Image src='/assets/images/Checkmark.svg' width={16} height={16} alt='paydeal check mark'/>
                    <p className='text-sm text-[#292D32] text-left leading-4'>Create a USD, GBP, EUR account to receive payments for your service.</p>
                  </div>
                  {/* Point 2 */}
                  <div className='flex items-center space-x-[13px]'>
                  
                    <Image src='/assets/images/Checkmark.svg' width={16} height={16} alt='paydeal check mark'/>
                    <p className='text-sm text-[#292D32] text-left '>Send an invoice</p>
                  </div>
                  {/* Point 3 */}
                  <div className='flex items-center space-x-[13px]'>
                  
                    <Image src='/assets/images/Checkmark.svg' width={16} height={16} alt='paydeal check mark'/>
                    <p className='text-sm text-[#292D32] text-left '>Debit card for easy spending</p>
                  </div>
                  {/* Point 4 */}
                  <div className='flex items-center space-x-[13px]'>
                  
                    <Image src='/assets/images/Checkmark.svg' width={16} height={16} alt='paydeal check mark'/>
                    <p className='text-sm text-[#292D32] text-left '>Withdraw to your local bank easily</p>
                  </div>

                  <div className='mt-[28px]'>
                    <button className='px-[18px] py-[10px] text-sm font-bold rounded-[5px] text-white bg-[#1C1C93]'>Open an account</button>
                  </div>
                </div>
            </div>
          {/* Right/Bottom section */}
          
        </div>
        <div className='mx-[23px] mt-[107px]'>
            <Image src='/assets/images/MobileImage.svg' width={363.62} height={360} alt='paydeal mobile girl image' className=' w-full md:hidden]'/>
          </div>
        <div></div>
    </div>
  )
}

export default Offer