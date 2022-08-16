function Main() {
    return (
        <main className="content">

            <section className="profile">

                <img className="profile__image" src="<%=require('./images/avatar.jpg')%>" alt="Изображение профиля" />
                <button type="button" className="profile__button profile__button_action_edit-avatar"></button>

                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button className="profile__button profile__button_action_edit" type="button"
                        aria-label="Редактировать профиль"></button>
                    <p className="profile__about">Исследователь океана</p>
                </div>

                <button className="profile__button profile__button_action_add" type="button"
                    aria-label="Добавить фотографию"></button>

            </section>

            <section className="cards" aria-label="Карточки мест">
                <ul className="cards__list">

                </ul>
            </section>

        </main>
    );
}
export default Main;