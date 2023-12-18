'use client'

import Script from "next/script";
import {Footer, Subscribe} from "../../components/components";
import { Suspense,lazy } from "react";

const ourCourses = () => {
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
        <Navbar active="ourcourses"/>
      </Suspense>
      <div className="page-title-area">
        <div className="container">
          <div className="page-shape-wrap">
            <div className="page-title-content">
              <h2>Our Courses</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">Our Courses</li>
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
              src="assets/images/page-bg-shape-4.png"
              alt="Image"
              className="shape shape-2"
              data-speed="0.04"
              data-revert="true"
            />
          </div>
        </div>
      </div>
      <div className="online-courses-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Online Courses</span>
            <h2>
              Explore Featured <span>Courses</span>
            </h2>
          </div>
          <div className="courses-search-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6">
                <p>We found 63 courses available for you</p>
              </div>
              <div className="col-lg-6 col-sm-6">
                <form className="search-box">
                  <div className="search-input">
                    <input
                      type="text"
                      name="Search"
                      placeholder="Search for..."
                      className="form-control"
                    />
                    <button type="submit" className="search-btn">
                      <i className="ri-search-line" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="single-courses-item">
                <div className="courses-img">
                  <a href="courses.html">
                    <img
                      src="assets/images/courses/courses-1.jpg"
                      alt="Image"
                    />
                  </a>
                  <ul>
                    <li>
                      <a href="courses.html">Featured</a>
                    </li>
                    <li className="bg-5696fa">
                      <span>-15%</span>
                    </li>
                  </ul>
                  <img
                    src="assets/images/courses/teacher-1.png"
                    alt="Image"
                    className="teacher"
                  />
                </div>
                <div className="courses-content">
                  <ul className="courses-view">
                    <li>
                      <i className="ri-user-line" />
                      4.5k
                    </li>
                    <li>
                      <i className="ri-eye-line" />
                      154.5k
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                      4.9
                    </li>
                  </ul>
                  <h3>
                    <a href="/coursedetails">
                      Listening Skills the Ultimate Soft Skills for Beginners
                    </a>
                  </h3>
                  <ul className="courses-time d-flex justify-content-between">
                    <li>
                      <i className="ri-time-fill" />
                      02 hr 10 min
                    </li>
                    <li>
                      <i className="ri-vidicon-fill" />
                      15 Lectures
                    </li>
                    <li>
                      <i className="ri-list-check" />
                      Beginer
                    </li>
                  </ul>
                </div>
                <ul className="courses-fee d-flex justify-content-between">
                  <li>$140</li>
                  <li>
                    <a href="/coursedetails" className="read-more">
                      More Details
                      <i className="ri-arrow-right-line" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-courses-item">
                <div className="courses-img">
                  <a href="courses.html">
                    <img
                      src="assets/images/courses/courses-2.jpg"
                      alt="Image"
                    />
                  </a>
                  <ul>
                    <li>
                      <a href="courses.html">Featured</a>
                    </li>
                    <li className="bg-5696fa">
                      <span>Free</span>
                    </li>
                  </ul>
                  <img
                    src="assets/images/courses/teacher-2.png"
                    alt="Image"
                    className="teacher"
                  />
                </div>
                <div className="courses-content">
                  <ul className="courses-view">
                    <li>
                      <i className="ri-user-line" />
                      5.6k
                    </li>
                    <li>
                      <i className="ri-eye-line" />
                      256.5k
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                      5.0
                    </li>
                  </ul>
                  <h3>
                    <a href="/coursedetails">
                      Mastering on Data Modeling For Fundamentals Courses
                    </a>
                  </h3>
                  <ul className="courses-time d-flex justify-content-between">
                    <li>
                      <i className="ri-time-fill" />
                      03 hr 30 min
                    </li>
                    <li>
                      <i className="ri-vidicon-fill" />
                      25 Lectures
                    </li>
                    <li>
                      <i className="ri-list-check" />
                      Beginer
                    </li>
                  </ul>
                </div>
                <ul className="courses-fee d-flex justify-content-between">
                  <li>$199</li>
                  <li>
                    <a href="/coursedetails" className="read-more">
                      More Details
                      <i className="ri-arrow-right-line" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-courses-item">
                <div className="courses-img">
                  <a href="courses.html">
                    <img
                      src="assets/images/courses/courses-3.jpg"
                      alt="Image"
                    />
                  </a>
                  <ul>
                    <li>
                      <a href="courses.html">Featured</a>
                    </li>
                    <li className="bg-fd9519">
                      <a href="courses.html">Development</a>
                    </li>
                  </ul>
                  <img
                    src="assets/images/courses/teacher-3.png"
                    alt="Image"
                    className="teacher"
                  />
                </div>
                <div className="courses-content">
                  <ul className="courses-view">
                    <li>
                      <i className="ri-user-line" />
                      8.5k
                    </li>
                    <li>
                      <i className="ri-eye-line" />
                      754.5k
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                      4.8
                    </li>
                  </ul>
                  <h3>
                    <a href="/coursedetails">
                      UI/UX Design Pattern For Successfully Software
                    </a>
                  </h3>
                  <ul className="courses-time d-flex justify-content-between">
                    <li>
                      <i className="ri-time-fill" />
                      01 hr 20 min
                    </li>
                    <li>
                      <i className="ri-vidicon-fill" />
                      18 Lectures
                    </li>
                    <li>
                      <i className="ri-list-check" />
                      Beginer
                    </li>
                  </ul>
                </div>
                <ul className="courses-fee d-flex justify-content-between">
                  <li>$140</li>
                  <li>
                    <a href="/coursedetails" className="read-more">
                      More Details
                      <i className="ri-arrow-right-line" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-courses-item">
                <div className="courses-img">
                  <a href="courses.html">
                    <img
                      src="assets/images/courses/courses-8.jpg"
                      alt="Image"
                    />
                  </a>
                  <ul>
                    <li>
                      <a href="courses.html">Featured</a>
                    </li>
                    <li className="bg-5696fa">
                      <span>Free</span>
                    </li>
                  </ul>
                  <img
                    src="assets/images/courses/teacher-2.png"
                    alt="Image"
                    className="teacher"
                  />
                </div>
                <div className="courses-content">
                  <ul className="courses-view">
                    <li>
                      <i className="ri-user-line" />
                      8.6k
                    </li>
                    <li>
                      <i className="ri-eye-line" />
                      756.5k
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                      4.8
                    </li>
                  </ul>
                  <h3>
                    <a href="/coursedetails">
                      Cryptocurrency Trading Course 2021: Achieve Wins Daily!
                    </a>
                  </h3>
                  <ul className="courses-time d-flex justify-content-between">
                    <li>
                      <i className="ri-time-fill" />
                      01 hr 30 min
                    </li>
                    <li>
                      <i className="ri-vidicon-fill" />
                      18 Lectures
                    </li>
                    <li>
                      <i className="ri-list-check" />
                      Beginer
                    </li>
                  </ul>
                </div>
                <ul className="courses-fee d-flex justify-content-between">
                  <li>$187</li>
                  <li>
                    <a href="/coursedetails" className="read-more">
                      More Details
                      <i className="ri-arrow-right-line" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-courses-item">
                <div className="courses-img">
                  <a href="courses.html">
                    <img
                      src="assets/images/courses/courses-9.jpg"
                      alt="Image"
                    />
                  </a>
                  <ul>
                    <li>
                      <a href="courses.html">Featured</a>
                    </li>
                    <li className="bg-5696fa">
                      <span>Free</span>
                    </li>
                  </ul>
                  <img
                    src="assets/images/courses/teacher-2.png"
                    alt="Image"
                    className="teacher"
                  />
                </div>
                <div className="courses-content">
                  <ul className="courses-view">
                    <li>
                      <i className="ri-user-line" />
                      9.9k
                    </li>
                    <li>
                      <i className="ri-eye-line" />
                      954.5k
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                      4.2
                    </li>
                  </ul>
                  <h3>
                    <a href="/coursedetails">
                      Yoga Medicine’s Guide to From Therapeutic Man &amp; Woman
                    </a>
                  </h3>
                  <ul className="courses-time d-flex justify-content-between">
                    <li>
                      <i className="ri-time-fill" />
                      04 hr 30 min
                    </li>
                    <li>
                      <i className="ri-vidicon-fill" />
                      30 Lectures
                    </li>
                    <li>
                      <i className="ri-list-check" />
                      Beginer
                    </li>
                  </ul>
                </div>
                <ul className="courses-fee d-flex justify-content-between">
                  <li>$347</li>
                  <li>
                    <a href="/coursedetails" className="read-more">
                      More Details
                      <i className="ri-arrow-right-line" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-courses-item">
                <div className="courses-img">
                  <a href="courses.html">
                    <img
                      src="assets/images/courses/courses-10.jpg"
                      alt="Image"
                    />
                  </a>
                  <ul>
                    <li>
                      <a href="courses.html">Featured</a>
                    </li>
                    <li className="bg-5696fa">
                      <span>Free</span>
                    </li>
                  </ul>
                  <img
                    src="assets/images/courses/teacher-2.png"
                    alt="Image"
                    className="teacher"
                  />
                </div>
                <div className="courses-content">
                  <ul className="courses-view">
                    <li>
                      <i className="ri-user-line" />
                      9.9k
                    </li>
                    <li>
                      <i className="ri-eye-line" />
                      954.5k
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                      4.2
                    </li>
                  </ul>
                  <h3>
                    <a href="/coursedetails">
                      Excel Crash Course: Master Excel for Financial Analysis
                    </a>
                  </h3>
                  <ul className="courses-time d-flex justify-content-between">
                    <li>
                      <i className="ri-time-fill" />
                      04 hr 30 min
                    </li>
                    <li>
                      <i className="ri-vidicon-fill" />
                      30 Lectures
                    </li>
                    <li>
                      <i className="ri-list-check" />
                      Beginer
                    </li>
                  </ul>
                </div>
                <ul className="courses-fee d-flex justify-content-between">
                  <li>$121</li>
                  <li>
                    <a href="/coursedetails" className="read-more">
                      More Details
                      <i className="ri-arrow-right-line" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
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

export default ourCourses;
