"use client";

import Accordion1 from "@/components/elements/Accordion1"
import Layout from "@/components/layout/Layout"
import VideoPopup from '@/components/elements/VideoPopup'
import Link from "next/link"
import { useState } from "react"
import BrandSlider1 from "@/components/slider/BrandSlider1"
import Footer3 from "@/components/layout/footer/Footer3";
export default function Service() {
    const [activeItem, setActiveItem] = useState(1)

    const handleClick = (index) => {
        setActiveItem(index)
    }

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Internship">
                <div>
                    <section className="service-section fix section-padding">
                        <div className="container">
                            <div className="section-title text-center">
                                <span className="wow fadeInUp">OUR SERVICES</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    We Provide the Best Quality
                                </h2>
                            </div>
                            <div className="service-wrapper mb-0">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        Database Security
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between ">
                                                    <Link href="/service-details" className="theme-btn-2 mt-3 d-flex align-items-center">
                                                        read More
                                                        <i className="fa-solid fa-arrow-right-long ms-2" />
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <span className="theme-btn-2 mt-3 d-flex align-items-center">₹ 499</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="service-box-items box-shadow ">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        IT Consultancy
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between ">
                                                    <Link href="/service-details" className="theme-btn-2 mt-3 d-flex align-items-center">
                                                        read More
                                                        <i className="fa-solid fa-arrow-right-long ms-2" />
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <span className="theme-btn-2 mt-3 d-flex align-items-center">₹ 499</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        Cyber Security
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between ">
                                                    <Link href="/service-details" className="theme-btn-2 mt-3 d-flex align-items-center">
                                                        read More
                                                        <i className="fa-solid fa-arrow-right-long ms-2" />
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <span className="theme-btn-2 mt-3 d-flex align-items-center">₹ 499</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        App Development
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between ">
                                                    <Link href="/service-details" className="theme-btn-2 mt-3 d-flex align-items-center">
                                                        read More
                                                        <i className="fa-solid fa-arrow-right-long ms-2" />
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <span className="theme-btn-2 mt-3 d-flex align-items-center">₹ 499</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-10.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        UI/UX Design
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between ">
                                                    <Link href="/service-details" className="theme-btn-2 mt-3 d-flex align-items-center">
                                                        read More
                                                        <i className="fa-solid fa-arrow-right-long ms-2" />
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <span className="theme-btn-2 mt-3 d-flex align-items-center">₹ 499</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-11.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        IT Management
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between ">
                                                    <Link href="/service-details" className="theme-btn-2 mt-3 d-flex align-items-center">
                                                        read More
                                                        <i className="fa-solid fa-arrow-right-long ms-2" />
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <span className="theme-btn-2 mt-3 d-flex align-items-center">₹ 499</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-12.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        Digital Marketing
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between ">
                                                    <Link href="/service-details" className="theme-btn-2 mt-3 d-flex align-items-center">
                                                        read More
                                                        <i className="fa-solid fa-arrow-right-long ms-2" />
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <span className="theme-btn-2 mt-3 d-flex align-items-center">₹ 499</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-13.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        Data Analysis
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between ">
                                                    <Link href="/service-details" className="theme-btn-2 mt-3 d-flex align-items-center">
                                                        read More
                                                        <i className="fa-solid fa-arrow-right-long ms-2" />
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <span className="theme-btn-2 mt-3 d-flex align-items-center">₹ 499</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </section>
                    {/*<< Faq Section Start >>*/}
                    <section className=" style-2 fix section-padding">
                        <div className="brand-section fix section-padding pt-0 mt-5">
                            <div className="container">
                                <div className="brand-wrapper">
                                    <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">1k + Brands Trust Us</h6>
                                    <BrandSlider1 />
                                </div>
                            </div>
                        </div>


                    </section>

                    <section className="service-details-section fix section-padding">
                        <div className="container">
                            <div className="service-details-wrapper">
                                <div className="row g-4">
                                    <div className="col-12 col-lg-4 order-2 order-md-1">
                                        <div className="main-sidebar">

                                            <div className="single-sidebar-image bg-cover" style={{ backgroundImage: 'url("assets/img/service/post.jpg")' }}>
                                                <div className="contact-text">
                                                    <div className="icon">
                                                        <i className="fa-solid fa-phone" />
                                                    </div>
                                                    <h4>Need Help? Call Here</h4>
                                                    <h5>
                                                        <Link href="/tel:+2085550112">+208-555-0112</Link>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8 order-1 order-md-2">
                                        <div className="service-details-items">
                                            <div className="details-image">
                                                <img src="/assets/img/service/details-1.jpg" alt="img" className="" />
                                            </div>

                                            <div className="faq-content style-3">
                                                <div className="faq-accordion">
                                                    <div className="accordion" id="accordion">
                                                        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                                                            <h5 className="accordion-header" onClick={() => handleClick(1)}>
                                                                <button className={activeItem == 1 ? "accordion-button" : "accordion-button collapsed"}>
                                                                    Where should I incorporate my business?
                                                                </button>
                                                            </h5>
                                                            <div id="faq1" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                                                                <div className="accordion-body">
                                                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                                                            <h5 className="accordion-header" onClick={() => handleClick(2)}>
                                                                <button className={activeItem == 2 ? "accordion-button" : "accordion-button collapsed"}>
                                                                    How long should a business plan be?
                                                                </button>
                                                            </h5>
                                                            <div id="faq2" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                <div className="accordion-body">
                                                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                                                            <h5 className="accordion-header" onClick={() => handleClick(3)}>
                                                                <button className={activeItem == 3 ? "accordion-button" : "accordion-button collapsed"}>
                                                                    What is included in your services?
                                                                </button>
                                                            </h5>
                                                            <div id="faq3" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                <div className="accordion-body">
                                                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                                                            <h5 className="accordion-header" onClick={() => handleClick(4)}>
                                                                <button className={activeItem == 4 ? "accordion-button" : "accordion-button collapsed"}>
                                                                    What type of company is measured?
                                                                </button>
                                                            </h5>
                                                            <div id="faq4" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                <div className="accordion-body">
                                                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>








                </div >
                <Footer3 />
            </Layout >
        </>
    )
}