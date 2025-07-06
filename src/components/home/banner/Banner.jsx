import { useNavigate } from "react-router-dom";
import CustomContainer from "../../shared/CustomContainer";
import GroupAvater from "../../shared/GroupAvater";
import { useGetHomeApiQuery } from "../../../redux/web/home/homeApi";
import { Rate } from "antd";
import CustomLoading from "../../shared/CustomLoading";

const Banner = () => {
  const navigate = useNavigate();


  const { data: getHome, isLoading } = useGetHomeApiQuery()
  const homeData = getHome?.data
  const happyClientPhoto = homeData?.latest_images
  const rating = homeData?.latest_comment?.rating
  const latestComment = homeData?.latest_comment?.user


  const handleServiceBookPage = () => {
    navigate("/service-book");
  };


  if (isLoading) {
    return <CustomLoading />
  }


  return (
    <section className="bg-[#f6f6f6] font-degular pt-20 lg:pt-[80px] ">
      <CustomContainer>
        <div className="lg:pb-[200px]">
          <div className="pt-8 lg:py-16">
            <div className="flex flex-col lg:flex-row justify-between ">
              <div className="max-w-[705px] text-wrap md:mt-[0px] lg:mt-[100px] ">
                <h1 className="font-semibold text-[30px] lg:text-[58px] ">
                  Keep your <span className="text-primary">car clean</span> anywhere
                </h1>
                <p className="text-[24px] lg:text-[28px]">
                  Mobile car detailing services in Lakewood Ranch.
                </p>
                <div className="pt-[60px] flex items-center gap-2">
                  <button onClick={() => handleServiceBookPage()} className="bg-primary text-[#ffff] text-[20px] py-2 md:py-4 px-[40px] md:px-[57px] rounded-full">
                    Book Now
                  </button>
                  <button onClick={() => handleServiceBookPage()} className="bg-primary text-[#ffff] p-4 md:p-6 rounded-full">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.843277 10.7425L9.03582 2.55001L2.67186 2.55001L2.67185 0.550313H12.4497L12.4497 10.3282L10.45 10.3282L10.45 3.96422L2.25749 12.1568L0.843277 10.7425Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>

                {/* group avater component */}
                <div className="h-[50px] lg:h-[220px]  md:mb-2">
                </div>
              </div>


              {/* right side image */}
              <div className="relative">
                {/* medium and large device  */}
                <div className="hidden lg:mt-16 md:block">
                  <img src="/bannerCar1.png" alt="car" />
                </div>



                {/* small device  */}
                <div className="absolute top-[0px] z-10 md:hidden">
                  <img src="/bannerCar1.png" alt="car" className=" w-[300px]" />
                </div>


                {/* css.glass morpizom component */}
                <div className="absolute z-10 -bottom-[130px] md:-bottom-[0px] md:top-[200px] lg:bottom-[260px] md:left-[10px] lg:-left-[180px]">
                  <div className="flex gap-2 w-[200px] md:w-[240px] lg:w-[296px]  rounded-xl p-2 lg:p-4" style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid #ffffff'
                  }}>
                    <img src={latestComment?.photo} alt="photo" className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full" />
                    <div>
                      <h4 className="font-medium lg:text-[20px] text-[#000000]">
                        {latestComment?.name}
                      </h4>
                      {typeof rating === "number" && (
                        <Rate
                          allowHalf
                          defaultValue={rating}
                          disabled
                          character={(props) => {
                            const index = props.index + 1;
                            const value = props.value;

                            let fillColor = "oklch(92.8% 0.006 264.531)";

                            if (index <= value) {
                              fillColor = "#ffc107"; // full star
                            } else if (index - 0.5 === value) {
                              // half star: use linear gradient
                              return (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="15"
                                  height="15"
                                  viewBox="0 0 511.987 511"
                                >
                                  <defs>
                                    <linearGradient id={`halfGradient-${index}`}>
                                      <stop offset="50%" stopColor="#ffc107" />
                                      <stop offset="50%" stopColor="oklch(92.8% 0.006 264.531)" />
                                    </linearGradient>
                                  </defs>
                                  <g>
                                    <path
                                      fill={`url(#halfGradient-${index})`}
                                      d="M510.652 185.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77C276.71 6.98 266.898.494 255.996.494s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418A27.208 27.208 0 0 0 1.34 185.902c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927z"
                                    />
                                  </g>
                                </svg>
                              );
                            }

                            return (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 511.987 511"
                              >
                                <g>
                                  <path
                                    fill={fillColor}
                                    d="M510.652 185.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77C276.71 6.98 266.898.494 255.996.494s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418A27.208 27.208 0 0 0 1.34 185.902c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927z"
                                  />
                                </g>
                              </svg>
                            );
                          }}
                        />

                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>




      {/* service section */}
      <div className="absolute w-full mx-auto -bottom-[240px] hidden lg:block">
        <div className="flex  justify-center items-center gap-4">
          <div className="md:h-[359px] md:w-[439px] flex flex-col justify-center items-center px-[53px] bg-[#FFFFFF] rounded-[37px]">
            <img src="/service/serviceLogo1.svg" alt="" />
            <h3 className="font-degular text-primary text-[30px] font-semibold">
              Premium Service
            </h3>
            <p className="text-[16px] font-montserrat text-[#000000] text-center">
              Professional car washing ensures thorough cleaning, detailing, and
              protection using advanced techniques, eco-friendly products, and
              expert care for vehicle maintenance.
            </p>
          </div>
          <div className="md:h-[359px] md:w-[439px] flex flex-col justify-center items-center px-[53px] bg-[#FFFFFF] rounded-[37px]">
            <img src="/service/serviceLogo2.svg" alt="" />
            <h3 className="font-degular text-primary text-[30px] font-semibold">
              Advanced Equipment
            </h3>
            <p className="text-[16px] font-montserrat text-[#000000] text-center">
              High-end car washing equipment includes advanced pressure washers, foam cannons, steam cleaners for superior cleaning and protection.
            </p>
          </div>
          <div className="md:h-[359px] md:w-[439px] flex flex-col justify-center items-center px-[53px] bg-[#FFFFFF] rounded-[37px]">
            <img src="/service/serviceLogo3.svg" alt="" />
            <h3 className="font-degular text-primary text-[30px] font-semibold">
              Affordable Pricing
            </h3>
            <p className="text-[16px] font-montserrat text-[#000000] text-center">
              Offering the best pricing in mobile car washing with affordable rates, premium service, customized packages, and great value for top-quality vehicle care.
            </p>
          </div>
        </div>
      </div>


      {/* small / medium device for */}
      <div className="w-full mx-auto  lg:hidden px-4 pb-6 pt-[240px] md:pt-16 lg:pt-[400px] lg:pb-[40px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col  bg-[#FFFFFF] rounded-[37px] py-6 px-3">

            <img src="/service/serviceLogo1.svg" alt="" className="w-[60px] mx-auto" />
            <h3 className="font-degular text-primary text-[20px] text-center pt-4">
              Professional Services
            </h3>

            <p className="text-[16px] font-degular text-gray-700 text-wrap text-center pt-4">
              Professional car washing ensures thorough cleaning, detailing, and
              protection using advanced techniques, eco-friendly products, and
              expert care for vehicle maintenance.
            </p>
          </div>

          <div className="flex flex-col  bg-[#FFFFFF] rounded-[37px] py-6 px-3">
            <img src="/service/serviceLogo2.svg" alt="" className="w-[60px] mx-auto" />
            <h3 className="font-degular text-primary text-[20px] text-center pt-4">
              Professional Equipment
            </h3>

            <p className="text-[16px] font-degular text-gray-700 text-wrap text-center pt-4">
              High-end car washing equipment includes advanced pressure washers, foam cannons, steam cleaners for superior cleaning and protection.
            </p>
          </div>

          <div className="flex flex-col  bg-[#FFFFFF] rounded-[37px] py-6 px-3">
            <img src="/service/serviceLogo3.svg" alt="" className="w-[60px] mx-auto" />
            <h3 className="font-degular text-primary text-[20px] text-center pt-4">
              Best Pricing
            </h3>

            <p className="text-[16px] font-degular text-gray-700 text-wrap text-center pt-4">
              Offering the best pricing in mobile car washing with affordable rates, premium service, customized packages, and great value for top-quality vehicle care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
