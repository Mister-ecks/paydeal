import React from 'react'

interface FooterColumnsProps {
    header1: string;
    header2: string;
    data1: string;
    data2: string;
    data3: string;
    data4: string;
    data5: string;
    data6: string;
    data7: string;
    data8: string;

}

const FooterColumns: React.FC<FooterColumnsProps> = ({header1, header2, data1, data2, data3, data4, data5, data6, data7, data8}) => {
  return (
    <>
           <div className="flex justify-between md:space-x-[148px] items-start text-white">
              {/* First Column Wrapper */}
              <div>
                {/* left div */}
                <div>
                    {/* top */}
                    <div>
                    <h1 className="font-semibold text-[20px]">{header1}</h1>
                    </div>
                    {/* bottom */}
                    <div className="text-[16px] flex flex-col space-y-[16px] font-normal mt-[30px]">
                        <a href=""><p>{data1}</p></a>
                        <a href=""><p>{data2}</p></a>
                        <a href=""><p>{data3}</p></a>
                        <a href=""><p>{data4}</p></a>
                        

                    </div>
                </div>
              </div>
              {/* right div */}
              <div>
                    {/* top */}
                    <div>
                    <h1 className="font-semibold text-[20px]">{header2}</h1>
                    </div>
                    {/* bottom */}
                    <div className="text-[16px] flex flex-col space-y-[16px] font-normal mt-[30px]">
                        <a href=""><p>{data5}</p></a>
                        <a href=""><p>{data6}</p></a>
                        <a href=""><p>{data7}</p></a>
                        <a href=""><p>{data8}</p></a>
                    </div>
                </div>
            </div>
    </>
  )
}

export default FooterColumns