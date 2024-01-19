"use client";

import Script from "next/script";
import { Button, Form, Input, Modal, Upload } from "antd";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import swal from "sweetalert";
import { PlusOutlined } from "@ant-design/icons";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { Uploady } from "@rpldy/uploady";
import { addCourse, getCategory, getCourseById, getSubCategory } from "@/actions/otherActions";
import Sidebar from "@/components/sideBar";
import axios from "axios";

const { TextArea } = Input;
const ImageURL = "http://localhost:8000/admin/upload";
const VideoURL = "http://localhost:8000/admin/uploadvideo";
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface combineCategory {
  categorytitle: string;
  status: string;
  image: string;
}
interface combineSubCategory {
  categorytitle: string;
  subcategorytitle: string;
  status: string;
  image: string;
}

const Addcourse = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const videoRef = useRef(null);
  const [type, setType] = useState("");
  const [language, setLanguage] = useState("");
  const [category, setCategory] = useState<combineCategory[]>([]);

  const [selectCategory, setSelectCategory] = useState("");
  const [course, setCourse] = useState({
    _id: "",
    title: "",
    language: "",
    duration: "",
    price: "",
    categorytitle: "",
    type: "",
    date: "",
    description: "",
    requirements: "",
    contents: "",
    image: "",
    video:"",
  });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setvideoUrl] = useState("");
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
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
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleImageChange: UploadProps["onChange"] = async ({
    fileList: newFileList,
  }) => {
    console.log(newFileList);
    setFileList(newFileList);
    const Imagedata = {
      image: newFileList[0].originFileObj,
    };
    if (newFileList[0].status == "done") {
      const response = await axios.post(ImageURL, Imagedata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      const data = response.data;
      setImageUrl(data.data);
    }
  };
  const handleVideoChange = async(event:any) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const formData = {
      video:selectedFile,
    }
    console.log(formData);

    try {
      const response = await axios.post(VideoURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response) {
        const data = response.data;
        console.log('File uploaded successfully:', data);
        toast.success(data.message);
        setvideoUrl(data.data);
      } 
    } catch (error) {
      console.error('Error uploading file:', error);
    }
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
  const handleLangChange = (event: any) => {
    setLanguage(event.target.value);
  };
  const handleCategoryChange = (event: any) => {
    setSelectCategory(event.target.value);
  };


  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const onFinish = (values: any) => {
    values.type = type;
    values.language = language;
    values.categorytitle = selectCategory;
    values.image = imageUrl;
    values.price = "$"+values.price
    values.video = videoUrl;
    values.status = "Active"
    values.createdAt = formatDate(values.createdAt);
    console.log(values);

    addCourse(values)
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
    const data = {
      id: urlId,
    };
    getCourseById(data)
      .then((data) => {
        if (data.status == true) {
          console.log(data.data);
          Object.assign(course, data.data);

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
          console.log(course);
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
        <Sidebar page="addcourse" />
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
                    <h4 className="mb-sm-0">Create Course</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Courses</a>
                        </li>
                        <li className="breadcrumb-item active">
                          Create Course
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
                      <h5>Course Details</h5>
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
                            <div className="row g-3 align-items-center">
                              <div className="col-lg-6">
                                <div>
                                  <label
                                    htmlFor="course-title-input"
                                    className="form-label"
                                  >
                                    Course title
                                    <span className="text-danger">*</span>
                                  </label>
                                  {/* <Form.Item
                                    name="title"
                                    rules={[{ required: true }]}
                                  > */}
                                    <Input
                                      type="text"
                                      id="course-title-input"
                                      className="form-control"
                                      value={course.title}
                                      placeholder="Enter course title"
                                      required
                                    />
                                  {/* </Form.Item> */}
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-3">
                                <div>
                                  <label
                                    htmlFor="lavel-input"
                                    className="form-label"
                                  >
                                    Courses Level
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Form.Item
                                    name="type"
                                    rules={[{ required: true }]}
                                  >
                                    <select
                                      className="form-select"
                                      id="lavel-input"
                                      onChange={handleTypeChange}
                                    >{  !course ?
                                      <option value="">Select Language</option>:
                                      <option value={course.type}>{course.type}</option>

                                    }
                                      <option value="Beginner">Beginner</option>
                                      <option value="Advanced">Advanced</option>
                                      <option value="Intermediate">
                                        Intermediate
                                      </option>
                                      <option value="Expert">Expert</option>
                                    </select>
                                  </Form.Item>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-3">
                                <div>
                                  <label
                                    htmlFor="language-input"
                                    className="form-label"
                                  >
                                    Language
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Form.Item
                                    name="language"
                                    rules={[{ required: true }]}
                                  >
                                    <select
                                      className="form-select"
                                      id="language-input"
                                      onChange={handleLangChange}
                                      // data-choices=""
                                      // data-choices-search-false=""
                                    >{  !course ?
                                      <option value="">Select Language</option>:
                                      <option value={course.language}>{course.language}</option>
                                      }
                                      <option value="English">English</option>
                                      <option value="Hindi">Hindi</option>
                                      <option value="France">France</option>
                                      <option value="Expert">Expert</option>
                                    </select>
                                  </Form.Item>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-3">
                                <div>
                                  <label
                                    htmlFor="duration-input"
                                    className="form-label"
                                  >
                                    Duration
                                    <span className="text-danger">*</span>
                                  </label>
                                  {/* <Form.Item
                                    name="duration"
                                    rules={[{ required: true }]}
                                  > */}
                                    <Input
                                      type="text"
                                      id="duration-input"
                                      className="form-control"
                                      placeholder="00 hr 00 min"
                                      value={course.duration}
                                      required
                                    />
                                  {/* </Form.Item> */}
                                </div>
                              </div>
                              {/*end col*/}

                              {/*end col*/}
                              <div className="col-lg-3">
                                <div>
                                  <label
                                    htmlFor="price-input"
                                    className="form-label"
                                  >
                                    Course price
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="input-group">
                                    {/* <Form.Item
                                      name="price"
                                      rules={[{ required: true }]}
                                    > */}
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="price-input"
                                        placeholder="price in dollars"
                                        value={course.price}
                                      />
                                    {/* </Form.Item> */}
                                  </div>
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-3">
                                <div>
                                  <label
                                    htmlFor="category-input"
                                    className="form-label"
                                  >
                                    Category
                                    <span className="text-danger">*</span>
                                  </label>
                                  {/* <Form.Item
                                    name="category"
                                    rules={[{ required: true }]}
                                  > */}
                                    <select
                                      className="form-select"
                                      id="category-input"
                                      onChange={handleCategoryChange}
                                    >{ !category ? 
                                      <option value="">Select Category</option>:
                                      <option value={course.categorytitle}>{course.categorytitle}</option>
                                      }
                                      {category.map(
                                        (option) =>
                                          option.status == "Active" && (
                                            
                                            <option
                                              value={option.categorytitle}
                                              key={option.categorytitle}
                                            >
                                              {option.categorytitle}
                                            </option>
                                            
                                          )
                                      )}
                                    </select>
                                  {/* </Form.Item> */}
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-3">
                                <div>
                                  <label
                                    htmlFor="category-input"
                                    className="form-label"
                                  >
                                    Date
                                    <span className="text-danger">*</span>
                                  </label>
                                  {/* <Form.Item
                                    name="createdAt"
                                    rules={[{ required: true }]}
                                  > */}
                                    <Input
                                        type="date"
                                        className="form-control"
                                      />
                                  {/* </Form.Item> */}
                                  </div>
                                  </div>
                              {/*end col*/}
                              <div className="col-lg-12">
                                <div>
                                  <label
                                    htmlFor="shortDescription"
                                    className="form-label"
                                  >
                                    Short Description
                                    <span className="text-danger">*</span>
                                  </label>
                                  {/* <Form.Item
                                    name="description"
                                    rules={[{ required: true }]}
                                  > */}
                                    <TextArea
                                      className="form-control"
                                      id="shortDescription"
                                      rows={3}
                                      value={course.description}
                                      placeholder="Enter description"
                                    />
                                  {/* </Form.Item> */}
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-12">
                                <div>
                                  <label
                                    htmlFor="shortDescription"
                                    className="form-label"
                                  >
                                    Requirements
                                    <span className="text-danger">*</span>
                                  </label>
                                  {/* <Form.Item
                                    name="requirements"
                                    rules={[{ required: true }]}
                                  > */}
                                    <TextArea
                                      className="form-control"
                                      id="shortDescription"
                                      rows={6}
                                      value={course.requirements}
                                      placeholder="Enter description"
                                    />
                                  {/* </Form.Item> */}
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-lg-12">
                                <label className="form-label">
                                  Contents
                                  <span className="text-danger">*</span>
                                </label>
                                {/* <Form.Item
                                  name="contents"
                                  rules={[{ required: true }]}
                                > */}
                                  <TextArea
                                    className="form-control"
                                    id="Description"
                                    value={course.contents}
                                    rows={7}
                                  />
                                {/* </Form.Item> */}
                              </div>
                              <div className="col-lg-2">
                                <label className="form-label">
                                  Image
                                  <span className="text-danger">*</span>
                                </label>
                                <Form.Item
                                  valuePropName="fileList"
                                  rules={[{ required: true }]}
                                >
                                  <Upload
                                    listType="picture-card"
                                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                    maxCount={1}
                                    name="uploadImage"
                                    accept="image/*"
                                    fileList={fileList || []}
                                    onChange={handleImageChange}
                                    onPreview={handlePreview}
                                  >
                                    {fileList.length == 1 ? null : uploadButton}
                                  </Upload>

                                  <Modal
                                    open={previewOpen}
                                    title={previewTitle}
                                    footer={null}
                                    onCancel={handleCancel}
                                  >
                                    <img
                                      alt="example"
                                      style={{ width: "100%" }}
                                      src={previewImage}
                                    />
                                  </Modal>
                                </Form.Item>
                              </div>
                              <div className="col-lg-4">
                              <label className="form-label">
                                  Upload Video 
                                  <span className="text-danger">*</span>
                                </label>                                         
                                <input type="file" 
                                onChange={handleVideoChange} 
                                className="form-control"
                                accept=".mp4"/><br/>
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

export default Addcourse;
