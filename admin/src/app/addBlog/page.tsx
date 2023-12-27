"use client";

import Script from "next/script";
import { Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import swal from "sweetalert";
import { addBlog } from "@/actions/otherActions";

const { TextArea } = Input;
const Addblog = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [type, setType] = useState("");
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    console.error("Form submission failed");
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is Invalid!",
      password: "${label} is Invalid!",
      name: "${label} is too long!",
    },
  };

  const formatDate = (value: Date) => {
    const date = new Date(value);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = ("0" + date.getDate()).slice(-2);
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  };
  const notifyError = (data: any) => {
    toast.error(data.message);
  };
  const handleTypeChange = (event: any) => {
    setType(event.target.value);
  };

  const onFinish = (values: any) => {
    values.type = type;
    values.date = formatDate(values.date);
    console.log(values);
    addBlog(values)
      .then((data) => {
        if (data.status == true) {
          swal({
            title: "Success!",
            text: data.message,
            icon: "success",
          });
          localStorage.setItem("token", data.token);
          form.resetFields();
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
  return (
    <>
      <meta charSet="utf-8" />
      <title>Create Course | Steex - Admin &amp; Dashboard Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content="Minimal Admin & Dashboard Template" name="description" />
      <meta content="Themesbrand" name="author" />
      {/* App favicon */}
      <link rel="shortcut icon" href="assets/images/favicon.ico" />
      {/* Fonts css load */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
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

      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="layout-width">
            <div className="navbar-header">
              <div className="d-flex">
                {/* LOGO */}
                <div className="navbar-brand-box horizontal-logo">
                  <a href="index" className="logo logo-dark">
                    <span className="logo-sm">
                      <img src="assets/images/logo-sm.png" alt="" height={22} />
                    </span>
                    <span className="logo-lg">
                      <img
                        src="assets/images/logo-dark.png"
                        alt=""
                        height={22}
                      />
                    </span>
                  </a>
                  <a href="index" className="logo logo-light">
                    <span className="logo-sm">
                      <img src="assets/images/logo-sm.png" alt="" height={22} />
                    </span>
                    <span className="logo-lg">
                      <img
                        src="assets/images/logo-light.png"
                        alt=""
                        height={22}
                      />
                    </span>
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none"
                  id="topnav-hamburger-icon"
                >
                  <span className="hamburger-icon">
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
                <form className="app-search d-none d-md-inline-flex">
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      autoComplete="off"
                      id="search-options"
                      defaultValue=""
                    />
                    <span className="mdi mdi-magnify search-widget-icon" />
                    <span
                      className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                      id="search-close-options"
                    />
                  </div>
                  <div
                    className="dropdown-menu dropdown-menu-lg"
                    id="search-dropdown"
                  >
                    <div data-simplebar="" style={{ maxHeight: 320 }}>
                      {/* item*/}
                      <div className="dropdown-header">
                        <h6 className="text-overflow text-muted mb-0 text-uppercase">
                          Recent Searches
                        </h6>
                      </div>
                      <div className="dropdown-item bg-transparent text-wrap">
                        <a
                          href="index"
                          className="btn btn-subtle-secondary btn-sm btn-rounded"
                        >
                          how to setup <i className="mdi mdi-magnify ms-1" />
                        </a>
                        <a
                          href="index"
                          className="btn btn-subtle-secondary btn-sm btn-rounded"
                        >
                          buttons <i className="mdi mdi-magnify ms-1" />
                        </a>
                      </div>
                      {/* item*/}
                      <div className="dropdown-header mt-2">
                        <h6 className="text-overflow text-muted mb-1 text-uppercase">
                          Pages
                        </h6>
                      </div>
                      {/* item*/}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item"
                      >
                        <i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2" />
                        <span>Analytics Dashboard</span>
                      </a>
                      {/* item*/}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item"
                      >
                        <i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2" />
                        <span>Help Center</span>
                      </a>
                      {/* item*/}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item"
                      >
                        <i className="ri-user-settings-line align-middle fs-18 text-muted me-2" />
                        <span>My account settings</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="d-flex align-items-center">
                <div className="dropdown ms-sm-3 header-item topbar-user">
                  <button
                    type="button"
                    className="btn shadow-none"
                    id="page-header-user-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="d-flex align-items-center">
                      <img
                        className="rounded-circle header-profile-user"
                        src="assets/images/users/32/avatar-1.jpg"
                        alt="Header Avatar"
                      />
                      <span className="text-start ms-xl-2">
                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                          Richard Marshall
                        </span>
                        <span className="d-none d-xl-block ms-1 fs-sm user-name-sub-text">
                          Founder
                        </span>
                      </span>
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <h6 className="dropdown-header">Welcome Richard!</h6>
                    <a className="dropdown-item" href="pages-profile">
                      <i className="mdi mdi-account-circle text-muted fs-lg align-middle me-1" />{" "}
                      <span className="align-middle">Profile</span>
                    </a>
                    <a className="dropdown-item" href="apps-chat">
                      <i className="mdi mdi-message-text-outline text-muted fs-lg align-middle me-1" />{" "}
                      <span className="align-middle">Messages</span>
                    </a>
                    <a className="dropdown-item" href="apps-tickets-overview">
                      <i className="mdi mdi-calendar-check-outline text-muted fs-lg align-middle me-1" />{" "}
                      <span className="align-middle">Taskboard</span>
                    </a>
                    <a className="dropdown-item" href="pages-faqs">
                      <i className="mdi mdi-lifebuoy text-muted fs-lg align-middle me-1" />{" "}
                      <span className="align-middle">Help</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="pages-profile">
                      <i className="mdi mdi-wallet text-muted fs-lg align-middle me-1" />{" "}
                      <span className="align-middle">
                        Balance : <b>$8451.36</b>
                      </span>
                    </a>
                    <a className="dropdown-item" href="pages-profile-settings">
                      <span className="badge bg-success-subtle text-success mt-1 float-end">
                        New
                      </span>
                      <i className="mdi mdi-cog-outline text-muted fs-lg align-middle me-1" />{" "}
                      <span className="align-middle">Settings</span>
                    </a>
                    <a className="dropdown-item" href="auth-lockscreen">
                      <i className="mdi mdi-lock text-muted fs-lg align-middle me-1" />{" "}
                      <span className="align-middle">Lock screen</span>
                    </a>
                    <a className="dropdown-item" href="auth-logout">
                      <i className="mdi mdi-logout text-muted fs-lg align-middle me-1" />{" "}
                      <span className="align-middle" data-key="t-logout">
                        Logout
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* /.modal */}
        {/* removeCartModal */}
        <div
          id="removeCartModal"
          className="modal fade zoomIn"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="close-cartmodal"
                />
              </div>
              <div className="modal-body p-md-5">
                <div className="text-center">
                  <div className="text-danger">
                    <i className="bi bi-trash display-5" />
                  </div>
                  <div className="mt-4">
                    <h4>Are you sure ?</h4>
                    <p className="text-muted mx-4 mb-0">
                      Are you sure you want to remove this product ?
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                  <button
                    type="button"
                    className="btn w-sm btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn w-sm btn-danger"
                    id="remove-cartproduct"
                  >
                    Yes, Delete It!
                  </button>
                </div>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        {/* ========== App Menu ========== */}
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
                    className="nav-link menu-link"
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
                    href="#sidebarLearning"
                    className="nav-link menu-link collapsed"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarLearning"
                  >
                    <i className="ph-graduation-cap" />{" "}
                    <span data-key="t-learning">Learning</span>
                  </a>
                  <div className="collapse menu-dropdown" id="sidebarLearning">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          href="#sidebarCourses"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarCourses"
                          data-key="t-courses"
                        >
                          {" "}
                          Courses{" "}
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarCourses"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="apps-learning-category"
                                className="nav-link"
                                data-key="t-category"
                              >
                                Category
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="apps-learning-overview"
                                className="nav-link"
                                data-key="t-overview"
                              >
                                Overview
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="/addCourse"
                                className="nav-link"
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
                          href="#sidebarStudent"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarStudent"
                          data-key="t-students"
                        >
                          {" "}
                          Students{" "}
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarStudent"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="apps-student-subScriptions"
                                className="nav-link"
                                data-key="t-my-subScriptions"
                              >
                                My Subscriptions
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="apps-student-courses"
                                className="nav-link"
                                data-key="t-my-courses"
                              >
                                My Courses
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarInstructors"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarInstructors"
                          data-key="t-instructors"
                        >
                          {" "}
                          Instructors{" "}
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarInstructors"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="apps-instructors-overview"
                                className="nav-link"
                                data-key="t-overview"
                              >
                                Overview
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="apps-instructors-create"
                                className="nav-link"
                                data-key="t-create-instructors"
                              >
                                Create Instructor
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
                    href="#sidebarBlog"
                    className="nav-link menu-link collapsed active"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="true"
                    aria-controls="sidebarBlog"
                  >
                    <i className="ph-broadcast" />{" "}
                    <span data-key="t-learning">Blog</span>
                  </a>
                  <div className="collapse menu-dropdown show" id="sidebarBlog">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          href="/addBlog"
                          className="nav-link active"
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
                          Candlstick
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
                  <div
                    className="collapse menu-dropdown"
                    id="sidebarMultilevel"
                  >
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
        {/* Left Sidebar End */}
        {/* Vertical Overlay*/}
        <div className="vertical-overlay" />
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0">Create Blog</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Blog</a>
                        </li>
                        <li className="breadcrumb-item active">Create Blog</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header">
                      <h5>Blog Details</h5>
                    </div>
                    <div className="card-body form-steps">
                      <Form
                        name="course-form"
                        form={form}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        validateMessages={validateMessages}
                      >
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="coursesDetails"
                            role="tabpanel"
                            aria-labelledby="coursesDetails-tab"
                          >
                            <div className="row g-3 align-items-center">
                              <div className="col-lg-6">
                                <div>
                                  <label
                                    htmlFor="course-title-input"
                                    className="form-label"
                                  >
                                    Blog title
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Form.Item
                                    name="title"
                                    rules={[{ required: true }]}
                                  >
                                    <Input
                                      type="text"
                                      id="course-title-input"
                                      className="form-control"
                                      placeholder="Enter blog title"
                                      required
                                    />
                                  </Form.Item>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-4">
                                <div>
                                  <label
                                    htmlFor="lavel-input"
                                    className="form-label"
                                  >
                                    User type
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Form.Item
                                    name="usertype"
                                    rules={[{ required: true }]}
                                  >
                                    <select
                                      className="form-select"
                                      id="lavel-input"
                                      onChange={handleTypeChange}
                                      // data-choices=""
                                      // data-choices-search-false=""
                                    >
                                      <option value="">Select type</option>
                                      <option value="Admin">Admin</option>
                                      <option value="Student">Student</option>
                                      <option value="Tutor">Tutor</option>
                                    </select>
                                  </Form.Item>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-3">
                                <div>
                                  <label
                                    htmlFor="lectures-input"
                                    className="form-label"
                                  >
                                    Views
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Form.Item
                                    name="views"
                                    rules={[{ required: true }]}
                                  >
                                    <Input
                                      type="text"
                                      id="lectures-input"
                                      className="form-control"
                                      placeholder="0 k"
                                      required
                                    />
                                  </Form.Item>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-3">
                                <div>
                                  <label
                                    htmlFor="dead-input"
                                    className="form-label"
                                  >
                                    Date
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Form.Item
                                    name="date"
                                    rules={[{ required: true }]}
                                  >
                                    <Input
                                      type="date"
                                      className="form-control"
                                      id="dead-input"
                                      required
                                    />
                                  </Form.Item>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-12">
                                <label className="form-label" htmlFor="goal">
                                  Goal
                                  <span className="text-danger">*</span>
                                </label>
                                <Form.Item
                                  name="goal"
                                  rules={[{ required: true }]}
                                >
                                  <TextArea
                                    className="form-control"
                                    id="goal"
                                    rows={3}
                                    placeholder="Goal of the Blog"
                                  />
                                </Form.Item>
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-12">
                              <div>
                                <label htmlFor="about" className="form-label">
                                  About
                                  <span className="text-danger">*</span>
                                </label>
                                <Form.Item
                                  name="about"
                                  rules={[{ required: true }]}
                                >
                                  <TextArea
                                    className="form-control"
                                    id="about"
                                    rows={3}
                                    placeholder="About Blog"
                                  />
                                </Form.Item>
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-12">
                              <div>
                                <label
                                  htmlFor="description"
                                  className="form-label"
                                >
                                  Description
                                  <span className="text-danger">*</span>
                                </label>
                                <Form.Item
                                  name="description"
                                  rules={[{ required: true }]}
                                >
                                  <TextArea
                                    className="form-control"
                                    id="description"
                                    rows={5}
                                    placeholder="Enter description"
                                    defaultValue={""}
                                  />
                                </Form.Item>
                              </div>
                            </div>
                            {/*end row*/}
                            <div className="d-flex align-items-start gap-3 mt-4">
                              <Toaster
                                position="top-right"
                                expand={true}
                                richColors
                              />
                              <button
                                type="submit"
                                className="btn btn-primary ms-auto"
                                style={{ fontSize: "0.9rem", width: "6rem" }}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                          {/* end tab pane */}
                        </div>
                        {/* end tab content */}
                      </Form>
                    </div>
                    {/* end card body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
              </div>
            </div>
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">© Steex.</div>
                <div className="col-sm-6">
                  <div className="text-sm-end d-none d-sm-block">
                    Design &amp; Develop by Themesbrand
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* end main content*/}
      </div>
      {/* END layout-wrapper */}
      {/*start back-to-top*/}
      <button className="btn btn-dark btn-icon" id="back-to-top">
        <i className="bi bi-caret-up fs-3xl" />
      </button>
      {/*end back-to-top*/}
      {/*preloader*/}
      <div id="preloader">
        <div id="status">
          <div className="spinner-border text-primary avatar-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/js/simplebar.min.js"></Script>
      <Script src="assets/js/plugins.js"></Script>
      <Script src="assets/js/layout.js"></Script>
      <Script src="assets/js/ckeditor.js"></Script>

      <Script src="assets/js/dropzone-min.js"></Script>

      <Script src="assets/js/form-editor.init.js"></Script>

      <Script src="assets/js/form-wizard.init.js"></Script>

      {/* <Script src="assets/js/learning-create.init.js"></Script> */}

      <Script src="assets/js/app.js"></Script>
    </>
  );
};

export default Addblog;
