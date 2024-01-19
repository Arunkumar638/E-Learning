"use client";

import Script from "next/script";
import { Footer } from "../../components/components";
import { Suspense, lazy, useEffect, useState } from "react";
import {
  addWish,
  getCourses,
  addToCart,
  getCoursePurchased,
  getCourseById,
} from "@/actions/otherActions";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import ReactPlayer from "react-player";

const LearnCourse = () => {
  const Navbar = lazy(() => import("../../components/navBar"));
  const [courses, setCourses] = useState({
    description: '',
    requirements: '',
    title: '',
    type:'',
    contents: '',
    price: '',
    categorytitle:'',
    language: '',
    duration: '',
    image: '',
    video:'',    
    _id: '',
  });
  const [id, setId] = useState("");
  const [courseActive, setCourseActive] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [toggle, setToggle] = useState(false)
  const router = useRouter();
  const notifyError = (data: any) => {
    toast.error(data.message);
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setId(urlToken);
    const data = {
      id:urlToken
    }
    getCourseById(data).then((data) => {
      if (data) {
        setCourses(data.data);
        console.log(data.data);
        Object.assign(courses,data.data)
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
        <Navbar active="" />
      </Suspense>


        <div className="row">
          <div className="col">
            <ReactPlayer
              url={`${courses.video}`}
              controls={true}
              width={"100%"}
              height={"27rem"}
            />
            <div className="overview" style={{ paddingTop: "3rem" }}>
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
                    className="tab-pane fade show active px-2"
                    id="overview"
                    role="tabpanel"
                    aria-labelledby="overview-tab"
                  >
                          <div className="overview-content">
                            <h3>{courses.title}</h3>
                            <h3>Description</h3>
                            <p>{courses.description}</p>
                            <div className="gap-mb-35" />
                            <h3>Requirements</h3>
                            <p>{courses.requirements}</p>
                            <div className="gap-mb-35" />
                            <h3>What you&apos;ll learn</h3>
                            <p>{courses.contents}</p>
                          </div>                                        
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="widget-sidebar ml-10">
              <div className="sidebar-widget video-courses mb-0">
                <div className="price-status">
                  <ul className="in-price-list navbar-nav">
                    <li className="nav-item">
                    <h3 className="cart-checkout-title">{courses.title}</h3>
                    </li>
                    <li className="nav-item">
                     Type <span>{courses.type}</span>
                    </li>
                    <li className="nav-item">
                      Language <span>{courses.language}</span>
                    </li>
                    <li className="nav-item">
                      Category <span>{courses.categorytitle}</span>                    
                    </li>
                    <li className="nav-item">
                      Duration <span>{courses.duration}</span>                    
                    </li>
                    <li className="nav-item">
                      Price <span>{courses.price}</span>                    
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div style={{ paddingTop: "4rem" }}>
        <Footer />
      </div>
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

export default LearnCourse;
