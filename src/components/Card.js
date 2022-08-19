function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="cards__item">
            <article className="card">
                <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
                <div className="card__description">
                    <h2 className="card__title">{card.name}</h2>
                    <div className="card__like-container">
                        <button className="card__button card__button_action_like" type="button" aria-label="Поставить лайк"></button>
                        <div className="card__like-counter">{card.likes.length}</div>
                    </div>
                </div>
                <button className="card__button card__button_action_delete" type="button" aria-label="Удалить карточку"></button>
            </article>
        </li>
    )
}

export default Card;