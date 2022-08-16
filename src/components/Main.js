function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
}

function handleAddPlaceClick() {
    document.querySelector('.popup_type_add-card').classList.add('popup_opened');
}

function Main() {
    return (
        <main className="content">

            <section className="profile">

                <img className="profile__image" src="<%=require('./images/avatar.jpg')%>" alt="Изображение профиля" />
                <button className="profile__button profile__button_action_edit-avatar" type="button" aria-label="Редактировать аватар" onClick={handleEditAvatarClick}></button>

                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button className="profile__button profile__button_action_edit" type="button"
                        aria-label="Редактировать профиль" onClick={handleEditProfileClick}></button>
                    <p className="profile__about">Исследователь океана</p>
                </div>

                <button className="profile__button profile__button_action_add" type="button"
                    aria-label="Добавить фотографию" onClick={handleAddPlaceClick}></button>

            </section>

            <section className="cards" aria-label="Карточки мест">
                <ul className="cards__list">

                </ul>
            </section>

        </main>
    );
}

export default Main;