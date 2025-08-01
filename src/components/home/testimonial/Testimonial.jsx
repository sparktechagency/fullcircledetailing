import { Rate } from "antd";
import { useGetFeedbackApiQuery } from "../../../redux/web/feedback/feedbackApi";
import CommonTitle from "../../shared/CommonTitle";
import CustomContainer from "../../shared/CustomContainer";

const Testimonial = () => {

  const { data: getFeedback, } = useGetFeedbackApiQuery()
  const allTestimonial = getFeedback?.data


  return (
    <>
      <section className="bg-[#f6f6f6] font-degular pb-10 pt-2">
        {
          allTestimonial?.length > 0 ? <CustomContainer>
            <div className="">
              <div className="mt-6 md:flex md:items-center md:justify-between">
                <div>
                  <CommonTitle
                    text={"See what our clients say"}
                    customIcon={<div className="bg-primary h-0.5 w-6"></div>}
                  />
                </div>
              </div>

              <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                {allTestimonial?.map((item, index) => {
                  return (
                    <div className="p-4 md:p-8 border border-[#00000033] rounded-[20px]">
                      <div className="flex items-center  -mx-2">
                        <img
                          className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 "
                          src={item?.user?.photo}
                          alt="Robert"
                        />
                        <div className="mx-4">
                          <h1 className="font-semibold text-[24px] text-[#000000]">
                            {item?.user?.name}
                          </h1>
                          {/* <div className="flex items-center">{item.icon}</div> */}
                          <Rate character={(props) => {
                            return <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15" x="0" y="0" viewBox="0 0 511.987 511" xml:space="preserve" class=""><g><path fill={props?.index < props.value ? "#ffc107" : "oklch(92.8% 0.006 264.531)"} d="M510.652 185.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77C276.71 6.98 266.898.494 255.996.494s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418A27.208 27.208 0 0 0 1.34 185.902c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0" opacity="1" data-original="#ffc107" class=""></path></g></svg>
                          }} defaultValue={item?.rating} disabled />
                        </div>
                      </div>
                      <p className="text-[#000000] text-[20px] font-degular pt-[18px]">
                        {item?.comment}
                      </p>
                    </div>
                  );
                })}
              </section>
            </div>
          </CustomContainer>
          :
          ''
        }
      </section>
    </>
  );
};

export default Testimonial;
