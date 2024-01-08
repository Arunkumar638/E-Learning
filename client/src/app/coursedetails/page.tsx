"use client";

import Script from "next/script";
import { Footer, Pagetitle } from "../../components/components";
import { Suspense, lazy, useEffect, useState } from "react";
import { addWish, getCourses, addToCart, getCartData } from "@/actions/otherActions";
import { Toaster, toast } from "sonner";

interface combineCourse {
  description: string;
  requirements: string;
  title: string;
  contents: string;
  lectures: string;
  price: string;
  enrolled: string;
  language: string;
  duration: string;
  imagepath:string;
  instructor: string;
  deadline: string;
  _id: string;
}

const CourseDetails = () => {
  const Navbar = lazy(() => import("../../components/navBar"));
  const [courses, setCourses] = useState<combineCourse[]>([]);
  const [id, setId] = useState("");
  const [isCart, setIsCart] = useState(false)

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
  const cartAdd = (data:any) =>{
    addToCart(data)
    .then((data) => {
      if (data.status == true) {
        toast.success(data.message);
        getCart();
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
  }
  const getCart = () =>{
    getCartData().then((data) => {
      data.forEach((element: any,index: any)=>{
        const Id = window.location.search.split("=")[1];
      if (element.courseId == Id) {
        setIsCart(true);
        console.log(isCart);
      }
    });
    });
  }
  const addCart = () => {
    // const token = localStorage.getItem("token");
    courses.forEach((element,index)=>{
      if(id==element._id){
        const data = {
          courseId: id,
          title:element.title,
          price:element.price,
          imagepath:element.imagepath,
          status: true,
        };
        console.log(data.courseId);
        cartAdd(data);
      }
    })
  };
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setId(urlToken);
    getCourses().then((data) => {
      if (data) {
        setCourses(data);
      }
    });
    getCartData().then((data) => {
      data.forEach((element: any,index: any)=>{
        const Id = window.location.search.split("=")[1];
      if (element.courseId == Id) {
        setIsCart(true);
        console.log(isCart);
      }
    });
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
                              <h3>What you&apos;ll learn</h3>
                              <p>{course.contents}</p>
                            </div>
                          )
                      )}
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
                        { isCart ?
                        <a className="default-btn" href="/cart">
                          Go to Cart
                        </a>:<button className="default-btn" onClick={addCart}>
                          Add To Cart
                        </button>
                          }
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

export default CourseDetails;
