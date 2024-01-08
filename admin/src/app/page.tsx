'use client'

import Script from "next/script";
import { useEffect, useState } from "react"
import withAuth from "@/hoc/authMiddleware";
import Sidebar from "@/components/sideBar";
import { getAdmin } from "@/actions/userActions";
import { Toaster, toast } from "sonner";

 const Home = () =>{

  const [admin, setAdmin] = useState({
    name:"",
    email:"",
  });

  const notifyError = (data: any) => {
    toast.error(data.message);
  };
  useEffect(()=>{
    const token = localStorage.getItem('token');
    const data = {
      "token":token
    }
    getAdmin(data)
    .then((data) => {
      if (data.status == true) {
        setAdmin(data.data);
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
  },[])
  return (
    <>
      <meta charSet="utf-8" />
      <title>Learning | Steex - Admin &amp; Dashboard Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content="Minimal Admin & Dashboard Template" name="deScription" />
      <meta content="Themesbrand" name="author" />
      {/* App favicon */}
      <link rel="shortcut icon" href="assets/images/favicon.ico" />
      {/* Fonts css load */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        id="fontsLink"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Layout config Js */}
      {/* Bootstrap Css */}
      <link
        href="assets/css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* Icons Css */}
      <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
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
                        href=""
                        className="dropdown-item notify-item"
                      >
                        <i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2" />
                        <span>Analytics Dashboard</span>
                      </a>
                      {/* item*/}
                      <a
                        href=""
                        className="dropdown-item notify-item"
                      >
                        <i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2" />
                        <span>Help Center</span>
                      </a>
                      {/* item*/}
                      <a
                        href=""
                        className="dropdown-item notify-item"
                      >
                        <i className="ri-user-settings-line align-middle fs-18 text-muted me-2" />
                        <span>My account settings</span>
                      </a>
                      {/* item*/}
                      <div className="dropdown-header mt-2">
                        <h6 className="text-overflow text-muted mb-2 text-uppercase">
                          Members
                        </h6>
                      </div>
                      <div className="notification-list">
                        {/* item */}
                        <a
                          href=""
                          className="dropdown-item notify-item py-2"
                        >
                          <div className="d-flex">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <h6 className="m-0">Angela Bernier</h6>
                              <span className="fs-11 mb-0 text-muted">
                                Manager
                              </span>
                            </div>
                          </div>
                        </a>
                        {/* item */}
                        <a
                          href=""
                          className="dropdown-item notify-item py-2"
                        >
                          <div className="d-flex">
                            <img
                              src="assets/images/users/avatar-3.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <h6 className="m-0">David Grasso</h6>
                              <span className="fs-11 mb-0 text-muted">
                                Web Designer
                              </span>
                            </div>
                          </div>
                        </a>
                        {/* item */}
                        <a
                          href=""
                          className="dropdown-item notify-item py-2"
                        >
                          <div className="d-flex">
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <h6 className="m-0">Mike Bunch</h6>
                              <span className="fs-11 mb-0 text-muted">
                                React Developer
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="text-center pt-3 pb-1">
                      <a href="#" className="btn btn-primary btn-sm">
                        View All Results{" "}
                        <i className="ri-arrow-right-line ms-1" />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="d-flex align-items-center">
              <Toaster position="top-right" expand={true} richColors />
                <div className="dropdown ms-sm-3 header-item topbar-user gap-3">
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
                          {admin.name}
                        </span>
                        <span className="d-none d-xl-block ms-1 fs-sm user-name-sub-text">
                          Admin
                        </span>
                      </span>
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <h6 className="dropdown-header">Welcome {admin.name}!</h6>
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
        {/* ========== App Menu ========== */}
        <Sidebar page="home"/>
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
                    <h4 className="mb-sm-0">Home</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="/">Home</a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-xxl-9">
                  <div className="row">
                    <div className="col-xxl-9">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card">
                            <div className="card-body">
                              <span className="badge bg-success-subtle text-success float-end">
                                <i className="bi bi-arrow-up" /> 4.65%
                              </span>
                              <p className="fs-md text-muted mb-4">
                                Total Students
                              </p>
                              <h3 className="mb-n3">
                                <span
                                  className="counter-value"
                                  data-target={4879}
                                >
                                  0
                                </span>
                                k{" "}
                              </h3>
                              <div
                                id="total_students"
                                data-colors='["--tb-light", "--tb-secondary", "--tb-light", "--tb-light", "--tb-light", "--tb-light","--tb-light"]'
                                className="apex-charts"
                                dir="ltr"
                              />
                            </div>
                          </div>
                        </div>
                        {/*end row*/}
                        <div className="col-lg-6">
                          <div className="card">
                            <div className="card-body">
                              <span className="badge bg-danger-subtle text-danger float-end">
                                <i className="bi bi-arrow-down" /> 1.27%
                              </span>
                              <p className="fs-md text-muted mb-4">
                                Total Courses
                              </p>
                              <h3 className="mb-n3">
                                <span
                                  className="counter-value"
                                  data-target={754}
                                >
                                  0
                                </span>{" "}
                              </h3>
                              <div
                                id="total_courses"
                                data-colors='["--tb-info", "--tb-secondary", "--tb-primary", "--tb-primary", "--tb-primary", "--tb-primary","--tb-primary"]'
                                className="apex-charts"
                                dir="ltr"
                              />
                            </div>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xxl-12">
                          <div className="card">
                            <div className="card-header d-flex align-items-center">
                              <h6 className="card-title mb-0 flex-grow-1">
                                Features Course Categories
                              </h6>
                              <div className="flex-shrink-0">
                                <a
                                  href="apps-learning-category"
                                  className="icon-link icon-link-hover"
                                >
                                  View All <i className="bi bi-arrow-right" />
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="row g-4">
                                <div className="col-lg-3 col-sm-6">
                                  <div className="text-center">
                                    <div className="avatar-sm mx-auto">
                                      <div className="avatar-title bg-success-subtle rounded">
                                        <img
                                          src="assets/images/learning/shopify.png"
                                          alt=""
                                          className="avatar-xs"
                                        />
                                      </div>
                                    </div>
                                    <h6 className="text-trucate mb-0 mt-3">
                                      <a
                                        href="apps-learning-grid"
                                        className="text-reset"
                                      >
                                        Shopify Development
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/*end col*/}
                                <div className="col-lg-3 col-sm-6">
                                  <div className="text-center">
                                    <div className="avatar-sm mx-auto">
                                      <div className="avatar-title bg-info-subtle rounded">
                                        <img
                                          src="assets/images/learning/webpack.png"
                                          alt=""
                                          className="avatar-xs"
                                        />
                                      </div>
                                    </div>
                                    <h6 className="text-trucate mb-0 mt-3">
                                      <a
                                        href="apps-learning-grid"
                                        className="text-reset"
                                      >
                                        Marketing &amp; Management
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/*end col*/}
                                <div className="col-lg-3 col-sm-6">
                                  <div className="text-center">
                                    <div className="avatar-sm mx-auto">
                                      <div className="avatar-title bg-danger-subtle rounded">
                                        <img
                                          src="assets/images/learning/laravel.png"
                                          alt=""
                                          className="avatar-xs"
                                        />
                                      </div>
                                    </div>
                                    <h6 className="text-trucate mb-0 mt-3">
                                      <a
                                        href="apps-learning-grid"
                                        className="text-reset"
                                      >
                                        Laravel Development
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/*end col*/}
                                <div className="col-lg-3 col-sm-6">
                                  <div className="text-center">
                                    <div className="avatar-sm mx-auto">
                                      <div className="avatar-title bg-info-subtle rounded">
                                        <img
                                          src="assets/images/learning/react.png"
                                          alt=""
                                          className="avatar-xs"
                                        />
                                      </div>
                                    </div>
                                    <h6 className="text-trucate mb-0 mt-3">
                                      <a
                                        href="apps-learning-grid"
                                        className="text-reset"
                                      >
                                        React Development
                                      </a>
                                    </h6>
                                  </div>
                                </div>
                                {/*end col*/}
                              </div>
                              {/*end row*/}
                            </div>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end col*/}
                    <div className="col-xxl-3">
                      <div className="card card-height-100">
                        <div className="card-header d-flex">
                          <h5 className="card-title mb-0 flex-grow-1">
                            Daily Progress
                          </h5>
                          <div className="flex-shrink-0">
                            <div className="dropdown card-header-dropdown sortble-dropdown">
                              <a
                                className="text-reset dropdown-btn"
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="text-muted dropdown-title">
                                  Today
                                </span>{" "}
                                <i className="mdi mdi-chevron-down ms-1" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <button className="dropdown-item">Today</button>
                                <button className="dropdown-item">
                                  This Week
                                </button>
                                <button className="dropdown-item">
                                  This Month
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body text-center">
                          <div
                            id="stroked_radialbar"
                            data-colors='["--tb-primary"]'
                            className="apex-charts"
                            dir="ltr"
                          />
                          <p className="text-muted mb-0">
                            Very good, keep improving the quality of your
                            learning
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="card card-height-100">
                        <div className="card-header align-items-center d-flex">
                          <h4 className="card-title mb-0 flex-grow-1">
                            Learning Overview
                          </h4>
                          <div>
                            <button
                              type="button"
                              className="btn btn-subtle-secondary btn-sm"
                            >
                              ALL
                            </button>
                            <button
                              type="button"
                              className="btn btn-subtle-secondary btn-sm"
                            >
                              1M
                            </button>
                            <button
                              type="button"
                              className="btn btn-subtle-secondary btn-sm"
                            >
                              6M
                            </button>
                            <button
                              type="button"
                              className="btn btn-subtle-primary btn-sm"
                            >
                              1Y
                            </button>
                          </div>
                        </div>
                        <div className="card-body">
                          <div
                            id="area_chart_spline"
                            data-colors='["--tb-primary", "--tb-secondary"]'
                            className="apex-charts ms-n3"
                            dir="ltr"
                          />
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4">
                      <div className="card card-height-100">
                        <div className="card-header d-flex align-items-center">
                          <h6 className="card-title mb-0 flex-grow-1">
                            Best instructors
                          </h6>
                          <div className="flex-shrink-0">
                            <a
                              href="apps-instructors-list"
                              className="icon-link icon-link-hover"
                            >
                              View All <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                        <div className="card-body px-0">
                          <div
                            data-simplebar=""
                            className="card-body py-0"
                            style={{ maxHeight: 330 }}
                          >
                            <div className="table-responsive table-card mt-0">
                              <table className="table mb-0">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center gap-1">
                                        <div className="flex-shrink-0">
                                          <img
                                            src="assets/images/users/48/avatar-2.jpg"
                                            alt=""
                                            className="avatar-sm rounded-circle p-1"
                                          />
                                        </div>
                                        <div className="flex-grow-1">
                                          <h6 className="fs-md mb-1">
                                            <a
                                              href="apps-instructors-overview"
                                              className="text-reset"
                                            >
                                              Bethany Nienow
                                            </a>
                                          </h6>
                                          <p className="text-muted mb-0">
                                            236 Courses
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <span className="badge bg-warning-subtle text-warning">
                                        <i className="bi bi-star-fill" /> 4.9
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center gap-1">
                                        <div className="flex-shrink-0">
                                          <img
                                            src="assets/images/users/48/avatar-7.jpg"
                                            alt=""
                                            className="avatar-sm rounded-circle p-1"
                                          />
                                        </div>
                                        <div className="flex-grow-1">
                                          <h6 className="fs-md mb-1">
                                            <a
                                              href="apps-instructors-overview"
                                              className="text-reset"
                                            >
                                              Sonia Conn
                                            </a>
                                          </h6>
                                          <p className="text-muted mb-0">
                                            247 Courses
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <span className="badge bg-warning-subtle text-warning">
                                        <i className="bi bi-star-fill" /> 4.8
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center gap-1">
                                        <div className="flex-shrink-0">
                                          <img
                                            src="assets/images/users/48/avatar-4.jpg"
                                            alt=""
                                            className="avatar-sm rounded-circle p-1"
                                          />
                                        </div>
                                        <div className="flex-grow-1">
                                          <h6 className="fs-md mb-1">
                                            <a
                                              href="apps-instructors-overview"
                                              className="text-reset"
                                            >
                                              Talon Bradtke
                                            </a>
                                          </h6>
                                          <p className="text-muted mb-0">
                                            365 Courses
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <span className="badge bg-warning-subtle text-warning">
                                        <i className="bi bi-star-fill" /> 4.9
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center gap-1">
                                        <div className="flex-shrink-0">
                                          <img
                                            src="assets/images/users/48/avatar-5.jpg"
                                            alt=""
                                            className="avatar-sm rounded-circle p-1"
                                          />
                                        </div>
                                        <div className="flex-grow-1">
                                          <h6 className="fs-md mb-1">
                                            <a
                                              href="apps-instructors-overview"
                                              className="text-reset"
                                            >
                                              Tyrell Kerluke
                                            </a>
                                          </h6>
                                          <p className="text-muted mb-0">
                                            298 Courses
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <span className="badge bg-warning-subtle text-warning">
                                        <i className="bi bi-star-fill" /> 4.7
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center gap-1">
                                        <div className="flex-shrink-0">
                                          <img
                                            src="assets/images/users/48/avatar-6.jpg"
                                            alt=""
                                            className="avatar-sm rounded-circle p-1"
                                          />
                                        </div>
                                        <div className="flex-grow-1">
                                          <h6 className="fs-md mb-1">
                                            <a
                                              href="apps-instructors-overview"
                                              className="text-reset"
                                            >
                                              Ross Zieme
                                            </a>
                                          </h6>
                                          <p className="text-muted mb-0">
                                            196 Courses
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <span className="badge bg-warning-subtle text-warning">
                                        <i className="bi bi-star-fill" /> 4.9
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center gap-1">
                                        <div className="flex-shrink-0">
                                          <img
                                            src="assets/images/users/48/avatar-1.jpg"
                                            alt=""
                                            className="avatar-sm rounded-circle p-1"
                                          />
                                        </div>
                                        <div className="flex-grow-1">
                                          <h6 className="fs-md mb-1">
                                            <a
                                              href="apps-instructors-overview"
                                              className="text-reset"
                                            >
                                              Hollis Spencer
                                            </a>
                                          </h6>
                                          <p className="text-muted mb-0">
                                            321 Courses
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <span className="badge bg-warning-subtle text-warning">
                                        <i className="bi bi-star-fill" /> 4.7
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center gap-1">
                                        <div className="flex-shrink-0">
                                          <img
                                            src="assets/images/users/48/avatar-8.jpg"
                                            alt=""
                                            className="avatar-sm rounded-circle p-1"
                                          />
                                        </div>
                                        <div className="flex-grow-1">
                                          <h6 className="fs-md mb-1">
                                            Cordia Grady
                                          </h6>
                                          <p className="text-muted mb-0">
                                            357 Courses
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <span className="badge bg-warning-subtle text-warning">
                                        <i className="bi bi-star-fill" /> 4.8
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                  <div className="card" id="coursesList">
                    <div className="card-header align-items-center d-flex">
                      <h4 className="card-title mb-0 flex-grow-1">
                        Recent Courses
                      </h4>
                      <div className="flex-shrink-0">
                        <div className="dropdown card-header-dropdown sortble-dropdown">
                          <a
                            className="text-reset dropdown-btn"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="fw-semibold text-uppercase fs-12">
                              Sort by:
                            </span>
                            <span className="text-muted dropdown-title">
                              Course Name
                            </span>{" "}
                            <i className="mdi mdi-chevron-down ms-1" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <button
                              className="dropdown-item sort"
                              data-sort="courses_Name"
                            >
                              Course Name
                            </button>
                            <button
                              className="dropdown-item sort"
                              data-sort="instructor"
                            >
                              Instructor
                            </button>
                            <button
                              className="dropdown-item sort"
                              data-sort="fees"
                            >
                              Amount
                            </button>
                            <button
                              className="dropdown-item sort"
                              data-sort="status"
                            >
                              Status
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive table-card mt-0">
                        <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                          <thead className="text-muted table-light">
                            <tr>
                              <th
                                scope="col"
                                className="sort cursor-pointer"
                                data-sort="courses_Name"
                              >
                                Course Name
                              </th>
                              <th
                                scope="col"
                                className="sort cursor-pointer"
                                data-sort="category"
                              >
                                Category
                              </th>
                              <th
                                scope="col"
                                className="sort cursor-pointer"
                                data-sort="instructor"
                              >
                                Instructor
                              </th>
                              <th
                                scope="col"
                                className="sort cursor-pointer"
                                data-sort="lessons"
                              >
                                Lessons
                              </th>
                              <th
                                scope="col"
                                className="sort cursor-pointer"
                                data-sort="duration"
                              >
                                Duration
                              </th>
                              <th
                                scope="col"
                                className="sort cursor-pointer"
                                data-sort="fees"
                              >
                                Fees
                              </th>
                              <th
                                scope="col"
                                className="sort cursor-pointer"
                                data-sort="status"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="sort cursor-pointer"
                                data-sort="rating"
                              >
                                Rating
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list">
                            <tr>
                              <td>
                                <div className="d-flex align-items-center gap-2">
                                  <img
                                    src="assets/images/learning/react.png"
                                    alt="react.png"
                                    className="avatar-xxs rounded"
                                  />{" "}
                                  <a
                                    href="apps-learning-overview"
                                    className="text-reset courses_Name"
                                  >
                                    Advanced React and Redux
                                  </a>
                                </div>
                              </td>
                              <td className="category">React Development</td>
                              <td className="instructor">Ayaan Bowen</td>
                              <td className="lessons">15</td>
                              <td className="duration">2 Years</td>
                              <td>
                                <span className="fw-medium fees">$278.12</span>
                              </td>
                              <td>
                                <span className="badge bg-info-subtle text-info status">
                                  Open
                                </span>
                              </td>
                              <td>
                                <h5 className="fs-md fw-medium mb-0 rating">
                                  <i className="ph-star align-baseline text-warning" />{" "}
                                  4.5
                                </h5>
                              </td>
                            </tr>
                            {/* end tr */}
                            <tr>
                              <td className="courses_Name">
                                <div className="d-flex align-items-center gap-2">
                                  <img
                                    src="assets/images/learning/shopify.png"
                                    alt="shopify.png"
                                    className="avatar-xxs rounded"
                                  />{" "}
                                  <a
                                    href="apps-learning-overview"
                                    className="text-reset"
                                  >
                                    The Complete Shopify Dropship course
                                  </a>
                                </div>
                              </td>
                              <td className="category">Shopify Development</td>
                              <td className="instructor">Jansh Brown</td>
                              <td className="lessons">27</td>
                              <td className="duration">6 Months</td>
                              <td>
                                <span className="fw-medium fees">$149.00</span>
                              </td>
                              <td>
                                <span className="badge bg-info-subtle text-info status">
                                  Open
                                </span>
                              </td>
                              <td>
                                <h5 className="fs-md fw-medium mb-0 rating">
                                  <i className="ph-star align-baseline text-warning" />{" "}
                                  4.5
                                </h5>
                              </td>
                            </tr>
                            {/* end tr */}
                            <tr>
                              <td>
                                <div className="d-flex align-items-center gap-2">
                                  <img
                                    src="assets/images/learning/sketch.png"
                                    alt="sketch.png"
                                    className="avatar-xxs rounded"
                                  />{" "}
                                  <a
                                    href="apps-learning-overview"
                                    className="text-reset courses_Name"
                                  >
                                    UI/UX Style guide With Sketch
                                  </a>
                                </div>
                              </td>
                              <td className="category">Graphic Design</td>
                              <td className="instructor">Ayaan Bowen</td>
                              <td className="lessons">16</td>
                              <td className="duration">3 Months</td>
                              <td>
                                <span className="fw-medium fees">$215.00</span>
                              </td>
                              <td>
                                <span className="badge bg-danger-subtle text-danger status">
                                  Close
                                </span>
                              </td>
                              <td>
                                <h5 className="fs-md fw-medium mb-0 rating">
                                  <i className="ph-star align-baseline text-warning" />{" "}
                                  4.9
                                </h5>
                              </td>
                            </tr>
                            {/* end tr */}
                            <tr>
                              <td>
                                <div className="d-flex align-items-center gap-2">
                                  <img
                                    src="assets/images/learning/webpack.png"
                                    alt="webpack.png"
                                    className="avatar-xxs rounded"
                                  />{" "}
                                  <a
                                    href="apps-learning-overview"
                                    className="text-reset courses_Name"
                                  >
                                    Digital Marketing
                                  </a>
                                </div>
                              </td>
                              <td className="category">
                                Marketing &amp; Management
                              </td>
                              <td className="instructor">Prezy Mark</td>
                              <td className="lessons">65</td>
                              <td className="duration">2 Years</td>
                              <td>
                                <span className="fw-medium fees">$199.00</span>
                              </td>
                              <td>
                                <span className="badge bg-info-subtle text-info status">
                                  Open
                                </span>
                              </td>
                              <td>
                                <h5 className="fs-md fw-medium mb-0 rating">
                                  <i className="ph-star align-baseline text-warning" />{" "}
                                  4.3
                                </h5>
                              </td>
                            </tr>
                            {/* end tr */}
                            <tr>
                              <td>
                                <div className="d-flex align-items-center gap-2">
                                  <img
                                    src="assets/images/learning/laravel.png"
                                    alt="laravel.png"
                                    className="avatar-xxs rounded courses_Name"
                                  />{" "}
                                  <a
                                    href="apps-learning-overview"
                                    className="text-reset"
                                  >
                                    Master Laravel for Beginners &amp;
                                    Intermediate
                                  </a>
                                </div>
                              </td>
                              <td className="category">Laravel Development</td>
                              <td className="instructor">Nelson Schaden</td>
                              <td className="lessons">21</td>
                              <td className="duration">8 Months</td>
                              <td>
                                <span className="fw-medium fees">$379.99</span>
                              </td>
                              <td>
                                <span className="badge bg-danger-subtle text-danger status">
                                  Close
                                </span>
                              </td>
                              <td>
                                <h5 className="fs-md fw-medium mb-0 rating">
                                  <i className="ph-star align-baseline text-warning" />{" "}
                                  4.7
                                </h5>
                              </td>
                            </tr>
                            {/* end tr */}
                            <tr>
                              <td>
                                <div className="d-flex align-items-center gap-2">
                                  <img
                                    src="assets/images/learning/tailwindcss.png"
                                    alt=""
                                    className="avatar-xxs rounded courses_Name"
                                  />{" "}
                                  <a
                                    href="apps-learning-overview"
                                    className="text-reset"
                                  >
                                    Tailwind CSS From Scratch
                                  </a>
                                </div>
                              </td>
                              <td className="category">Web Design</td>
                              <td className="instructor">Domenic Dach</td>
                              <td className="lessons">53</td>
                              <td className="duration">1 Months</td>
                              <td>
                                <span className="fw-medium fees">$473.08</span>
                              </td>
                              <td>
                                <span className="badge bg-info-subtle text-info status">
                                  Open
                                </span>
                              </td>
                              <td>
                                <h5 className="fs-md fw-medium mb-0 rating">
                                  <i className="ph-star align-baseline text-warning" />{" "}
                                  4.8
                                </h5>
                              </td>
                            </tr>
                            {/* end tr */}
                          </tbody>
                          {/* end tbody */}
                        </table>
                        {/* end table */}
                      </div>
                      <div className="align-items-center mt-4 pt-2 row">
                        <div className="col-sm">
                          <div className="text-muted text-center text-sm-start">
                            Showing <span className="fw-semibold">5</span> of{" "}
                            <span className="fw-semibold">6</span> Results
                          </div>
                        </div>
                        <div className="col-sm-auto mt-3 mt-sm-0">
                          <div className="pagination-wrap hstack gap-2 justify-content-center">
                            <a
                              className="page-item pagination-prev disabled"
                              href="javaScript:void(0)"
                            >
                              Previous
                            </a>
                            <ul className="pagination listjs-pagination mb-0" />
                            <a
                              className="page-item pagination-next"
                              href="javaScript:void(0)"
                            >
                              Next
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-xxl-3">
                  <div className="card card-height-100">
                    <div className="card-body">
                      <div className="d-flex mb-3">
                        <div className="flex-grow-1">
                          <h6 className="card-title mb-0">Overview</h6>
                        </div>
                        <div className="dropdown flex-shrink-0">
                          <button
                            className="btn avatar-xs btn-subtle-secondary p-0"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bi bi-share" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="bi bi-facebook me-1 align-baseline" />{" "}
                                Facebook
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="bi bi-whatsapp me-1 align-baseline" />{" "}
                                Whatsapp
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <i className="bi bi-instagram me-1 align-baseline" />{" "}
                                Instagram
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="text-center mb-4 pb-2">
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          alt=""
                          className="avatar-md rounded-circle"
                        />
                        <h6 className="fs-md mt-3 mb-1">
                          <a href="pages-profile" className="text-reset">
                            Richard Marshall{" "}
                            <i className="bi bi-patch-check-fill text-info" />
                          </a>
                        </h6>
                        <p className="text-muted mb-4">Create Designer</p>
                        <div className="row g-3">
                          <div className="col-6 border-end border-dashed">
                            <div>
                              <h5>1549</h5>
                              <p className="text-muted mb-0">Students</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div>
                              <h5>137</h5>
                              <p className="text-muted mb-0">Courses</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-light rounded courses-calendar-dashboard">
                        <div className="d-flex align-items-center gap-2 mb-4">
                          <div className="flex-shrink-0">
                            <button className="btn btn-sm btn-secondary">
                              <i className="bi bi-chevron-left" />
                            </button>
                          </div>
                          <h6 className="flex-grow-1 mb-0 text-center fs-md">
                            December - 2023
                          </h6>
                          <div className="flex-shrink-0">
                            <button className="btn btn-sm btn-secondary">
                              <i className="bi bi-chevron-right" />
                            </button>
                          </div>
                        </div>
                        <div className="d-flex gap-2 justify-content-around date-calendar flex-wrap">
                          <a href="#!" className="week flex-shrink-0 active">
                            <h6 className="mb-3">S</h6>
                            <div className="avatar-xs">
                              <div className="avatar-title rounded-circle">
                                21
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="week flex-shrink-0">
                            <h6 className="mb-3">M</h6>
                            <div className="avatar-xs">
                              <div className="avatar-title rounded-circle">
                                22
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="week flex-shrink-0">
                            <h6 className="mb-3">T</h6>
                            <div className="avatar-xs">
                              <div className="avatar-title rounded-circle">
                                23
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="week flex-shrink-0">
                            <h6 className="mb-3">W</h6>
                            <div className="avatar-xs">
                              <div className="avatar-title rounded-circle">
                                24
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="week flex-shrink-0">
                            <h6 className="mb-3">T</h6>
                            <div className="avatar-xs">
                              <div className="avatar-title rounded-circle">
                                25
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="week flex-shrink-0">
                            <h6 className="mb-3">F</h6>
                            <div className="avatar-xs">
                              <div className="avatar-title rounded-circle">
                                26
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="week flex-shrink-0">
                            <h6 className="mb-3">S</h6>
                            <div className="avatar-xs">
                              <div className="avatar-title rounded-circle">
                                27
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h6 className="card-title mb-3">Upcoming Schedule</h6>
                        <div className="card border-start border-primary border-3">
                          <div className="card-body">
                            <a
                              href="apps-learning-overview"
                              className="btn btn-primary btn-icon btn-sm float-end"
                            >
                              <i className="bi bi-arrow-right" />
                            </a>
                            <h6 className="text-truncate">
                              <a href="#!" className="text-reset">
                                UI/UX style guide with sketch
                              </a>
                            </h6>
                            <p className="text-muted mb-0">
                              <i className="bi bi-calendar2 align-baseline me-1" />{" "}
                              Today{" "}
                              <i className="bi bi-clock align-baseline mx-1" />{" "}
                              02:18 PM
                            </p>
                          </div>
                        </div>
                        <div className="card border-start border-primary border-3">
                          <div className="card-body">
                            <a
                              href="apps-learning-overview"
                              className="btn btn-primary btn-icon btn-sm float-end"
                            >
                              <i className="bi bi-arrow-right" />
                            </a>
                            <h6 className="text-truncate">
                              <a href="#!" className="text-reset">
                                Advanced React And Redux
                              </a>
                            </h6>
                            <p className="text-muted mb-0">
                              <i className="bi bi-calendar2 align-baseline me-1" />{" "}
                              04 April, 2023{" "}
                              <i className="bi bi-clock align-baseline mx-1" />{" "}
                              03:00 to 04:00 PM
                            </p>
                          </div>
                        </div>
                        <div className="card border-start border-primary border-3">
                          <div className="card-body">
                            <a
                              href="apps-learning-overview"
                              className="btn btn-primary btn-icon btn-sm float-end"
                            >
                              <i className="bi bi-arrow-right" />
                            </a>
                            <h6 className="text-truncate">
                              <a href="#!" className="text-reset">
                                Tailwind CSS From Scratch
                              </a>
                            </h6>
                            <p className="text-muted mb-0">
                              <i className="bi bi-calendar2 align-baseline me-1" />{" "}
                              08 April, 2023{" "}
                              <i className="bi bi-clock align-baseline mx-1" />{" "}
                              07:36 AM
                            </p>
                          </div>
                        </div>
                        <div className="card border-start border-primary border-3">
                          <div className="card-body">
                            <a
                              href="apps-learning-overview"
                              className="btn btn-primary btn-icon btn-sm float-end"
                            >
                              <i className="bi bi-arrow-right" />
                            </a>
                            <h6 className="text-truncate">
                              <a href="#!" className="text-reset">
                                REST APIs With Flask
                              </a>
                            </h6>
                            <p className="text-muted mb-0">
                              <i className="bi bi-calendar2 align-baseline me-1" />{" "}
                              15 April, 2023{" "}
                              <i className="bi bi-clock align-baseline mx-1" />{" "}
                              10:11 PM
                            </p>
                          </div>
                        </div>
                        <div className="card border-start border-primary border-3">
                          <div className="card-body">
                            <a
                              href="apps-learning-overview"
                              className="btn btn-primary btn-icon btn-sm float-end"
                            >
                              <i className="bi bi-arrow-right" />
                            </a>
                            <h6 className="text-truncate">
                              <a href="#!" className="text-reset">
                                Asp.Net Core 7 True Ultimate Guide
                              </a>
                            </h6>
                            <p className="text-muted mb-0">
                              <i className="bi bi-calendar2 align-baseline me-1" />{" "}
                              24 May, 2023{" "}
                              <i className="bi bi-clock align-baseline mx-1" />{" "}
                              07:00 to 10:00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card bg-primary overflow-hidden mb-0">
                        <div
                          className="position-absolute bottom-0"
                          style={{ opacity: "0.15" }}
                        >
                          <img
                            src="assets/images/effect-pattern/pattern-2.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-body position-relative">
                          <img
                            src="assets/images/logo-light.png"
                            alt=""
                            height={22}
                          />
                          <h6 className="text-white fs-md fw-medium mt-4">
                            Go Premium
                          </h6>
                          <p className="text-white-75">
                            Explore 500+ courses with lifetime membership by
                            themesbrand
                          </p>
                          <a
                            href="#!"
                            className="icon-link icon-link-hover stretched-link text-white-75"
                          >
                            Premium Now <i className="bi bi-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
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
      <Script src="assets/js/list.min.js"></Script>
      <Script src="assets/js/list.pagination.min.js"></Script>
      <Script src="assets/js/apexcharts.min.js"></Script>
      <Script src="assets/js/dashboard-learning.init.js"></Script>
      <Script src="assets/js/app.js"></Script>
    </>
  );
}

export default withAuth(Home);