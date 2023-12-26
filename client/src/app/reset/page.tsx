"use client";
import Script from "next/script";
import { Pagetitle, Footer } from "../../components/components";
import { Suspense, lazy, useEffect, useState } from "react";
import swal from "sweetalert";
import { Form, Input } from "antd";
import { Jwt } from "jsonwebtoken";
import { useRouter } from "next/navigation";
import { reset, verifyToken } from "@/actions/userActions";
import { Toaster, toast } from "sonner";
import axios from "axios";

const Reset = () => {
  const Navbar = lazy(() => import("../../components/navBar"));
  const [form] = Form.useForm();
  const [token, setToken] = useState("")
  const [error, setError] = useState(false)
  const router = useRouter();

  const onFinish = (values: any) => {
    values.token = token;

    reset(values)
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
    }
    const notifyError = (data: any) => {
      toast.error(data.message);
    };
    
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
    required: "${label} is required!"
  };

  useEffect(()=>{
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken);
    const data = {
      token:urlToken
    }
    verifyToken(data)
    .then((data) => {
      toast.success("Verification Success");
    })
    .catch((error) => {
      if (error.response) {
        const message = error.response.data;
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
        setError(true);
      }
    });
  
  },[]);

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
      <Pagetitle page="Reset Password" />
      <div className="user-area ptb-100">
        <div className="container">
          <div className="user-form-content">
            
            { error ? <><h3>Invalid Link </h3></>:<><h3>Reset Password</h3><Form className="user-form" name="reset-form" form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              validateMessages={validateMessages}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Password *</label>
                    <Form.Item name="password" rules={[{ required: true }]}>
                    <Input
                      className="form-control"
                      type="password"
                    />
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
                    <Input
                      className="form-control"
                      type="password"
                    />
                    </Form.Item>
                  </div>
                </div>
                <div className="col-12">
                  <div className="login-action">
                    <div className="form-check"></div>
                    <span className="forgot-login">
                      <a href="/login">Back to Login</a>
                    </span>
                  </div>
                </div>
                <div className="col-12">
                <Toaster position="top-right" expand={true} richColors />
                  <button className="default-btn" type="submit">
                    <span>
                      Reset
                      <i className="flaticon-next" />
                    </span>
                  </button>
                </div>
              </div>
            </Form></>}
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

export default Reset;
