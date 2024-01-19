"use client";

import Script from "next/script";
import { Button, Form, Input, Modal, Upload } from "antd";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { PlusOutlined } from "@ant-design/icons";
import {
  addCourse,
  getCategory,
  getPurchaseById,
  sendPurchaseStatus,
} from "@/actions/otherActions";
import Sidebar from "@/components/sideBar";
import { Card } from "antd";

const { TextArea } = Input;

interface combineCategory {
  categorytitle: string;
  status: string;
  image: string;
}
const ViewOrder = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  
  const [purchaseCourse, setPurchaseCourse] = useState({
    _id: "",
    name: "",
    email: "",
    coursetitle: "",
    paymentType: "",
    price: "",
    type: "",
    status: "",
    message:""
  });
  const [category, setCategory] = useState<combineCategory[]>([]);
  const [selectStatus, setSelectStatus] = useState("");
  const [isDeactive, setIsDeactive] = useState(false);

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

  const notifyError = (data: any) => {
    toast.error(data.message);
  };
  const handleStatusChange = (event: any) => {
    setSelectStatus(event.target.value);
    console.log(event.target.value);
    if(event.target.value == "Deactive"){
        setIsDeactive(true);
    }
    else{
        setIsDeactive(false);
    }
  };

  const onFinish = (values: any) => {

    values.Status = selectStatus;
    purchaseCourse.status = selectStatus;
    purchaseCourse.message = values.Message;
    console.log(values);
    console.log(purchaseCourse);

    sendPurchaseStatus(purchaseCourse)
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

  useEffect(() => {
    const urlId = window.location.search.split("=")[1];
    const courseId = localStorage.getItem('courseId');
    const data = {
      id: urlId,
      courseId:courseId,
    };
    getPurchaseById(data)
      .then((data) => {
        if (data.status == true) {
          console.log(data.data);
          Object.assign(purchaseCourse, data.data[0]);

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
    getCategory()
      .then((data) => {
        if (data.status == true) {
          console.log(data.data);
          setCategory(data.data);
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
  }, []);
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
                      <a href="" className="dropdown-item notify-item">
                        <i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2" />
                        <span>Analytics Dashboard</span>
                      </a>
                      {/* item*/}
                      <a href="" className="dropdown-item notify-item">
                        <i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2" />
                        <span>Help Center</span>
                      </a>
                      {/* item*/}
                      <a href="" className="dropdown-item notify-item">
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
                        <a href="" className="dropdown-item notify-item py-2">
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
                        <a href="" className="dropdown-item notify-item py-2">
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
                        <a href="" className="dropdown-item notify-item py-2">
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
        <Sidebar page="vieworder" />
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
                    <h4 className="mb-sm-0">View Order</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Orders</a>
                        </li>
                        <li className="breadcrumb-item active">View Order</li>
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
                      <h5>View Course Order</h5>
                    </div>
                    <div className="card-body form-steps">
                      <Form
                        name="course-form"
                        form={form}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        validateMessages={validateMessages}
                        encType="multipart/form-data"
                      >
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="coursesDetails"
                            role="tabpanel"
                            aria-labelledby="coursesDetails-tab"
                          >
                            <div
                              className="col ml-4"
                              style={{ padding: "0 10rem" }}
                            >
                              <Card>
                                <div className="row-lg-6">
                                  <div>
                                    <label
                                      htmlFor="course-title-input"
                                      className="form-label"
                                    >
                                      Course title
                                      <span className="text-danger">*</span>
                                    </label>
  
                                      <Input
                                        type="text"
                                        id="course-title-input"
                                        value={purchaseCourse.coursetitle}
                                        className="form-control"
                                        placeholder="Enter course title"
                                        disabled
                                      />

                                  </div>
                                </div>
                                {/*end col*/}
                                <div className="row-lg-3">
                                  <div style={{padding:"1rem 0"}}>
                                    <label
                                      htmlFor="lavel-input"
                                      className="form-label"
                                    >
                                      Courses Level
                                      <span className="text-danger">*</span>
                                    </label>

                                      <Input
                                        type="text"
                                        id="course-level-input"
                                        className="form-control"
                                        value={purchaseCourse.type}
                                        placeholder="Enter course level"
                                        disabled
                                      />

                                  </div>
                                </div>
                                {/*end col*/}
                                <div className="row-lg-3">
                                  <div>
                                    <label
                                      htmlFor="payment-input"
                                      className="form-label"
                                    >
                                      Payment Type
                                      <span className="text-danger">*</span>
                                    </label>

                                      <Input
                                        type="text"
                                        className="form-control"
                                        value={purchaseCourse.paymentType}
                                        id="payment-input"
                                        disabled
                                      />

                                  </div>
                                </div>
                                {/*end col*/}
                                <div className="row-lg-3">
                                  <div style={{padding:"1rem 0"}}>
                                    <label
                                      htmlFor="price-input"
                                      className="form-label"
                                    >
                                      Course price
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                        <Input
                                          type="text"
                                          className="form-control"
                                          value={purchaseCourse.price}
                                          id="price-input"
                                          disabled
                                        />
                                    </div>
                                  </div>
                                </div>
                                {/*end col*/}
                                <div className="row-lg-3">
                                  <div>
                                    <label
                                      htmlFor="status-input"
                                      className="form-label"
                                    >
                                      Status
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Form.Item 
                                    name="Status"
                                      rules={[{ required: true }]}>
                                      <select
                                        className="form-select"
                                        id="category-input"
                                        onChange={handleStatusChange}
                                      >
                                        <option value="">Select Status</option>
                                        <option value="Active" key="Active">
                                          Active
                                        </option>
                                        <option value="Pending" key="Pending">
                                          Pending
                                        </option>
                                        <option value="Deactive" key="Deactive">
                                          Deactive
                                        </option>
                                      </select>
                                    </Form.Item>
                                  </div>
                                </div>
                                {/*end col*/}
                                { isDeactive &&
                                <div className="row-lg-12">
                                  <div>
                                    <label
                                      htmlFor="shortDescription"
                                      className="form-label"
                                    >
                                      Reason
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Form.Item
                                      name="Message"
                                      rules={[{ required: true }]}
                                    >
                                      <TextArea
                                        className="form-control"
                                        id="shortDescription"
                                        rows={6}
                                        placeholder="Reason for Deactivation"
                                      />
                                    </Form.Item>
                                  </div>
                                </div>
                                    }
                              </Card>
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

export default ViewOrder;
