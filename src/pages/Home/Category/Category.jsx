import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            heading={"Order Online"}
            subHeading={"From 11.00am to 10.00pm"}
            ></SectionTitle>
            <div className='my-10'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" className='mx-auto' />
                        <h3 className="text-3xl text-center -mt-16">Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" className='mx-auto' />
                        <h3 className="text-3xl text-center -mt-16">Pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" className='mx-auto' />
                        <h3 className="text-3xl text-center -mt-16">Soup</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" className='mx-auto' />
                        <h3 className="text-3xl text-center -mt-16">Dessert</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" className='mx-auto' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;