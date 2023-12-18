"use client";

import Script from "next/script";
import {Footer,Pagetitle} from "../../components/components";
import { Suspense,lazy } from "react";

const checkout = () => {
  const Navbar = lazy(() => import('../../components/navBar'));
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
      <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="assets/css/flaticon.css" />
      <link rel="stylesheet" href="assets/css/remixicon.css" />
      <link rel="stylesheet" href="assets/css/meanmenu.min.css" />
      <link rel="stylesheet" href="assets/css/aos.min.css" />
      <link rel="stylesheet" href="assets/css/odometer.min.css" />
      <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
      <link rel="stylesheet" href="assets/css/before-after.min.css" />
      <link rel="stylesheet" href="assets/css/style.css" />
      <link rel="stylesheet" href="assets/css/dark.css" />
      <link rel="stylesheet" href="assets/css/responsive.css" />
      <link rel="icon" type="image/png" href="assets/images/favicon.png" />
      <title>Jufa - Coach Online Courses HTML Template</title>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar active="checkout"/>
      </Suspense>
      <Pagetitle page="Checkout"/>
      <section className="checkout-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="log-in-coupon-code mr-15">
                <div className="faq-accordion">
                  <ul className="accordion">
                    <li className="accordion-item">
                      <a className="accordion-title" href="javascript:void(0)">
                        Returning Customer? Click Here To Login
                      </a>
                      <div className="contact-form-action accordion-content">
                        <p>
                          Quisque gravida turpis sit amet nulla posuere lacinia.
                          Cras sed est sit amet ipsum luctus.
                        </p>
                        <form method="post">
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  name="name"
                                  placeholder="Username or Email"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="password"
                                  name="password"
                                  placeholder="Password"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <button className="default-btn" type="submit">
                                Log in
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="faq-accordion">
                  <ul className="accordion">
                    <li className="accordion-item">
                      <a className="accordion-title" href="javascript:void(0)">
                        Have a Coupon? Click Here To Enter Your Code
                      </a>
                      <div className="contact-form-action accordion-content">
                        <p>Now apply coupon</p>
                        <form method="post">
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  name="Coupon"
                                  placeholder="Coupon Code"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <button className="default-btn" type="submit">
                                Apply coupon
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <form>
                <div className="billing-details mr-15">
                  <h3 className="title">Billing Details</h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          First name <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Last name <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Company name (Optional)</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Country <span className="required">*</span>
                        </label>
                        <div className="select-box">
                          <select className="form-control">
                            <option value={5}>United Kingdom</option>
                            <option value={1}>China</option>
                            <option value={2}>United Arab Emirates</option>
                            <option value={0}>Germany</option>
                            <option value={3}>France</option>
                            <option value={4}>Japan</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Street address <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          State<span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Zip <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="ship-different-address"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ship-different-address"
                        >
                          Ship to a different address?
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Order notes (Optional)</label>
                        <textarea
                          name="notes"
                          id="notes"
                          cols={30}
                          rows={8}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="order-details ml-15">
                <div className="cart-totals">
                  <h3>Checkout summary</h3>
                  <ul>
                    <li>
                      Subtotal <span>$270.00</span>
                    </li>
                    <li>
                      Shipping <span>$270.00</span>
                    </li>
                    <li>
                      Coupon <span>$00.00</span>
                    </li>
                    <li>
                      Total <span>$270.00</span>
                    </li>
                    <li>
                      <b>Payable Total</b>{" "}
                      <span>
                        <b>$270.00</b>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="faq-accordion">
                  <h3>Payment method</h3>
                  <ul className="accordion">
                    <li className="accordion-item active">
                      <a className="accordion-title" href="javascript:void(0)">
                        Direct bank transfer
                      </a>
                      <p className="accordion-content show">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have our account.
                      </p>
                    </li>
                    <li className="accordion-item">
                      <a className="accordion-title" href="javascript:void(0)">
                        Cash on delivery
                      </a>
                      <p className="accordion-content">
                        Please send your cheque to Store Name, Store Street,
                        Store Town, Store State / County, Store Postcode.
                      </p>
                    </li>
                    <li className="accordion-item">
                      <a className="accordion-title" href="javascript:void(0)">
                        PayPal
                      </a>
                      <p className="accordion-content">
                        Pay via PayPal; you can pay with your credit card if you
                        don’t have a PayPal account.
                      </p>
                    </li>
                    <li className="accordion-item">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="ship-differents-address"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ship-different-address"
                        >
                          I’ve read and accept the{" "}
                          <a href="terms-conditions.html">
                            terms &amp; conditions
                          </a>
                          *
                        </label>
                      </div>
                    </li>
                    <li className="place-order">
                      <a href="#" className="default-btn two">
                        Place Order
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div className="go-top">
        <i className="ri-arrow-up-s-fill" />
        <i className="ri-arrow-up-s-fill" />
      </div>
      <Script src="/assets/js/jquery.min.js"></Script>
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/js/meanmenu.min.js"></Script>
      <Script src="assets/js/owl.carousel.min.js"></Script>
      <Script src="assets/js/carousel-thumbs.min.js"></Script>
      <Script src="assets/js/aos.min.js"></Script>
      <Script src="assets/js/appear.min.js"></Script>
      <Script src="assets/js/odometer.min.js"></Script>
      <Script src="assets/js/magnific-popup.min.js"></Script>
      <Script src="assets/js/before-after.min.js"></Script>
      <Script src="assets/js/email-decode.min.js"></Script>
      <Script src="assets/js/tween-max.min.js"></Script>
      <Script src="assets/js/form-validator.min.js"></Script>
      <Script src="assets/js/contact-form-script.js"></Script>
      <Script src="assets/js/ajaxchimp.min.js"></Script>
      <Script src="assets/js/custom.js"></Script>
    </>
  );
};

export default checkout;
