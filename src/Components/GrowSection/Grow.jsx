import Card from "../CardSection/Card";
import pic from "../../assets/images/illustration-grow-together.svg";

export default function Grow() {
  return (
    <>
      <section id="grow" className="py-5">
        <div className="container">
          <Card
            title="Grow Togther"
            desc= {`Generate meaningful discussions with your audience and
              build a strong, loyal community. Think of the insightful
              conversations you miss out on with a feedback form.
            `}
            img= {`${pic}`}
            direction= ""
            padding= "ps-5"
          />
        </div>
      </section>
    </>
  )
}
