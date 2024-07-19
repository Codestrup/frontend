"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
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
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
};

export default function Service1() {
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const response = await axios.get('https://api.codestrup.in/loadjobs');
                setInternships(response?.data?.data || []);
                console.log(response?.data?.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchInternships();
    }, []);

    return (
        <section className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }} id="service">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span className="wow fadeInUp">Internship Domain</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Your Journey Starts Now.
                        </h2>
                    </div>
                    <div className="array-button">
                        <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                        <button className="array-next"><i className="fal fa-arrow-left" /></button>
                    </div>
                </div>
                <div className="service-wrapper">
                    <div className="swiper service-slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            {internships.map(item => (
                                <SwiperSlide key={item._id}>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            {/* <img src={item.imageUrl} alt="icon-img" /> */}
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    {item.jobTitle}
                                                </Link>
                                            </h4>
                                            <p>{item.description}</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <Link href="/service-details" className="theme-btn-2 mt-3 d-flex align-items-center">
                                                    Apply Now
                                                    <i className="fa-solid fa-arrow-right-long ms-2" />
                                                </Link>
                                                <span className="theme-btn-2 mt-3 d-flex align-items-center">₹ {item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="service-text wow fadeInUp" data-wow-delay=".4s">
                        <Link href="/l" className="theme-btn wow fadeInUp" data-wow-delay=".8s" style={{
                            padding: '10px 20px'
                        }}>
                          View Internship

                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
