import { Link, useNavigate, } from "react-router-dom"
import CustomContainer from "../../components/shared/CustomContainer"
import { useEffect, useState } from "react";
import { useGetFooterApiQuery } from "../../redux/web/footer/footerApi";


const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const { data: privacyData } = useGetFooterApiQuery("Privacy Policy")
  const privacyContent = privacyData?.data?.[0]?.text;


  console.log(privacyContent)


  useEffect(() => {
    if (privacyContent) {
      setContent(privacyContent)
    }
  }, [privacyContent])








  const handleNavigate = () => {
    navigate('/service-book')
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-20 lg:pt-[120px] pb-[52px] bg-[#f6f6f6]">
      <CustomContainer>
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0 pt-10 lg:pt-0">
          <div>
            <span onClick={() => navigate(-1)} className="cursor-pointer">
              <svg
                className="w-[30px] md:w-[40px] lg:w-[60px] h-auto"
                viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="60" rx="30" fill="#0063E6" />
                <path d="M37.707 31.0001H26.121L30.621 35.5001L29.207 36.9141L22.293 30.0001L29.207 23.0861L30.621 24.5001L26.121 29.0001H37.707V31.0001Z" fill="white" />
              </svg>
            </span>
          </div>

          <div className="flex justify-center w-full">
            <button onClick={handleNavigate} className="text-[#ffffff] text-[20px] font-semibold bg-primary rounded-full py-[7px] md:py-2 lg:py-4 px-[57px] flex justify-center items-center gap-3 lg:w-[400px] ">
              Book Now
              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.343277 10.7426L8.53582 2.55003L2.17186 2.55003L2.17185 0.550328H11.9497L11.9497 10.3282L9.95003 10.3282L9.95003 3.96424L1.75749 12.1568L0.343277 10.7426Z" fill="white" />
              </svg>

            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="py-[32px] relative flex justify-center items-end">
            <img src="/privacyPolicy/photo1.png" alt="privacy" className="object-cover rounded-[32px] h-[200px] md:h-full" />
            <h2 className="absolute pb-8 text-[#ffff] text-[20px] lg:text-[50px] font-degular">Privacy Policy</h2>
          </div>

          {/* <p className="lg:w-[1008px] text-center text-[20px] text-wrap md:text-[24px] font-degular">At LWR we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.</p> */}
        </div>

        {/* <div className="">
          <div className=" py-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

              <div className="lg:w-[527px] border border-transparent">
                <h1 className="mt-4 text-[18px] md:text-[24px] font-degular font-semibold">
                  1.Information We Collect
                </h1>
                <ul className="list-disc ml-6 pl-2 pr-8">
                  <li className="text-[18px] md:text-[24px] font-degular">Personal details (name, contact number, email) when booking a service.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">Payment information for transactions (secured and not stored).</li>
                  <li className="text-[18px] md:text-[24px] font-degular">Vehicle details for service records.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">Website usage data for improving user experience.</li>
                </ul>
              </div>

              <div className="lg:w-[527px] border border-transparent">
                <h1 className="mt-4 text-[18px] md:text-[24px] font-degular font-semibold">
                  2.How We Use Your Information
                </h1>
                <ul className="list-disc ml-6 pl-2 pr-8">
                  <li className="text-[18px] md:text-[24px] font-degular">To provide and improve our services.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">To process payments securely.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">To communicate promotions, offers, or updates.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">To enhance customer experience and website functionality.</li>
                </ul>
              </div>

              <div className="lg:w-[527px] border border-transparent">
                <h1 className="mt-4 text-[18px] md:text-[24px] font-degular font-semibold">
                  3.   Data Protection
                </h1>
                <ul className="list-disc ml-6 pl-2 pr-8">
                  <li className="text-[18px] md:text-[24px] font-degular">We implement security measures to safeguard your information.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">Personal data is never sold, shared, or disclosed to third parties without consent. </li>
                </ul>
              </div>


              <div className="lg:w-[527px] border border-transparent">
                <h1 className="mt-4 text-[18px] md:text-[24px] font-degular font-semibold">
                  4.Cookies and Tracking
                </h1>
                <ul className="list-disc ml-6 pl-2 pr-8">
                  <li className="text-[18px] md:text-[24px] font-degular">Our website may use cookies to enhance user experience.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">Users can manage cookie preferences in browser settings. </li>
                </ul>
              </div>

              <div className="lg:w-[527px] border border-transparent">
                <h1 className="mt-4 text-[18px] md:text-[24px] font-degular font-semibold">
                  5.Your Rights
                </h1>
                <ul className="list-disc ml-6 pl-2 pr-8">
                  <li className="text-[18px] md:text-[24px] font-degular">You can request access, modification, or deletion of your data.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">Opt-out of promotional communications at any time.</li>
                </ul>
              </div>

            </div>
          </div>
        </div> */}


        <div className="px-36">
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className=""
          />
        </div>
      </CustomContainer>
    </section>
  )
}

export default PrivacyPolicy