"use client";

import Script from "next/script";
import { Footer, Pagetitle } from "../../components/components";
import { Suspense, lazy, useEffect, useState } from "react";
import { deleteCartData, getCartData, getPurchaseCourse } from "@/actions/otherActions";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { Toaster, toast } from "sonner";


interface combinePurchaseCourses {
  name: string;
  email: string;
  title: string;
  paymentType: string;
  type: string;
  price: string;
  status: string;
}

const PurchaseHistory = () => {
  const Navbar = lazy(() => import("../../components/navBar"));
  const [courses, setCourses] = useState<combinePurchaseCourses[]>([]);
  const [isLogin, setIsLogin] = useState(false);
  const [price, setPrice] = useState(0);

  const notifyError = (data: any) => {
    toast.error(data.message);
  };



  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
    getPurchaseCourse().then((data) => {
      if (data) {
        setCourses(data.data);

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
        <Navbar active="purchasehistory" />
      </Suspense>
      <Pagetitle page="Purchase History" />
      <section className="cart-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form className="cart-controller mr-15">
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Course Title</th>
                        <th scope="col">Course Level</th>
                        <th scope="col">Payment Type</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {courses.map((course, index) =>
                        (
                      <tr>
                        <td className="product-name">
                          <a href="/productdetails">{course.title}</a>
                        </td>
                        <td className="product-name">
                          <a href="/productdetails">{course.type}</a>
                        </td>
                        <td className="product-name">
                          <a href="/productdetails">{course.paymentType}</a>
                        </td>
                        <td className="product-name">
                          <a href="/productdetails">${course.price}</a>
                        </td>
                        <td className="product-price">
                          <span className="unit-amount">{course.status}</span>
                        </td>
                      </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
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

export default PurchaseHistory;
