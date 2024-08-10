import Footer3 from '@/components/layout/footer/Footer3'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <Layout headerStyle={1}   >
                <div style={{ paddingBottom: '30px' }}>
                    <h2 className="text-center wow fadeInUp terms-text" style={{ backgroundColor: '#384bff ', color: 'white' }} data-wow-delay=".3s">Refund Policy</h2>
                </div>
                <div className='container'> 
                    <h6 className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingTop: '0px', paddingBottom: '10px' }}>Refund Eligibility:</h6>

                    <p className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingBottom: '47px' }} > 
                    To be eligible for a refund, you must submit a refund request within 7 days of the program start date. Requests submitted after this period will not be considered.
                    </p>


                    <h6 className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingTop: '0px', paddingBottom: '10px' }}>Refund Process:</h6>
                    <p className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingBottom: '47px' }} >Submit a Refund Request: To initiate a refund, please contact our customer support team within the 7-day window.
                    </p>

                    <h6 className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingTop: '0px', paddingBottom: '10px' }}>Verification::
                    </h6>
                    <p className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingBottom: '47px' }} >

                    Our team will verify your request and the date of program commencement.

                    </p>

                    <h6 className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingTop: '0px', paddingBottom: '10px' }}>Refund Issuance::
                    </h6>
                    <p className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingBottom: '47px' }} >
                    Upon verification, the refund will be processed to your original payment method within [number] business days.
                    </p>


                    <h6 className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingTop: '0px', paddingBottom: '10px' }}>Important Notes:
                    </h6>
                    <p className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingBottom: '47px' }} >
                    Refunds will be issued for the full amount paid for the internship program.
                    Once you have accessed any program materials or started the internship, you will not be eligible for a refund.
                    </p>
                    <h6 className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingTop: '0px', paddingBottom: '10px',display:'flex',justifyContent:'center' }}>We reserve the right to modify this refund policy at any time.
                    </h6>
                </div>
                <Footer3 />
            </Layout>
        </div>
    )
}

export default page
