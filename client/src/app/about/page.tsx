'use client'

import Script from "next/script";
import {Footer, Instructors, Tesimonials, Subscribe} from "../../components/components";
import { Suspense,lazy } from "react";

const About = () => {
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
        <Navbar active="about"/>
      </Suspense>
      <div className="page-title-area">
        <div className="container">
          <div className="page-shape-wrap">
            <div className="page-title-content">
              <h2>About Us</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">About Us</li>
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
              src="assets/images/page-bg-shape-2.png"
              alt="Image"
              className="shape shape-2"
              data-speed="0.04"
              data-revert="true"
            />
          </div>
        </div>
      </div>
      <div className="about-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="about-img-5 mb-24">
                    <img src="assets/images/courses/courses-7.jpg" alt="Image" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="about-img-6 mb-24">
                    <img src="assets/images/courses/courses-5.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="about-img-7">
                <img src="assets/images/courses/courses-6.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content style-about">
                <span className="top-title">About Us</span>
                <h2>
                  Smart Tutoring Program for Success <span>People</span>
                </h2>
                <p>
                We provide a growth mindset toward student learning and teaching practice. 
                Facilitates problem-solving with a curious mind and critical thinking skills. 
                Serves as a role-model for students. 
                Collaborates effectively with parents and the organization to increase student performance.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="ri-checkbox-circle-fill" />
                        Consistency
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-fill" />
                        Remote Learning
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="ri-checkbox-circle-fill" />
                        Improvement
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-fill" />
                        Branching
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mb-0 mt-20">
                We meet with students to clarify and review concepts taught in class, explain processes and help students solve specific problems. 
                Tutoring supports classroom-centered activities, and as such, the emphasis and 
                content of the tutoring sessions is determined by the student&apos;s needs.
                </p>
                <a href="#" className="default-btn">
                  Join For Free
                  <i className="ri-arrow-right-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Instructors />
      <div className="motivation-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="motivation-img">
                <img src="assets/images/motivation-img.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="motivation-content">
                <h2>
                  Transform Your Life Best Through <span>Motivation</span>
                </h2>
                <p>
                We assist students in understanding and learning subject material from the course. 
                Also help students achieve their personal academic goals by preparing them for upcoming class material.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=zv5bpfxJ2xE"
                  className="video-btn popup-youtube"
                >
                  <i className="ri-play-fill" />
                  <span>Warch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tesimonials />
      <Subscribe page="about"/>
      <Footer/>
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

export default About;
