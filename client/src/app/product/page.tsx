'use client'

import Script from "next/script";
import {Footer,Pagetitle} from "../../components/components";
import { Suspense,lazy } from "react";

const Product = () => {
  const Navbar = lazy(() => import('../../components/navBar'));
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
        <Navbar active="product"/>
      </Suspense>
      <Pagetitle page="Product"/>
      <div className="product-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      src="assets/images/products/product-1.jpg"
                      alt="Image"
                    />
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ri-heart-line" />
                        </a>
                      </li>
                      <li>
                        <a href="/cart">
                          <i className="ri-shopping-cart-line" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <a href="/productdetails">
                      <h3>Novel Bunch</h3>
                    </a>
                    <span className="price">
                      {" "}
                      <del>$59.00</del> $50.00
                    </span>
                  </div>
                  <span className="new">New</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      src="assets/images/products/product-2.jpg"
                      alt="Image"
                    />
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ri-heart-line" />
                        </a>
                      </li>
                      <li>
                        <a href="/cart">
                          <i className="ri-shopping-cart-line" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <a href="/productdetails">
                      <h3>Book Chicks</h3>
                    </a>
                    <span className="price">
                      {" "}
                      <del>$70.00</del> $40.00
                    </span>
                  </div>
                  <span className="new sell">Sell</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      src="assets/images/products/product-3.jpg"
                      alt="Image"
                    />
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ri-heart-line" />
                        </a>
                      </li>
                      <li>
                        <a href="/cart">
                          <i className="ri-shopping-cart-line" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <a href="/productdetails">
                      <h3>Book Divas</h3>
                    </a>
                    <span className="price">$80.00</span>
                  </div>
                  <span className="new">New</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      src="assets/images/products/product-4.jpg"
                      alt="Image"
                    />
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ri-heart-line" />
                        </a>
                      </li>
                      <li>
                        <a href="/cart">
                          <i className="ri-shopping-cart-line" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <a href="/productdetails">
                      <h3>Book Smart</h3>
                    </a>
                    <span className="price">$50.00</span>
                  </div>
                  <span className="new sell">Sell</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      src="assets/images/products/product-5.jpg"
                      alt="Image"
                    />
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ri-heart-line" />
                        </a>
                      </li>
                      <li>
                        <a href="/cart">
                          <i className="ri-shopping-cart-line" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <a href="/productdetails">
                      <h3>Book Broads</h3>
                    </a>
                    <span className="price">
                      {" "}
                      <del>$80.00</del> $50.00
                    </span>
                  </div>
                  <span className="new">New</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      src="assets/images/products/product-6.jpg"
                      alt="Image"
                    />
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ri-heart-line" />
                        </a>
                      </li>
                      <li>
                        <a href="/cart">
                          <i className="ri-shopping-cart-line" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <a href="/productdetails">
                      <h3>Page Turners</h3>
                    </a>
                    <span className="price">
                      {" "}
                      <del>$100.00</del> $80.00
                    </span>
                  </div>
                  <span className="new sell">Sell</span>
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

export default Product;