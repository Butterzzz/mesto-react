import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const { name, about, avatar } = React.useContext(CurrentUserContext);
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        api.getInitialCards()
            .then((card) => {
                setCards(card);
            })
            .catch((err) => { console.log(err) })
    }, [])

    useEffect(() => {
        api.getUserInfo()
          .then((userData) => {
            setCurrentUser(userData);
          })
          .catch((err) => { console.log(err) })
      }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
    
        if (!isLiked) {
          api.addLike(card._id).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
          })
            .catch((err) => console.log(err));
        } else {
          api.removeLike(card._id).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
          })
            .catch((err) => console.log(err));
        }
      }

    return (
        <main className="content">

            <section className="profile">

                <img className="profile__image" src={avatar} alt="Изображение профиля" />
                <button className="profile__button profile__button_action_edit-avatar" type="button" aria-label="Редактировать аватар" onClick={onEditAvatar}></button>

                <div className="profile__info">
                    <h1 className="profile__name">{name}</h1>
                    <button className="profile__button profile__button_action_edit" type="button"
                        aria-label="Редактировать профиль" onClick={onEditProfile}></button>
                    <p className="profile__about">{about}</p>
                </div>

                <button className="profile__button profile__button_action_add" type="button"
                    aria-label="Добавить фотографию" onClick={onAddPlace}></button>

            </section>

            <section className="cards" aria-label="Карточки мест">
                <ul className="cards__list">

                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            name={card.name}
                            link={card.link}
                            likes={card.likes.length}
                            onCardClick={onCardClick}
                            onCardLike={handleCardLike}
                        />
                    ))}
                </ul>
            </section>

        </main>
    );
}

export default Main;