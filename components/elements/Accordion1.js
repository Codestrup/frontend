'use client'
import { useState } from 'react';
export default function Accordion1() {
    const [activeItem, setActiveItem] = useState(1);

    const handleClick = (index) => {
        setActiveItem(index);
    };
    return (
        <>
            <div className="accordion" id="accordion">
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="accordion-header" onClick={() => handleClick(1)}>
<<<<<<< HEAD
                        <button className={activeItem == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                            What is the duration of the internship program?
=======
                        <button className={activeItem == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                        What is the duration of the internship program?
>>>>>>> e9d2564b36ab291059cddc276756a50a3ed038af
                        </button>
                    </h5>
                    <div id="faq1" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
<<<<<<< HEAD
                            The internship program is one month long.
=======
                        The internship program is one month long.
>>>>>>> e9d2564b36ab291059cddc276756a50a3ed038af
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                    <h5 className="accordion-header" onClick={() => handleClick(2)}>
                        <button className={activeItem == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
<<<<<<< HEAD
                            What is the mode of the internship?

=======
                        What is the mode of the internship?
>>>>>>> e9d2564b36ab291059cddc276756a50a3ed038af
                        </button>
                    </h5>
                    <div id="faq2" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
<<<<<<< HEAD
                            The internship is entirely online.
=======
                        The internship is entirely online.
>>>>>>> e9d2564b36ab291059cddc276756a50a3ed038af
                        </div>
                    </div>
                </div>





                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                    <h5 className="accordion-header" onClick={() => handleClick(3)}>
                        <button className={activeItem == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
<<<<<<< HEAD
                            How is the internship structured?
=======
                       Internship Completion and Certification?
>>>>>>> e9d2564b36ab291059cddc276756a50a3ed038af
                        </button>
                    </h5>
                    <div id="faq3" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
<<<<<<< HEAD
                            The internship is project-based. You will work on specific projects to apply your programming skills.
=======
                        After completion of all the project task you will get the Internship completion certificate.
>>>>>>> e9d2564b36ab291059cddc276756a50a3ed038af
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
