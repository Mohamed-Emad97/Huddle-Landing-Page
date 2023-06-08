import styles from "./Card.module.scss";

export default function Card(props) {
  return (
    <>
      <div className={`card shadow rounded-3 p-5`}>
        <div className={`${props.direction} row align-items-center`}>
          <div className="col-lg-7 col-md-6">
            <div className={`${styles['content']} ${props.padding}`}>
              <h2>{props.title}</h2>
              <p>{props.desc}</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="img">
              <img src={props.img} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
