import styles from "./Btn.module.scss";

export default function Btn({txt}) {
  return (
    <>
    <div className={`${styles['Btn']}`}>
      <a href="#" className={`${styles['btnMain']} btn py-4 rounded-pill`}>{txt}</a>
    </div>
    </>
  )
}
