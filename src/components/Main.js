import React from 'react';
import { api } from '../utils/api';

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
            .then((data) => {
                setCards(data);
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

                    {cards.map((card, i) => (
                        <li className="cards__item" key={card.id}>
                            <article className="card">
                                <img className="card__image" src={card.link} alt={card.name} />
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
                    ))}

                </ul>
            </section>

        </main>
    );
}

export default Main;