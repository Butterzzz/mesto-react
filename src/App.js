import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body className="page">

      <header className="header">
        <img className="header__logo" src="<%=require('./images/header-logo.svg')%>" alt="Логотип сервиса Mesto" />
      </header>

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

      <footer className="footer">
        <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
      </footer>

      <div className="popup popup_type_edit-profile">
        <div className="popup__container">
          <h2 className="popup__heading">Редактировать профиль</h2>
          <form className="popup__form" name="editProfile" novalidate>
            <fieldset className="popup__input-container">
              <input className="popup__input" type="text" name="name" id="name-input" minlength="2" maxlength="40"
                placeholder="Имя" required />
                <span className="popup__error name-input-error"></span>
                <input className="popup__input" type="text" name="about" id="about-input" minlength="2" maxlength="200"
                  placeholder="О себе" required />
                  <span className="popup__error about-input-error"></span>
                </fieldset>
                <button className="popup__button popup__button_action_save" type="submit">Сохранить</button>
              </form>
              <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть форму"></button>
            </div>
        </div>

        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <h2 className="popup__heading">Обновить аватар</h2>
            <form className="popup__form" name="editAvatar" novalidate>
              <fieldset className="popup__input-container">
                <input className="popup__input" type="url" name="avatar" id="avatar" placeholder="Ссылка на аватар" required />
                  <span className="popup__error avatar-input-error"></span>
              </fieldset>
              <button className="popup__button popup__button_action_save" type="submit">Сохранить</button>
            </form>
            <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть форму"></button>
          </div>
        </div>

        <div className="popup popup_type_add-card">
          <div className="popup__container">
            <h2 className="popup__heading">Новое место</h2>
            <form className="popup__form" name="addCard" novalidate>
              <fieldset className="popup__input-container">
                <input className="popup__input" type="text" name="name" id="name-input-two" minlength="2" maxlength="30"
                  placeholder="Название" required />
                  <span className="popup__error name-input-error"></span>
                  <input className="popup__input" type="url" name="link" id="link-input" placeholder="Ссылка на картинку" required />
                    <span className="popup__error link-input-error"></span>
                  </fieldset>
                  <button className="popup__button popup__button_action_save" type="submit">Создать</button>
                </form>
                <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть форму"></button>
              </div>
          </div>

          <div className="popup popup_type_photo-view">
            <div className="popup__image-container">
              <figure className="popup__figure">
                <img className="popup__image" src="#" alt="" />
                  <figcaption className="popup__image-caption"></figcaption>
              </figure>
              <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть окно просмотра"></button>
            </div>
          </div>

          <div className="popup popup_type_delete">
            <div className="popup__container">
              <h2 className="popup__heading">Вы уверены?</h2>
              <form className="popup__form" name="deleteCard" novalidate>
                <button className="popup__button popup__button_action_save" type="submit">Да</button>
              </form>
              <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть"></button>
            </div>
          </div>

          <template id="card-template">
            <li className="cards__item">
              <article className="card">
                <img className="card__image" src="#" alt="" />
                  <div className="card__description">
                    <h2 className="card__title"></h2>
                    <div className="card__like-container">
                      <button className="card__button card__button_action_like" type="button" aria-label="Поставить лайк"></button>
                      <div className="card__like-counter">0</div>
                    </div>
                  </div>
                  <button className="card__button card__button_action_delete" type="button" aria-label="Удалить карточку"></button>
              </article>
            </li>
          </template>
        </body>
        );
}

export default App;