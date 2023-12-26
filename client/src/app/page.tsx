"use client";

import Script from 'next/script';
import {Footer, Subscribe, Instructors, Tesimonials} from "../components/components";
import { Suspense, lazy, useEffect, useState } from 'react';
import { getBlogs, getCourses } from '@/actions/otherActions';
import Carousel from 'react-bootstrap/Carousel';
import Container  from 'react-bootstrap/Container';
import { CourseItems } from '@/components/items';
interface combineCourse {
  courseid: string;
  title: string;
  duration: String;
  lectures: String;
  imagepath:String;
  type: String;
  price: String;
  _id: String;
}

interface combineBlog {
  title: string;
  usertype: String;
  imagepath:String;
  date: String;
  views: String;
  blogId:String;
  _id: String;
}
export default function Home() {
  const Navbar = lazy(() => import('../components/navBar'));
  const [blogs, setBlogs] = useState<combineBlog[]>([]);
  const [isBlogCard, setIsBlogCard] = useState(false);
  const [courses, setCourses] = useState<combineCourse[]>([]);
  const [isCourseCard, setIsCourseCard] = useState(false);
  
  
  useEffect(() => {
    getCourses().then((data) => {
      if (data) {
        setCourses(data);
        setIsCourseCard(true);
      }
    });
    getBlogs().then((data) => {
      if (data) {
        setBlogs(data);
        setIsBlogCard(true);
      }
    });
  }, []);
  return (
    <>
      <div>
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
        <Navbar active="home"/>
        </Suspense>
        <div className="banner-area bg-color-f7f8f9 ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="banner-content">
                  <span className="top-title">Best Learning Platform</span>
                  <h1>
                    The Best Place For The Best <span>Career.</span>
                  </h1>
                  <p>
                    We're aiming to create an engaging and informative online course that 
                    helps learners achieve the desired learning outcomes and create a path for 
                    learning easily.
                    
                  </p>
                  <div className="banner-btn">
                    <a href="/ourcourses" className="default-btn">
                      Find Courses
                      <i className="ri-search-line" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-img">
                  <img src="assets/images/banner/banner-img.png" alt="Image" />
                  <img
                    src="assets/images/banner/banner-img-shape.png"
                    className="banner-img-shape"
                    alt="Image"
                  />                
                  
                </div>
              </div>
            </div>
          </div>
          <div className="shape shape-1" data-speed="0.04" data-revert="true">
            <img src="assets/images/banner/shape-1.png" alt="Image" />
          </div>
          <div className="shape shape-2" data-speed="0.05" data-revert="true">
            <img src="assets/images/banner/shape-2.png" alt="Image" />
          </div>
          <div className="shape shape-3" data-speed="0.06" data-revert="true">
            <img src="assets/images/banner/shape-3.png" alt="Image" />
          </div>
          <div className="shape shape-4" data-speed="0.07" data-revert="true">
            <img src="assets/images/banner/shape-4.png" alt="Image" />
          </div>
          <div className="shape shape-5" data-speed="0.08" data-revert="true">
            <img src="assets/images/banner/shape-5.png" alt="Image" />
          </div>
          <div className="shape shape-6" data-speed="0.09" data-revert="true">
            <img src="assets/images/banner/shape-6.png" alt="Image" />
          </div>
          <div className="shape shape-7" data-speed="0.09" data-revert="true">
            <img src="assets/images/banner/shape-7.png" alt="Image" />
          </div>
        </div>
        <div className="features-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-features d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/banner/features-icon-1.png"
                    alt="Image"
                  />
                  <h3>Business Planning</h3>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-features d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/banner/features-icon-2.png"
                    alt="Image"
                  />
                  <h3>Lifetime Access</h3>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-features d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/banner/features-icon-3.png"
                    alt="Image"
                  />
                  <h3>Self Development</h3>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-features d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/banner/features-icon-4.png"
                    alt="Image"
                  />
                  <h3>Online Tutoring</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="category-area pb-70">
          <div className="container">
            <div className="section-title left-title">
              <h2>
                Our Popular <span>Category</span>
              </h2>
            </div>
            <div className="category-slide owl-carousel owl-theme">
              <div className="single-category-item">
                <a href="/ourcourses">
                  <img
                    src="assets/images/category/category-1.jpg"
                    alt="Image"
                  />
                </a>
                <div className="category-content d-flex justify-content-start">
                  <img
                    src="assets/images/category/category-icon-1.png"
                    alt="Image"
                  />
                  <div>
                    <h3>
                      <a href="/ourcourses">Data &amp; Analytics</a>
                    </h3>
                    <p>
                      <i className="ri-video-line" />
                      61 Classes
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-category-item">
                <a href="/ourcourses">
                  <img
                    src="assets/images/category/category-2.jpg"
                    alt="Image"
                  />
                </a>
                <div className="category-content d-flex justify-content-start">
                  <img
                    src="assets/images/category/category-icon-2.png"
                    alt="Image"
                  />
                  <div>
                    <h3>
                      <a href="/ourcourses">Business Marketing</a>
                    </h3>
                    <p>
                      <i className="ri-video-line" />
                      60 Classes
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-category-item">
                <a href="/ourcourses">
                  <img
                    src="assets/images/category/category-3.jpg"
                    alt="Image"
                  />
                </a>
                <div className="category-content d-flex justify-content-start">
                  <img
                    src="assets/images/category/category-icon-3.png"
                    alt="Image"
                  />
                  <div>
                    <h3>
                      <a href="/ourcourses">Web Development</a>
                    </h3>
                    <p>
                      <i className="ri-video-line" />
                      61 Classes
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-category-item">
                <a href="/ourcourses">
                  <img
                    src="assets/images/category/category-2.jpg"
                    alt="Image"
                  />
                </a>
                <div className="category-content d-flex justify-content-start">
                  <img
                    src="assets/images/category/category-icon-2.png"
                    alt="Image"
                  />
                  <div>
                    <h3>
                      <a href="/ourcourses">Business Marketing</a>
                    </h3>
                    <p>
                      <i className="ri-video-line" />
                      60 Classes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-area pt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="about-img">
                  <img src="assets/images/about-img.png" alt="Image" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-content">
                  <span className="top-title">About Us</span>
                  <h2>
                    Smart Tutoring Program for Success <span>People</span>
                  </h2>
                  <p>
                  We offering so many courses for 
                    those people who wants to start carrer at any field at affordable cost. 
                    Our motive is to cover basic topics in all courses and make easy to learn.
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
                  <a href="about-us.html" className="default-btn">
                    Join For Feature
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="online-courses-area pt-100 pb-70">
          <div className="container">
            <div className="section-title left-title">
              <span className="top-title">Online Courses</span>
              <h2>
                Explore Featured <span>Courses</span>
              </h2>
            </div>
            <div className="courses-slide owl-carousel owl-theme">
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
          </div>
        </div>

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
                    Transform Your Life Through Best <span>Motivation</span>
                  </h2>
                  <p>
                    We motivate learners those who are struggling in topics which they feel hard to learn.
                    Our tutors handle easiest way of all to teach any topics in the particular course.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=zv5bpfxJ2xE"
                    className="video-btn popup-youtube"
                  >
                    <i className="ri-play-fill" />
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="your-life-area ptb-100">
          <div className="container">
            <div className="your-life-bg">
              <div className="row">
                <div className="col-lg-6">
                  <div className="your-life-content ptb-100">
                    <h2>
                      Become a Best Teacher and Enjoy <span>Your Life</span>
                    </h2>
                    <p>
                      We create a path for those people who wants to become tutor, 
                      we welcome those peoples and we assign the course which is very familiar to the tutor. 
                    </p>
                    <a href="our-instructors.html" className="default-btn">
                      Start Teaching Today
                      <i className="ri-arrow-right-line" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="your-life-img">
                    <img src="assets/images/your-life.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Tesimonials />
        <div className="blog-area pt-100 pb-70">
          <div className="container">
            <div className="section-title left-title">
              <span className="top-title">Our Blog</span>
              <h2>
                Check Out Our Latest <span>Blog</span>
              </h2>
            </div>

            <div className="blog-slide owl-carousel owl-theme">

            <div className='carousel-container'>
              {isBlogCard && blogs.map((blog,index) => {
                return(
                <div className='single-blog-item' key={index}>
                  <a href="/blogdetails">
                    <img src="assets/images/blog/blog-1.jpg" alt="Image" />
                  </a>
                  <div className="blog-content">
                    <ul className="d-flex justify-content-between">
                      <li>
                        <a href="/blog">
                          <i className="ri-user-line" />
                          <span>{blog.usertype}</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-time-fill" />
                        <span>{blog.date}</span>
                      </li>
                      <li>
                        <i className="ri-eye-fill" />
                        <span>{blog.views} Views</span>
                      </li>
                    </ul>
                    <h3>
                      <a href="/blogdetails">
                        {blog.title} {/* Replace blog.title with your blog title */}
                      </a>
                    </h3>
                    <a href="/blogdetails" className="read-more">
                      More Details
                      <i className="ri-arrow-right-line" />
                    </a>
                  </div>
                </div>
                )}
              )}
            </div>

              {/* <div className="single-blog-item">
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
              <div className="single-blog-item">
                <a href="/blogdetails">
                  <img src="assets/images/blog/blog-4.jpg" alt="Image" />
                </a>
                <div className="blog-content">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <a href="/blog">
                        <i className="ri-user-line" />
                        Admin
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
                      An Annual Survey Produced by The International Education
                    </a>
                  </h3>
                  <a href="/blogdetails" className="read-more">
                    More Details
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <Subscribe />
        <Footer />
        <div className="go-top">
          <i className="ri-arrow-up-s-fill" />
          <i className="ri-arrow-up-s-fill" />
        </div>
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
}
