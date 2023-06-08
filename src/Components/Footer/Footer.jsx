import footerLogo from "../../assets/images/footerLogo.svg";
import Download from "../Download/Download";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className="py-5 mt-5 position-relative">
        <Download/>
        <div className="container py-5">
          <div className={`${styles['image']}`}>
            <img src={footerLogo} alt=""  className="w-25"/>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-8">
              <ul className={`${styles['detailed']} list-unstyled`}>
                <li>
                  <span className={`${styles['icon']} fs-3`}><i className="fa-solid fa-location-dot"></i></span>
                  <span className={`${styles['txt']}`}>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Doloribus quas dolorem doloremque, 
                    perspiciatis ducimus iure quos omnis tempore ipsam rerum?
                  </span>
                </li>
                <li>
                  <span className={`${styles['icon']} fs-3`}><i className="fa-solid fa-phone-volume"></i></span>
                  <span className={`${styles['txt']}`}>+1-543-123-4567</span>
                </li>
                <li>
                  <span className={`${styles['icon']} fs-3`}><i className="fa-solid fa-envelope"></i></span>
                  <span className={`${styles['txt']}`}>example@huddle.com</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <ul className={`${styles['links']} list-unstyled`}>
                <li><a href="#">About Us</a></li>
                <li><a href="#">What We Do</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <ul className={`${styles['links']} list-unstyled`}>
                <li><a href="#">Career</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <ul className={`${styles['social']} list-unstyled d-flex align-items-center gap-3`}>
                <li><a href="#" className="fs-3 rounded-circle p-2 facebook"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="#" className="fs-3 rounded-circle p-2 twitter"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#" className="fs-3 rounded-circle p-2 instagram"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <p>
            @Copyright 2023 Huddle. All Right reseverd.
          </p>
        </div>
      </footer>
    </>
  )
}
