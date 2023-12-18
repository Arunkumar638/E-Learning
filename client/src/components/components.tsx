"use client";
import Script from "next/script";
import { useState, useEffect } from "react";
export const Footer = () => {
    return (
      <>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="assets/css/dark.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <div className="footer-area">
          <div className="pt-100 pb-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="single-footer-widget">
                    <a href="index.html">
                      <img src="assets/images/white-logo.png" alt="Image" />
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut laborelore magna aliqua.
                      Quis ipsum suspendissutrices grada.
                    </p>
                    <ul className="social-link">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank">
                          <i className="ri-twitter-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="ri-instagram-line" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-footer-widget">
                    <h3>Support</h3>
                    <ul className="use-link">
                      <li>
                        <a href="/ourinstructors">
                          <i className="ri-arrow-right-line" />
                          Our Instructors
                        </a>
                      </li>
                      <li>
                        <a href="/contactus">
                          <i className="ri-arrow-right-line" />
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="/privacypolicy">
                          <i className="ri-arrow-right-line" />
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="/conditions">
                          <i className="ri-arrow-right-line" />
                          Terms Conditions
                        </a>
                      </li>
                      <li>
                        <a href="/ourcourses">
                          <i className="ri-arrow-right-line" />
                          Our Courses
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-footer-widget">
                    <h3>Useful Link</h3>
                    <ul className="use-link">
                      <li>
                        <a href="/about">
                          <i className="ri-arrow-right-line" />
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/blog">
                          <i className="ri-arrow-right-line" />
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="/blogdetails">
                          <i className="ri-arrow-right-line" />
                          Blog Details
                        </a>
                      </li>
                      <li>
                        <a href="/ourcourses">
                          <i className="ri-arrow-right-line" />
                          Our Courses
                        </a>
                      </li>
                      <li>
                        <a href="/conditions">
                          <i className="ri-arrow-right-line" />
                          Terms Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-footer-widget">
                    <h3>Information</h3>
                    <ul className="information-link">
                      <li>
                        <i className="ri-headphone-line" />
                        <span>Call Us</span>
                        <a href="tel:+800-388-80-90">+800 388 80 90</a>
                      </li>
                      <li>
                        <i className="ri-mail-line" />
                        <span>Email Us</span>
                        <a href="/cdn-cgi/l/email-protection#d5bdb0b9b9ba95bfa0b3b4fbb6bab8">
                          <span
                            className="__cf_email__"
                            data-cfemail="93fbf6fffffcd3f9e6f5f2bdf0fcfe"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-map-pin-line" />
                        <span>Location</span>
                        PO Box 567 Hostin st. 433, Los Angeles California, US.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right-area">
            <div className="container">
              <div className="copy-right-content">
                <p>
                  @Jufa. Design &amp; Developed By{" "}
                  <a href="https://hibootstrap.com/" target="_blank">
                    HiBootstrap
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Script src="/assets/js/jquery.min.js"></Script>
        <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      </>
    );
  };

  export const Instructors = () => {
    return (
      <div className="our-instructors-area pt-100 pb-70 bg-color-f7f8f9">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Instructors</span>
            <h2>
              Our Top <span>Instructors</span>
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-sm-6">
              <div className="single-instructors-item">
                <a href="instructors-details.html">
                  <img
                    src="assets/images/instructors/instructors-1.jpg"
                    alt="Image"
                  />
                </a>
                <div className="instructors-content">
                  <h3>
                    <a href="instructors-details.html">Charlotte Smith</a>
                  </h3>
                  <span>Development Teacher</span>
                  <ul className="review">
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <span>( 345 Reviews )</span>
                    </li>
                  </ul>
                  <div className="instructors-social">
                    <a href="#" className="control">
                      <i className="ri-add-line" />
                    </a>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="ri-instagram-line" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="ri-linkedin-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="ri-twitter-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="single-instructors-item">
                <a href="instructors-details.html">
                  <img
                    src="assets/images/instructors/instructors-2.jpg"
                    alt="Image"
                  />
                </a>
                <div className="instructors-content">
                  <h3>
                    <a href="instructors-details.html">Amelia Disuza</a>
                  </h3>
                  <span>PHP Developer</span>
                  <ul className="review">
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <span>( 132 Reviews )</span>
                    </li>
                  </ul>
                  <div className="instructors-social">
                    <a href="#" className="control">
                      <i className="ri-add-line" />
                    </a>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="ri-instagram-line" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="ri-linkedin-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="ri-twitter-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="single-instructors-item">
                <a href="instructors-details.html">
                  <img
                    src="assets/images/instructors/instructors-3.jpg"
                    alt="Image"
                  />
                </a>
                <div className="instructors-content">
                  <h3>
                    <a href="instructors-details.html">John Andre</a>
                  </h3>
                  <span>Banking Teacher</span>
                  <ul className="review">
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <span>( 267 Reviews )</span>
                    </li>
                  </ul>
                  <div className="instructors-social">
                    <a href="#" className="control">
                      <i className="ri-add-line" />
                    </a>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="ri-instagram-line" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="ri-linkedin-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="ri-twitter-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="single-instructors-item">
                <a href="instructors-details.html">
                  <img
                    src="assets/images/instructors/instructors-4.jpg"
                    alt="Image"
                  />
                </a>
                <div className="instructors-content">
                  <h3>
                    <a href="instructors-details.html">Richard Clark</a>
                  </h3>
                  <span>UX / UI Teacher</span>
                  <ul className="review">
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <i className="ri-star-s-fill" />
                    </li>
                    <li>
                      <span>( 434 Reviews )</span>
                    </li>
                  </ul>
                  <div className="instructors-social">
                    <a href="#" className="control">
                      <i className="ri-add-line" />
                    </a>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="ri-instagram-line" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="ri-linkedin-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="ri-twitter-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export const Pagetitle = ({ page }: any) => {
 
    return (
      <>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="assets/css/dark.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <div className="page-title-area">
          <div className="container">
            <div className="page-shape-wrap">
              <div className="page-title-content">
                <h2>{page}</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">{page}</li>
                </ul>
              </div>
              <img
                src="assets/images/page-bg-shape-1.png"
                alt="Image"
                className="shape shape-1"
                data-speed="0.04"
                data-revert="true"
              /> 
                <img
                  src="assets/images/page-bg-shape-7.png"
                  alt="Image"
                  className="shape shape-2"
                  data-speed="0.04"
                  data-revert="true"
                />         
            </div>
          </div>
        </div>
        <Script src="/assets/js/jquery.min.js"></Script>
        <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      </>
    );
  };

export const Subscribe = ({page}:any) => {
  
    const [isAbout, setIsAbout] = useState(false)
    useEffect(()=>{
      if(page=='about'){
        setIsAbout(true);
      }
    },[])
    return (
      <>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="assets/css/dark.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <div className={`subscribe-area ptb-100 ${isAbout?``:`bg-color-f7f8f9`}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="subscribe-content">
                  <h2>
                    Subscribe <span>Newsletters</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusm tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="newsletter-form" data-toggle="validator">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address"
                    name="EMAIL"
                    required
                    autoComplete="off"
                  />
                  <button className="default-btn" type="submit">
                    Subscribe
                    <i className="ri-send-plane-fill" />
                  </button>
                  <div id="validator-newsletter" className="form-result" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <Script src="/assets/js/jquery.min.js"></Script>
        <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      </>
    );
  };
export const Tesimonials = () =>{
    return(
        <>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/dark.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
        <link rel="stylesheet" href="assets/css/style.css" />

        <div className="testimonials-area bg-color-f7f8f9 ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Testimonials</span>
            <h2>
              What People Say <span>About Us</span>
            </h2>
          </div>
          <div className="testimonials-slide owl-carousel owl-theme">
            <div className="single-testimonials-item">
              <div className="testimonials-mane">
                <img
                  src="assets/images/testimonials/testimonials-1.jpg"
                  alt="Image"
                />
                <h3>Georia Laila</h3>
                <span>Student at Porter Library</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adising elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum supendisse ultrices gravida. Risus commodo
              </p>
              <img
                src="assets/images/testimonials/quate.png"
                alt="Image"
                className="quate"
              />
            </div>
            <div className="single-testimonials-item">
              <div className="testimonials-mane">
                <img
                  src="assets/images/testimonials/testimonials-2.jpg"
                  alt="Image"
                />
                <h3>Ricky johnson</h3>
                <span>Instructor at Porter Library</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adising elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum supendisse ultrices gravida. Risus commodo
              </p>
              <img
                src="assets/images/testimonials/quate.png"
                alt="Image"
                className="quate"
              />
            </div>
            <div className="single-testimonials-item">
              <div className="testimonials-mane">
                <img
                  src="assets/images/testimonials/testimonials-3.jpg"
                  alt="Image"
                />
                <h3>Charry Porter</h3>
                <span>Student at Porter Library</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adising elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum supendisse ultrices gravida. Risus commodo
              </p>
              <img
                src="assets/images/testimonials/quate.png"
                alt="Image"
                className="quate"
              />
            </div>
            <div className="single-testimonials-item">
              <div className="testimonials-mane">
                <img
                  src="assets/images/testimonials/testimonials-2.jpg"
                  alt="Image"
                />
                <h3>Ricky johnson</h3>
                <span>Instructor at Porter Library</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adising elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum supendisse ultrices gravida. Risus commodo
              </p>
              <img
                src="assets/images/testimonials/quate.png"
                alt="Image"
                className="quate"
              />
            </div>
          </div>
        </div>
      </div>
      <Script src="/assets/js/jquery.min.js"></Script>
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
     
      </>
    )
}