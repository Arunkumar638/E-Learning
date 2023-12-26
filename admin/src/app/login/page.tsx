import Script from "next/script";

const Login = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0"
      />
      <title>Sign In | Steex - Admin &amp; Dashboard Template</title>
      {/* Favicon */}
      <link rel="shortcut icon" href="assets/images/favicon.ico" />
      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      {/* Fontawesome CSS */}
      <link
        rel="stylesheet"
        href="assets/plugins/css/fontawesome.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/plugins/css/all.min.css"
      />
      {/* Owl Carousel CSS */}
      <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
      {/* Feathericon CSS */}
      <link rel="stylesheet" href="assets/feather.css" />
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
              {/* <div className="welcome-login">
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
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
   
          <div className="col-md-6 login-wrap-bg">

            <div className="login-wrapper">
              <div className="loginbox">
                <div className="w-100">
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
                  <h1>Sign In</h1>
                  <form action="instructor-dashboard.html">
                    <div className="input-block">
                      <label className="form-control-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="input-block">
                      <label className="form-control-label">Password</label>
                      <div className="pass-group">
                        <input
                          type="password"
                          className="form-control pass-input"
                          placeholder="Enter your password"
                        />
                        <span className="feather-eye toggle-password" />
                      </div>
                    </div>
                    <div className="forgot">
                      <span>
                        <a className="forgot-link" href="forgot-password.html">
                          Forgot Password ?
                        </a>
                      </span>
                    </div>
                    <div className="remember-me">
                      <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                        {" "}
                        Remember me
                        <input type="checkbox" name="radio" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-start"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
                <div className="text-center">
                <p className="mt-4">
                  New User ? <a href="register.html">Create an Account</a>
                </p>
                </div>
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

export default Login;