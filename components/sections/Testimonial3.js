"use client";
import { ApiConfig } from "@/app/Apiconfig";
import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// JSON data for testimonials
const testimonials = [
  {
    name: "Rubel",
    image: "/assets/img/testimonial/1.jpg",
    text: "The Codestrup Java internship was great, offering valuable learning, real-world projects, and skill development.",
    stars: 5,
  },
  {
    name: "Abhishek",
    image: "/assets/img/achievers/04.jpeg",
    text: "Codestrup offers meaningful projects, a supportive team, and excellent growth opportunities. Highly recommended!",
    stars: 4,
  },
  {
    name: "Vaibhav Kanchi",
    image: "/assets/img/achievers/01.jpeg",
    text: "I am grateful for Codestrup's support, communication, and the excellent virtual internship environment provided.",
    stars: 5,
  },
  {
    name: "Tushar Deshmukhe",
    image: "/assets/img/achievers/02.jpeg",
    text: "The internship provided learning, mentorship, and opportunities to work on diverse, real-world projects.",
    stars: 4,
  },
  {
    name: "Prajakta Kokate",
    image: "/assets/img/achievers/06.jpeg",
    text: "At Codestrup Infotech, they provide a great opportunity to work on real-world projects and enhance my skills",
    stars: 4,
  },
  {
    name: "Mayur Latke",
    image: "/assets/img/achievers/01.jpeg",
    text: "Codestrup is a platform offering valuable internships and a supportive learning environment for students.",
    stars: 4,
  },
  {
    name: "Aarti Khandagale",
    image: "/assets/img/achievers/08.jpg",
    text: "The WordPress internship at Codestrup enhanced my skills with hands-on projects and professional guidance.",
    stars: 5,
  },
  {
    name: "Renu Kuratkar",
    image: "/assets/img/achievers/05.jpeg",
    text: "The React internship at Codestrup provided real-world projects, mentorship, and excellent learning opportunities.",
    stars: 5,
  },
  {
    name: "Poonam Rathod",
    image: "/assets/img/achievers/07.jpeg",
    text: "As a Codestrup React intern, I learned Next.js, boosting my full-stack development skills significantly.",
    stars: 5,
  },
  {
    name: "Pooja Naitam",
    image: "/assets/img/achievers/09.jpg",
    text: "As a Codestrup React intern, I learned Next.js, boosting my full-stack development skills significantly.",
    stars: 5,
  },
  {
    name: "Samarth",
    image: "/assets/img/achievers/10.jpeg",
    text: "The internship provided learning, mentorship, and opportunities to work on diverse, real-world projects.",
    stars: 5,
  },
  {
    name: "Aniket",
    image: "/assets/img/achievers/03.jpeg",
    text: "Codestrup offers meaningful projects, a supportive team, and excellent growth opportunities. Highly recommended!",
    stars: 5,
  },

  {
    name: "Aarti Sharma",
    image: "/assets/img/testimonial/01.jpg",
    text: "The React internship at Codestrup Infotech was amazing! I gained valuable experience from real projects.",
    stars: 5,
  },
  {
    name: "Rajesh Patel",
    image: "/assets/img/testimonial/3.jpg",
    text: "I applied for the Java internship, and the experience was rewarding. The mentors provided great guidance.",
    stars: 4,
  },

  {
    name: "Riya Saini",
    image: "/assets/img/testimonial/02.jpg",
    text: "The Shopify internship was a great experience with hands-on learning about eCommerce.",
    stars: 5,
  },

  {
    name: "Ravi Kumar",
    image: "/assets/img/testimonial/2.jpg",
    text: "The Shopify internship provided valuable experience in managing eCommerce platforms.",
    stars: 4,
  },
  {
    name: "Nisha Yadav",
    image: "/assets/img/testimonial/03.jpg",
    text: "The Python internship was a great learning experience with practical challenges.",
    stars: 5,
  },
  {
    name: "Arvind Sharma",
    image: "/assets/img/testimonial/4.jpg",
    text: "The PHP internship provided me with essential skills for server-side scripting.",
    stars: 4,
  },
  {
    name: "Anju Rani",
    image: "/assets/img/testimonial/04.jpg",
    text: "The Next.js internship was a fantastic way to understand modern web application development.",
    stars: 4,
  },
  {
    name: "Sandeep Patel",
    image: "/assets/img/testimonial/5.jpg",
    text: "The Figma internship was a great opportunity to enhance my design skills with real-world projects.",
    stars: 5,
  },
  {
    name: "Swati Verma",
    image: "/assets/img/testimonial/05.jpg",
    text: "The Node.js internship provided hands-on experience with practical backend development.",
    stars: 4,
  },
  {
    name: "Rohit Yadav",
    image: "/assets/img/testimonial/6.jpg",
    text: "The Java internship was a fantastic learning experience with valuable project work.",
    stars: 4,
  },
  {
    name: "Mitali Jain",
    image: "/assets/img/testimonial/06..jpg",
    text: "The Laravel internship was beneficial for learning modern web development practices.",
    stars: 4,
  },
  {
    name: "Ravi Yadav",
    image: "/assets/img/testimonial/7.jpg",
    text: "The JavaScript internship provided practical experience with engaging projects.",
    stars: 5,
  },
  {
    name: "Priti Gupta",
    image: "/assets/img/testimonial/07.jpg",
    text: "The Flutter internship was a great learning experience with real-world applications.",
    stars: 5,
  },
  {
    name: "Amit Patel",
    image: "/assets/img/testimonial/8.jpg",
    text: "The WordPress internship provided excellent exposure to website development and management.",
    stars: 4,
  },
  {
    name: "Shruti Sharma",
    image: "/assets/img/testimonial/08.jpg",
    text: "The Shopify internship was a valuable experience for learning about eCommerce platforms.",
    stars: 4,
  },
  {
    name: "Nitin Kumar",
    image: "/assets/img/testimonial/8.jpg",
    text: "The Python internship offered practical experience and valuable learning opportunities.",
    stars: 5,
  },
  {
    name: "Jaya Saini",
    image: "/assets/img/testimonial/09.jpg",
    text: "The PHP internship provided hands-on experience with server-side scripting.",
    stars: 4,
  },
  {
    name: "Rajesh Patel",
    image: "/assets/img/testimonial/9.jpg",
    text: "The Next.js internship was insightful and provided practical experience in web development.",
    stars: 4,
  },
  {
    name: "Ritika Sharma",
    image: "/assets/img/testimonial/010.jpg",
    text: "The Figma internship was a great way to enhance my design skills and work on client projects.",
    stars: 5,
  },
  {
    name: "Amit Yadav",
    image: "/assets/img/testimonial/10.jpg",
    text: "The Node.js internship provided valuable backend development experience with real-world projects.",
    stars: 4,
  },
  {
    name: "Ankita Jain",
    image: "/assets/img/testimonial/011.jpg",
    text: "The Java internship offered a solid foundation and practical experience in programming.",
    stars: 4,
  },
  {
    name: "Nikhil Kumar",
    image: "/assets/img/testimonial/11.jpg",
    text: "The Laravel internship was a great opportunity to learn about modern web development.",
    stars: 4,
  },
  {
    name: "Ravi Sharma",
    image: "/assets/img/testimonial/12.jpg",
    text: "The JavaScript internship was engaging and provided practical experience with valuable projects.",
    stars: 5,
  },
  {
    name: "Suman Gupta",
    image: "/assets/img/testimonial/012.jpg",
    text: "The Flutter internship offered hands-on experience with mobile app development and real-world projects.",
    stars: 5,
  },
  {
    name: "Anil Patel",
    image: "/assets/img/testimonial/13.jpg",
    text: "The WordPress internship was beneficial for learning website development and management.",
    stars: 4,
  },
  {
    name: "Sonia Sharma",
    image: "/assets/img/testimonial/013.jpg",
    text: "The Shopify internship provided valuable exposure to eCommerce development and management.",
    stars: 4,
  },
  {
    name: "Kiran Yadav",
    image: "/assets/img/testimonial/14.jpg",
    text: "The Python internship was a great way to gain practical experience and learn new skills.",
    stars: 5,
  },
  {
    name: "Pooja Verma",
    image: "/assets/img/testimonial/014.jpg",
    text: "The PHP internship offered practical experience and a solid understanding of server-side scripting.",
    stars: 4,
  },
  {
    name: "Kavita Gupta",
    image: "/assets/img/testimonial/015.jpg",
    text: "The Next.js internship provided valuable insights into modern web development techniques.",
    stars: 4,
  },
  {
    name: "Manoj Kumar",
    image: "/assets/img/testimonial/15.jpg",
    text: "The Figma internship helped me improve my design skills and work on practical projects.",
    stars: 5,
  },

  {
    name: "Ravi Sharma",
    image: "/assets/img/testimonial/16.jpg",
    text: "The Next.js internship offered a great learning experience with modern web development techniques.",
    stars: 4,
  },
  {
    name: "Neetu Sharma",
    image: "/assets/img/testimonial/016.jpg",
    text: "The Figma internship helped me improve my design skills with practical projects.",
    stars: 5,
  },
  {
    name: "Ashok Yadav",
    image: "/assets/img/testimonial/17.jpg",
    text: "The Node.js internship was a valuable experience with hands-on backend development.",
    stars: 4,
  },

  {
    name: "Manish Patel",
    image: "/assets/img/testimonial/18.jpg",
    text: "The Laravel internship was a great opportunity to learn modern web development practices.",
    stars: 4,
  },
  {
    name: "Pooja Yadav",
    image: "/assets/img/testimonial/017.jpg",
    text: "The JavaScript internship was an engaging experience with practical projects.",
    stars: 5,
  },
  {
    name: "Ravi Patel",
    image: "/assets/img/testimonial/19.jpg",
    text: "The Flutter internship provided hands-on experience with mobile app development and real-world projects.",
    stars: 5,
  },
  {
    name: "Sanjay Sharma",
    image: "/assets/img/testimonial/20.jpg",
    text: "The WordPress internship was beneficial for understanding website development and management.",
    stars: 4,
  },
  {
    name: "Ritu Gupta",
    image: "/assets/img/testimonial/018.jpg",
    text: "The Shopify internship was a great experience for learning eCommerce management.",
    stars: 4,
  },
  {
    name: "Suman Patel",
    image: "/assets/img/testimonial/019.jpg",
    text: "The Python internship provided practical experience and valuable learning.",
    stars: 5,
  },
  {
    name: "Kiran Sharma",
    image: "/assets/img/testimonial/21.jpg",
    text: "The PHP internship offered hands-on experience with server-side scripting and real-world applications.",
    stars: 4,
  },
  {
    name: "Ravi Sharma",
    image: "/assets/img/testimonial/22.jpg",
    text: "The Next.js internship was insightful with practical applications in web development.",
    stars: 4,
  },
  {
    name: "Sonali Verma",
    image: "/assets/img/testimonial/020.jpg",
    text: "The Figma internship was a valuable opportunity to enhance design skills with real-world projects.",
    stars: 5,
  },
  {
    name: "Sandeep Sharma",
    image: "/assets/img/testimonial/23.jpg",
    text: "The Node.js internship provided practical experience with backend development.",
    stars: 4,
  },
  {
    name: "Priya Saini",
    image: "/assets/img/testimonial/021.jpg",
    text: "The Java internship offered a strong foundation and practical experience in programming.",
    stars: 4,
  },
  {
    name: "Amit Sharma",
    image: "/assets/img/testimonial/24.jpg",
    text: "The Laravel internship was a great opportunity to learn about modern web development practices.",
    stars: 4,
  },
  {
    name: "Ravi Kumar",
    image: "/assets/img/testimonial/25.jpg",
    text: "The JavaScript internship provided engaging projects and practical experience.",
    stars: 5,
  },
  {
    name: "Neha Gupta",
    image: "/assets/img/testimonial/022.jpg",
    text: "The Flutter internship offered valuable insights into mobile app development with hands-on experience.",
    stars: 5,
  },
  {
    name: "Sonia Patel",
    image: "/assets/img/testimonial/023.jpg",
    text: "The WordPress internship provided a solid foundation in website development and management.",
    stars: 4,
  },
  {
    name: "Maya Sharma",
    image: "/assets/img/testimonial/024.jpg",
    text: "The Shopify internship was a great learning experience with practical applications.",
    stars: 4,
  },
  {
    name: "Ankit Patel",
    image: "/assets/img/testimonial/26.jpg",
    text: "The Python internship offered hands-on experience and valuable learning opportunities.",
    stars: 5,
  },
  {
    name: "Gaurav Sharma",
    image: "/assets/img/testimonial/27.jpg",
    text: "The PHP internship provided practical experience with server-side scripting and real-world projects.",
    stars: 4,
  },
  {
    name: "Swati Sharma",
    image: "/assets/img/testimonial/025.jpg",
    text: "The Next.js internship was a great experience with practical applications in web development.",
    stars: 4,
  },
  {
    name: "Nisha Gupta",
    image: "/assets/img/testimonial/026.jpg",
    text: "The Figma internship helped me improve my design skills with real-world projects.",
    stars: 5,
  },
  {
    name: "Sandeep Gupta",
    image: "/assets/img/testimonial/28.jpg",
    text: "The Node.js internship was a valuable experience with practical backend development.",
    stars: 4,
  },
  {
    name: "Ritika Gupta",
    image: "/assets/img/testimonial/027.jpg",
    text: "The Java internship provided a strong foundation and practical experience in programming.",
    stars: 4,
  },
  {
    name: "Manoj Patel",
    image: "/assets/img/testimonial/29.jpg",
    text: "The Laravel internship was a great opportunity to learn about modern web development practices.",
    stars: 4,
  },
  {
    name: "Pooja Sharma",
    image: "/assets/img/testimonial/028.jpg",
    text: "The JavaScript internship provided hands-on experience with engaging projects.",
    stars: 5,
  },
  {
    name: "Aarti Gupta",
    image: "/assets/img/testimonial/029.jpg",
    text: "The Flutter internship offered valuable insights and hands-on experience with mobile app development.",
    stars: 5,
  },
  {
    name: "Rajiv Sharma",
    image: "/assets/img/testimonial/30.jpg",
    text: "The WordPress internship provided a great learning experience in website development and management.",
    stars: 4,
  },
  {
    name: "Ravi Yadav",
    image: "/assets/img/testimonial/31.jpg",
    text: "The Shopify internship was a valuable experience for learning eCommerce development.",
    stars: 4,
  },
];

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
    nextEl: ".array-next",
    prevEl: ".array-prev",
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
};

export default function Testimonial3() {
  const [testimonial, setTestimonial] = useState([]);

  const getTestimonial = async () => {
    try {
      const response = await axios({
        method: "get",
        url: ApiConfig.getAllTesti,
        params: {
          limit: 100,
        },
      });
      if (response.status === 200) {
        setTestimonial(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTestimonial();
  }, []);
  return (
    <>
      <section className="tesimonial-section-3 section-padding section-bg-2 bg-cover">
        <div className="line-shape  d-none d-lg-block">
          <img src="/assets/img/team/line-shape.png" alt="shape-img" />
        </div>
        <div className="mask-shape">
          <img src="/assets/img/team/mask-shape.png" alt="shape-img" />
        </div>
        <div className="array-button">
          <button className="array-prev">
            <i className="fal fa-arrow-left" />
          </button>
          <button className="array-next">
            <i className="fal fa-arrow-right" />
          </button>
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="text-white">Testimonials</span>
            <h2 className="text-white">What Our Students Says</h2>
          </div>
          <div className="swiper testimonial-slider-2">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {testimonial.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-box-items">
                    <div className="icon">
                      <img
                        src="/assets/img/testimonial/icon.png"
                        alt="icon-img"
                      />
                    </div>
                    <div className="client-items">
                      <div
                        className="client-image style-2 bg-cover"
                        style={{ backgroundImage: `url(${testimonial.photo})` }}
                      />
                      <div className="client-content">
                        <h4>{testimonial.name}</h4>
                        <div className="star">
                          {/* {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`fas fa-star ${
                                i < testimonial.rating ? "" : "color-text"
                              }`}
                            />
                          ))} */}
                          <Rating
                            value={testimonial.rating}
                            precision={0.5}
                            readOnly
                            sx={{ color: "#384bff" }}
                          />
                        </div>
                      </div>
                    </div>
                    <p>{testimonial.review}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
