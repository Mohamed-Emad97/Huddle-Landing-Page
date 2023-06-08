import {Btn} from "../index";
import styles from "./Download.module.scss";

export default function Download() {
  return (
    <>
        <div className={`${styles['box']} card p-5 shadow text-center position-absolute top-0 start-50 translate-middle`}>
            <h2 className="my-4">Ready To Build Your Community?</h2>
            <Btn txt="Get Started For Free"/>
        </div>
    </>
  )
}
