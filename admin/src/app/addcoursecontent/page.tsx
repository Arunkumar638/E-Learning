"use client";

import Script from "next/script";
import { Button, Form, Input, Modal, Upload } from "antd";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import {
  getCourses,
  getCategory,
  getPurchaseById,
  sendPurchaseStatus,
  addCourseContent,
} from "@/actions/otherActions";
import Sidebar from "@/components/sideBar";
import { Card } from "antd";

const { TextArea } = Input;

interface combineCategory {
  categorytitle: string;
  status: string;
  image: string;
}
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
  imagepath: string;
  instructor: string;
  deadline: string;
  _id: string;
}
const AddCourseContents = () => {
  const router = useRouter();
  const [category, setCategory] = useState<combineCategory[]>([]);
  const [courses, setCourses] = useState<combineCourse[]>([]);
  const [selectCourse, setSelectCourse] = useState("");
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Section 1",
      contents: [{ title: "", url: "", length: "", description: "", link: "" }],
    },
  ]);

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
  const handleCourseChange = (event: any) => {
    setSelectCourse(event.target.value);
    console.log(event.target.value);
  };
  const handleAddSection = () => {
    const newSection = {
      id: sections.length + 1,
      coursetitle: selectCourse,
      title: `Section ${sections.length + 1}`,
      contents: [{ title: "", url: "", length: "", description: "", link: "" }],
    };
    setSections([...sections, newSection]);
  };

  const handleEditSectionTitle = (sectionId: number, newTitle: string) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId ? { ...section, title: newTitle } : section
      )
    );
  };

  const handleAddInput = (sectionId: number) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              contents: [
                ...section.contents,
                { title: "", url: "", length: "", description: "", link: "" },
              ],
            }
          : section
      )
    );
  };

  const handleInputChange = (
    sectionId: number,
    inputIndex: number,
    key: string,
    value: string
  ) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              contents: section.contents.map((input, index) =>
                index === inputIndex ? { ...input, [key]: value } : input
              ),
            }
          : section
      )
    );
  };

  const handleDeleteSection = (sectionId: number) => {
    setSections((prevSections) =>
      prevSections.filter((section) => section.id !== sectionId)
    );
  };

  const handleDeleteInput = (sectionId: number, inputIndex: number) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              contents: section.contents.filter(
                (_, index) => index !== inputIndex
              ),
            }
          : section
      )
    );
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    // Combine all input values into a single object
    const formData = sections.reduce((acc: any, section) => {
      acc[section.id] = {
        title: section.title,
        coursetitle: selectCourse,
        contents: section.contents.reduce((inputAcc: any, input, index) => {
          inputAcc[index] = {
            contenttitle: input.title,
            url: input.url,
            length: input.length + "mins",
            description: input.description,
            link: input.link,
          };
          return inputAcc;
        }, {}),
      };
      return acc;
    }, {});
    console.log(formData);
    addCourseContent(formData)
      .then((data) => {
        if (data.status == true) {
          console.log(data.data);
          toast.success(data.message);
        }
        router.refresh();
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
    getCourses()
      .then((data) => {
        if (data.status == true) {
          console.log(data.data);
          setCourses(data.data);
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
                    <h4 className="mb-sm-0">Add Course Contents</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Courses</a>
                        </li>
                        <li className="breadcrumb-item active">
                          Add Course Contents
                        </li>
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
                      <h5>Add Course Contents</h5>
                    </div>
                    <div className="card-body form-steps">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="coursesDetails"
                          role="tabpanel"
                          aria-labelledby="coursesDetails-tab"
                        >
                          <div
                            className="col ml-4"
                            style={{ padding: "0 5rem" }}
                          >
                            <Card>
                              <form onSubmit={handleFormSubmit}>
                                <div className="row-lg-6">
                                  <div>
                                    <label
                                      htmlFor="course-title-input"
                                      className="form-label"
                                    >
                                      Course title
                                      <span className="text-danger">*</span>
                                    </label>
                                    <select
                                      className="form-select"
                                      id="category-input"
                                      onChange={handleCourseChange}
                                    >
                                      <option value="">
                                        Select Course Title
                                      </option>
                                      {courses.map((option) => (
                                        <option
                                          value={option.title}
                                          key={option.title}
                                        >
                                          {option.title}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div className="py-2">
                                  <Card>
                                    <div className="row-lg-6">
                                      {sections.map((section) => (
                                        <>
                                          <div className="py-2">
                                            <h5>Add Section</h5>
                                            <label
                                              htmlFor="section-title-input"
                                              className="form-label"
                                            >
                                              Section title
                                              <span className="text-danger">
                                                *
                                              </span>
                                            </label>
                                            <Input
                                              type="text"
                                              className="form-control"
                                              id="section-title"
                                              value={section.title}
                                              onChange={(e) =>
                                                handleEditSectionTitle(
                                                  section.id,
                                                  e.target.value
                                                )
                                              }
                                              required
                                            />
                                          </div>
                                          <div className="py-3">
                                            <Card>
                                              <h5>Add Content</h5>
                                              {section.contents.map(
                                                (input, index) => (
                                                  <div key={index}>
                                                    <label
                                                      htmlFor="content-title-input"
                                                      className="form-label"
                                                    >
                                                      Content Title
                                                      <span className="text-danger">
                                                        *
                                                      </span>
                                                    </label>
                                                    <Input
                                                      type="text"
                                                      className="form-control"
                                                      value={input.title}
                                                      onChange={(e) =>
                                                        handleInputChange(
                                                          section.id,
                                                          index,
                                                          "title",
                                                          e.target.value
                                                        )
                                                      }
                                                      required
                                                    />
                                                    <label
                                                      htmlFor="video-url-input"
                                                      className="form-label"
                                                    >
                                                      Video Url
                                                      <span className="text-danger">
                                                        *
                                                      </span>
                                                    </label>
                                                    <Input
                                                      type="text"
                                                      className="form-control"
                                                      value={input.url}
                                                      onChange={(e) =>
                                                        handleInputChange(
                                                          section.id,
                                                          index,
                                                          "url",
                                                          e.target.value
                                                        )
                                                      }
                                                      required
                                                    />
                                                    <label
                                                      htmlFor="video-length-input"
                                                      className="form-label"
                                                    >
                                                      Video Length (Mins)
                                                      <span className="text-danger">
                                                        *
                                                      </span>
                                                    </label>
                                                    <Input
                                                      type="text"
                                                      className="form-control"
                                                      value={input.length}
                                                      onChange={(e) =>
                                                        handleInputChange(
                                                          section.id,
                                                          index,
                                                          "length",
                                                          e.target.value
                                                        )
                                                      }
                                                      required
                                                    />
                                                    <label
                                                      htmlFor="video-length-input"
                                                      className="form-label"
                                                    >
                                                      Video Description
                                                      <span className="text-danger">
                                                        *
                                                      </span>
                                                    </label>
                                                    <TextArea
                                                      className="form-control"
                                                      id="Description"
                                                      rows={7}
                                                      onChange={(e) =>
                                                        handleInputChange(
                                                          section.id,
                                                          index,
                                                          "description",
                                                          e.target.value
                                                        )
                                                      }
                                                      required
                                                    />
                                                    <label
                                                      htmlFor="video-length-input"
                                                      className="form-label"
                                                    >
                                                      Video Link
                                                      <span className="text-danger">
                                                        *
                                                      </span>
                                                    </label>
                                                    <Input
                                                      type="text"
                                                      className="form-control"
                                                      value={input.link}
                                                      onChange={(e) =>
                                                        handleInputChange(
                                                          section.id,
                                                          index,
                                                          "link",
                                                          e.target.value
                                                        )
                                                      }
                                                      required
                                                    />
                                                    <div
                                                      style={{
                                                        padding: "1rem",
                                                      }}
                                                    >
                                                      <button
                                                        type="button"
                                                        onClick={() =>
                                                          handleAddInput(
                                                            section.id
                                                          )
                                                        }
                                                        className="btn btn-primary"
                                                        style={{
                                                          fontSize: "0.9rem",
                                                          width: "8rem",
                                                        }}
                                                      >
                                                        Add Content
                                                      </button>
                                                      &nbsp;&nbsp;
                                                      <button
                                                        type="button"
                                                        onClick={() =>
                                                          handleDeleteInput(
                                                            section.id,
                                                            index
                                                          )
                                                        }
                                                        className="btn btn-danger"
                                                        style={{
                                                          fontSize: "0.9rem",
                                                          width: "8rem",
                                                        }}
                                                      >
                                                        Delete Content
                                                      </button>
                                                    </div>
                                                  </div>
                                                )
                                              )}
                                            </Card>
                                          </div>
                                          <div style={{ padding: "0 1rem" }}>
                                            <button
                                              type="button"
                                              onClick={handleAddSection}
                                              className="btn btn-primary"
                                              style={{
                                                fontSize: "0.9rem",
                                                width: "7rem",
                                              }}
                                            >
                                              Add Section
                                            </button>
                                            &nbsp;&nbsp;
                                            <button
                                              type="button"
                                              onClick={() =>
                                                handleDeleteSection(section.id)
                                              }
                                              className="btn btn-danger"
                                              style={{
                                                fontSize: "0.9rem",
                                                width: "8rem",
                                              }}
                                            >
                                              Delete Section
                                            </button>
                                          </div>
                                        </>
                                      ))}
                                    </div>
                                  </Card>
                                </div>
                                <div
                                  style={{
                                    paddingLeft: "40rem",
                                    paddingTop: "1rem",
                                  }}
                                >
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{
                                      fontSize: "0.9rem",
                                      width: "6rem",
                                    }}
                                  >
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </Card>
                          </div>

                          {/*end row*/}
                          <div className="d-flex align-items-start gap-3 mt-4">
                            <Toaster
                              position="top-right"
                              expand={true}
                              richColors
                            />
                          </div>
                        </div>
                        {/* end tab pane */}
                      </div>
                      {/* end tab content */}
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

export default AddCourseContents;
