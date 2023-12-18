"use client";
import Script from "next/script";
import { Footer, Pagetitle } from "../../components/components";
import { Suspense, lazy } from "react";
import { Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
import { Toaster, toast } from "sonner";
import { contact } from "@/actions/messageActions";
const { TextArea } = Input;
const contactUs = () => {
  const Navbar = lazy(() => import("../../components/navBar"));
  const [form] = Form.useForm();
  const router = useRouter();

  const notifyError = (data: any) => {
    if(data.message){
    toast.error(data.message);
    }
    else{
      toast.error(data);
    }
  };

  const onFinish = (values: any) => {
    contact(values)
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
    console.log(values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    notifyError("Form submission failed");

  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is Invalid!",
      name: "${label} is too long!",
    },
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
        <Navbar active="contactus" />
      </Suspense>
      <Pagetitle page="Contact Us" />
      <section className="contact-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title left-title">
                <span className="top-title">Contact Us</span>
                <h2>
                  Get In Touch With Us Via <span>Contacts</span>
                </h2>
              </div>
              <div className="contact-form">
                <Form
                  name="register-form"
                  form={form}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  validateMessages={validateMessages}
                  initialValues={{ checkbox: true }}
                >
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                      <Form.Item name="name" rules={[{ required: true }]}>
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Name"
                          />
                        </Form.Item>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                      <Form.Item
                      name="email"
                      rules={[{ type: "email", required: true }]}
                    >
                        <Input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                      <Form.Item name="phoneNo" rules={[{ required: true }]}>
                        <Input
                          type="text"
                          id="phone_number"
                          className="form-control"
                          placeholder="Phone No"
                        />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                      <Form.Item name="subject" rules={[{ required: true }]}>
                        <Input
                          type="text"
                          id="msg_subject"
                          className="form-control"
                          data-error="Please enter your subject"
                          placeholder="Subject"
                        />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                      <Form.Item name="message" rules={[{ required: true }]}>
                        <TextArea
                          name="message"
                          className="form-control"
                          id="message"
                          cols={30}
                          rows={6}
                          data-error="Write your message"
                          placeholder="Your Message"
                        />
                        </Form.Item>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <Form.Item
                        name="checkbox"
                        valuePropName="checked"
                        rules={[{ required: true }]}
                        className="form-check"
                      >
                      <Checkbox
                        className="form-check-Input"
                        id="flexCheckDefault"
                      >
                        {" "}
                        I agree to the{" "}
                        <a href="/conditions">Terms &amp; conditions</a>
                      </Checkbox>
                      </Form.Item>
                    <div className="col-lg-12 text-center">
                    <Toaster position="top-right" expand={true} richColors />
                      <button type="submit" className="default-btn">
                        Send Your Message
                      </button>
                      <div id="msgSubmit" className="h3 text-center hidden" />
                      <div className="clearfix" />
                    </div>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-img"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="map-area">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18876468.2003077!2d-113.72221585646197!3d54.7227051740391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sbd!4v1639561984704!5m2!1sen!2sbd" />
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

export default contactUs;
