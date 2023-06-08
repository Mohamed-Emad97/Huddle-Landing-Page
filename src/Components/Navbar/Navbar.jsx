import logo from "../../assets/images/logo.svg";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <header className="p-4 fixed-top bg-transparent">
        <div className="container">
          <nav className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="" className="w-50" />
            </div>
            <div className={`${styles['Btn']}`}>
              <a href="#" className={`${styles['btnMain']} btn rounded-pill shadow`}>Try It Free</a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
