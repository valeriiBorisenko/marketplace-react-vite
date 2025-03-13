import "./card-section.css"
import Card from "./Card/Card";
import { cards } from "./constant";

const CardSection = () => {

    return (
        <section className="card-section">
            <h2 className="card-section__title">Advertisement List</h2>
            <ul className="card-section__container">
            {
                cards.map((card, index) =>
                <Card 
                    key={`card${index}`} 
                    title={card.title} 
                    description={card.description} 
                    image={card.image}
                    contact={card.contact}
                />
                )
            }
            </ul>
        </section>
    )
}

export default CardSection;