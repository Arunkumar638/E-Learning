'use client'

import Script from "next/script";
import {Footer, Pagetitle} from "../../components/components";
import { Suspense,lazy } from "react";

const cart = () => {
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
        <Navbar active="cart"/>
      </Suspense>
      <Pagetitle page="Cart"/>
      <section className="cart-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form className="cart-controller mr-15">
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Trash</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="trash">
                          <a href="#" className="remove">
                            <i className="ri-delete-bin-line" />
                          </a>
                        </td>
                        <td className="product-thumbnail">
                          <a href="/productdetails">
                            <img
                              src="assets/images/products/product-1.jpg"
                              alt="Image"
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="/productdetails">Novel Bunch</a>
                        </td>
                        <td className="product-price">
                          <span className="unit-amount">$50.00</span>
                        </td>
                        <td className="product-quantity">
                          <div className="input-counter">
                            <span className="minus-btn">
                              <i className="ri-subtract-line" />
                            </span>
                            <input type="text" defaultValue={1} />
                            <span className="plus-btn">
                              <i className="ri-add-line" />
                            </span>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="subtotal-amount">$50.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="trash">
                          <a href="#" className="remove">
                            <i className="ri-delete-bin-line" />
                          </a>
                        </td>
                        <td className="product-thumbnail">
                          <a href="/productdetails">
                            <img
                              src="assets/images/products/product-2.jpg"
                              alt="Image"
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="/productdetails">Book Chicks</a>
                        </td>
                        <td className="product-price">
                          <span className="unit-amount">$40.00</span>
                        </td>
                        <td className="product-quantity">
                          <div className="input-counter">
                            <span className="minus-btn">
                              <i className="ri-subtract-line" />
                            </span>
                            <input type="text" defaultValue={1} />
                            <span className="plus-btn">
                              <i className="ri-add-line" />
                            </span>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="subtotal-amount">$40.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="trash">
                          <a href="#" className="remove">
                            <i className="ri-delete-bin-line" />
                          </a>
                        </td>
                        <td className="product-thumbnail">
                          <a href="/productdetails">
                            <img
                              src="assets/images/products/product-3.jpg"
                              alt="Image"
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="/productdetails">Book Divas</a>
                        </td>
                        <td className="product-price">
                          <span className="unit-amount">$80.00</span>
                        </td>
                        <td className="product-quantity">
                          <div className="input-counter">
                            <span className="minus-btn">
                              <i className="ri-subtract-line" />
                            </span>
                            <input type="text" defaultValue={1} />
                            <span className="plus-btn">
                              <i className="ri-add-line" />
                            </span>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="subtotal-amount">$80.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="trash">
                          <a href="#" className="remove">
                            <i className="ri-delete-bin-line" />
                          </a>
                        </td>
                        <td className="product-thumbnail">
                          <a href="/productdetails">
                            <img
                              src="assets/images/products/product-4.jpg"
                              alt="Image"
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="/productdetails">Book Smart</a>
                        </td>
                        <td className="product-price">
                          <span className="unit-amount">$50.00</span>
                        </td>
                        <td className="product-quantity">
                          <div className="input-counter">
                            <span className="minus-btn">
                              <i className="ri-subtract-line" />
                            </span>
                            <input type="text" defaultValue={1} />
                            <span className="plus-btn">
                              <i className="ri-add-line" />
                            </span>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="subtotal-amount">$50.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="trash">
                          <a href="#" className="remove">
                            <i className="ri-delete-bin-line" />
                          </a>
                        </td>
                        <td className="product-thumbnail">
                          <a href="/productdetails">
                            <img
                              src="assets/images/products/product-5.jpg"
                              alt="Image"
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="/productdetails">Book Broads</a>
                        </td>
                        <td className="product-price">
                          <span className="unit-amount">$50.00</span>
                        </td>
                        <td className="product-quantity">
                          <div className="input-counter">
                            <span className="minus-btn">
                              <i className="ri-subtract-line" />
                            </span>
                            <input type="text" defaultValue={1} />
                            <span className="plus-btn">
                              <i className="ri-add-line" />
                            </span>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="subtotal-amount">$50.00</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
              <div className="coupon-cart mr-15">
                <div className="row">
                  <div className="col-lg-8 col-md-7">
                    <div className="form-group mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Coupon code"
                      />
                      <a href="#" className="default-btn">
                        Apply Coupon
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5">
                    <a href="#" className="default-btn update-cart">
                      Update Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart-totals ml-15">
                <h3 className="cart-checkout-title">Checkout Summary</h3>
                <ul>
                  <li>
                    Subtotal <span>$270.00</span>
                  </li>
                  <li>
                    Shipping <span>$00.00</span>
                  </li>
                  <li>
                    Total <span>$270.00</span>
                  </li>
                  <li>
                    <b>Payable Total</b>{" "}
                    <span>
                      <b>$270.00</b>
                    </span>
                  </li>
                </ul>
                <a href="/checkout" className="default-btn">
                  Proceed To Checkout
                </a>
              </div>
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

export default cart;