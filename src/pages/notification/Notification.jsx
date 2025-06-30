import { useEffect, useState } from "react";
import CustomContainer from "../../components/shared/CustomContainer"
import { Modal, Rate } from "antd";
import ReactStarsRating from 'react-awesome-stars-rating';
import { useGetNotificationApiQuery } from "../../redux/dashboardFeatures/notification/dashboardNotificationApi";
import CustomLoading from "../../components/shared/CustomLoading";
import { usePostFeedbackMutation } from "../../redux/dashboardFeatures/feedback/dashboardFeedbackApi";
import toast from "react-hot-toast";



const Notification = () => {
    const [modalOpenOne, setModalOpenOne] = useState(false);
    const [rating, setRating] = useState(0);
    const [ratingId, setRatingId] = useState('');
    const [reviewText, setReviewText] = useState('');


    const [postFeedback] = usePostFeedbackMutation();


    const { data: getNotification, isLoading, refetch } = useGetNotificationApiQuery()
    const notificationData = [...(getNotification?.data || [])]?.sort((a, b) => {
        if (
            (a.data.type === "Booking successful" && b.data.type === "Booking successful") ||
            (a.data.type !== "Booking successful" && b.data.type !== "Booking successful")
        ) {
            return 0;
        }
        return a.data.type === "Booking successful" ? -1 : 1;
    });





    const showmodalOne = (id) => {
        setRatingId(id)
        setModalOpenOne(true)
    }

    const handleModalOneOk = async () => {

        const formData = new FormData();

        formData.append("service_id", parseInt(ratingId));
        formData.append("comment", reviewText);
        formData.append("rating", rating);

        try {
            const res = await postFeedback(formData).unwrap();


            if (res?.status === true) {
                toast.success(res?.message);
                setModalOpenOne(false)
                setRating(0);
                setReviewText('');
            } else {
                toast.error(res?.message);
            }
        } catch (error) {
            const errorMessage = error?.data?.message;

            if (typeof errorMessage === 'object') {
                Object.entries(errorMessage).forEach(([field, messages]) => {
                    if (Array.isArray(messages)) {
                        messages.forEach(msg => toast.error(msg));
                    } else {
                        toast.error(messages);
                    }
                });
            } else {

                toast.error(errorMessage);
            }
        }

    }

    const handleCancelModalOne = () => {
        setModalOpenOne(false)
        setRating(0);
        setReviewText('');
    }



    const onChange = (newRating) => {
        setRating(newRating);
    };


    const handleReviewChange = (e) => {
        setReviewText(e.target.value);
    };



    useEffect(() => {
        if (modalOpenOne) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modalOpenOne]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    if (isLoading) {
        return <CustomLoading />
    }


    return (
        <section className=" pb-[52px] bg-[#f6f6f6] pt-28 lg:pt-[120px]">
            <CustomContainer>
                <p className="text-[36px] font-degular font-medium text-[#000000] pb-[32px]">Notifications</p>

                {
                    notificationData.length > 0 ? <div className="overflow-x-auto whitespace-nowrap">
                        <div className="">
                            {notificationData?.map((item, index) => {
                                const formattedDate = new Date(item?.created_at).toLocaleDateString("en-US", {
                                    weekday: "long", // e.g., Monday
                                    year: "numeric", // 2025
                                    month: "long",   // June
                                    day: "numeric"   // 23
                                });
                                const formatTime = (isoDate) => {
                                    const date = new Date(isoDate);
                                    let hours = date.getHours();
                                    const minutes = String(date.getMinutes()).padStart(2, '0');
                                    const ampm = hours >= 12 ? 'PM' : 'AM';
                                    hours = hours % 12 || 12;
                                    return `${hours}:${minutes} ${ampm}`;
                                };
                                return (
                                    <div key={index} className="grid grid-cols-12 border border-[#ccc] mb-2 rounded-xl p-4">
                                        <div className="col-span-5">
                                            <p className="lg:text-[30px] font-semibold text-[##000000]">{item?.data?.title}</p>
                                            <h1 className={`${item?.data?.sub_title === "Booking successful" ? "text-primary lg:text-[30px]" : "text-[#319F43] lg:text-[30px]"}`}>{item?.data?.sub_title}</h1>
                                        </div>

                                        <div className="flex flex-col col-span-5">
                                            <p className="lg:text-[24px]">{formattedDate}</p>
                                            <p className="text-[#888888]">
                                                {formatTime(item?.created_at)}
                                            </p>
                                        </div>


                                        <div className="col-span-2 flex justify-center items-center">
                                            {
                                                item?.data?.sub_title === "Booking successful" ? <div className="flex flex-col text-center">
                                                    <p className="lg:text-[24px]">{item.data?.service_name}</p>
                                                    <p className="lg:text-[24px]">{item.data?.service_type}</p>
                                                </div>
                                                    :
                                                    <div
                                                        onClick={() => showmodalOne(item?.data?.service_id)}
                                                        className="bg-[#F27712]  w-fit cursor-pointer py-4 px-6 rounded-[14px] lg:text-xl flex items-center gap-4">
                                                        <span className="cursor-pointer flex items-center">
                                                            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15 0.5L18.3677 10.8647H29.2658L20.4491 17.2705L23.8168 27.6353L15 21.2295L6.18322 27.6353L9.55093 17.2705L0.734152 10.8647H11.6323L15 0.5Z" fill="white" />
                                                            </svg>
                                                        </span>
                                                        <p className="lg:text-[24px] font-medium font-degular text-[#FFFFFF]">Leave a review</p>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                        :
                        <div className="h-[370px]  rounded-lg flex justify-center items-center">
                            <p className="lg:text-6xl md:text-1xl text-base font-bold text-gray-200 uppercase text-center">No data found</p>
                        </div>
                }
            </CustomContainer>

            {/* modal components */}
            {/* modal one */}
            <Modal
                centered

                open={modalOpenOne}
                onOk={handleModalOneOk}
                onCancel={handleCancelModalOne}
                footer={null}
                width={600}
                className='custom-service-modal'
                maskStyle={{ backgroundColor: 'rgba(134, 134, 134, 0.4)' }}
            >

                <div className="p-8">
                    <h1 className="text-[20px] font-semibold text-center">Share your experience</h1>
                    <div className="">
                        <ReactStarsRating
                            onChange={onChange}
                            value={rating}
                            size={50}
                            className="flex justify-center py-3"
                        />
                        <h2 className="text-[20px]  font-degular text-center">Tap to add your rating</h2>
                    </div>


                    <div>
                        <textarea name="" id=""
                            placeholder="Add your review"
                            value={reviewText}
                            onChange={handleReviewChange}
                            className="border border-gray-200 w-full h-[200px] rounded-xl  focus:outline-none  mt-4 p-4 resize-none"
                        ></textarea>
                    </div>

                    <div className="flex items-center justify-end gap-4 mt-6">
                        <button onClick={handleCancelModalOne} className="border px-4 py-1 rounded-md">Cancel</button>
                        <button type="submit"
                            onClick={handleModalOneOk}
                            className="border px-4 py-1 rounded-md bg-primary text-[#fff]">Submit</button>
                    </div>
                </div>
            </Modal>
        </section>
    )
}

export default Notification