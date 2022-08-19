import { useEffect, useState } from 'react';
import { api } from '../utils/api';
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar)
            })
            .catch((err) => { console.log(err) })
        api.getInitialCards()
            .then((card) => {
                setCards(card);
            })
            .catch((err) => { console.log(err) })
    }, [])

    return (
        <main className="content">

            <section className="profile">

                <img className="profile__image" src={userAvatar} alt="Изображение профиля" />
                <button className="profile__button profile__button_action_edit-avatar" type="button" aria-label="Редактировать аватар" onClick={onEditAvatar}></button>

                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__button profile__button_action_edit" type="button"
                        aria-label="Редактировать профиль" onClick={onEditProfile}></button>
                    <p className="profile__about">{userDescription}</p>
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
                        />
                    ))}
                </ul>
            </section>

        </main>
    );
}

export default Main;