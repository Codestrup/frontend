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

                    <p className='wow fadeInUp' style={{ padding: '47px' }} >Thank you for buying our courses. We ensure that our users have a rewarding experience while they discover, assess, and purchase our courses, whether it may be instructor-led or self paced training or classroom training.

                        As with any online purchase experience, there are terms and conditions that govern the Refund Policy. When you buy a internship & training on codestrup, you agree to our Privacy Policy, Terms of Use and refund policy.
                        .</p>



                    <h6 className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingTop: '0px', paddingBottom: '10px' }}>Our refund policy is as follows:</h6>
                    <h6 className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingTop: '0px', paddingBottom: '10px' }}>Cancellation & Refunds:</h6>

                    <p className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingBottom: '47px' }} > Self Paced Learning

                        Raise refund request within 7 days of purchase of course. Money back guarantee is void if the participant has accessed more than 30% content or downloaded the E-Book.
                    </p>


                    <h6 className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingTop: '0px', paddingBottom: '10px' }}>For Instructor Led Online Training:</h6>
                    <p className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingBottom: '47px' }} >Raise refund request within 7 days of commencement of the batch you enrolled for. Money back guarantee is void if the participant has accessed more than 50% content of an e-learning course or has attended Online Classrooms for more than 1 day.

                        Also, In case user downloads the recording or E-Book for the course the money back guarantee will be void.
                    </p>

                    <h6 className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingTop: '0px', paddingBottom: '10px' }}>Cancellation & Refunds:
                    </h6>
                    <p className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingBottom: '47px' }} >

                        Classroom Training codestrup reserves the right to postpone/cancel an event, or change the location of an event because of insufficient enrollments, instructor illness or force majeure events (like floods, earthquakes, political instability, etc)

                        In case codestrup cancels an event, 100% refund will be paid to the delegate.

                        If a cancellation is done by a delegate 7 days (or more) prior to the event, 10% of the total paid fee will be deducted and the remaining amount will be refunded to the delegate.

                        If a cancellation is done by a delegate within 7 days (or less) of the event, no refunds will be made.

                        Refund request can be initiated in two ways

                        Kindly contact concern branch managers through mail <Link href='https://codestrup.in/' style={{ color: "#384bff" }}>(enquiry@codestrup.com)</Link>  and get confirmation about your refund eligibility. This will work when item quantity is one or more.

                    </p>

                    <h6 className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingTop: '0px', paddingBottom: '10px' }}>Refunds:
                    </h6>
                    <p className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingBottom: '47px' }} >
                     

                            Duplicate payment

                            Refund of the duplicate payment made by the delegate will be processed via the same source (original method of payment) in 7 to 10 working days post intimation by the customer.
         
                       
            

                    </p>


                    <h6 className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingTop: '0px', paddingBottom: '10px' }}>Note:
                    </h6>
                    <p className='wow fadeInUp' style={{ paddingLeft: '47px', paddingRight: '47px', paddingBottom: '47px' }} >
                    All refunds will be processed within 7-10 working days after the refund request is approved by codestrup.
                    </p>
                </div>
                <Footer3 />
            </Layout>
        </div>
    )
}

export default page
