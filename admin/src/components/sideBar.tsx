"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const Sidebar = ({ page }: any) => {
  const [isContact, setIsContact] = useState(false);
  const [isCreateCourse, setIsCreateCourse] = useState(false);
  const [isCourse, setIsCourse] = useState(false);
  const [isCourseOrder, setIsCourseOrder] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const [category, setCategory] = useState(false);
  const [subCategory, setSubCategory] = useState(false)
  const [isAddCategory, setIsAddCategory] = useState(false);
  const [isAddSubCategory, setIsAddSubCategory] = useState(false);
  const [isOrder, setIsOrder] = useState(false)
  const [isHome, setIsHome] = useState(false);
  const [iswishlist, setIsWishlist] = useState(false);
  const [isUsers, setIsUsers] = useState(false);

  useEffect(() => {
    if (page == "contact") {
      setIsContact(true);
      console.log(isContact);
    }
    if (page == "addcourse") {
      setIsCreateCourse(true);
      console.log(isCreateCourse);
      console.log(page);
    }
    if (page == "course") {
      setIsCourse(true);
    }
    if (page == "courseorder") {
      setIsCourseOrder(true);
    }
    if (page == "home") {
      setIsHome(true);
      console.log(isHome);
    }
    if (page == "blog") {
      setIsBlog(true);
      console.log(isBlog);
    }
    if (page == "wishlist") {
      setIsWishlist(true);
    }
    if (page == "users") {
      setIsUsers(true);
    }
    if (page == "addcategory") {
      setIsAddCategory(true);
    }
    if (page == "category") {
      setCategory(true);
    }
    if (page == "addsubcategory") {
      setIsAddSubCategory(true);
    }
    if (page == "subcategory") {
      setSubCategory(true);
    } 
    if (page == "vieworder") {
      setIsOrder(true);
    }
  }, [page]);
  return (
    <>
      <link id="fontsLink" href="assets/css/font.min.css" rel="stylesheet" />
      {/* dropzone css */}
      <link rel="stylesheet" href="assets/css/dropzone.css" type="text/css" />

      {/* Bootstrap Css */}
      <link
        href="assets/css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* Icons Css */}
      <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
      <link
        href="assets/css/fontawesome.min.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* App Css*/}
      <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" />
      {/* custom Css*/}
      <link href="assets/css/custom.min.css" rel="stylesheet" type="text/css" />
      <div className="app-menu navbar-menu">
        {/* LOGO */}
        <div className="navbar-brand-box">
          <a href="index" className="logo logo-dark">
            <span className="logo-sm">
              <img src="assets/images/logo-sm.png" alt="" height={22} />
            </span>
            <span className="logo-lg">
              <img src="assets/images/logo-dark.png" alt="" height={22} />
            </span>
          </a>
          <a href="index" className="logo logo-light">
            <span className="logo-sm">
              <img src="assets/images/logo-sm.png" alt="" height={22} />
            </span>
            <span className="logo-lg">
              <img src="assets/images/logo-light.png" alt="" height={22} />
            </span>
          </a>
          <button
            type="button"
            className="btn btn-sm p-0 fs-3xl header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line" />
          </button>
        </div>
        <div id="scrollbar">
          <div className="container-fluid">
            <div id="two-column-menu"></div>
            <ul className="navbar-nav" id="navbar-nav">
              <li className="menu-title">
                <span data-key="t-menu">Menu</span>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link menu-link ${isHome ? `active` : ``}`}
                  href="/"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarDashboards"
                >
                  <i className="ph-house-thin" />{" "}
                  <span data-key="t-home">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#sidebarCourses"
                  className={`nav-link menu-link collapsed ${
                    isCreateCourse || isAddCategory ? `active` : ``
                  }`}
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarCourses"
                >
                  <i className="ph-graduation-cap" />{" "}
                  <span data-key="t-courses">Courses</span>
                </a>
                <div
                  className={`collapse menu-dropdown ${
                    isCreateCourse  || isAddCategory || category || isAddSubCategory || subCategory || isCourse ? `show` : ``
                  }`}
                  id="sidebarCourses"
                >
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                      href="#sidebarCategory"
                        className={`nav-link menu-link collapsed ${
                          isAddCategory || category || isAddSubCategory || subCategory ? `active` : ``
                        }`}
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarCategory"
                      >
                        Category
                      </a>
                      <div
                        className={`collapse menu-dropdown ${
                         isAddCategory || category || isAddSubCategory || subCategory  ? `show` : ``
                        }`}
                        id="sidebarCategory"
                      >
                        <ul className="nav nav-sm flex-column">                                    
                          <li className="nav-item">
                            <a
                              href="/addCategory"
                              className={`nav-link ${isAddCategory ? `active` : ``}`}
                              data-key="t-addcategory"
                            >
                              Add Category
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="/category"
                              className={`nav-link ${category ? `active`:``}`}
                              data-key="t-categories"
                            >
                              Category
                            </a>
                          </li>                          
                          <li className="nav-item">
                            <a
                              href="/addsubCategory"
                              className={`nav-link ${isAddSubCategory ? `active` : ``}`}
                              data-key="t-addcategory"
                            >
                              Add Sub Category
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="/subcategory"
                              className={`nav-link ${subCategory ? `active`:``}`}
                              data-key="t-categories"
                            >
                              Sub Category
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>                  
                    <li className="nav-item">
                      <a
                        href="/addCourse"
                        className={`nav-link ${isCreateCourse ? `active` : ``}`}
                        data-key="t-create-course"
                      >
                        Create Course
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/courses"
                        className={`nav-link ${isCourse ? `active` : ``}`}
                        data-key="t-create-course"
                      >
                        Courses
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  href="#sidebarOrders"
                  className={`nav-link menu-link collapsed ${
                    isCourseOrder || isOrder ? `active` : ``
                  }`}
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="true"
                  aria-controls="sidebarOrders"
                >
                  <i className="ri-briefcase-line" />{" "}
                  <span data-key="t-learning">Orders</span>
                </a>
                <div
                  className={`collapse menu-dropdown ${isCourseOrder || isOrder  ? `show` : ``}`}
                  id="sidebarOrders"
                >
                  <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                      <a
                        href="/courseorders"
                        className={`nav-link ${isCourseOrder ? `active` : ``}`}
                        data-key="t-overview"
                      >
                        Course Orders
                      </a>
                    </li>
                  </ul>
                  <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                      <a
                        href="/vieworder"
                        className={`nav-link ${isOrder ? `active` : ``}`}
                        data-key="t-overview"
                      >
                        View Order
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  href="#sidebarBlog"
                  className={`nav-link menu-link collapsed ${
                    isBlog ? `active` : ``
                  }`}
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="true"
                  aria-controls="sidebarBlog"
                >
                  <i className="ph-broadcast" />{" "}
                  <span data-key="t-learning">Blogs</span>
                </a>
                <div
                  className={`collapse menu-dropdown ${isBlog ? `show` : ``}`}
                  id="sidebarBlog"
                >
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="/addBlog"
                        className={`nav-link ${isBlog ? `active` : ``}`}
                        role="button"
                        data-key="t-signup"
                      >
                        {" "}
                        Create Blog{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link menu-link ${iswishlist ? `active` : ``}`}
                  href="/wishlist"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarWishlist"
                >
                  <i className="ri-file-list-3-line" />{" "}
                  <span data-key="t-wishlist">Wishlist</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link menu-link ${isUsers ? `active` : ``}`}
                  href="/users"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarUsers"
                >
                  <i className="ph-user-circle" />{" "}
                  <span data-key="t-wishlist">Users</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link menu-link ${isContact ? `active` : ``}`}
                  href="/contacts"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarContacts"
                >
                  <i className="ph-address-book" />{" "}
                  <span data-key="t-contacts">Contacts</span>
                </a>
              </li>
              <li className="menu-title">
                <i className="ri-more-fill" />{" "}
                <span data-key="t-pages">Pages</span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link collapsed"
                  href="#sidebarAuth"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarAuth"
                >
                  <i className="ph-user-circle" />{" "}
                  <span data-key="t-authentication">Authentication</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarAuth">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="auth-signin"
                        className="nav-link"
                        role="button"
                        data-key="t-signin"
                      >
                        {" "}
                        Sign In{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="auth-signup"
                        className="nav-link"
                        role="button"
                        data-key="t-signup"
                      >
                        {" "}
                        Sign Up{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="auth-pass-reset"
                        className="nav-link"
                        role="button"
                        data-key="t-password-reset"
                      >
                        Password Reset
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="auth-pass-change"
                        className="nav-link"
                        role="button"
                        data-key="t-password-create"
                      >
                        Password Create
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="auth-lockscreen"
                        className="nav-link"
                        role="button"
                        data-key="t-lock-screen"
                      >
                        Lock Screen
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="auth-logout"
                        className="nav-link"
                        role="button"
                        data-key="t-logout"
                      >
                        {" "}
                        Logout{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="auth-success-msg"
                        className="nav-link"
                        role="button"
                        data-key="t-success-message"
                      >
                        {" "}
                        Success Message{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="auth-twostep"
                        className="nav-link"
                        role="button"
                        data-key="t-two-step-verification"
                      >
                        {" "}
                        Two Step Verification{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarErrors"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarErrors"
                        data-key="t-errors"
                      >
                        {" "}
                        Errors{" "}
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarErrors"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="auth-404"
                              className="nav-link"
                              data-key="t-404-error"
                            >
                              {" "}
                              404 Error{" "}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-500"
                              className="nav-link"
                              data-key="t-500"
                            >
                              {" "}
                              500{" "}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-503"
                              className="nav-link"
                              data-key="t-503"
                            >
                              {" "}
                              503{" "}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-offline"
                              className="nav-link"
                              data-key="t-offline-page"
                            >
                              {" "}
                              Offline Page{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* Sidebar */}
        </div>
        <div className="sidebar-background" />
      </div>
      <Script src="assets/js/jquery.min.js"></Script>
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/js/simplebar.min.js"></Script>
      <Script src="assets/js/plugins.js"></Script>
      <Script src="assets/js/layout.js"></Script>
      <Script src="assets/js/app.js"></Script>
    </>
  );
};

export default Sidebar;
