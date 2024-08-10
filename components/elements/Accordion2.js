'use client'
import { useState } from 'react';

export default function Accordion2() {
    const [activeItem, setActiveItem] = useState(1);
    const handleClick = (index) => {
        setActiveItem(index);
    };
    return (
        <>
        <div className="accordion" id="accordion">
            <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                <h5 className="accordion-header" onClick={() => handleClick(1)}>
                    <button className={activeItem == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                        What is the duration of the internship program?
                    </button>
                </h5>
                <div id="faq1" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                    <div className="accordion-body">
                        The internship program is one month long.
                    </div>
                </div>
            </div>
            <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                <h5 className="accordion-header" onClick={() => handleClick(2)}>
                    <button className={activeItem == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                        What is the mode of the internship?

                    </button>
                </h5>
                <div id="faq2" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                    <div className="accordion-body">
                        The internship is entirely online.
                    </div>
                </div>
            </div>


            <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                <h5 className="accordion-header" onClick={() => handleClick(3)}>
                    <button className={activeItem == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                    Will I receive an offer letter and internship completion certificate?
                    </button>
                </h5>
                <div id="faq3" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                    <div className="accordion-body">
                    Yes, upon successful completion of the internship, you will receive both an offer letter and an internship completion certificate.
                    </div>
                </div>
            </div>

            
            <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                <h5 className="accordion-header" onClick={() => handleClick(4)}>
                    <button className={activeItem == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                        How is the internship structured?
                    </button>
                </h5>
                <div id="faq3" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                    <div className="accordion-body">
                        The internship is project-based. You will work on specific projects to apply your programming skills.
                    </div>
                </div>
            </div>

            <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                <h5 className="accordion-header" onClick={() => handleClick(5)}>
                    <button className={activeItem == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                    What kind of projects will I be working on?
                    </button>
                </h5>
                <div id="faq3" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                    <div className="accordion-body">
                    You will get to work projects related to the internship you applied for.
                    </div>
                </div>
            </div>

            <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                <h5 className="accordion-header" onClick={() => handleClick(6)}>
                    <button className={activeItem == 6 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                    How will my performance be evaluated?

                    </button>
                </h5>
                <div id="faq3" className={activeItem == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                    <div className="accordion-body">
                    Your performance will be evaluated based on the quality of your project task deliverables, adherence to deadlines, and overall engagement.
                    </div>
                </div>
            </div>

            <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                <h5 className="accordion-header" onClick={() => handleClick(7)}>
                    <button className={activeItem == 7 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                    Will I receive feedback on my work?

                    </button>
                </h5>
                <div id="faq3" className={activeItem == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                    <div className="accordion-body">
                    Yes, you will receive regular feedback from your mentor or supervisor to help you improve.
                    </div>
                </div>
            </div>

            <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                <h5 className="accordion-header" onClick={() => handleClick(8)}>
                    <button className={activeItem == 8 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                    What kind of support will be provided during the internship?

                    </button>
                </h5>
                <div id="faq3" className={activeItem == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                    <div className="accordion-body">
                    You will have access to online resources, tutorials, and mentorship to support your learning.
                    </div>
                </div>
            </div>

            <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                <h5 className="accordion-header" onClick={() => handleClick(9)}>
                    <button className={activeItem == 9 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                    How long will it take to receive the offer letter and certificate after completion?

                    </button>
                </h5>
                <div id="faq3" className={activeItem == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                    <div className="accordion-body">
                    You will get the Internship completion immediately on your dashboard after completion of internship.
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}