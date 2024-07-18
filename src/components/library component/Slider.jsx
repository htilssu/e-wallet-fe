import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

const slides = [
    {Color: 'bg-blue-400', bgImg: "/banner-01.png", content: 'Slide 1'},
    {Color: 'bg-red-400', bgImg: "/banner-02.png", content: 'Slide 2'},
    {Color: 'bg-green-400', bgImg: "/banner-03.png", content: 'Slide 3'},
    {Color: 'bg-yellow-400', bgImg: "/banner_04.png", content: 'Slide 4'},
];

//có thể truyền slides vào
const Slider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} // Dùng các class tùy chỉnh cho nút back và next
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 3300, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Autoplay]}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className={"cursor-pointer"}>
                        <div
                            className={`bg-contain`}
                            style={{ backgroundImage: `url(${slide.bgImg})` }}
                        >
                            <div className={`min-h-28 flex items-center justify-center text-white`}>
                                {slide.content}
                            </div>
                            <button className={`border-2 text-white p-4 rounded-md ${slide.Color}`}>
                                Xem Ngay
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-button-prev" style={{ color: 'darkgreen' }}></div>
            <div className="swiper-button-next" style={{ color: 'darkgreen' }}></div>
        </Swiper>
    );
};

export default Slider;