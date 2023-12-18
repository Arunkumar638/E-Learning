"use client";

import Script from "next/script";
import {Footer,Pagetitle} from "../../components/components";
import { Suspense,lazy } from "react";

const productDetails = () => {
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
        <Navbar active="productdetails"/>
      </Suspense>
      <Pagetitle page="Product Details"/>
      <section className="product-details-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="product-details-image pr-15">
                <img src="assets/images/products/product-1.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="product-details-desc pl-15">
                <h3>Portrait Classic Dress</h3>
                <div className="product-review">
                  <div className="rating">
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                  </div>
                  <a href="#" className="rating-count">
                    (2 Customer reviews)
                  </a>
                </div>
                <div className="price">
                  <span className="new-price">
                    {" "}
                    <del>$50.00</del> $59.00
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren
                  dolore
                </p>
                <ul className="sku">
                  <li>
                    SKU
                    <span>:SKU</span>
                  </li>
                  <li>
                    Category
                    <span>:Fashion</span>
                  </li>
                  <li>
                    Tags
                    <span>:Women dress</span>
                  </li>
                  <li>
                    Availability
                    <span>:In Stock</span>
                  </li>
                </ul>
                <div className="product-add-to-cart">
                  <span className="quantities">Quantities:</span>
                  <div className="input-counter">
                    <span className="minus-btn">
                      <i className="ri-subtract-line" />
                    </span>
                    <input type="text" defaultValue={1} />
                    <span className="plus-btn">
                      <i className="ri-add-line" />
                    </span>
                  </div>
                </div>
                <button type="submit" className="default-btn">
                  Add to cart
                </button>
                <ul className="social-wrap">
                  <li>
                    <span>Share:</span>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="ri-facebook-fill" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="ri-instagram-line" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="ri-linkedin-fill" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="ri-twitter-fill" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="tab product-details-tab">
                <div className="row">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        type="button"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#reviews"
                        type="button"
                        role="tab"
                        aria-controls="reviews"
                        aria-selected="false"
                      >
                        Reviews (2)
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <div className="product-details-tab-content">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Libero blanditiis quo fugiat magni accusamus
                          exercitationem! Voluptate, deleniti quae. Libero iusto
                          minus, nulla excepturi quidem reprehenderit blanditiis
                          eligendi exercitationem nesciunt ad! Lorem ipsum dolor
                          sit amet, consectetur adipisicing elit. Sequi
                          temporibus deserunt mollitia natus esse, sunt fuga
                          quos. Autem quasi error quisquam architecto fuga
                          suscipit atque voluptatibus nobis impedit nulla.
                          Officia ercitationem. Lorem ipsum dolor, sit amet
                          consectetur adipisicing elit. Officia quaerat maxime
                          laudantium obcaecati qui? Magni officiis fugit,
                          dolorem mollitia eius similique accusantium nostrum
                          possimus consectetur laudantium distinctio aliquid
                          delectus assumenda? Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Maxime earum deleniti,
                          quaerat rerum corporis quis iste veritatis quia
                          aliquam totam autem? Repellendus elit Sequi
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Corporis repellat tempora aliquid
                          exercitationem. Vel, dicta quos. Velit magnam, eius
                          unde ullam, distinctio atque aperiam obcaecati ipsam
                          id, inventore consectetur laudantium repellat tempora
                          aliquid exercitationem. Vel, dicta quos. Velit magnam,
                          eius unde ullam. Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Obcaecati reprehenderit
                          quasi fugit error deleniti libero, porro illo numquam
                          accusamus sunt id sapiente! temporibus deserunt
                          mollitia natus esse, sunt fuga quos. Autem
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="reviews"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                    >
                      <div className="product-details-tab-content">
                        <div className="product-review-form">
                          <h3>Customer reviews</h3>
                          <div className="review-title">
                            <div className="rating">
                              <i className="ri-star-fill" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-fill" />
                              <i className="ri-star-fill" />
                            </div>
                            <p>Based on 2 reviews</p>
                          </div>
                          <div className="review-comments">
                            <div className="review-item">
                              <div className="rating">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                              </div>
                              <h3>Good</h3>
                              <span>
                                <strong>Admin</strong> on{" "}
                                <strong>July 21, 2021</strong>
                              </span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                              </p>
                              <a href="#" className="review-report-link">
                                Reply
                              </a>
                            </div>
                            <div className="review-item">
                              <div className="rating">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                              </div>
                              <h3>Good</h3>
                              <span>
                                <strong>Admin</strong> on{" "}
                                <strong>July 21, 2021</strong>
                              </span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                              </p>
                              <a href="#" className="review-report-link">
                                Reply
                              </a>
                            </div>
                          </div>
                          <div className="review-form">
                            <h3>Write a review</h3>
                            <form>
                              <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label>Name</label>
                                    <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label>Email</label>
                                    <input
                                      type="email"
                                      id="email"
                                      name="email"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Review title</label>
                                    <input
                                      type="text"
                                      id="review-title"
                                      name="review-title"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Body of review (1500)</label>
                                    <textarea
                                      name="review-body"
                                      id="review-body"
                                      cols={30}
                                      rows={8}
                                      className="form-control"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <button
                                    type="submit"
                                    className="btn default-btn"
                                  >
                                    Submit Review
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
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

export default productDetails;
