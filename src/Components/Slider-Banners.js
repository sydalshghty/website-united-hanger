import "../CSS/slider-banners.css";
import { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
function SliderBanners() {
    const [sliders, setSliders] = useState([]);

    const getSliders = useCallback(async () => {
        const res = await fetch(
            "https://united-hanger-2025.up.railway.app/api/sliders"
        );
        const data = await res.json();
        setSliders([
            ...data.sliders,
        ]);
    }, []);

    useEffect(() => {
        getSliders();
    }, [getSliders]);

    return (
        <div className="slider-banners">
            <Swiper
                className="swiper-banners-images"
                style={{ marginTop: "-150px" }}
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                effect="fade"
                speed={700}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {sliders.map((slider, index) => (
                    <SwiperSlide key={index} >
                        <div className="col-images">
                            <img

                                src={slider.image_path}
                                alt="banner-img"
                                className="slider-img"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SliderBanners;

