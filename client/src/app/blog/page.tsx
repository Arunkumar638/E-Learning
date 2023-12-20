"use client";

import Script from "next/script";
import {Footer, Subscribe, Pagetitle} from "../../components/components";
import { Suspense,lazy, useEffect, useState } from "react";
import { getBlogs } from "@/actions/otherActions";

interface combineBlog {
  title: string;
  usertype: String;
  date: String;
  views: String;
  _id:String;
}

const Blog = () => {
  const Navbar = lazy(() => import('../../components/navBar'));
  const [blogs, setBlogs] = useState<combineBlog[]>([]);
  const [isBlogCard, setIsBlogCard] = useState(false);
  useEffect(() => {
    getBlogs().then((data) => {
      if (data) {
        setBlogs(data);
        setIsBlogCard(true);
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
          {isBlogCard
              && blogs.map((blog, index) => (
            <div className="col-xl-4 col-md-6">
              <div className="single-blog-item" key={index}>
                <a href={`/blogdetails/?=${blog._id}`}>
                  <img src="assets/images/blog/blog-5.jpg" alt="Image" />
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
                    <a href={`/blogdetails/?=${blog._id}`}>
                      {blog.title}
                    </a>
                  </h3>
                  <a href="/blogdetails" className="read-more">
                    More Details
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div>
            </div>))}
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