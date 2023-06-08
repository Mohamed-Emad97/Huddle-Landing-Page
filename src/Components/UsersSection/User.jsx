import img from "../../assets/images/illustration-your-users.svg";
import styles from "./User.module.scss";
import Card from "../CardSection/Card";

export default function User() {
  return (
    <>
      <section id={styles['user']} className="py-5">
        <div className="container mb-5">
        <Card
            title="Your Users"
            desc= {`It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to 
            your app, your users can start chatting immediately.
            `}
            img= {`${img}`}
            direction= ""
            padding= "ps-5"
        />
        </div>
      </section>
    </>
  )
}
