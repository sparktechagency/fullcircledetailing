
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomContainer from "../../components/shared/CustomContainer";
import { useGetFooterApiQuery } from "../../redux/web/footer/footerApi";

const About = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const { data: getAbout } = useGetFooterApiQuery("About Us")
  const aboutContent = getAbout?.data?.[0]?.text;



  useEffect(() => {
    if (aboutContent) {
      setContent(aboutContent)
    }
  }, [aboutContent])


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
            <img src="/termsConditions/photo2.png" alt="privacy" className="object-cover rounded-[32px] h-[200px] md:h-full" />
            <h2 className="absolute pb-8 text-[#ffff] text-[20px] lg:text-[50px] font-degular">About Us</h2>
          </div>
        </div>

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

export default About