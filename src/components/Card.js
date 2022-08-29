import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick }) {

    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (`card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`);
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (`card__like-button ${isLiked ? 'card__like-button_active' : ''}`);

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
                        <button className={cardLikeButtonClassName} type="button" aria-label="Поставить лайк"></button>
                        <div className="card__like-counter">{card.likes.length}</div>
                    </div>
                </div>
                <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить карточку"></button>
            </article>
        </li>
    )
}

export default Card;