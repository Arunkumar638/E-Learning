"use client";

import Script from "next/script";
import { Footer, Subscribe } from "../../components/components";
import { Suspense, lazy, useEffect, useState } from "react";
import { getCourses } from "@/actions/otherActions";
import { Toaster, toast } from "sonner";

interface combineCourse {
  courseid: string;
  title: string;
  duration: String;
  lectures: String;
  type: String;
  price: String;
  _id: String;
}

const ourCourses = () => {
  const Navbar = lazy(() => import("../../components/navBar"));
  const [courses, setCourses] = useState<combineCourse[]>([]);
  const [isCourseCard, setIsCourseCard] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const notifyError = () => {
    const data = `Please Login first`;
    toast.error(data);
  };

  useEffect(() => {
    getCourses().then((data) => {
      if (data) {
        setCourses(data);
        setIsCourseCard(true);
      }
    });
    const data = localStorage.getItem("token");
    if (data) {
      setIsLogin(true);
    }
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
        <Navbar active="ourcourses" />
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
                    <Toaster position="top-right" expand={true} richColors />
                    <button type="submit" className="search-btn">
                      <i className="ri-search-line" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {isCourseCard
              ? courses.map((course, index) => (
                  <div className="col-xl-4 col-md-6">
                    <div className="single-courses-item" key={index}>
                      <div className="courses-img">
                        {isLogin ? (
                          <a href={`/coursedetails/?=${course._id}`}>
                            <img
                              src="assets/images/courses/courses-1.jpg"
                              alt="Image"
                            />
                          </a>
                        ) : (
                          <a href="#" onClick={notifyError}>
                            <img
                              src="assets/images/courses/courses-1.jpg"
                              alt="Image"
                            />
                          </a>
                        )}
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
                          {isLogin ? (
                            <a href={`/coursedetails/?=${course._id}`}>
                              {course.title}
                            </a>
                          ) : (
                            <a onClick={notifyError} href="#">
                              {course.title}
                            </a>
                          )}
                        </h3>
                        <ul className="courses-time d-flex justify-content-between">
                          <li>
                            <i className="ri-time-fill" />
                            {course.duration}
                          </li>
                          <li>
                            <i className="ri-vidicon-fill" />
                            {course.lectures} Lectures
                          </li>
                          <li>
                            <i className="ri-list-check" />
                            {course.type}
                          </li>
                        </ul>
                      </div>
                      <ul className="courses-fee d-flex justify-content-between">
                        <li>{course.price}</li>
                        <li>
                          <a href="/coursedetails" className="read-more">
                            More Details
                            <i className="ri-arrow-right-line" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))
              : null}
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
