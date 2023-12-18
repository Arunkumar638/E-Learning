"use client";

import Script from "next/script";
import {Footer, Pagetitle} from "../../components/components";
import { Suspense,lazy } from "react";

const blogDetails = () => {
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
        <Navbar active="blogdetails"/>
      </Suspense>
      <Pagetitle page="Blog Details"/>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-content">
                <div className="blog-details-img">
                  <img
                    src="assets/images/blog-details/blog-3.jpg"
                    alt="Image"
                  />
                </div>
                <div className="blog-top-content">
                  <div className="news-content">
                    <ul className="admin">
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
                      Education for Foreign Students &amp; Institution’s
                      Teachers
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempo.
                    </p>
                    <p>
                      Praesent dapibus, neque id cursus faucibus, tortor neque
                      egestas auguae, eu vulputate magna eros eu Aliquam erat
                      volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                      facilisis luctus, metus.
                    </p>
                  </div>
                  <blockquote>
                    <p>
                      ‘’Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor idunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      modo viverra maecenas accumsan lacus vel facilisis.’’
                    </p>
                  </blockquote>
                  <div className="news-content-2">
                    <p>
                      Phasellus ultrices nulla quis nibh. Quisque a lectus.
                      Donec consectetuer ligula vulputate sem tristique Nam
                      nulla quam, gravida non, commodo a, sodales sit amet, nisi
                      nulla quis nibh. Quisque a lectus. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Donec odio. Quisque
                      volutpat mattis eros. malesuada erat ut turpis.
                      Suspendisse urna nibh, viverra non semper suscipit
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet voluptates ipsa debitis voluptatem repellat animi
                      dolor aliquam aut soluta blanditiis, quas adipisci cumque,
                      velit aliquid consectetur nostrum minus corporis earum!
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="single-blog-post-img">
                        <a href="/blogdetails">
                          <img
                            src="assets/images/blog-details/blog-1.jpg"
                            alt="Image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="single-blog-post-img">
                        <a href="/blogdetails">
                          <img
                            src="assets/images/blog-details/blog-2.jpg"
                            alt="Image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tag-bar d-flex justify-content-between">
                    <ul className="tag-list">
                      <li>
                        <span>Tag:</span>
                      </li>
                      <li>
                        <a href="/blog">Strategy</a>
                      </li>
                      <li>
                        <a href="/blog">Workshop</a>
                      </li>
                      <li>
                        <a href="/blog">Teaching</a>
                      </li>
                    </ul>
                    <ul className="socila-link">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank">
                          <i className="ri-twitter-line" />
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
                <div className="comments">
                  <h3>Comments (2)</h3>
                  <ul>
                    <li>
                      <img
                        src="assets/images/blog-details/comments-1.jpg"
                        alt="Image"
                      />
                      <h3>Juanita Jones</h3>
                      <span>Monday, Dec 20, 2021</span>
                      <p>
                        Lorem ipsum dolora sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incdidunt labore et dolore magna
                        aliqua. Veniam quis nostrud exercitation ullaco
                      </p>
                      <a href="#">Reply</a>
                    </li>
                    <li>
                      <img
                        src="assets/images/blog-details/comments-2.jpg"
                        alt="Image"
                      />
                      <h3>Ward F. Nelson</h3>
                      <span>Monday, Dec 21, 2021</span>
                      <p>
                        Lorem ipsum dolora sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incdidunt labore et dolore magna
                        aliqua. Veniam quis nostrud exercitation ullaco
                      </p>
                      <a href="#">Reply</a>
                    </li>
                  </ul>
                </div>
                <div className="leave-reply">
                  <h3>Leave A Reply</h3>
                  <p>
                    Your email address will not be published. Required fields
                    are marked<span className="star">*</span>
                  </p>
                  <form>
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <label>
                            Name<span className="star">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <label>
                            Email address<span className="star">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Your website</label>
                          <input
                            type="text"
                            name="your-website-link"
                            id="your-website-link"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Comment</label>
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            rows={8}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input type="checkbox" id="chb2" />
                          <span>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="default-btn page-btn">
                          <span>Post A Comment</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-sidebar">
                <div className="sidebar-widget search">
                  <form className="search-form">
                    <input
                      className="form-control"
                      name="search"
                      placeholder="Search here"
                      type="text"
                    />
                    <button className="search-button" type="submit">
                      <i className="ri-search-line" />
                    </button>
                  </form>
                </div>
                <div className="sidebar-widget categories">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <a href="#">
                        Road Transport <span>(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Sea Transport <span>(07)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Air Transport <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Courier Service <span>(09)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Fast Freight <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Home Delivery <span>(11)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Packaging <span>(03)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget recent-post">
                  <h3 className="widget-title">Recent Post</h3>
                  <ul>
                    <li>
                      <a href="/blogdetails">
                        New Cargo Shipment Is Open On The Global Market
                        <img
                          src="assets/images/blog-details/recent-post-1.jpg"
                          alt="Image"
                        />
                      </a>
                      <span>October 19,2020</span>
                    </li>
                    <li>
                      <a href="/blogdetails">
                        Marketing Policy Added To The Logistic Service
                        <img
                          src="assets/images/blog-details/recent-post-2.jpg"
                          alt="Image"
                        />
                      </a>
                      <span>October 18,2020</span>
                    </li>
                    <li>
                      <a href="/blogdetails">
                        Marketing Policy Added To The Logistic Service
                        <img
                          src="assets/images/blog-details/recent-post-3.jpg"
                          alt="Image"
                        />
                      </a>
                      <span>October 09,2020</span>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget categories">
                  <h3>Archives</h3>
                  <ul>
                    <li>
                      <a href="#">
                        August <span>2020</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        June <span>2020</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        April <span>2020</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        January <span>2020</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        December <span>2020</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        November <span>2020</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget tags mb-0">
                  <h3>Tags</h3>
                  <ul>
                    <li>
                      <a href="#">Road Transport</a>
                    </li>
                    <li>
                      <a href="#">Sea Transport</a>
                    </li>
                    <li>
                      <a href="#">Air Transport</a>
                    </li>
                    <li>
                      <a href="#">Courier Service</a>
                    </li>
                    <li>
                      <a href="#">Fast Freight</a>
                    </li>
                    <li>
                      <a href="#">Home Delivery</a>
                    </li>
                    <li>
                      <a href="#">Packaging</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default blogDetails;
