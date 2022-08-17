import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
// import ImagePopup from "./ImagePopup";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div className="page">

      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />

      <Footer />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name={'avatar'}
        form={'editAvatar'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
        children={(
          <>
            <fieldset className="popup__input-container">
              <input className="popup__input" type="url" name="avatar" id="avatar" placeholder="Ссылка на аватар" required />
              <span className="popup__error avatar-input-error"></span>
            </fieldset>
          </>
        )}
      />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name={'edit-profile'}
        form={'editProfile'}
        title={'Редактировать профиль'}
        buttonText={'Сохранить'}
        children={(
          <>
            <fieldset className="popup__input-container">
              <input className="popup__input" type="text" name="name" id="name-input" minLength="2" maxLength="40"
                placeholder="Имя" required />
              <span className="popup__error name-input-error"></span>
              <input className="popup__input" type="text" name="about" id="about-input" minLength="2" maxLength="200"
                placeholder="О себе" required />
              <span className="popup__error about-input-error"></span>
            </fieldset>
          </>
        )}
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        name={'add-card'}
        form={'addCard'}
        title={'Новое место'}
        buttonText={'Создать'}
        children={(
          <>
            <fieldset className="popup__input-container">
              <input className="popup__input" type="text" name="name" id="name-input-two" minLength="2" maxLength="30"
                placeholder="Название" required />
              <span className="popup__error name-input-error"></span>
              <input className="popup__input" type="url" name="link" id="link-input" placeholder="Ссылка на картинку" required />
              <span className="popup__error link-input-error"></span>
            </fieldset>
          </>
        )}
      />



      {/* <div className="popup popup_type_edit-profile">
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
      </div> */}

      {/* <div className="popup popup_type_avatar">
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
      </div> */}

      {/* <div className="popup popup_type_add-card">
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
      </div> */}

      {/* <div className="popup popup_type_photo-view">
        <div className="popup__image-container">
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="" />
            <figcaption className="popup__image-caption"></figcaption>
          </figure>
          <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть окно просмотра"></button>
        </div>
      </div> */}

      {/* <div className="popup popup_type_delete">
        <div className="popup__container">
          <h2 className="popup__heading">Вы уверены?</h2>
          <form className="popup__form" name="deleteCard" novalidate>
            <button className="popup__button popup__button_action_save" type="submit">Да</button>
          </form>
          <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть"></button>
        </div>
      </div> */}

      {/* <template id="card-template">
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
      </template> */}
    </div>
  );
}

export default App;