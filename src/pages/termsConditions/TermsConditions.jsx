import { useNavigate } from "react-router-dom";
import CustomContainer from "../../components/shared/CustomContainer"
import { useEffect, useState } from "react";
import { useGetFooterApiQuery } from "../../redux/web/footer/footerApi";

const TermsConditions = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const { data: termsData } = useGetFooterApiQuery("Terms & Conditions")
  const termsContent = termsData?.data?.[0]?.text;


console.log(termsContent)


  useEffect(() => {
    if (termsContent) {
      setContent(termsContent)
    }
  }, [termsContent])







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
            <button
              onClick={handleNavigate}
              className="text-[#ffffff] text-[20px] font-semibold bg-primary rounded-full py-[7px] md:py-2 lg:py-4 px-[57px] flex justify-center items-center gap-3 lg:w-[400px] ">
              Book Now
              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.343277 10.7426L8.53582 2.55003L2.17186 2.55003L2.17185 0.550328H11.9497L11.9497 10.3282L9.95003 10.3282L9.95003 3.96424L1.75749 12.1568L0.343277 10.7426Z" fill="white" />
              </svg>

            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="py-[32px] relative flex justify-center items-end">
            <img src="/termsConditions/photo1.png" alt="privacy" className="object-cover rounded-[32px] h-[200px] md:h-full" />
            <h2 className="absolute pb-8 text-[#ffff] text-[20px] lg:text-[50px] font-degular">Terms & Conditions</h2>
          </div>

          {/* <p className="lg:w-[1051px] text-center text-[20px] text-wrap md:text-[24px] font-degular">Welcome to LWR By using our services, you agree to the following terms and conditions. Please read them carefully.</p> */}
        </div>

        {/* <div className="">
          <div className=" py-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

              <div className="lg:w-[527px] border border-transparent">
                <h1 className="mt-4 text-[18px] md:text-[24px] font-degular font-semibold">
                  1.Service Agreement
                </h1>
                <ul className="list-disc ml-6 pl-2 pr-8">
                  <li className="text-[18px] md:text-[24px] font-degular">Our services include exterior washing, interior cleaning, detailing, and additional treatments as per the selected package.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">We strive for quality but are not responsible for pre-existing damages or issues with your vehicle.</li>
                </ul>
              </div>

              <div className="lg:w-[527px] border border-transparent">
                <h1 className="mt-4 text-[18px] md:text-[24px] font-degular font-semibold">
                  2.Pricing & Payments
                </h1>
                <ul className="list-disc ml-6 pl-2 pr-8">
                  <li className="text-[18px] md:text-[24px] font-degular">All prices are subject to change without prior notice.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">Payments must be made before or immediately after service completion.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">We accept cash, credit/debit cards, and digital payments.</li>

                </ul>
              </div>

              <div className="lg:w-[527px] border border-transparent">
                <h1 className="mt-4 text-[18px] md:text-[24px] font-degular font-semibold">
                  3.Cancellations & Refunds
                </h1>
                <ul className="list-disc ml-6 pl-2 pr-8">
                  <li className="text-[18px] md:text-[24px] font-degular">Appointments can be rescheduled or canceled with prior notice.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">Refunds are not provided for completed services but may be issued for missed appointments due to company error.</li>
                </ul>
              </div>


              <div className="lg:w-[527px] border border-transparent">
                <h1 className="mt-4 text-[18px] md:text-[24px] font-degular font-semibold">
                  4.Liability Disclaimer
                </h1>
                <ul className="list-disc ml-6 pl-2 pr-8">
                  <li className="text-[18px] md:text-[24px] font-degular">We take utmost care, but we are not liable for damage due to loose parts, pre-existing conditions, or personal belongings left inside vehicles.</li>
                  <li className="text-[18px] md:text-[24px] font-degular">Customers are responsible for removing valuables before service.</li>
                </ul>
              </div>

              <div className="lg:w-[527px] border border-transparent">
                <h1 className="mt-4 text-[18px] md:text-[24px] font-degular font-semibold">
                  5.Customer Conduct
                </h1>
                <ul className="list-disc ml-6 pl-2 pr-8">
                  <li className="text-[18px] md:text-[24px] font-degular">Any misconduct, abuse, or violation of policies may result in service denial.</li>

                </ul>
              </div>

              <div className="lg:w-[527px] border border-transparent">
                <h1 className="mt-4 text-[18px] md:text-[24px] font-degular font-semibold">
                  6.Changes to Terms
                </h1>
                <ul className="list-disc ml-6 pl-2 pr-8">
                  <li className="text-[18px] md:text-[24px] font-degular">We reserve the right to update these terms at any time.</li>

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

export default TermsConditions