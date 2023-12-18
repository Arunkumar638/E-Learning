"use client";

import Script from "next/script";
import { Footer, Pagetitle } from "../../components/components";
import { Suspense, lazy } from "react";
import { Input, Checkbox, Form } from "antd";
import swal from "sweetalert";
import { toast, Toaster } from "sonner";
import { save } from "@/actions/userActions";
import { useRouter } from "next/navigation";

var errormsg;

const register = () => {
  const Navbar = lazy(() => import("../../components/navBar"));

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
  const validatePassword = async (_: any, value: any) => {
    const password = form.getFieldValue("password");
    if (password && value !== password) {
      throw new Error("Passwords doesn't match");
    }
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

  const onFinish = (values: any) => {
    save(values)
      .then((data) => {
        if (data.status == true) {
          swal({
            title: "Success!",
            text: data.message,
            icon: "success",
          });
          // router.push("/login");
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
        <Navbar />
      </Suspense>
      <Pagetitle page="Register" />
      <div className="user-area ptb-100">
        <div className="container">
          <div className="user-form-content">
            <h3>Register</h3>
            <Form
              className="user-form"
              name="register-form"
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              validateMessages={validateMessages}
              initialValues={{ checkbox: true }}
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Username *</label>
                    <Form.Item name="username" rules={[{ required: true }]}>
                      <Input className="form-control" type="text" />
                    </Form.Item>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Email *</label>
                    <Form.Item
                      name="email"
                      rules={[{ type: "email", required: true }]}
                    >
                      <Input className="form-control" type="email" />
                    </Form.Item>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Password *</label>
                    <Form.Item name="password" rules={[{ required: true }]}>
                      <Input className="form-control" type="password" />
                    </Form.Item>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Confirm Password *</label>
                    <Form.Item
                      name="confirmPassword"
                      dependencies={["password"]}
                      rules={[
                        { required: true },
                        { validator: validatePassword },
                      ]}
                    >
                      <Input className="form-control" type="password" />
                    </Form.Item>
                  </div>
                </div>
                <div className="col-12">
                  <div className="login-action">
                    <div className="form-check">
                      <Form.Item
                        name="checkbox"
                        valuePropName="checked"
                        rules={[{ required: true }]}
                      >
                        <Checkbox
                          className="form-check-Input"
                          id="flexCheckDefault"
                        >
                          {" "}
                          I agree to the <a href="/conditions">
                            Terms of Use
                          </a>{" "}
                          and <a href="/privacypolicy">Privacy Policy</a>
                        </Checkbox>
                      </Form.Item>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                <Toaster position="top-right" expand={true} richColors />
                  <button className="default-btn mb-0" type="submit">
                    <span>
                      Register
                      <i className="flaticon-next" />
                    </span>
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
      <div className="go-top">
        <i className="ri-arrow-up-s-fill" />
        <i className="ri-arrow-up-s-fill" />
      </div>
      <Script data-cfasync="false" src="assets/js/email-decode.min.js"></Script>
      <Script src="assets/js/jquery.min.js"></Script>
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/js/meanmenu.min.js"></Script>
      <Script src="assets/js/owl.carousel.min.js"></Script>
      <Script src="assets/js/carousel-thumbs.min.js"></Script>
      <Script src="assets/js/aos.min.js"></Script>
      <Script src="assets/js/appear.min.js"></Script>
      <Script src="assets/js/odometer.min.js"></Script>
      <Script src="assets/js/magnific-popup.min.js"></Script>
      <Script src="assets/js/before-after.min.js"></Script>
      <Script src="assets/js/tween-max.min.js"></Script>
      <Script src="assets/js/form-validator.min.js"></Script>
      <Script src="assets/js/contact-form-script.js"></Script>
      <Script src="assets/js/ajaxchimp.min.js"></Script>
      <Script src="assets/js/custom.js"></Script>
    </>
  );
};
const errorMessage = (message: any) => {
  console.log(message);
  return <div></div>;
};
// const object = {errorMessage,register}
// export default object;
export default register;
