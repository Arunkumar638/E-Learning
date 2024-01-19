"use client";

import Script from "next/script";
import { Footer, Pagetitle } from "../../components/components";
import { Suspense, lazy, useEffect } from "react";
import { useState } from "react";
import { addPurchaseCourse, deleteCart, getAddress, getCartData, getPurchaseId, purchaseCourse, saveAddress } from "@/actions/otherActions";
import { Form } from "antd";
import swal from "sweetalert";
import { Toaster, toast } from "sonner";
import { error } from "console";

interface combineCart {
  courseId: string;
  title: string;
  image: string;
  type:string;
  price: string;
  status: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  state: string;
  street: string;
  pincode: string;
}

interface cardFormData {
  cardno: string;
  cvv: string;
  expirymonth: string;
  expiryyear: string;
}
var countryNames = [
  { text: "United Kingdom", value: "uk" },
  { text: "China", value: "china" },
  { text: "India", value: "india" },
  { text: "Germany", value: "germany" },
  { text: "France", value: "france" },
  { text: "Japan", value: "japan" },
];

const Checkout = () => {
  const Navbar = lazy(() => import("../../components/navBar"));
  const [cart, setCart] = useState<combineCart[]>([]);
  const [price, setPrice] = useState(0);
  const [purchaseId, setPurchaseId] = useState("");
  const [selected, setSelected] = useState(countryNames[0].value);
  const [cardDetails, setCardDetails] = useState({
    cardno: "",
    cvv: "",
    expirymonth: "",
    expiryyear: "",
  });
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    street: "",
    pincode: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formErrors, setFormErrors] = useState<Partial<cardFormData>>({});
  const handleBillingChange = (e: any) => {
    const { name, value } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: value,
    });
  };

  const handleCardChange = (e: any) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const formatDate = () => {
    const date = new Date();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = ("0" + date.getDate()).slice(-2);
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  };

  const validateCardForm = () => {
    let valid = true;
    const newErrors = {
      cardno: "",
      cvv: "",
      expirymonth: "",
      expiryyear: "",
    };
    const currentYear = new Date().getFullYear();
    const expiryYear = parseInt(cardDetails.expiryyear)
    // Check for required fields
    if (!cardDetails.cardno.trim()) {
      newErrors.cardno = "Cardno is required";
      valid = false;
    }else if (!/^\d{12}$/.test(cardDetails.cardno)) {
      newErrors.cardno = "Invalid Cardno";
      valid = false;
    }
    if (!cardDetails.cvv.trim()) {
      newErrors.cvv = "cvv is required";
      valid = false;
    }else if (!/^\d{3}$/.test(cardDetails.cvv)) {
      newErrors.cvv = "Invalid cvv";
      valid = false;
    }
    if (!cardDetails.expirymonth.trim()) {
      newErrors.expirymonth = "Expiry date is required";
      valid = false;
    }else if (!/^\d{2}$/.test(cardDetails.expirymonth)) {
      newErrors.expirymonth = "Invalid Expiry date";
      valid = false;
    }
    if (!cardDetails.expiryyear.trim()) {
      newErrors.expiryyear = "Expiry date is required";
      valid = false;
    }else if (!/^\d{4}$/.test(cardDetails.expiryyear) || expiryYear < currentYear) {
      newErrors.expiryyear = "Invalid Expiry date";
      valid = false;
    }
    if(!valid){
      toast.error("Form validation failed");
    }
    setFormErrors(newErrors);
    return valid;
  };
  const validateBillingForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
    };

    // Check for required fields
    if (!billingDetails.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!billingDetails.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(billingDetails.email)) {
      newErrors.email = "Invalid email";
      valid = false;
    }
    if (!billingDetails.phone.trim()) {
      newErrors.phone = "phone is required";
      valid = false;
    } else if (!/^\d{10}$/.test(billingDetails.phone)) {
      newErrors.phone = "Invalid phoneno";
      valid = false;
    }
    if (!billingDetails.street.trim()) {
      newErrors.street = "Street is required";
      valid = false;
    }
    if (!billingDetails.city.trim()) {
      newErrors.city = "City is required";
      valid = false;
    }
    if (!billingDetails.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
      valid = false;
    } else if (!/^\d{6}$/.test(billingDetails.pincode.trim())) {

      newErrors.pincode = "Invalid postal code format";
      valid = false;
    }
    if (!billingDetails.state.trim()) {
      newErrors.state = "State is required";
      valid = false;
    }
    if(!valid){
      toast.error("Form validation failed");
    }
    setErrors(newErrors);
    return valid;
  };

  const clear = () => {
    setBillingDetails({
      name: "",
      email: "",
      phone: "",
      country: countryNames[0].text,
      city: "",
      state: "",
      street: "",
      pincode: "",
    });
  };
  const getCart = () =>{
    getCartData().then((data) => {
      if (data) {
        setCart(data);
        console.log(data);
        calculatePrice(data);
      }
    });
  }
  const clearCard = () => {
    setCardDetails({
      cardno: "",
      cvv: "",
      expirymonth: "",
      expiryyear: ""
    });
  };

  const notifyError = (data: any) => {
    toast.error(data.message);
  };
  const fetchAddress = () =>{
    getAddress().then((data) => {
      if (data) {
        setBillingDetails(data.data[0]);
        const country = data.data[0].country;
        setSelected(country);
        console.log(data.data[0]);
        // calculatePrice(data);
      }
    });
  }
  const handleBillingSubmit = (e: any) => {
    e.preventDefault();

    if (validateBillingForm()) {
      saveAddress(billingDetails)
        .then((data) => {
          if (data.status == true) {
            swal({
              title: "Success!",
              text: data.message,
              icon: "success",
            });
            clear();
            fetchAddress();
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
  };


  const handleCardSubmit = (e: any) => {
    e.preventDefault();
    const combinedTitle = cart.reduce((result:any, item, index) => {
      result[index] = item.title;
      return result;
    }, {});

    const combinedPrice = cart.reduce((result:any, item, index) => {
      result[index] = item.price;
      return result;
    }, {});

    const combinedType = cart.reduce((result:any, item, index) => {
      result[index] = item.type;
      return result;
    }, {});

    const setCourse = () =>{
      getPurchaseId().then((data) => {
        if (data) {
          const courseId = data.data;
          localStorage.setItem('purchaseCourseId',courseId);
        }
      })
    }
    const data = Object.values(combinedTitle).map((value, index) => ({ 
      name:billingDetails.name,
      email:billingDetails.email,
      coursetitle: combinedTitle[index],
      paymentType:"card",
      type:combinedType[index],
      price:combinedPrice[index],
      status:"Active",
      purchasedAt:formatDate()
    }));
    const finalData = {
      name:billingDetails.name,
      email:billingDetails.email,
      purchaseDetails:data
    }
    console.log(finalData);

    if (validateCardForm()) {
      if(purchaseId){
        const purchaseData = {
          id:purchaseId,
          purchaseCourse:data
        }
        console.log(purchaseData);
        addPurchaseCourse(purchaseData)
        .then((data) => {
          if (data.status == true) {
            swal({
              title: "Success!",
              text: data.message,
              icon: "success",
            });
            clearCard();
            deleteCart().then((data)=>{
              console.log(data);
            });
            getCart();
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
      }else{
      purchaseCourse(finalData)
        .then((data) => {
          if (data.status == true) {
            swal({
              title: "Success!",
              text: data.message,
              icon: "success",
            });
            clearCard();
            setCourse();
            deleteCart().then((data)=>{
              console.log(data);
            });
            getCart();
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
    }
  };

  const optionChange = (event: any) => {
    setSelected(event.target.value);
    billingDetails.country = event.target.value;
  };
  const calculatePrice = (cartData: combineCart[]) => {
    let amount = 0;
    if(cartData){
    cartData.forEach((item) => {
      const num = parseInt(item.price.replace(/\D/g, ''), 10);
      amount += num;
    });
    setPrice(amount);
  }
  setPrice(0);
  };

  useEffect(() => {
    getCartData().then((data) => {
      if (data) {
        setCart(data);
        console.log(data);
        calculatePrice(data);
      }
    });
    getAddress().then((data) => {
      if (data) {
        setBillingDetails(data.data[0]);
        const country = data.data[0].country;
        setSelected(country);
        console.log(data.data[0]);
        // calculatePrice(data);
      }
    });
    getPurchaseId().then((data) => {
      if (data) {
        setPurchaseId(data.data);
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
        <Navbar active="checkout" />
      </Suspense>
      <Pagetitle page="Checkout" />
      <section className="checkout-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="log-in-coupon-code mr-15">
                <div className="col-lg-12 col-md-6">
                  <div className="faq-accordion">
                    <h3 className="title">Product Details</h3>
                    <div className="cart-table table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Course Title</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((cart, index) => (
                            <tr key={index}>
                              <td className="product-thumbnail">
                                <a href="/productdetails">
                                  <img
                                    src={cart.image}
                                    alt="Image"
                                    height={70}
                                    width={90}
                                  />
                                </a>
                              </td>
                              <td className="product-name">
                                <a href="/productdetails">{cart.title}</a>
                              </td>
                              <td className="product-name">
                                <a href="/productdetails">{cart.price}</a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="faq-accordion">
                  <ul className="accordion">
                    <li className="accordion-item">
                      <a
                        className="accordion-title"
                        style={{ cursor: "pointer" }}
                      >
                        Have a Coupon? Click Here To Enter Your Code
                      </a>
                      <div className="contact-form-action accordion-content">
                        <p>Now apply coupon</p>
                        <form method="post">
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  name="Coupon"
                                  placeholder="Coupon Code"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <button className="default-btn" type="submit">
                                Apply coupon
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="billing-details mr-15">
                <h3 className="title">Billing Details</h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={handleBillingChange}
                        value={billingDetails.name}
                      />
                      {errors.name && (
                        <span style={{ color: "red" }}>{errors.name}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleBillingChange}
                        value={billingDetails.email}
                      />
                      {errors.email && (
                        <span style={{ color: "red" }}>{errors.email}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Phone <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        onChange={handleBillingChange}
                        value={billingDetails.phone}
                      />
                      {errors.phone && (
                        <span style={{ color: "red" }}>{errors.phone}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>Company name (Optional)</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        Country <span className="required">*</span>
                      </label>
                      <div className="select-box">
                        <select
                          className="form-control"
                          value={selected}
                          onChange={optionChange}
                        >
                          {countryNames.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.text}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <label>
                        Street address <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="street"
                        className="form-control"
                        onChange={handleBillingChange}
                        value={billingDetails.street}
                      />
                      {errors.street && (
                        <span style={{ color: "red" }}> {errors.street} </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <label>
                        Town / City <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        onChange={handleBillingChange}
                        value={billingDetails.city}
                      />
                      {errors.city && (
                        <span style={{ color: "red" }}>{errors.city} </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        State<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        onChange={handleBillingChange}
                        value={billingDetails.state}
                      />
                      {errors.state && (
                        <span style={{ color: "red" }}>{errors.state} </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        Pincode <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        className="form-control"
                        onChange={handleBillingChange}
                        value={billingDetails.pincode}
                      />
                      {errors.pincode && (
                        <span style={{ color: "red" }}>{errors.pincode}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <Toaster position="top-right" expand={true} richColors />

                      <button
                        className="default-btn"
                        onClick={handleBillingSubmit}
                      >
                        Save Address
                      </button>               
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="order-details ml-15">
                <div className="cart-totals">
                  <h3>Checkout summary</h3>
                  <ul>
                    <li>
                      Subtotal <span>${price}.00</span>
                    </li>
                    <li>
                      Shipping <span>$00.00</span>
                    </li>
                    <li>
                      Coupon <span>$00.00</span>
                    </li>
                    <li>
                      Total <span>${price}.00</span>
                    </li>
                    <li>
                      <b>Payable Total</b>{" "}
                      <span>
                        <b>${price}.00</b>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="faq-accordion">
                  <h3>Payment method</h3>
                  <ul className="accordion">
                    <li className="accordion-item active">
                      <a
                        className="accordion-title"
                        style={{ cursor: "pointer" }}
                      >
                        Direct bank transfer
                      </a>
                      <p className="accordion-content show">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have our account.
                      </p>
                    </li>
                    <li className="accordion-item">
                      <a
                        className="accordion-title"
                        style={{ cursor: "pointer" }}
                      >
                        Cash on delivery
                      </a>
                      <p className="accordion-content">
                        Please send your cheque to Store Name, Store Street,
                        Store Town, Store State / County, Store Postcode.
                      </p>
                    </li>
                    <li className="accordion-item">
                      <a
                        className="accordion-title"
                        style={{ cursor: "pointer" }}
                      >
                        Credit or Debit Card
                        <br />
                        <img
                          src="/assets/images/cardicons.png"
                          height={160}
                          width={100}
                        />
                        <img
                          src="/assets/images/rupay1.png"
                          height={70}
                          width={75}
                        />
                      </a>
                      <div className="accordion-content">
                        <label>
                          Card Number<span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="cardno"
                          value={cardDetails.cardno}
                          onChange={handleCardChange}
                          style={{ height: "10%" }}
                          placeholder="12 Digit Card No"
                        />
                        {formErrors.cardno && (
                          <span style={{ color: "red" }}>{formErrors.cardno}</span>
                        )}<br/>
                        <label>
                          cvv<span className="required">*</span>
                        </label>

                        <input
                          type="password"
                          className="form-control"
                          name="cvv"
                          value={cardDetails.cvv}
                          onChange={handleCardChange}
                          style={{ height: "10%" }}
                          placeholder="3 digit security code"
                        />
                        {formErrors.cvv && (
                          <span style={{ color: "red" }}>{formErrors.cvv}</span>
                        )}<br/>
                        <label>
                          Expiry Date<span className="required">*</span>
                        </label>

                        <div className="row" style={{ marginLeft: "1%" }}>
                          <input
                            type="text"
                            className="form-control"
                            name="expirymonth"
                            value={cardDetails.expirymonth}
                            onChange={handleCardChange}
                            style={{ height: "5%", width: "22%" }}
                            placeholder="mm"
                          />
                          <input
                            type="text"
                            className="form-control"
                            name="expiryyear"
                            value={cardDetails.expiryyear}
                            onChange={handleCardChange}
                            style={{ height: "5%", width: "25%" }}
                            placeholder="yyyy"
                          />
                        </div>
                        <span>Ex: 05 / 2024</span><br/>
                        {formErrors.expirymonth || formErrors.expiryyear && (
                          <span style={{ color: "red" }}>{formErrors.expiryyear}</span>
                        )}
                      </div>
                    </li>
                    <li className="accordion-item">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="ship-differents-address"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ship-different-address"
                        >
                          I’ve read and accept the{" "}
                          <a href="terms-conditions.html">
                            terms &amp; conditions
                          </a>
                          *
                        </label>
                      </div>
                    </li>
                    <li className="place-order">
                      <button
                        type="submit"
                        className="default-btn two"
                        onClick={handleCardSubmit}
                      >
                        Place Order
                      </button>
                    </li>
                  </ul>
                </div>
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

export default Checkout;
