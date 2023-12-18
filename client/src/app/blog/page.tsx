"use client";

import Script from "next/script";
import {Footer, Subscribe, Pagetitle} from "../../components/components";
import { Suspense,lazy } from "react";

const Blog = () => {
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
        <Navbar active="blog"/>
      </Suspense>
      <Pagetitle page="Blog"/>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Blog</span>
            <h2>
              Check Out Our Latest <span>Blog</span>
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="single-blog-item">
                <a href="/blogdetails">
                  <img src="assets/images/blog/blog-1.jpg" alt="Image" />
                </a>
                <div className="blog-content">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <a href="/blog">
                        <i className="ri-user-line" />
                        <span>Admin</span>
                      </a>
                    </li>
                    <li>
                      <i className="ri-time-fill" />
                      <span>Sep 8,2021</span>
                    </li>
                    <li>
                      <i className="ri-eye-fill" />
                      <span>32.2k Views</span>
                    </li>
                  </ul>
                  <h3>
                    <a href="/blogdetails">
                      Education for Foreign Students &amp; Institution’s
                      Teachers
                    </a>
                  </h3>
                  <a href="/blogdetails" className="read-more">
                    More Details
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-blog-item">
                <a href="/blogdetails">
                  <img src="assets/images/blog/blog-2.jpg" alt="Image" />
                </a>
                <div className="blog-content">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <a href="/blog">
                        <i className="ri-user-line" />
                        <span>Admin</span>
                      </a>
                    </li>
                    <li>
                      <i className="ri-time-fill" />
                      <span>Sep 9,2021</span>
                    </li>
                    <li>
                      <i className="ri-eye-fill" />
                      <span>33.2k Views</span>
                    </li>
                  </ul>
                  <h3>
                    <a href="/blogdetails">
                      Mastering on Data Modeling For Fundamentals Courses
                    </a>
                  </h3>
                  <a href="/blogdetails" className="read-more">
                    More Details
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-blog-item">
                <a href="/blogdetails">
                  <img src="assets/images/blog/blog-3.jpg" alt="Image" />
                </a>
                <div className="blog-content">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <a href="/blog">
                        <i className="ri-user-line" />
                        <span>Admin</span>
                      </a>
                    </li>
                    <li>
                      <i className="ri-time-fill" />
                      <span>Sep 10,2021</span>
                    </li>
                    <li>
                      <i className="ri-eye-fill" />
                      <span>34.2k Views</span>
                    </li>
                  </ul>
                  <h3>
                    <a href="/blogdetails">
                      Application Deadline to Graduate at Fall Convocation
                    </a>
                  </h3>
                  <a href="/blogdetails" className="read-more">
                    More Details
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-blog-item">
                <a href="/blogdetails">
                  <img src="assets/images/blog/blog-4.jpg" alt="Image" />
                </a>
                <div className="blog-content">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <a href="/blog">
                        <i className="ri-user-line" />
                        <span>Admin</span>
                      </a>
                    </li>
                    <li>
                      <i className="ri-time-fill" />
                      <span>Sep 11,2021</span>
                    </li>
                    <li>
                      <i className="ri-eye-fill" />
                      <span>35.2k Views</span>
                    </li>
                  </ul>
                  <h3>
                    <a href="/blogdetails">
                      USA Coordinates &amp; Participates in a Variety of Fairs
                    </a>
                  </h3>
                  <a href="/blogdetails" className="read-more">
                    More Details
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-blog-item">
                <a href="/blogdetails">
                  <img src="assets/images/blog/blog-5.jpg" alt="Image" />
                </a>
                <div className="blog-content">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <a href="/blog">
                        <i className="ri-user-line" />
                        <span>Admin</span>
                      </a>
                    </li>
                    <li>
                      <i className="ri-time-fill" />
                      <span>Sep 11,2021</span>
                    </li>
                    <li>
                      <i className="ri-eye-fill" />
                      <span>35.2k Views</span>
                    </li>
                  </ul>
                  <h3>
                    <a href="/blogdetails">
                      Is Poor Internet the Real Culprit? The Lessons of Online
                      Learning
                    </a>
                  </h3>
                  <a href="/blogdetails" className="read-more">
                    More Details
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-blog-item">
                <a href="/blogdetails">
                  <img src="assets/images/blog/blog-6.jpg" alt="Image" />
                </a>
                <div className="blog-content">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <a href="/blog">
                        <i className="ri-user-line" />
                        <span>Admin</span>
                      </a>
                    </li>
                    <li>
                      <i className="ri-time-fill" />
                      <span>Sep 11,2021</span>
                    </li>
                    <li>
                      <i className="ri-eye-fill" />
                      <span>35.2k Views</span>
                    </li>
                  </ul>
                  <h3>
                    <a href="/blogdetails">
                      Institution’s Teachers Day Toronto City Hall
                    </a>
                  </h3>
                  <a href="/blogdetails" className="read-more">
                    More Details
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
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

export default Blog;