'use client'
import { useState, useEffect } from "react";
import Script from "next/script";

 const Navbar = ({active}:any) =>{
  
    const [isCourseDetails, setIsCourseDetails] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [isOurCourses, setIsOurCourses] = useState(false);
    const [isProduct, setIsProduct] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const [isCheckOut, setIsCheckOut] = useState(false);
    const [isProductDetails, setIsProductDetails] = useState(false);
    const [isBlog, setIsBlog] = useState(false);
    const [isBlogDetails, setIsBlogDetails] = useState(false);
    const [isContactUs, setIsContactUs] = useState(false);

    useEffect(()=>{
    if(active == 'home'){
      setIsHome(true);
    }
    if(active == 'about'){
      setIsAbout(true);
    }
    if(active == 'coursedetails'){
        setIsCourseDetails(true);
    }
    if(active =='ourcourses'){
      setIsOurCourses(true);
    }
    if(active =='product'){
      setIsProduct(true);
    }
    if(active =='cart'){
      setIsCart(true);
    }
    if(active =='checkout'){
      setIsCheckOut(true);
    }
    if(active =='productdetails'){
      setIsProductDetails(true);
    }
    if(active =='blog'){
      setIsBlog(true);
    }
    if(active =='blogdetails'){
      setIsBlogDetails(true);
    }
    if(active =='contactus'){
      setIsContactUs(true);
    }
    },[])
   
    return(
        <>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="assets/css/dark.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
        <link rel="stylesheet" href="assets/css/style.css" />

        <div className="navbar-area">
        <div className="mobile-responsive-nav">
          <div className="container">
            <div className="mobile-responsive-menu">
              <div className="logo">
                <a href="/">
                  <img
                    src="assets/images/logo.png"
                    className="main-logo"
                    alt="logo"
                  />
                  <img
                    src="assets/images/white-logo.png"
                    className="white-logo"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="/">
                <img
                  src="assets/images/logo.png"
                  className="main-logo"
                  alt="logo"
                />
                <img
                  src="assets/images/white-logo.png"
                  className="white-logo"
                  alt="logo"
                />
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a href="/" className={`nav-link ${isHome?`active`:``}`}>
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/about" className={`nav-link ${isAbout?`active`:``}`}>
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className={`nav-link dropdown-toggle ${isOurCourses?`active`:``} ${isCourseDetails?`active`:``}`}>
                      Our Courses
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/ourcourses" className={`nav-link ${isOurCourses?`active`:``}`}>
                          Our Courses
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/coursedetails"
                          className={`nav-link ${isCourseDetails?`active`:``}`}
                        >
                          Course Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={`nav-item ${isCart?`active`:``} ${isCheckOut?`active`:``}`}>
                    <a href="#" className={`nav-link dropdown-toggle ${isProduct?`active`:``} ${isProductDetails?`active`:``}`}>
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/product" className={`nav-link ${isProduct?`active`:``}`}>
                          Product
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/cart" className={`nav-link ${isCart?`active`:``}`}>
                          Cart
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/checkout" className={`nav-link ${isCheckOut?`active`:``}`}>
                          Checkout
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/productdetails" className={`nav-link ${isProductDetails?`active`:``}`}>
                          Product Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={`nav-item ${isBlog?`active`:``} ${isBlogDetails?`active`:``}`}>
                    <a href="#" className="nav-link dropdown-toggle">
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/blog" className={`nav-link ${isBlog?`active`:``}`}>
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/blogdetails" className={`nav-link ${isBlogDetails?`active`:``}`}>
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/contactus" className={`nav-link ${isContactUs?`active`:``}`}>
                      Contact Us
                    </a>
                  </li>
                </ul>
                <div className="others-options">
                  <ul className="d-flex justify-content-between align-items-center">
                    <li>
                      <a href="/login" className="sign-in">
                        <i className="ri-login-box-line" />
                        Sign In
                      </a>
                    </li>
                    <li>
                      <a href="/register" className="default-btn">
                        Get Started
                        <i className="ri-edit-line" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="inner">
                <div className="circle circle-one" />
                <div className="circle circle-two" />
                <div className="circle circle-three" />
              </div>
            </div>
            <div className="container">
              <div className="option-inner">
                <div className="others-options justify-content-center d-flex align-items-center">
                  <ul>
                    <li>
                      <a href="/login" className="sign-in">
                        <i className="ri-login-box-line" />
                        Sign In
                      </a>
                    </li>
                    <li>
                      <a href="/register" className="default-btn">
                        Get Started
                        <i className="ri-edit-line" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="/assets/js/jquery.min.js"></Script>
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/js/meanmenu.min.js"></Script>
      <Script src="assets/js/magnific-popup.min.js"></Script>
      </>
    )
}

export default Navbar;