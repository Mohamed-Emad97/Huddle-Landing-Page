import pic from "../../assets/images/illustration-mockups.svg";
import styles from "./Landing.module.scss";
import Btn from "../Btn/Btn";

export default function Landing() {
  return (
    <>
      <section id={`${styles['landing']}`}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className={`${styles['caption']} p-2`}>
                <h1>
                  Build The Community
                  Your Fans Will Love
                </h1>
                <p className="my-4">
                  Huddle re-imagines the way we build communities. You have
                  a voice, but so does your audience. Create connections with
                  your users as you engage in genuine discussion.
                </p>
                <Btn txt="Get Started For Free"/>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="img p-2">
                <img src={pic} alt="" className="w-100"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
