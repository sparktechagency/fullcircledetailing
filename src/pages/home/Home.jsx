import { useEffect } from "react";
import Banner from "../../components/home/banner/Banner";
import Choose from "../../components/home/choose/Choose";
import PhotoGallery from "../../components/home/PhotoGallery/PhotoGallery";
import Pricing from "../../components/home/pricing/Pricing";
import HomeService from "../../components/home/service/HomeService";
import Testimonial from "../../components/home/testimonial/Testimonial";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Home = () => {
 const location = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    useEffect(() => {
    document.title = "Full CIRCLE DETAILING~Home";
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Full CIRCLE DETAILING~Home</title>
      </Helmet>
      <div>
        <Banner />
        <Choose />
        <HomeService />
        <Pricing />
        <PhotoGallery />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
