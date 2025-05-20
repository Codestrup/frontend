import Accordion2 from "@/components/elements/Accordion2"
import Layout from "@/components/layout/Layout"
export default function Faq() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQ’S">
                <section className="faq-section-2 fix section-padding">
                    <div className="container">
                        <div className="faq-wrapper">
                            {/* <div className="row g-4"> */}
                                
                             
                                    <div className="faq-content style-2">
                                        <div className="section-title">
                                            <span className="wow fadeInUp" style={{fontWeight:'600'}}>See Our FAQ’S</span>
                                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            Frequently Asked Questions
                                            </h2>
                                        </div>
                                        <div className="faq-accordion mt-4 mt-md-0">
                                            <Accordion2/>
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