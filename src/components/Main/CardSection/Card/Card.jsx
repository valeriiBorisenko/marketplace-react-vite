import { useState } from "react"
import "./card.css"

const Card = (props) => {
    const {title, description, image, contact} = props

    const [useContact, setUseContact] = useState("***")

    const handleClickDetailsButton = () => {
        alert(contact)
    }

    const handleClickContactButton = () => {
        if (useContact === "***") {
            setUseContact(contact)
        } else {
            setUseContact("***")
        }
        
    }

    return (
        <li className="card">
            <img className="card__image" src={image} alt={title} />
            <div className="card__container">
                <h5 className="card__title">{title}</h5>
                <p className="card__subtitle">{description}</p>
                <div className="card__contact">
                    Contact:&nbsp;
                    <button type="button" className="card__contact-info" onClick={handleClickContactButton}>{useContact}</button>
                </div>
            </div>
            <button type="button" className="card__button" onClick={handleClickDetailsButton}>Details</button>
        </li>
    )
}

export default Card;