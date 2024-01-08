"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const Sidebar = ({ page }: any) => {
  const [isContact, setIsContact] = useState(false);
  const [isCreateCourse, setIsCreateCourse] = useState(false);
  const [isCourse, setIsCourse] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const [category, setCategory] = useState(false)
  const [isAddCategory, setIsAddCategory] = useState(false)
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
      console.log(isCourse);
      console.log(page);
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
                    isCreateCourse || isCourse || isAddCategory ? `active` : ``
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
                    isCreateCourse || isCourse || isAddCategory|| category ? `show` : ``
                  }`}
                  id="sidebarCourses"
                >
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                      href="#sidebarCategory"
                        className={`nav-link menu-link collapsed ${
                          isAddCategory || category ? `active` : ``
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
                         isAddCategory || category ? `show` : ``
                        }`}
                        id="sidebarCategory"
                      >
                        <ul className="nav nav-sm flex-column">
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
                              href="/addCategory"
                              className={`nav-link ${isAddCategory ? `active` : ``}`}
                              data-key="t-addcategory"
                            >
                              Add Category
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/courses"
                        className={`nav-link  ${isCourse ? `active` : ``}`}
                        data-key="t-overview"
                      >
                        Course Orders
                      </a>
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
                  <span data-key="t-learning">Blog</span>
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
              <li className="nav-item">
                <a
                  className="nav-link menu-link collapsed"
                  href="#sidebarPages"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarPages"
                >
                  <i className="ph-address-book" />{" "}
                  <span data-key="t-pages">Pages</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarPages">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="pages-starter"
                        className="nav-link"
                        data-key="t-starter"
                      >
                        {" "}
                        Starter{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-profile"
                        className="nav-link"
                        data-key="t-profile"
                      >
                        {" "}
                        Profile{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-profile-settings"
                        className="nav-link"
                        data-key="t-profile-setting"
                      >
                        {" "}
                        Profile Settings{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-contacts"
                        className="nav-link"
                        data-key="t-contacts"
                      >
                        {" "}
                        Contacts{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-timeline"
                        className="nav-link"
                        data-key="t-timeline"
                      >
                        {" "}
                        Timeline{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-faqs"
                        className="nav-link"
                        data-key="t-faqs"
                      >
                        {" "}
                        FAQs{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-pricing"
                        className="nav-link"
                        data-key="t-pricing"
                      >
                        {" "}
                        Pricing{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-maintenance"
                        className="nav-link"
                        data-key="t-maintenance"
                      >
                        {" "}
                        Maintenance{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-coming-soon"
                        className="nav-link"
                        data-key="t-coming-soon"
                      >
                        {" "}
                        Coming Soon{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-privacy-policy"
                        className="nav-link"
                        data-key="t-privacy-policy"
                      >
                        {" "}
                        Privacy Policy{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-term-conditions"
                        className="nav-link"
                        data-key="t-term-conditions"
                      >
                        {" "}
                        Term &amp; Conditions{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-title">
                <i className="ri-more-fill" />{" "}
                <span data-key="t-components">Components</span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link collapsed"
                  href="#sidebarUI"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarUI"
                >
                  <i className="ph-bandaids" />{" "}
                  <span data-key="t-bootstrap-ui">Bootstrap UI</span>
                </a>
                <div
                  className="collapse menu-dropdown mega-dropdown-menu"
                  id="sidebarUI"
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            href="ui-alerts"
                            className="nav-link"
                            data-key="t-alerts"
                          >
                            Alerts
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-badges"
                            className="nav-link"
                            data-key="t-badges"
                          >
                            Badges
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-buttons"
                            className="nav-link"
                            data-key="t-buttons"
                          >
                            Buttons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-colors"
                            className="nav-link"
                            data-key="t-colors"
                          >
                            Colors
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-cards"
                            className="nav-link"
                            data-key="t-cards"
                          >
                            Cards
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-carousel"
                            className="nav-link"
                            data-key="t-carousel"
                          >
                            Carousel
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-dropdowns"
                            className="nav-link"
                            data-key="t-dropdowns"
                          >
                            Dropdowns
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-grid"
                            className="nav-link"
                            data-key="t-grid"
                          >
                            Grid
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            href="ui-images"
                            className="nav-link"
                            data-key="t-images"
                          >
                            Images
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-tabs"
                            className="nav-link"
                            data-key="t-tabs"
                          >
                            Tabs
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-accordions"
                            className="nav-link"
                            data-key="t-accordion-collapse"
                          >
                            Accordion &amp; Collapse
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-modals"
                            className="nav-link"
                            data-key="t-modals"
                          >
                            Modals
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-offcanvas"
                            className="nav-link"
                            data-key="t-offcanvas"
                          >
                            Offcanvas
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-placeholders"
                            className="nav-link"
                            data-key="t-placeholders"
                          >
                            Placeholders
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-progress"
                            className="nav-link"
                            data-key="t-progress"
                          >
                            Progress
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-notifications"
                            className="nav-link"
                            data-key="t-notifications"
                          >
                            Notifications
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            href="ui-media"
                            className="nav-link"
                            data-key="t-media-object"
                          >
                            Media object
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-embed-video"
                            className="nav-link"
                            data-key="t-embed-video"
                          >
                            Embed Video
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-typography"
                            className="nav-link"
                            data-key="t-typography"
                          >
                            Typography
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-lists"
                            className="nav-link"
                            data-key="t-lists"
                          >
                            Lists
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-links"
                            className="nav-link"
                            data-key="t-links"
                          >
                            Links
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-general"
                            className="nav-link"
                            data-key="t-general"
                          >
                            General
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-utilities"
                            className="nav-link"
                            data-key="t-utilities"
                          >
                            Utilities
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link collapsed"
                  href="#sidebarAdvanceUI"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarAdvanceUI"
                >
                  <i className="ph-stack-simple" />{" "}
                  <span data-key="t-advance-ui">Advance UI</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarAdvanceUI">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="advance-ui-sweetalerts"
                        className="nav-link"
                        data-key="t-sweet-alerts"
                      >
                        Sweet Alerts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="advance-ui-nestable"
                        className="nav-link"
                        data-key="t-nestable-list"
                      >
                        Nestable List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="advance-ui-scrollbar"
                        className="nav-link"
                        data-key="t-scrollbar"
                      >
                        Scrollbar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="advance-ui-swiper"
                        className="nav-link"
                        data-key="t-swiper-slider"
                      >
                        Swiper Slider
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="advance-ui-ratings"
                        className="nav-link"
                        data-key="t-ratings"
                      >
                        Ratings
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="advance-ui-highlight"
                        className="nav-link"
                        data-key="t-highlight"
                      >
                        Highlight
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="advance-ui-scrollspy"
                        className="nav-link"
                        data-key="t-scrollSpy"
                      >
                        ScrollSpy
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link collapsed"
                  href="#customUI"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="customUI"
                >
                  <i className="ph-wrench" />{" "}
                  <span data-key="t-custom-ui">Custom UI</span>{" "}
                  <span
                    className="badge badge-pill bg-danger"
                    data-key="t-custom"
                  >
                    Custom
                  </span>
                </a>
                <div className="collapse menu-dropdown" id="customUI">
                  <div className="row">
                    <div className="col-lg-4">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            href="ui-ribbons"
                            className="nav-link"
                            data-key="t-ribbons"
                          >
                            Ribbons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-profile"
                            className="nav-link"
                            data-key="t-profile"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-counter"
                            className="nav-link"
                            data-key="t-counter"
                          >
                            Counter
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link menu-link" href="widgets">
                  <i className="ph-paint-brush-broad" />{" "}
                  <span data-key="t-widgets">Widgets</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link collapsed"
                  href="#sidebarForms"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarForms"
                >
                  <i className="ri-file-list-3-line" />{" "}
                  <span data-key="t-forms">Forms</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarForms">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="forms-elements"
                        className="nav-link"
                        data-key="t-basic-elements"
                      >
                        Basic Elements
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="forms-select"
                        className="nav-link"
                        data-key="t-form-select"
                      >
                        Form Select
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="forms-checkboxs-radios"
                        className="nav-link"
                        data-key="t-checkboxes-radios"
                      >
                        Checkboxes &amp; Radios
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="forms-pickers"
                        className="nav-link"
                        data-key="t-pickers"
                      >
                        Pickers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="forms-masks"
                        className="nav-link"
                        data-key="t-input-masks"
                      >
                        Input Masks
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="forms-advanced"
                        className="nav-link"
                        data-key="t-advanced"
                      >
                        Advanced
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="forms-range-sliders"
                        className="nav-link"
                        data-key="t-range-slider"
                      >
                        Range Slider
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="forms-validation"
                        className="nav-link"
                        data-key="t-validation"
                      >
                        Validation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="forms-wizard"
                        className="nav-link"
                        data-key="t-wizard"
                      >
                        Wizard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="forms-editors"
                        className="nav-link"
                        data-key="t-editors"
                      >
                        Editors
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="forms-file-uploads"
                        className="nav-link"
                        data-key="t-file-uploads"
                      >
                        File Uploads
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="forms-layouts"
                        className="nav-link"
                        data-key="t-form-layouts"
                      >
                        Form Layouts
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link collapsed"
                  href="#sidebarTables"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarTables"
                >
                  <i className="ph-table" />{" "}
                  <span data-key="t-tables">Tables</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarTables">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="tables-basic"
                        className="nav-link"
                        data-key="t-basic-tables"
                      >
                        Basic Tables
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="tables-gridjs"
                        className="nav-link"
                        data-key="t-grid-js"
                      >
                        Grid Js
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="tables-listjs"
                        className="nav-link"
                        data-key="t-list-js"
                      >
                        List Js
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="tables-datatables"
                        className="nav-link"
                        data-key="t-datatables"
                      >
                        Datatables
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link collapsed"
                  href="#sidebarCharts"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarCharts"
                >
                  <i className="ph-chart-pie-slice" />{" "}
                  <span data-key="t-apexcharts">Apexcharts</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarCharts">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="charts-apex-line"
                        className="nav-link"
                        data-key="t-line"
                      >
                        Line
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-area"
                        className="nav-link"
                        data-key="t-area"
                      >
                        Area
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-column"
                        className="nav-link"
                        data-key="t-column"
                      >
                        Column
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-bar"
                        className="nav-link"
                        data-key="t-bar"
                      >
                        Bar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-mixed"
                        className="nav-link"
                        data-key="t-mixed"
                      >
                        Mixed
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-timeline"
                        className="nav-link"
                        data-key="t-timeline"
                      >
                        Timeline
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-candlestick"
                        className="nav-link"
                        data-key="t-candlstick"
                      >
                        Candlestick
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-boxplot"
                        className="nav-link"
                        data-key="t-boxplot"
                      >
                        Boxplot
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-bubble"
                        className="nav-link"
                        data-key="t-bubble"
                      >
                        Bubble
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-scatter"
                        className="nav-link"
                        data-key="t-scatter"
                      >
                        Scatter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-heatmap"
                        className="nav-link"
                        data-key="t-heatmap"
                      >
                        Heatmap
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-treemap"
                        className="nav-link"
                        data-key="t-treemap"
                      >
                        Treemap
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-pie"
                        className="nav-link"
                        data-key="t-pie"
                      >
                        Pie
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-radialbar"
                        className="nav-link"
                        data-key="t-radialbar"
                      >
                        Radialbar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-radar"
                        className="nav-link"
                        data-key="t-radar"
                      >
                        Radar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="charts-apex-polar"
                        className="nav-link"
                        data-key="t-polar-area"
                      >
                        Polar Area
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link collapsed"
                  href="#sidebarIcons"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarIcons"
                >
                  <i className="ph-traffic-cone" />{" "}
                  <span data-key="t-icons">Icons</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarIcons">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="icons-remix"
                        className="nav-link"
                        data-key="t-remix"
                      >
                        Remix
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="icons-boxicons"
                        className="nav-link"
                        data-key="t-boxicons"
                      >
                        Boxicons
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="icons-materialdesign"
                        className="nav-link"
                        data-key="t-material-design"
                      >
                        Material Design
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="icons-bootstrap"
                        className="nav-link"
                        data-key="t-bootstrap"
                      >
                        Bootstrap
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="icons-phosphor"
                        className="nav-link"
                        data-key="t-phosphor"
                      >
                        Phosphor
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link collapsed"
                  href="#sidebarMaps"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarMaps"
                >
                  <i className="ph-map-trifold" />{" "}
                  <span data-key="t-maps">Maps</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarMaps">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="maps-google"
                        className="nav-link"
                        data-key="t-google"
                      >
                        Google
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="maps-vector"
                        className="nav-link"
                        data-key="t-vector"
                      >
                        Vector
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="maps-leaflet"
                        className="nav-link"
                        data-key="t-leaflet"
                      >
                        Leaflet
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#sidebarMultilevel"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarMultilevel"
                >
                  <i className="bi bi-share" />{" "}
                  <span data-key="t-multi-level">Multi Level</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarMultilevel">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a href="#" className="nav-link" data-key="t-level-1.1">
                        {" "}
                        Level 1.1{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarAccount"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarAccount"
                        data-key="t-level-1.2"
                      >
                        {" "}
                        Level 1.2
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarAccount"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="#"
                              className="nav-link"
                              data-key="t-level-2.1"
                            >
                              {" "}
                              Level 2.1{" "}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebarCrm"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              role="button"
                              aria-expanded="false"
                              aria-controls="sidebarCrm"
                              data-key="t-level-2.2"
                            >
                              {" "}
                              Level 2.2
                            </a>
                            <div
                              className="collapse menu-dropdown"
                              id="sidebarCrm"
                            >
                              <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                  <a
                                    href="#"
                                    className="nav-link"
                                    data-key="t-level-3.1"
                                  >
                                    {" "}
                                    Level 3.1
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#"
                                    className="nav-link"
                                    data-key="t-level-3.2"
                                  >
                                    {" "}
                                    Level 3.2
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
