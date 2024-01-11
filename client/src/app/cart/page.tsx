'use client'

import Script from "next/script";
import {Footer, Pagetitle} from "../../components/components";
import { Suspense,lazy, useEffect, useState } from "react";
import { deleteCartData, getCartData } from "@/actions/otherActions";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from "antd";
import { Toaster, toast } from "sonner";

const { confirm } = Modal;
interface combineCart {
  courseId:string,
  title:string;
  imagepath:string;
  price:string;
  status:string;
}
const Cart = () => {
  const Navbar = lazy(() => import('../../components/navBar'));
  const [cart, setCart] = useState<combineCart[]>([])
  const [isLogin, setIsLogin] = useState(false);
  const [price, setPrice] = useState(0)

  const notifyError = (data: any) => {
    toast.error(data.message);
  };

  const calculatePrice = (cartData: combineCart[]) => {
    let amount = 0;
    console.log(cartData);
    cartData.forEach((item) => {
      const num = parseInt(item.price, 10); 
      amount += num;
    });
    setPrice(amount);
  };

  const deleteCart = (data:any) =>{
    const courseData = {
      courseId:data
    }
    deleteCartData(courseData)
    .then((data) => {
      if (data.status == true) {
        toast.success(data.message);
      }
      getCartData().then((data) => {
        if (data) {
          setCart(data);
        }
      });
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

  const showDeleteConfirm = (data:any) => {
    confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleFilled />,
      content: 'This will remove this course from cart',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteCart(data)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      setIsLogin(true);
    }
    getCartData().then((data) => {
      if (data) {
        setCart(data);
        calculatePrice(data);
      }
    });
  },[])
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
                        <th scope="col">Course Title</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                    {cart.map(
                        (cart, index) =>(
                      <tr key={index}>
                        <td className="trash">
                          <a onClick={()=>showDeleteConfirm(cart.courseId)} className="remove">
                            <i className="ri-delete-bin-line" />
                          </a>
                        </td>
                        <td className="product-thumbnail">
                          <a href="/productdetails">
                            <img
                              src={cart.imagepath}
                              alt="Image"
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="/productdetails">{cart.title}</a>
                        </td>
                        <td className="product-price">
                          <span className="unit-amount">${cart.price}</span>
                        </td>
                      </tr>))}
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
                    Subtotal <span>${price}.00</span>
                  </li>
                  <li>
                    Shipping <span>$00.00</span>
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
                <Toaster position="top-right" expand={true} richColors />
                {isLogin ? <a href="/checkout" className="default-btn">
                  Proceed To Checkout
                </a>:<a href="/login" className="default-btn">
                  Proceed To Checkout
                </a>}
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

export default Cart;