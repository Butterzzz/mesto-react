import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from "./ImagePopup";
import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { CurrentUserContext } from './../contexts/CurrentUserContext';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => { console.log(err) })
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name={'avatar'}
          form={'editAvatar'}
          title={'Обновить аватар'}
          buttonText={'Сохранить'}>
          <fieldset className="popup__input-container">
            <input className="popup__input" type="url" name="avatar" id="avatar" placeholder="Ссылка на аватар" required />
            <span className="popup__error avatar-input-error"></span>
          </fieldset>
        </PopupWithForm>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name={'add-card'}
          form={'addCard'}
          title={'Новое место'}
          buttonText={'Создать'}>
          <fieldset className="popup__input-container">
            <input className="popup__input" type="text" name="name" id="name-input-two" minLength="2" maxLength="30"
              placeholder="Название" required />
            <span className="popup__error name-input-error"></span>
            <input className="popup__input" type="url" name="link" id="link-input" placeholder="Ссылка на картинку" required />
            <span className="popup__error link-input-error"></span>
          </fieldset>
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;