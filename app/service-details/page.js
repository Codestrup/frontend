'use client'

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer3 from "@/components/layout/footer/Footer3";

export default function ServiceDetails() {
    const [activeItem, setActiveItem] = useState(1);
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const response = await axios.get('https://api.codestrup.in/loadjobs');
                setServices(response?.data?.data || []); 
            } catch (error) {
                console.error("Error fetching data:", error);
               
            }
        };

        fetchInternships();
    }, []);

    const handleClick = (index) => {
        setActiveItem(index);
    };

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Intership Details">
                <section className="service-details-section fix section-padding">
                    <div className="container">
                        <div className="service-details-wrapper">
                            <div className="row g-4">
                                <div className="col-12 col-lg-4 order-2 order-md-1">
                                    <div className="main-sidebar">
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h3>All Services</h3>
                                            </div>
                                            <div className="widget-categories">
                                                <ul>
                                                    {services.map(service => (
                                                        <li key={service._id} className={activeItem === service._id ? "active" : ""}>
                                                            <Link href={`/service-details`}>{service.jobTitle}</Link>
                                                            <i className="fa-solid fa-arrow-right-long" />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h3>Opening Hours</h3>
                                            </div>
                                            <div className="opening-category">
                                                <ul>
                                                    <li><i className="fa-regular fa-clock" />Mon - Sat: 10.00 AM - 4.00 PM</li>
                                                    <li><i className="fa-regular fa-clock" />Sun:  09.00 AM - 4.00 PM</li>
                                                    <li><i className="fa-regular fa-clock" />Friday: Closed</li>
                                                    <li><i className="fa-regular fa-clock" />Emergency: 24 hours</li>
                                                </ul>
                                            </div>
                                        </div>
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
                                        {/* Details content */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer3 />
            </Layout>
        </>
    );
}
