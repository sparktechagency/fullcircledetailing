import { useEffect } from "react";
import Banner from "../../components/home/banner/Banner";
import Choose from "../../components/home/choose/Choose";
import PhotoGallery from "../../components/home/PhotoGallery/PhotoGallery";
import Pricing from "../../components/home/pricing/Pricing";
import HomeService from "../../components/home/service/HomeService";
import Testimonial from "../../components/home/testimonial/Testimonial";


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner />
      <Choose />
      <HomeService />
      <Pricing />
      <PhotoGallery />
      <Testimonial />
    </div>
  );
};

export default Home;
