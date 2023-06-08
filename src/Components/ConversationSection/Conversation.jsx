import Card from "../CardSection/Card"
import pic from "../../assets/images/illustration-flowing-conversation.svg";

export default function Conversation() {
  return (
    <>
      <section id="conversation" >
        <div className="container">
          <Card
            title="Flowing Conversations"
            desc= {`You wouldn't paginate a conversation in real life, so why do
            it online? Our threads have just-in-time loading for more
            natural flow.
            `}
            img= {`${pic}`}
            direction= "flex-row-reverse"
            padding= "ps-5"
          />
        </div>
      </section>
    </>
  )
}
