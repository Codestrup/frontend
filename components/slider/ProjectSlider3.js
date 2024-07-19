
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-2",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 2,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}
export default function ProjectSlider3() {
    return (
        <>

            <div className="swiper project-slider-3">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src="/assets/img/project/image-removebg-preview (3).png" alt="project-img" />
                                <div className="project-content" >
                                    <p>Web Development</p>
                                    <h4>
                                        <Link href="/project-details">Sarva Shiksha School</Link>
                                    </h4>
                                    <Link href="/project-details" className="arrow-icon-2">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src="/assets/img/project/qr1.jpeg" alt="project-img" />
                                <div className="project-content">
                                    <p>App Development</p>
                                    <h4>
                                        <Link href="/project-details">Smart Qr
                                            Restaurant App
                                        </Link>
                                    </h4>
                                    <Link href="/project-details" className="arrow-icon-2">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src="/assets/img/project/qr1.jpeg" alt="project-img" />
                                <div className="project-content">
                                    <p>App Development</p>
                                    <h4>
                                        <Link href="/project-details">Whats App
                                        Bulk Sender</Link>
                                    </h4>
                                    <Link href="/project-details" className="arrow-icon-2">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src="/assets/img/project/image-removebg-preview (7).png" alt="project-img" />
                                <div className="project-content">
                                    <p>Web Development</p>
                                    <h4>
                                        <Link href="/project-details">Learning
                                        Management System</Link>
                                    </h4>
                                    <Link href="/project-details" className="arrow-icon-2">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src="/assets/img/project/image-removebg-preview (10).png" alt="project-img" />
                                <div className="project-content">
                                    <p>Wordpress</p>
                                    <h4>
                                        <Link href="/project-details">Single Product
                                        Multivendor E-Commerce</Link>
                                    </h4>
                                    <Link href="/project-details" className="arrow-icon-2">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
