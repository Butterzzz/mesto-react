import React from 'react';
import { api } from '../utils/api';
import Card from "./Card";

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
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
                <button className="profile__button profile__button_action_edit-avatar" type="button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}></button>

                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__button profile__button_action_edit" type="button"
                        aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                    <p className="profile__about">{userDescription}</p>
                </div>

                <button className="profile__button profile__button_action_add" type="button"
                    aria-label="Добавить фотографию" onClick={props.onAddPlace}></button>

            </section>

            <section className="cards" aria-label="Карточки мест">
                <ul className="cards__list">

                    {cards.map((card, id) => (
                        <Card
                            key={id}
                            card={card}
                            name={card.name}
                            link={card.link}
                            likes={card.likes.length}
                            onCardClick={props.onCardClick}
                        />
                    ))}
                </ul>
            </section>

        </main>
    );
}

export default Main;