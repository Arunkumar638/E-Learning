"use client";

import Script from "next/script";
import { Footer, Pagetitle } from "../../components/components";
import { Suspense, lazy, useEffect, useState } from "react";
import { addWish, getCourses } from "@/actions/otherActions";
import { Toaster, toast } from "sonner";

interface combineCourse {
  description: String;
  requirements: String;
  title: String;
  contents: String;
  lectures: String;
  price: String;
  enrolled: String;
  language: String;
  duration: String;
  instructor: String;
  deadline: String;
  _id: String;
}

const courseDetails = () => {
  const Navbar = lazy(() => import("../../components/navBar"));
  const [courses, setCourses] = useState<combineCourse[]>([]);
  const [id, setId] = useState("");


  const notifyError = (data: any) => {
    toast.error(data.message);
  };

  const addWishList = () => {
    const token = localStorage.getItem("token");
    const data = {
      token: token,
      courseId: id,
      status: true,
    };
    addWish(data)
      .then((data) => {
        if (data.status == true) {
          toast.success(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          const message = error.response.data;
          console.log(message);
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
          notifyError(message);
        }
      });
  };
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setId(urlToken);
    getCourses().then((data) => {
      if (data) {
        setCourses(data);
      }
    });
  }, []);
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
        <Navbar active="coursedetails" />
      </Suspense>
      <Pagetitle page="Course Details" />
      <div className="courses-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="overview">
                <div className="tab">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <Toaster position="top-right" expand={true} richColors />
                      <button
                        className="nav-link active"
                        id="overview-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#overview"
                        type="button"
                        role="tab"
                        aria-controls="overview"
                        aria-selected="true"
                      >
                        Overview
                      </button>
                    </li>
                    {/* <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="curriculum-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#curriculum"
                        type="button"
                        role="tab"
                        aria-controls="curriculum"
                        aria-selected="false"
                      >
                        Curriculum
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="instructor-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#instructor"
                        type="button"
                        role="tab"
                        aria-controls="instructor"
                        aria-selected="false"
                      >
                        Instructor
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#reviews"
                        type="button"
                        role="tab"
                        aria-controls="reviews"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </li> */}
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="overview"
                      role="tabpanel"
                      aria-labelledby="overview-tab"
                    >
                      {courses.map(
                        (course, index) =>
                          id == course._id && (
                            <div className="overview-content" key={index}>
                              <h3>{course.title}</h3>
                              <h3>Description</h3>
                              <p>{course.description}</p>
                              <div className="gap-mb-35" />
                              <h3>Requirements</h3>
                              <p>{course.requirements}</p>
                              <div className="gap-mb-35" />
                              <h3>What you'll learn</h3>
                              <p>{course.contents}</p>
                            </div>
                          )
                      )}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="curriculum"
                      role="tabpanel"
                      aria-labelledby="curriculum-tab"
                    >
                      <div className="curriculum-content">
                        <ul className="title">
                          <li>
                            <h3>Total Course guide line</h3>
                            <span>7 Lectures</span>
                            <span>7 Hours</span>
                          </li>
                        </ul>
                        <ul className="lesson">
                          <li className="border-bottom">
                            <h3>Lesson - 01</h3>
                            <span>03:00 hours</span>
                          </li>
                          <li className="lesson-list">
                            <a href="#">
                              Course guide lectures - 01 (Introduction to web
                              development)
                              <span>
                                <i className="ri-lock-unlock-line" />
                              </span>
                              <span>00:10 min</span>
                              <span className="color">Review</span>
                            </a>
                          </li>
                          <li className="lesson-list">
                            <a href="#">
                              Course guide lectures - 02 (HTML - Course from
                              beginners)
                              <span>
                                <i className="ri-lock-line" />
                              </span>
                              <span>00:50 min</span>
                              <span className="color">Review</span>
                            </a>
                          </li>
                          <li className="lesson-list">
                            <a href="#">
                              Course guide lectures - 03 (HTML - Course media
                              elements)
                              <span>
                                <i className="ri-lock-line" />
                              </span>
                              <span>01:00 hr</span>
                              <span className="color">Review</span>
                            </a>
                          </li>
                          <li className="lesson-list">
                            <a href="#">
                              Course guide lectures - 04 (HTML - Structuring a
                              mega project)
                              <span>
                                <i className="ri-lock-line" />
                              </span>
                              <span>01:00 hr</span>
                              <span className="color">Review</span>
                            </a>
                          </li>
                        </ul>
                        <ul className="lesson">
                          <li className="border-bottom">
                            <h3>Lesson - 02</h3>
                            <span>03:00 hours</span>
                          </li>
                          <li className="lesson-list">
                            <a href="#">
                              Course guide lectures - 01(CSS - What is
                              selectors)
                              <span>
                                <i className="ri-lock-line" />
                              </span>
                              <span>00:45 min</span>
                              <span className="color">Review</span>
                            </a>
                          </li>
                          <li className="lesson-list">
                            <a href="#">
                              Course guide lectures - 02 (Properties in CSS)
                              <span>
                                <i className="ri-lock-line" />
                              </span>
                              <span>00:45 min</span>
                              <span className="color">Review</span>
                            </a>
                          </li>
                          <li className="lesson-list">
                            <a href="#">
                              Course guide lectures - 03 (Styling forms in CSS)
                              <span>
                                <i className="ri-lock-line" />
                              </span>
                              <span>00:45 min</span>
                              <span className="color">Review</span>
                            </a>
                          </li>
                        </ul>
                        <ul className="lesson">
                          <li className="border-bottom">
                            <h3>Lesson - 03</h3>
                            <span>01:00 hours</span>
                          </li>
                          <li className="lesson-list">
                            <a href="#">
                              Course guide lectures - 01(CSS Grid)
                              <span>
                                <i className="ri-lock-unlock-line" />
                              </span>
                              <span>00:30 min</span>
                              <span className="color">Review</span>
                            </a>
                          </li>
                          <li className="lesson-list">
                            <a href="#">
                              Course guide lectures - 02 (Animations in CSS)
                              <span>
                                <i className="ri-lock-line" />
                              </span>
                              <span>00:30 min</span>
                              <span className="color">Review</span>
                            </a>
                          </li>
                        </ul>
                        <ul className="lesson mb-0">
                          <li className="border-bottom">
                            <h3>Lesson - 04</h3>
                            <span>03:00 hours</span>
                          </li>
                          <li className="lesson-list">
                            <a href="#">
                              Course guide lectures - 01(Customization &amp;
                              Layout in Bootstrap)
                              <span>
                                <i className="ri-lock-line" />
                              </span>
                              <span>00:30 min</span>
                              <span className="color">Review</span>
                            </a>
                          </li>
                          <li className="lesson-list">
                            <a href="#">
                              Course guide lectures - 02 (JavaScript
                              Introduction)
                              <span>
                                <i className="ri-lock-line" />
                              </span>
                              <span>00:30 min</span>
                              <span className="color">Review</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="instructor"
                      role="tabpanel"
                      aria-labelledby="instructor-tab"
                    >
                      <div className="instructor-content mb-0">
                        <div className="row align-items-center">
                          <div className="col-lg-5">
                            <div className="instructors-img mb-30">
                              <img
                                src="assets/images/instructors/instructors-5.jpg"
                                alt="Image"
                              />
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="instructors-content">
                              <h3>Richard Arthur</h3>
                              <span className="category">Web Developer</span>
                              <ul className="review">
                                <li>
                                  <i className="ri-star-fill" />
                                </li>
                                <li>
                                  <i className="ri-star-fill" />
                                </li>
                                <li>
                                  <i className="ri-star-fill" />
                                </li>
                                <li>
                                  <i className="ri-star-fill" />
                                </li>
                                <li>
                                  <i className="ri-star-fill" />
                                </li>
                              </ul>
                              <span className="students">
                                <i className="ri-user-line" />
                                142 Students
                              </span>
                              <a href="courses.html" className="courses-7">
                                <i className="ri-play-circle-line" />7 Courses
                              </a>
                              <ul className="sosial-link">
                                <li>
                                  <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                  >
                                    <i className="ri-facebook-fill" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                  >
                                    <i className="ri-instagram-line" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                  >
                                    <i className="ri-linkedin-fill" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.twitter.com/"
                                    target="_blank"
                                  >
                                    <i className="ri-twitter-line" />
                                  </a>
                                </li>
                              </ul>
                              <p>
                                Sed porttitor lectus nibh. Donec rutrum congue
                                leo eget malesuada. Praesent sapien massa,
                                convallis a pellentesque egestas Curabitur arcu
                                erat, accumsan id imperdiet et, porttitor at
                                sem. Cras ultricies ligula.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="reviews"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                    >
                      <div className="review-content">
                        <div className="row align-items-center">
                          <div className="col-lg-3">
                            <div className="rating-point">
                              <h2>5.00</h2>
                              <ul>
                                <li>
                                  <i className="ri-star-fill" />
                                </li>
                                <li>
                                  <i className="ri-star-fill" />
                                </li>
                                <li>
                                  <i className="ri-star-fill" />
                                </li>
                                <li>
                                  <i className="ri-star-fill" />
                                </li>
                                <li>
                                  <i className="ri-star-fill" />
                                </li>
                              </ul>
                              <span>Course Rating</span>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <ul className="rating-bar">
                              <li>
                                <span className="bar-1" />
                              </li>
                              <li>
                                <span className="bar-2" />
                              </li>
                              <li>
                                <span className="bar-3" />
                              </li>
                              <li>
                                <span className="bar-4" />
                              </li>
                              <li>
                                <span className="bar-5" />
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-3">
                            <ul className="total-review">
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <span>100%</span>
                              </li>
                            </ul>
                            <ul className="total-review">
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <span>0%</span>
                              </li>
                            </ul>
                            <ul className="total-review">
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <span>0%</span>
                              </li>
                            </ul>
                            <ul className="total-review">
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <span>0%</span>
                              </li>
                            </ul>
                            <ul className="total-review mb-0">
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <i className="ri-star-line" />
                              </li>
                              <li>
                                <span>0%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4>Student feedback</h4>
                        <ul className="feedback-list some-list-1">
                          <li className="load-more-gallery">
                            <img src="assets/images/review-1.jpg" alt="Image" />
                            <h3>Terri Buda</h3>
                            <ul>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                            </ul>
                            <p>
                              Sed porttitor lectus nibh. Donec rutrum congue leo
                              eget malesuada. Praesent sapien massa, convallis a
                              pellentesque egestas Curabitur arcu erat, accumsan
                              id imperdiet et, porttitor at sem. Cras ultricies
                              ligula sed magna dictum porta. Vestibulum ante
                              ipsum primis in faucibus orci luctus et ultrices
                              posuere cubilia.
                            </p>
                          </li>
                          <li className="load-more-gallery">
                            <img src="assets/images/review-2.jpg" alt="Image" />
                            <h3>Jose Selph</h3>
                            <ul>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                            </ul>
                            <p>
                              Sed porttitor lectus nibh. Donec rutrum congue leo
                              eget malesuada. Praesent sapien massa, convallis a
                              pellentesque egestas Curabitur arcu erat, accumsan
                              id imperdiet et, porttitor at sem. Cras ultricies
                              ligula sed magna dictum porta. Vestibulum ante
                              ipsum primis in faucibus orci luctus et ultrices
                              posuere cubilia.
                            </p>
                          </li>
                          <li className="load-more-gallery">
                            <img src="assets/images/review-3.jpg" alt="Image" />
                            <h3>Manuel Myers</h3>
                            <ul>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                            </ul>
                            <p>
                              Sed porttitor lectus nibh. Donec rutrum congue leo
                              eget malesuada. Praesent sapien massa, convallis a
                              pellentesque egestas Curabitur arcu erat, accumsan
                              id imperdiet et, porttitor at sem. Cras ultricies
                              ligula sed magna dictum porta. Vestibulum ante
                              ipsum primis in faucibus orci luctus et ultrices
                              posuere cubilia.
                            </p>
                          </li>
                        </ul>
                        <div className="leave-reply">
                          <h3>Write a Review</h3>
                          <ul>
                            <li>
                              <i className="ri-star-fill" />
                            </li>
                            <li>
                              <i className="ri-star-fill" />
                            </li>
                            <li>
                              <i className="ri-star-line" />
                            </li>
                            <li>
                              <i className="ri-star-line" />
                            </li>
                            <li>
                              <i className="ri-star-line" />
                            </li>
                            <li>
                              <span>3</span>
                            </li>
                          </ul>
                          <form>
                            <div className="row">
                              <div className="col-lg-6 col-sm-6">
                                <div className="form-group">
                                  <label>Reviewer Name</label>
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
                                  <label>Reviewer Email</label>
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Review Summary</label>
                                  <textarea
                                    name="message"
                                    className="form-control"
                                    id="message"
                                    rows={8}
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <button type="submit" className="default-btn">
                                  Submit Review
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-sidebar ml-15">
                <div className="sidebar-widget video-courses mb-0">
                  <div className="courses-video-img">
                    <img
                      src="assets/images/courses/courses-1.jpg"
                      alt="Image"
                    />
                    <div className="video-play">
                      <a
                        href="https://www.youtube.com/watch?v=-_X6PhkjpzU"
                        className="video-btn popup-youtube"
                      >
                        <i className="ri-play-fill" />
                      </a>
                    </div>
                  </div>
                  <div className="price-status">
                    {courses.map(
                      (course, index) =>
                        id == course._id && (
                          <ul className="in-price-list" key={index}>
                            <li>
                              Price <span>{course.price}</span>
                            </li>
                            <li>
                              Instructor: <span>{course.instructor}</span>
                            </li>
                            <li>
                              Duration: <span>{course.duration}</span>
                            </li>
                            <li>
                              Lectures: <span>{course.lectures}</span>
                            </li>
                            <li>
                              Enrolled: <span>{course.enrolled} students</span>
                            </li>
                            <li>
                              Language: <span>{course.language}</span>
                            </li>
                            <li>
                              Deadline: <span>{course.deadline}</span>
                            </li>
                          </ul>
                        )
                    )}
                    <ul className="cart-wish-btn">
                      <li>
                        <a href="/cart" className="default-btn">
                          Add To Cart
                        </a>
                      </li>
                      <li>
                        <button
                          onClick={addWishList}
                          className="default-btn active"
                        >
                          Add To Wishlist
                        </button>
                      </li>
                    </ul>
                    <ul className="social-link">
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
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="ri-linkedin-fill" />
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
      <Footer />
      <div className="go-top">
        <i className="ri-arrow-up-s-fill" />
        <i className="ri-arrow-up-s-fill" />
      </div>
      <Script src="/assets/js/jquery.min.js"></Script>
      <Script src="assets/js/email-decode.min.js"></Script>
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/js/meanmenu.min.js"></Script>
      <Script src="assets/js/owl.carousel.min.js"></Script>
      <Script src="assets/js/carousel-thumbs.min.js"></Script>
      <Script src="assets/js/aos.min.js"></Script>
      <Script src="assets/js/appear.min.js"></Script>
      <Script src="assets/js/odometer.min.js"></Script>
      <Script src="assets/js/magnific-popup.min.js"></Script>
      <Script src="assets/js/before-after.min.js"></Script>
      <Script src="assets/js/tween-max.min.js"></Script>
      <Script src="assets/js/form-validator.min.js"></Script>
      <Script src="assets/js/contact-form-script.js"></Script>
      <Script src="assets/js/ajaxchimp.min.js"></Script>
      <Script src="assets/js/custom.js"></Script>
    </>
  );
};

export default courseDetails;
