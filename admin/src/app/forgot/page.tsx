import Script from "next/script";

const Forgot = () =>{
    return(
        <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=0"
  />
  <title>Dreams LMS</title>
  {/* Favicon */}
  <link rel="shortcut icon" href="assets/images/favicon.ico" />
  {/* Bootstrap CSS */}
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  {/* Fontawesome CSS */}
  <link
    rel="stylesheet"
    href="assets/css/fontawesome.min.css"
  />
  <link rel="stylesheet" href="assets/css/all.min.css" />
  {/* Owl Carousel CSS */}
  <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
  <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
  {/* Feathericon CSS */}
  <link rel="stylesheet" href="assets/feather.css" />
  {/* Main CSS */}
  <link rel="stylesheet" href="assets/css/style.css" />
  {/* Main Wrapper */}
  <div className="main-wrapper">
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
            </div>
          </div>
      {/* /Login Banner */}
      <div className="col-md-6 login-wrap-bg">
        {/* Login */}
        <div className="login-wrapper">
          <div className="loginbox">
            <div className="img-logo">
              <img src="assets/images/logo-dark.png" className="img-fluid" alt="Logo" />
              <div className="back-home">
                <a href="index.html">Back to Home</a>
              </div>
            </div>
            <h1>Forgot Password ?</h1>
            <div className="reset-password">
              <p>Enter your email to reset your password.</p>
            </div>
            <form action="login.html">
              <div className="input-block">
                <label className="form-control-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-start" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
      <Script src="assets/js/jquery.min.js"></Script>
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/js/owl.carousel.min.js"></Script>
      <Script src="assets/js/script.js"></Script>
</>

    )
}

export default Forgot;