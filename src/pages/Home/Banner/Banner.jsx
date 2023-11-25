import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import banner1 from "../../../assets/Banner/banner1.jpg"
import banner2 from "../../../assets/Banner/banner2.jpg"
import banner3 from "../../../assets/Banner/banner3.jpg"
import banner4 from "../../../assets/Banner/banner4.jpg"

const Banner = () => {
  return (
    <div>
        <div className='mt-20 lg:mt-0'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-md">
          <SwiperSlide><img className=' h-[400px] lg:h-[100vh] w-full object-cover' src={banner1} alt="" /></SwiperSlide>
          <SwiperSlide><img className='h-[100vh] w-full' src={banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img className='h-[100vh] w-full' src={banner3} alt="" /></SwiperSlide>
          <SwiperSlide><img className='h-[100vh] w-full' src={banner4} alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
