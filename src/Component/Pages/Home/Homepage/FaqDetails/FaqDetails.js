import React from 'react';
import './FaqDetails.css';

const FaqDetails = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-6">
                        <h3 className='text-danger fw-bold'>Need Help?</h3>
                        <h1 className='fw-bold'>Frequently Asked Questions</h1>
                        <hr />
                    </div>
                    <div className="col-sm-6 text-color">
                        <input type="text" name="" id="" className=' w-75 p-2 bg-light bg-gradient border-0' placeholder='Does Zembargo offer same day delivery?' />
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='line-break'>
                <hr />
            </div>
            <div className='container'>
                <div>
                    <div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                How does it work?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                1.Create a Free quote online and book your delivery
                                                <br />
                                                2.Your package is picked up from the collection point
                                                <br />
                                                3.Your package is on its way to you or the destination point
                                                <br />
                                                4.Your package is successfully delivered with proof of collection and delivery
                                                <div>
                                                    <button className='color-button'>
                                                        I need some information on your service.How can i contact you?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How do I pay?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                You can pay online which with our safely and secure payment system and our recommended payment method. Following payment you will be receive a payment email confirmation. You can also elect to pay in person or contact us to discuss your specific payment arrangement. We are flexible and are happy to discuss an arrangement to suit your needs.
                                                <div>
                                                    <button className='color-button'>
                                                        I need some information on your service.How can i contact you?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Can I make changes to my order?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Provided our driver has not collected your item and are on route to your destination location, you can contact us by phone or email to make changes to your delivery order. We would advise that you contact us at least 4 hours before your item is schedule to be collected from the pickup location to ensure that we can make the changes you need on time.

                                                We will let you know if there are any revised costs but if its simply to add another small item or wait 5-10 mins for item to be collected, we will do that for no extra costs - we are happy to help to accommodate your needs and the advance notice helps us to do just that.
                                                <div>
                                                    <button className='color-button'>
                                                        I need some information on your service.How can i contact you?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How do I create an account?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Click on the My Account link at the top of the page, click on 'Sign up', register with your full name, a unique username and password and hit 'Sign Up'. Once you successful created your account, you will be sent a confirmation email to confirm your email address. Simply click on the 'verify email address link' within the email and your email address will be verified at which point you will land back on our website. From here you can manage your online profile and deliveries.
                                                <div>
                                                    <button className='color-button'>
                                                        I need some information on your service.How can i contact you?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Do you offer personalised goods delivery?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Yes we can. We offer same day and next day delivery. If you have personalised items to delivery we will work with you to get them delivered to the right place at the right time. We can delivery on bank holidays or even at the odd hour, but this is subject to a prior discussion with us first to ensure we can meet your delivery requirements.
                                                <div>
                                                    <button className='color-button'>
                                                        I need some information on your service.How can i contact you?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How do I book a delivery?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Click the red Get a Quote button at the top right of our website. You will land on our quote page. Simply fill out the form with your delivery details (item, pickup location etc.) and our site will generate an instant quote. A copy of the quote will be sent to the email address provided on the form. Assuming your happy with our affordable quote, you can proceed to confirm your delivery online (or via phone) and get your delivery booked with us.

                                                Alternatively, if you need time to review the quote and would like to confirm your booking later, please use the 'Click Here to Book' link via the copy of quote email we have sent you.
                                                <div>
                                                    <button className='color-button'>
                                                        I need some information on your service.How can i contact you?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Is it safe to pay online?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Yes we use Stripe for all our online payments which is safe and secure. You will also receive a payment confirmation email from us and from Stripe to confirm payment.
                                                <div>
                                                    <button className='color-button'>
                                                        I need some information on your service.How can i contact you?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                My product was damaged/lost during the delivery. What should I do?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Our drivers take care when delivery all customer items/packages to their delivery location even if its just a small box. Our driver will take a photo of the item upon collection and then upon delivery to ensure you (the customer) as proof of collection and delivery and proof that the item/package was in good/satisfactory condition. If we find that the item/package is damaged prior to our collection, we will notify you immediately.

                                                If you believe that your item/package has been damaged/lost during the delivery, give us a call to discuss and send us an email or WhatsApp message with a photo of the damage so we can investigate and resolve. We have full liability cover for damage/loss of goods and theft, therefore and only after careful investigation, if the damage was indeed proven to be the fault of one of our driver's, we would ensure that you (the customer) are reimbursed for the item(s).
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                What areas of the UK do you cover?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We cover mainly London and South East. We also cover Essex, Luton, Watford and Hertfordshire.
                                                <div>
                                                    <button className='color-button'>
                                                        I need some information on your service.How can i contact you?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How do I reset my password?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Click on the My Account link at the top of the page, click on 'Forgotten Password'. Here you will need prompted to enter your username or email address to reset password. A reset password link will be sent to the registered email address we have on record. Simply follow the steps to reset your password.
                                                <div>
                                                    <button className='color-button'>
                                                        I need some information on your service.How can i contact you?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Is it safe to pay online?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Yes we use Stripe for all our online payments which is safe and secure. You will also receive a payment confirmation email from us and from Stripe to confirm payment.
                                                <div>
                                                    <button className='color-button'>
                                                        I need some information on your service.How can i contact you?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                There was a delay in my delivery/ my delivery had a routing issue, what should I do?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Whist we will always aim to deliver your item/package at the time we have allocated for you, unfortunately there will be accidents or incidents that may prevent us from doing just that. In that case we will contact you immediately to make you aware of the issue and what are doing to resolve. As usual we are always available at the end of a phone call so give us a call (or drop us an email) with the issue and we will work with you (or the affected party) to resolve as quickly as possible.
                                                <div>
                                                    <button className='color-button'>
                                                        I need some information on your service.How can i contact you?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                What additional services do you offer?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We like to be agile and help our customers as best we can. We want to work with all types of businesses and our customers can enjoy many additional benefits, including discounted rates and additional services such as:

                                                Logo Design
                                                Business Cards
                                                Posters and Flyers
                                                Ads Design
                                                Website Design
                                                Bespoke Design Services
                                                Give us a call or email us to discuss further.
                                                <div>
                                                    <button className='color-button'>
                                                        I need some information on your service.How can i contact you?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How can I make a compaint about my delivery agent or some issues I faced for my delivery?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                For all complaints, simply send us an email to info@zembargo.co.uk with the word “Complaint: followed by a short description of the issue” in the email subject and we will review your compliant within 24 hours and respond.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqDetails;