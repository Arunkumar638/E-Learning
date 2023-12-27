"use client";

import Script from "next/script";
import { Footer, Pagetitle } from "../../components/components";
import { Suspense, lazy, useEffect, useState } from "react";
import { comment, getBlogs } from "@/actions/otherActions";
import { Checkbox, Form, Input } from "antd";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
// import ReCAPTCHA from 'react-google-recaptcha';
import { Toaster, toast } from "sonner";

const { TextArea } = Input;

interface combineBlog {
  description: String;
  about: String;
  usertype: String;
  title: String;
  date: String;
  views: String;
  goal: String;
  _id: String;
}

const blogDetails = () => {
  const Navbar = lazy(() => import("../../components/navBar"));
  const [id, setId] = useState("");
  const [blogs, setBlogs] = useState<combineBlog[]>([]);
  const [captchaValue, setCaptchaValue] = useState('');

  const [form] = Form.useForm();
  const router = useRouter();

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    console.error("Form submission failed");
    swal({
      title: "Error",
      text: `Form submission failed`,
      icon: "error",
    });
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
  
  // const handleCaptchaChange = (value) => {
  //   console.log("CAPTCHA value:", value);
  //   setCaptchaValue(value);
  // };

  const onFinish = (values: any) => {
    comment(values)
      .then((data) => {
        if (data.status == true) {
          swal({
            title: "Success!",
            text: data.message,
            icon: "success",
          });
          form.resetFields();
        }
      })
      .catch((error) => {
        if (error.response) {
          const message = error.response.data;
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
          notifyError(message);
        }
      });
  };
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setId(urlToken);
    getBlogs().then((data) => {
      if (data) {
        setBlogs(data);
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
        <Navbar active="blogdetails" />
      </Suspense>
      <Pagetitle page="Blog Details" />
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-content">
                <div className="blog-details-img">
                  <img
                    src="assets/images/blog-details/blog-3.jpg"
                    alt="Image"
                  />
                </div>
                {blogs.map(
                  (blog, index) =>
                    id == blog._id && (
                      <div className="blog-top-content">
                        <div className="news-content">
                          <ul className="admin">
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
                          <h3>{blog.title}</h3>
                          <p>{blog.description}</p>
                        </div>
                        <blockquote>
                          <p>‘’{blog.goal}’’</p>
                        </blockquote>
                        <div className="news-content-2">
                          <p>{blog.about}</p>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-blog-post-img">
                              <a href="/blogdetails">
                                <img
                                  src="assets/images/blog-details/blog-1.jpg"
                                  alt="Image"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-blog-post-img">
                              <a href="/blogdetails">
                                <img
                                  src="assets/images/blog-details/blog-2.jpg"
                                  alt="Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="tag-bar d-flex justify-content-between">
                          <ul className="tag-list">
                            <li>
                              <span>Tag:</span>
                            </li>
                            <li>
                              <a href="/blog">Strategy</a>
                            </li>
                            <li>
                              <a href="/blog">Workshop</a>
                            </li>
                            <li>
                              <a href="/blog">Teaching</a>
                            </li>
                          </ul>
                          <ul className="socila-link">
                            <li>
                              <span>Share:</span>
                            </li>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <i className="ri-facebook-fill" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.twitter.com/"
                                target="_blank"
                              >
                                <i className="ri-twitter-line" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                target="_blank"
                              >
                                <i className="ri-instagram-line" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.google.com/" target="_blank">
                                <i className="ri-google-fill" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )
                )}

                <div className="leave-reply">
                  <h3>Leave A Reply</h3>
                  <p>
                    Your email address will not be published. Required fields
                    are marked<span className="star">*</span>
                  </p>
                  <Form form={form} name="blog-form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    validateMessages={validateMessages}>
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <label>
                            Name<span className="star">*</span>
                          </label>
                          <Form.Item name="name" rules={[{ required: true }]}>
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                          />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <label>
                            Email address<span className="star">*</span>
                          </label>
                          <Form.Item
                          name="email"
                          rules={[{ type: "email", required: true }]}
                        >
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                          />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Your website</label>
                          <Form.Item name="website">
                          <Input
                            type="text"
                            name="your-website-link"
                            id="your-website-link"
                            className="form-control"
                          />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Comment</label>
                          <Form.Item name="comment" rules={[{ required: true }]}>
                          <TextArea
                            name="message"
                            className="form-control"
                            id="message"
                            rows={8}
                            defaultValue={""}
                          />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                        {/* <Form.Item
                        name="checkbox"
                        valuePropName="checked"
                        rules={[{ required: true }]}>
                          <Checkbox
                          id="chb2" style={{marginTop:"1rem"}}><br/>
          
                          <span style={{marginTop:"1rem"}}>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </span>
                          </Checkbox>
                          </Form.Item> */}
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                      <Toaster position="top-right" expand={true} richColors />
                        <button type="submit" className="default-btn page-btn">
                          <span>Post A Comment</span>
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-sidebar">
                <div className="sidebar-widget search">
                  <form className="search-form">
                    <input
                      className="form-control"
                      name="search"
                      placeholder="Search here"
                      type="text"
                    />
                    <button className="search-button" type="submit">
                      <i className="ri-search-line" />
                    </button>
                  </form>
                </div>
                <div className="sidebar-widget categories">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <a href="#">
                        Road Transport <span>(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Sea Transport <span>(07)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Air Transport <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Courier Service <span>(09)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Fast Freight <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Home Delivery <span>(11)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Packaging <span>(03)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget recent-post">
                  <h3 className="widget-title">Recent Post</h3>
                  <ul>
                    <li>
                      <a href="/blogdetails">
                        New Cargo Shipment Is Open On The Global Market
                        <img
                          src="assets/images/blog-details/recent-post-1.jpg"
                          alt="Image"
                        />
                      </a>
                      <span>October 19,2020</span>
                    </li>
                    <li>
                      <a href="/blogdetails">
                        Marketing Policy Added To The Logistic Service
                        <img
                          src="assets/images/blog-details/recent-post-2.jpg"
                          alt="Image"
                        />
                      </a>
                      <span>October 18,2020</span>
                    </li>
                    <li>
                      <a href="/blogdetails">
                        Marketing Policy Added To The Logistic Service
                        <img
                          src="assets/images/blog-details/recent-post-3.jpg"
                          alt="Image"
                        />
                      </a>
                      <span>October 09,2020</span>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget categories">
                  <h3>Archives</h3>
                  <ul>
                    <li>
                      <a href="#">
                        August <span>2022</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        June <span>2022</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        April <span>2022</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        January <span>2022</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        December <span>2023</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        November <span>2023</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget tags mb-0">
                  <h3>Tags</h3>
                  <ul>
                    <li>
                      <a href="#">Road Transport</a>
                    </li>
                    <li>
                      <a href="#">Sea Transport</a>
                    </li>
                    <li>
                      <a href="#">Air Transport</a>
                    </li>
                    <li>
                      <a href="#">Courier Service</a>
                    </li>
                    <li>
                      <a href="#">Fast Freight</a>
                    </li>
                    <li>
                      <a href="#">Home Delivery</a>
                    </li>
                    <li>
                      <a href="#">Packaging</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="go-top">
        <i className="ri-arrow-up-s-fill" />
        <i className="ri-arrow-up-s-fill" />
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
};

export default blogDetails;
