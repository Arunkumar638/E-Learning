'use client'

import { login } from "@/actions/userActions";
import { Form, Modal } from "antd";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { Toaster, toast } from "sonner";
import swal from "sweetalert";

const Login = () => {
  const [form] = Form.useForm();
  const router = useRouter();
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
  const userRoute = () => {
    router.push("/");
  };
  const notifyError = (data: any) => {
    toast.error(data.message);
  };

  const onFinish = (values: any) => {
    console.log(values);
    login(values)
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
        userRoute();
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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0"
      />
      <title>Sign In | Steex - Admin &amp; Dashboard Template</title>
      {/* Favicon */}
      <link rel="shortcut icon" href="assets/images/favicon.ico" />
      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      {/* Fontawesome CSS */}
      <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
      <link rel="stylesheet" href="assets/css/all.min.css" />
      {/* Owl Carousel CSS */}
      <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
  
      {/* Main CSS */}
      <link rel="stylesheet" href="assets/css/style.css" />
      {/* Main Wrapper */}
      <div className="main-wrapper log-wrap">
        <div className="row">
          {/* Login Banner */}
          <div className="col-md-6 login-bg">
            <div className="owl-carousel login-slide owl-theme">
              <div className="welcome-login">
                <div className="login-banner">
                  <img
                    src="assets/images/login-img.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    Steex Courses.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 login-wrap-bg">
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="w-100">
                  <div className="img-logo">
                    <img
                      src="assets/images/logo-dark.png"
                      className="img-fluid"
                      alt="Logo"
                    />
                  </div>
                  <h1>Sign In</h1>
                  <Form
                    name="register-form"
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    validateMessages={validateMessages}
                    initialValues={{ checkbox: true }}
                  >
                    <div className="input-block">
                      <label className="form-control-label">Email</label>
                      <Form.Item
                      name="email"
                      rules={[{ type: "email", required: true }]}
                    >
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                      </Form.Item>
                    </div>
                    <div className="input-block">
                      <label className="form-control-label">Password</label>
                      <div className="pass-group">
                      <Form.Item name="password" rules={[{ required: true }]}>
                        <input
                          type="password"
                          className="form-control pass-input"
                          placeholder="Enter your password"
                        />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="forgot">
                      <span>
                        <a className="forgot-link" href="forgot-password.html">
                          Forgot Password ?
                        </a>
                      </span>
                    </div>
                    <div className="d-grid">
                    <Toaster position="top-right" expand={true} richColors />
                      <button
                        className="btn btn-primary btn-start"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </Form>
                </div>
                <div className="text-center">
                  <p className="mt-4">
                    New User ? <a href="/register">Create an Account</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="assets/js/jquery.min.js"></Script>
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/js/owl.carousel.min.js"></Script>
      <Script src="assets/js/script.js"></Script>
    </>
  );
};

export default Login;
