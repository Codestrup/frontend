
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 1,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}

export default function Testimonial3() {
    return (
        <>
            <section className="tesimonial-section-3 section-padding section-bg-2 bg-cover">
                <div className="line-shape  d-none d-lg-block">
                    <img src="/assets/img/team/line-shape.png" alt="shape-img"  />
                </div>
                <div className="mask-shape">
                    <img src="/assets/img/team/mask-shape.png" alt="shape-img" />
                </div>
                <div className="array-button">
                    <button className="array-prev"><i className="fal fa-arrow-left" /></button>
                    <button className="array-next"><i className="fal fa-arrow-right" /></button>
                </div>
                <div className="container">
                    <div className="section-title text-center">
                        <span className="text-white">Testimonials</span>
                        <h2 className="text-white">
                        Those Who Admire Us
                        </h2>
                    </div>
                    <div className="swiper testimonial-slider-2">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/male.gif")' }} />
                                        <div className="client-content">
                                            <h4>Rubel</h4>
                                            {/* <p>Web Designer</p> */}
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                    My Codestrup internship as a Java developer was great. I learned new concepts, built projects, and highly recommend it. ”
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/male.gif")' }} />
                                        <div className="client-content">
                                            <h4>Abhishek </h4>
                                            {/* <p>Medical Assistant</p> */}
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star color-text" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                    It has been pivotal in my career. Codestrup offers meaningful projects, a supportive team, and growth. Thank you, Codestrup! ”
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/male.gif")' }} />
                                        <div className="client-content">
                                            <h4>Vaibhav </h4>
                                            {/* <p>Web Designer</p> */}
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                    I am grateful to work as an intern at Codestrup. The team's support, communication, and virtual environment were excellent ”
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/male.gif")' }} />
                                        <div className="client-content">
                                            <h4>Tushar </h4>
                                            {/* <p>Medical Assistant</p> */}
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star color-text" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                    The internship provided an excellent learning experience, offering opportunities to apply skills, work on diverse projects, and receive valuable mentorship. ”
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/female.gif")' }} />
                                        <div className="client-content">
                                            <h4>Prajakta Kokate</h4>
                                            {/* <p>Medical Assistant</p> */}
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star color-text" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                    The overall experience with Codestrup was just amazing. It is more focused on providing internships to students and software development. ”
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/male.gif")' }} />
                                        <div className="client-content">
                                            <h4>Mayur Latke </h4>
                                            {/* <p>Medical Assistant</p> */}
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star color-text" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                    An excellent platform that offers a supportive environment, valuable internship opportunities, and great learning experiences for students and professionals alike. ”
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/female.gif")' }} />
                                        <div className="client-content">
                                            <h4>Aarti Khandagale</h4>
                                            {/* <p>Web Designer</p> */}
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                    Codestrup Infotech's WordPress Developer internship offers a great chance to enhance your skills with hands-on projects and professional guidance. ”
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/female.gif")' }} />
                                        <div className="client-content">
                                            <h4>Renuka Kuratkar</h4>
                                            {/* <p>Web Designer</p> */}
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                    The React internship at Codestrup Infotech provides excellent learning opportunities, from real-world projects to experienced mentorship and skill development. ”
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                    </div>
                                    <div className="client-items">
                                        <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/female.gif")' }} />
                                        <div className="client-content">
                                            <h4>Poonam Rathod </h4>
                                            {/* <p>Web Designer</p> */}
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                    As a React intern at Codestrup Infotech, I gained valuable experience and also learned Next.js, significantly boosting my full-stack development skills ”
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
