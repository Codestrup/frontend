'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// JSON data for testimonials
const testimonials = [
    {
        "name": "Rubel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Codestrup Java internship was great, offering valuable learning, real-world projects, and skill development.",
        "stars": 5
      },
      {
        "name": "Abhishek",
        "image": "/assets/img/testimonial/male.gif",
        "text": "Codestrup offers meaningful projects, a supportive team, and excellent growth opportunities. Highly recommended!",
        "stars": 4
      },
      {
        "name": "Vaibhav",
        "image": "/assets/img/testimonial/male.gif",
        "text": "I am grateful for Codestrup's support, communication, and the excellent virtual internship environment provided.",
        "stars": 5
      },
      {
        "name": "Tushar",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The internship provided learning, mentorship, and opportunities to work on diverse, real-world projects.",
        "stars": 4
      },
      {
        "name": "Prajakta Kokate",
        "image": "/assets/img/testimonial/female.gif",
        "text": "At Codestrup Infotech, they provide a great opportunity to work on real-world projects and enhance my skills",
        "stars": 4
      },
      {
        "name": "Mayur Latke",
        "image": "/assets/img/testimonial/male.gif",
        "text": "Codestrup is a platform offering valuable internships and a supportive learning environment for students.",
        "stars": 4
      },
      {
        "name": "Aarti Khandagale",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The WordPress internship at Codestrup enhanced my skills with hands-on projects and professional guidance.",
        "stars": 5
      },
      {
        "name": "Renu Kuratkar",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The React internship at Codestrup provided real-world projects, mentorship, and excellent learning opportunities.",
        "stars": 5
      },
      {
        "name": "Poonam Rathod",
        "image": "/assets/img/testimonial/female.gif",
        "text": "As a Codestrup React intern, I learned Next.js, boosting my full-stack development skills significantly.",
        "stars": 5
      },
      
    {
        "name": "Aarti Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The React internship at Codestrup Infotech was amazing! I gained valuable experience from real projects.",
        "stars": 5
    },
    {
        "name": "Rajesh Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "I applied for the Java internship, and the experience was rewarding. The mentors provided great guidance.",
        "stars": 4
    },
    {
        "name": "Priya Reddy",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Laravel internship provided excellent hands-on learning with challenging projects. Highly recommend!",
        "stars": 5
    },
    {
        "name": "Anil Kumar",
        "image": "/assets/img/testimonial/male.gif",
        "text": "Loved working as a JavaScript intern at Codestrup! The projects were exciting and helped me develop my skills.",
        "stars": 4
    },
    {
        "name": "Neha Verma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Flutter internship was a great learning journey with real-world projects and an amazing team.",
        "stars": 4
    },
    {
        "name": "Vikram Singh",
        "image": "/assets/img/testimonial/male.gif",
        "text": "I applied for the WordPress internship, and it was an enriching experience working on live websites.",
        "stars": 4
    },
    {
        "name": "Sneha Gupta",
        "image": "/assets/img/testimonial/female.gif",
        "text": "I applied for the Shopify internship, and it was a valuable learning experience.",
        "stars": 4
    },
    {
        "name": "Rajini Rao",
        "image": "/assets/img/testimonial/female.gif",
        "text": "React internship was a perfect fit for gaining experience with modern web development.",
        "stars": 5
    },
    {
        "name": "Amit Singh",
        "image": "/assets/img/testimonial/male.gif",
        "text": "Angular internship was a rewarding experience with practical, hands-on learning.",
        "stars": 4
    },
    {
        "name": "Sheetal Jain",
        "image": "/assets/img/testimonial/female.gif",
        "text": "Node.js internship at Codestrup was full of learning and growth opportunities.",
        "stars": 4
    },
    {
        "name": "Karan Singh",
        "image": "/assets/img/testimonial/male.gif",
        "text": "I joined the React internship, and it was a perfect opportunity to grow as a developer.",
        "stars": 5
    },
    {
        "name": "Ritu Sinha",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Java internship offered practical, hands-on experience with great mentorship.",
        "stars": 4
    },
    {
        "name": "Pooja Agarwal",
        "image": "/assets/img/testimonial/female.gif",
        "text": "Laravel internship provided me with real-world challenges and great mentorship.",
        "stars": 5
    },
    {
        "name": "Ashok Gupta",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The JavaScript internship was an excellent way to get hands-on experience. Learned a lot.",
        "stars": 4
    },
    {
        "name": "Divya Rao",
        "image": "/assets/img/testimonial/female.gif",
        "text": "Flutter internship was enriching, with valuable projects that boosted my confidence.",
        "stars": 5
    },
    {
        "name": "Mohit Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The WordPress internship was perfect for someone like me looking to build real-world websites.",
        "stars": 4
    },
    {
        "name": "Simran Kaur",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Shopify internship provided valuable eCommerce experience. Loved every moment.",
        "stars": 4
    },
    {
        "name": "Rahul Sharma",
        "image": "/assets/img/testimonial/male.gif",
        "text": "Python internship offered challenging yet exciting projects with excellent guidance.",
        "stars": 5
    },
    {
        "name": "Neelam Verma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The PHP internship was fantastic for learning server-side scripting. Highly recommended.",
        "stars": 4
    },
    {
        "name": "Rishabh Mehta",
        "image": "/assets/img/testimonial/male.gif",
        "text": "Next.js internship gave me real-world exposure to building dynamic web applications.",
        "stars": 5
    },
    {
        "name": "Swati Kumar",
        "image": "/assets/img/testimonial/female.gif",
        "text": "Figma internship helped me improve my design skills and work on real-world client projects.",
        "stars": 4
    },
    {
        "name": "Ayesha Khan",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Node.js internship was a great learning experience. Got to work on exciting projects.",
        "stars": 5
    },
    {
        "name": "Rajesh Singh",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Java internship provided practical experience and excellent mentoring. I grew significantly as a developer.",
        "stars": 4
    },
    {
        "name": "Snehal Patel",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Laravel internship was an enriching experience with plenty of opportunities to learn and grow.",
        "stars": 4
    },
    {
        "name": "Arjun Mehta",
        "image": "/assets/img/testimonial/male.gif",
        "text": "I gained valuable skills during the JavaScript internship. The projects were engaging and well-structured.",
        "stars": 4
    },
    {
        "name": "Poonam Gupta",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Flutter internship provided me with the skills to build mobile applications and a supportive team.",
        "stars": 4
    },
    {
        "name": "Harshit Sharma",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The WordPress internship was fantastic for learning about website development and management.",
        "stars": 5
    },
    {
        "name": "Riya Saini",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Shopify internship was a great experience with hands-on learning about eCommerce.",
        "stars": 5
    },
    {
        "name": "Amit Kumar",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Python internship at Codestrup was a great opportunity to learn and apply my skills.",
        "stars": 4
    },
    {
        "name": "Meera Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The PHP internship offered a great learning experience with practical applications.",
        "stars": 4
    },
    {
        "name": "Ankit Yadav",
        "image": "/assets/img/testimonial/male.gif",
        "text": "Next.js internship was a fantastic experience, giving me insights into building modern web applications.",
        "stars": 4
    },
    {
        "name": "Aarti Mishra",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Figma internship was beneficial for enhancing my design skills and working on real-world projects.",
        "stars": 5
    },
    {
        "name": "Rajiv Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Node.js internship provided me with practical experience in backend development.",
        "stars": 4
    },
    {
        "name": "Sonia Singh",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Java internship was well-structured with a great focus on real-world applications.",
        "stars": 4
    },
    {
        "name": "Vikrant Kumar",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Laravel internship was an excellent opportunity to learn about modern web development practices.",
        "stars": 4
    },
    {
        "name": "Suman Patel",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The JavaScript internship helped me gain hands-on experience with engaging projects.",
        "stars": 5
    },
    {
        "name": "Manish Gupta",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Flutter internship was insightful and allowed me to work on exciting mobile projects.",
        "stars": 5
    },
    {
        "name": "Neetu Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The WordPress internship was a great platform for learning website development.",
        "stars": 4
    },
    {
        "name": "Ravi Kumar",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Shopify internship provided valuable experience in managing eCommerce platforms.",
        "stars": 4
    },
    {
        "name": "Nisha Yadav",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Python internship was a great learning experience with practical challenges.",
        "stars": 5
    },
    {
        "name": "Arvind Sharma",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The PHP internship provided me with essential skills for server-side scripting.",
        "stars": 4
    },
    {
        "name": "Anju Rani",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Next.js internship was a fantastic way to understand modern web application development.",
        "stars": 4
    },
    {
        "name": "Sandeep Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Figma internship was a great opportunity to enhance my design skills with real-world projects.",
        "stars": 5
    },
    {
        "name": "Swati Verma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Node.js internship provided hands-on experience with practical backend development.",
        "stars": 4
    },
    {
        "name": "Rohit Yadav",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Java internship was a fantastic learning experience with valuable project work.",
        "stars": 4
    },
    {
        "name": "Mitali Jain",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Laravel internship was beneficial for learning modern web development practices.",
        "stars": 4
    },
    {
        "name": "Ravi Yadav",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The JavaScript internship provided practical experience with engaging projects.",
        "stars": 5
    },
    {
        "name": "Priti Gupta",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Flutter internship was a great learning experience with real-world applications.",
        "stars": 5
    },
    {
        "name": "Amit Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The WordPress internship provided excellent exposure to website development and management.",
        "stars": 4
    },
    {
        "name": "Shruti Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Shopify internship was a valuable experience for learning about eCommerce platforms.",
        "stars": 4
    },
    {
        "name": "Nitin Kumar",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Python internship offered practical experience and valuable learning opportunities.",
        "stars": 5
    },
    {
        "name": "Jaya Saini",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The PHP internship provided hands-on experience with server-side scripting.",
        "stars": 4
    },
    {
        "name": "Rajesh Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Next.js internship was insightful and provided practical experience in web development.",
        "stars": 4
    },
    {
        "name": "Ritika Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Figma internship was a great way to enhance my design skills and work on client projects.",
        "stars": 5
    },
    {
        "name": "Amit Yadav",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Node.js internship provided valuable backend development experience with real-world projects.",
        "stars": 4
    },
    {
        "name": "Ankita Jain",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Java internship offered a solid foundation and practical experience in programming.",
        "stars": 4
    },
    {
        "name": "Nikhil Kumar",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Laravel internship was a great opportunity to learn about modern web development.",
        "stars": 4
    },
    {
        "name": "Ravi Sharma",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The JavaScript internship was engaging and provided practical experience with valuable projects.",
        "stars": 5
    },
    {
        "name": "Suman Gupta",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Flutter internship offered hands-on experience with mobile app development and real-world projects.",
        "stars": 5
    },
    {
        "name": "Anil Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The WordPress internship was beneficial for learning website development and management.",
        "stars": 4
    },
    {
        "name": "Sonia Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Shopify internship provided valuable exposure to eCommerce development and management.",
        "stars": 4
    },
    {
        "name": "Kiran Yadav",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Python internship was a great way to gain practical experience and learn new skills.",
        "stars": 5
    },
    {
        "name": "Pooja Verma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The PHP internship offered practical experience and a solid understanding of server-side scripting.",
        "stars": 4
    },
    {
        "name": "Kavita Gupta",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Next.js internship provided valuable insights into modern web development techniques.",
        "stars": 4
    },
    {
        "name": "Manoj Kumar",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Figma internship helped me improve my design skills and work on practical projects.",
        "stars": 5
    },
    {
        "name": "Ritika Singh",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Node.js internship was a great experience for learning backend development with practical applications.",
        "stars": 4
    },
    {
        "name": "Pradeep Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Java internship offered hands-on experience and a solid foundation in programming.",
        "stars": 4
    },
    {
        "name": "Ayesha Gupta",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Laravel internship was an excellent opportunity to learn modern web development practices.",
        "stars": 4
    },
    {
        "name": "Shivam Kumar",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The JavaScript internship provided practical experience and engaging projects.",
        "stars": 5
    },
    {
        "name": "Neha Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Flutter internship offered valuable insights and hands-on experience with mobile app development.",
        "stars": 5
    },
    {
        "name": "Vishal Kumar",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The WordPress internship provided a great learning experience in website development and management.",
        "stars": 4
    },
    {
        "name": "Sonali Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Shopify internship was a valuable experience for learning eCommerce development.",
        "stars": 4
    },
    {
        "name": "Gaurav Kumar",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Python internship offered practical experience and valuable learning opportunities.",
        "stars": 5
    },
    {
        "name": "Mansi Gupta",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The PHP internship provided hands-on experience with server-side scripting and real-world projects.",
        "stars": 4
    },
    {
        "name": "Ravi Sharma",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Next.js internship offered a great learning experience with modern web development techniques.",
        "stars": 4
    },
    {
        "name": "Neetu Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Figma internship helped me improve my design skills with practical projects.",
        "stars": 5
    },
    {
        "name": "Ashok Yadav",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Node.js internship was a valuable experience with hands-on backend development.",
        "stars": 4
    },
    {
        "name": "Nisha Saini",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Java internship provided practical experience and a solid foundation in programming.",
        "stars": 4
    },
    {
        "name": "Manish Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Laravel internship was a great opportunity to learn modern web development practices.",
        "stars": 4
    },
    {
        "name": "Pooja Yadav",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The JavaScript internship was an engaging experience with practical projects.",
        "stars": 5
    },
    {
        "name": "Ravi Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Flutter internship provided hands-on experience with mobile app development and real-world projects.",
        "stars": 5
    },
    {
        "name": "Sanjay Sharma",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The WordPress internship was beneficial for understanding website development and management.",
        "stars": 4
    },
    {
        "name": "Ritu Gupta",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Shopify internship was a great experience for learning eCommerce management.",
        "stars": 4
    },
    {
        "name": "Suman Patel",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Python internship provided practical experience and valuable learning.",
        "stars": 5
    },
    {
        "name": "Kiran Sharma",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The PHP internship offered hands-on experience with server-side scripting and real-world applications.",
        "stars": 4
    },
    {
        "name": "Ravi Sharma",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Next.js internship was insightful with practical applications in web development.",
        "stars": 4
    },
    {
        "name": "Sonali Verma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Figma internship was a valuable opportunity to enhance design skills with real-world projects.",
        "stars": 5
    },
    {
        "name": "Sandeep Sharma",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Node.js internship provided practical experience with backend development.",
        "stars": 4
    },
    {
        "name": "Priya Saini",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Java internship offered a strong foundation and practical experience in programming.",
        "stars": 4
    },
    {
        "name": "Amit Sharma",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Laravel internship was a great opportunity to learn about modern web development practices.",
        "stars": 4
    },
    {
        "name": "Ravi Kumar",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The JavaScript internship provided engaging projects and practical experience.",
        "stars": 5
    },
    {
        "name": "Neha Gupta",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Flutter internship offered valuable insights into mobile app development with hands-on experience.",
        "stars": 5
    },
    {
        "name": "Sonia Patel",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The WordPress internship provided a solid foundation in website development and management.",
        "stars": 4
    },
    {
        "name": "Maya Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Shopify internship was a great learning experience with practical applications.",
        "stars": 4
    },
    {
        "name": "Ankit Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Python internship offered hands-on experience and valuable learning opportunities.",
        "stars": 5
    },
    {
        "name": "Gaurav Sharma",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The PHP internship provided practical experience with server-side scripting and real-world projects.",
        "stars": 4
    },
    {
        "name": "Swati Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Next.js internship was a great experience with practical applications in web development.",
        "stars": 4
    },
    {
        "name": "Nisha Gupta",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Figma internship helped me improve my design skills with real-world projects.",
        "stars": 5
    },
    {
        "name": "Sandeep Gupta",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Node.js internship was a valuable experience with practical backend development.",
        "stars": 4
    },
    {
        "name": "Ritika Gupta",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Java internship provided a strong foundation and practical experience in programming.",
        "stars": 4
    },
    {
        "name": "Manoj Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Laravel internship was a great opportunity to learn about modern web development practices.",
        "stars": 4
    },
    {
        "name": "Pooja Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The JavaScript internship provided hands-on experience with engaging projects.",
        "stars": 5
    },
    {
        "name": "Aarti Gupta",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Flutter internship offered valuable insights and hands-on experience with mobile app development.",
        "stars": 5
    },
    {
        "name": "Rajiv Sharma",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The WordPress internship provided a great learning experience in website development and management.",
        "stars": 4
    },
    {
        "name": "Ravi Yadav",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Shopify internship was a valuable experience for learning eCommerce development.",
        "stars": 4
    },
    {
        "name": "Kavita Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Python internship provided hands-on experience and valuable learning opportunities.",
        "stars": 5
    },
    {
        "name": "Sandeep Patel",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The PHP internship was an excellent opportunity to gain practical experience with server-side scripting.",
        "stars": 4
    },
    {
        "name": "Rashmi Sharma",
        "image": "/assets/img/testimonial/female.gif",
        "text": "The Next.js internship offered a great learning experience with modern web development techniques.",
        "stars": 4
    },
    {
        "name": "Ramesh Gupta",
        "image": "/assets/img/testimonial/male.gif",
        "text": "The Figma internship helped me enhance my design skills with practical projects.",
        "stars": 5
    }
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
                    <img src="/assets/img/team/line-shape.png" alt="shape-img" />
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
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/testimonial/icon.png" alt="icon-img" />
                                        </div>
                                        <div className="client-items">
                                            <div className="client-image style-2 bg-cover" style={{ backgroundImage: `url(${testimonial.image})` }} />
                                            <div className="client-content">
                                                <h4>{testimonial.name}</h4>
                                                <div className="star">
                                                    {[...Array(5)].map((_, i) => (
                                                        <i key={i} className={`fas fa-star ${i < testimonial.stars ? '' : 'color-text'}`} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            {testimonial.text}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
