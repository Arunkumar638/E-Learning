'use client'

import Script from "next/script";
import { Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import swal from "sweetalert";
import { save } from "@/actions/userActions";

const Register = () => {
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
    router.push("/login");
  };
  const notifyError = (data: any) => {
    toast.error(data.message);
  };
  const validatePassword = async (_: any, value: any) => {
    const password = form.getFieldValue("password");
    if (password && value !== password) {
      throw new Error("Passwords doesn't match");
    }
  };
  const onFinish = (values: any) => {
    console.log(values);
      save(values).then((data)=>{
        if(data.status == true){
          swal({
            title: "Success!",
            text: data.message,
            icon: "success",
          });
          localStorage.setItem('token',data.token);
          form.resetFields();
        }
        userRoute();
      }).catch((error)=>{
        console.log(error);
        if (error.response) {
          const message = error.response.data;
          console.log(message);
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
          notifyError(message);
      }
      })
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0"
      />
      <title>Register | Steex - Admin &amp; Dashboard Template</title>
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
      {/* Feathericon CSS */}
      <link rel="stylesheet" href="assets/css/feather.css" />
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
          {/* /Login Banner */}
          <div className="col-md-6 login-wrap-bg">
            {/* Login */}
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="img-logo">
                  <img
                    src="assets/images/logo-dark.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                  <div className="back-home">
                    <a href="index.html">Back to Home</a>
                  </div>
                </div>
                <h1>Sign up</h1>
                <Form
                  name="register-form"
                  form={form}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  validateMessages={validateMessages}
                  initialValues={{ checkbox: true }}
                >
                  <div className="input-block">
                    <label className="form-control-label">Full Name</label>
                    <Form.Item name="name" rules={[{ required: true }]}>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Full Name"
                    />
                    </Form.Item>
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">Email</label>
                    <Form.Item
                      name="email"
                      rules={[{ type: "email", required: true }]}
                    >
                    <Input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                    </Form.Item>
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group" id="passwordInput">
                    <Form.Item name="password" rules={[{ required: true }]}>
                      <Input
                        type="password"
                        className="form-control pass-input"
                        placeholder="Enter your password"
                      />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">
                      Confirm Password
                    </label>
                    <div className="pass-group" id="passwordInput">
                    <Form.Item
                      name="confirmPassword"
                      dependencies={["password"]}
                      rules={[
                        { required: true },
                        { validator: validatePassword },
                      ]}
                    >
                      <Input
                        type="password"
                        className="form-control pass-input"
                        placeholder="Retype above password"
                      />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="form-check remember-me">
                    <label className="form-check-label mb-0">
                    <Form.Item
                        name="checkbox"
                        valuePropName="checked"
                        rules={[{ required: true }]}
                      >
                      <Checkbox
                          className="form-check-Input"
                          id="flexCheckDefault"
                        >{" "}
                        I agree to the{" "}
                        <a href="term-condition.html">Terms of Service</a> and{" "}
                        <a href="privacy-policy.html">Privacy Policy.</a>
                      </Checkbox>
                      </Form.Item>
                    </label>
                  </div>
                  <div className="d-grid">
                  <Toaster position="top-right" expand={true} richColors />
                    <button className="btn btn-primary btn-start" type="submit">
                      Create Account
                    </button>
                    <div className="text-center">
                      <p className="mt-4">
                        Already have an account?{" "}
                        <a href="/login">Sign In</a>
                      </p>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
            {/* /Login */}
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

export default Register;
