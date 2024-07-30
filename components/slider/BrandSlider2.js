'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1199: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

const brandImgStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    // width:'180px'
    width:'100%',
     height:"100%",
      minHeight:'100px',
       overflow:"hidden",
}

const imgStyle = {
    // width: '154px',
    // height: 'auto',
    // margin: '10px',
    width:"100%" ,
     height:"100px" , 
     objectFit:"contain"
}

export default function BrandSlider2() {
    return (
        <>
            <div className="swiper brand-slider-2" style={{ padding: '20px' }}>
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="brand-img" style={brandImgStyle}>
                            <img src="/assets/img/brand/01.png" alt="img" style={imgStyle} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img" style={brandImgStyle}>
                            <img src="/assets/img/brand/02.png" alt="img" style={imgStyle} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img" style={brandImgStyle}>
                            <img src="/assets/img/brand/03.png" alt="img" style={imgStyle} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img" style={brandImgStyle}>
                            <img src="/assets/img/brand/04.png" alt="img" style={imgStyle} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img" style={brandImgStyle}>
                            <img src="/assets/img/brand/05.png" alt="img" style={imgStyle} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-img" style={brandImgStyle}>
                            <img src="/assets/img/brand/06.png" alt="img" style={imgStyle} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
