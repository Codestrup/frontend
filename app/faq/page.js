<<<<<<< HEAD

import Accordion1 from "@/components/elements/Accordion1"
=======
>>>>>>> e9d2564b36ab291059cddc276756a50a3ed038af
import Accordion2 from "@/components/elements/Accordion2"
import Layout from "@/components/layout/Layout"
export default function Faq() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Faq">
                <section className="faq-section-2 fix section-padding">
                    <div className="container">
                        <div className="faq-wrapper">
<<<<<<< HEAD
                            <div className="row g-4">
                                {/* <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="faq-image">
                                    <img src="/assets/img/faq/faq-2.png" alt="faq-img" />
                                    </div>
                                </div> */}
                                <div className="col-lg-12 col-md-12">
=======
                            {/* <div className="row g-4"> */}
                                
                             
>>>>>>> e9d2564b36ab291059cddc276756a50a3ed038af
                                    <div className="faq-content style-2">
                                        <div className="section-title">
                                            <span className="wow fadeInUp" style={{fontWeight:'600'}}>See Our Faqs</span>
                                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            Frequently Asked Questions
                                            </h2>
                                        </div>
                                        <div className="faq-accordion mt-4 mt-md-0">
                                            <Accordion2 />
                                        </div>
                                    </div>
                               
                            {/* </div> */}
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}