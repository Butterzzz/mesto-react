import React from 'react';

function Main(props) {
    return (
        <main className="content">

            <section className="profile">

                <img className="profile__image" src="#" alt="Изображение профиля" />
                <button className="profile__button profile__button_action_edit-avatar" type="button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}></button>

                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button className="profile__button profile__button_action_edit" type="button"
                        aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                    <p className="profile__about">Исследователь океана</p>
                </div>

                <button className="profile__button profile__button_action_add" type="button"
                    aria-label="Добавить фотографию" onClick={props.onAddPlace}></button>

            </section>

            <section className="cards" aria-label="Карточки мест">
                <ul className="cards__list">

                </ul>
            </section>

        </main>
    );
}

export default Main;