import { useEffect } from "react";
import CommonTitle from "../../components/shared/CommonTitle";
import CustomContainer from "../../components/shared/CustomContainer";

const Service = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>
    <section className="bg-[#f6f6f6] py-10 pt-28 lg:pt-[120px]">
    <CustomContainer>
                <div className="pb-[22px]">
                    <CommonTitle text={"Our Services"} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[16px] lg:gap-x-[24px]  gap-y-[16px] lg:gap-y-[24px]">
                    {/* card one */}
                    <div className="relative">
                        <div className="relative">
                            <img
                            src="/ourServices/service1.png"
                            alt=""
                            className="w-full h-full object-cover rounded-[20px]"
                        />
                            {/* Overlay Layer */}
    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[20px]"></div>
                         <div className="absolute inset-0 top-[78%] left-[5%] text-[#ffff]">
                            <h2 className="text-[36px] font-medium font-degular">Basic Wash</h2>
                            <p className="text-[20px] font-medium font-degular">A quick, efficient wash that leaves your car looking fresh.</p>
                        </div>

                        </div>
                        <p className="absolute top-0 bg-primary w-10 h-10 md:w-16 md:h-16 lg:w-20  lg:h-20 rounded-[10px] flex justify-center items-center text-[#ffff] text-[20px] md:text-[34px] lg:text-[48px] font-semibold font-degular ring-4 md:ring-8 ring-[#f6f6f6]">
                            01
                        </p>

                       
                    </div>
                    {/* card two */}
                      <div className="relative">
                        <div className="relative">
                            <img
                            src="/ourServices/service2.png"
                            alt=""
                            className="w-full h-full object-cover rounded-[20px]"
                        />
                            {/* Overlay Layer */}
    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[20px]"></div>
                         <div className="absolute inset-0 top-[78%] left-[5%] text-[#ffff]">
                            <h2 className="text-[36px] font-medium font-degular">Deluxe Wash</h2>
                            <p className="text-[20px] font-medium font-degular">Include a through exterior wash, plus tire and wheel cleaning.</p>
                        </div>

                        </div>
                        <p className="absolute top-0 bg-primary w-10 h-10 md:w-16 md:h-16 lg:w-20  lg:h-20 rounded-[10px] flex justify-center items-center text-[#ffff] text-[20px] md:text-[34px] lg:text-[48px] font-semibold font-degular ring-4 md:ring-8 ring-[#f6f6f6]">
                            02
                        </p>

                       
                    </div>
                    {/* card three */}
                         <div className="relative">
                        <div className="relative">
                            <img
                            src="/ourServices/service3.png"
                            alt=""
                            className="w-full h-full object-cover rounded-[20px]"
                        />
                            {/* Overlay Layer */}
    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[20px]"></div>
                         <div className="absolute inset-0 top-[78%] left-[5%] text-[#ffff]">
                            <h2 className="text-[36px] font-medium font-degular">Wax & Polish</h2>
                            <p className="text-[20px] font-medium font-degular">Hand-applied wax for a brilliant shine and long lasting protection.</p>
                        </div>

                        </div>
                        <p className="absolute top-0 bg-primary w-10 h-10 md:w-16 md:h-16 lg:w-20  lg:h-20 rounded-[10px] flex justify-center items-center text-[#ffff] text-[20px] md:text-[34px] lg:text-[48px] font-semibold font-degular ring-4 md:ring-8 ring-[#f6f6f6]">
                            03
                        </p>

                       
                    </div>
                    {/* card four */}
                       <div className="relative">
                        <div className="relative">
                            <img
                            src="/ourServices/service4.png"
                            alt=""
                            className="w-full h-full object-cover rounded-[20px]"
                        />
                            {/* Overlay Layer */}
    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[20px]"></div>
                         <div className="absolute inset-0 top-[78%] left-[5%] text-[#ffff]">
                            <h2 className="text-[36px] font-medium font-degular">Interior Cleaning</h2>
                            <p className="text-[20px] font-medium font-degular">Vacuuming, dusting and interior window cleaning for a spotless cabin.</p>
                        </div>

                        </div>
                        <p className="absolute top-0 bg-primary w-10 h-10 md:w-16 md:h-16 lg:w-20  lg:h-20 rounded-[10px] flex justify-center items-center text-[#ffff] text-[20px] md:text-[34px] lg:text-[48px] font-semibold font-degular ring-4 md:ring-8 ring-[#f6f6f6]">
                            04
                        </p>

                       
                    </div>
                </div>
            </CustomContainer>
    </section>
  </>;
};

export default Service;
