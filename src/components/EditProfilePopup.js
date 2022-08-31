import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({  isOpen, onClose }) {
    return (
        <PopupWithForm
          isOpen={isOpen}
          onClose={onClose}
          name={'edit-profile'}
          form={'editProfile'}
          title={'Редактировать профиль'}
          buttonText={'Сохранить'}>
          <fieldset className="popup__input-container">
            <input className="popup__input" type="text" name="name" id="name-input" minLength="2" maxLength="40"
              placeholder="Имя" required />
            <span className="popup__error name-input-error"></span>
            <input className="popup__input" type="text" name="about" id="about-input" minLength="2" maxLength="200"
              placeholder="О себе" required />
            <span className="popup__error about-input-error"></span>
          </fieldset>
        </PopupWithForm>
    );
}

export default EditProfilePopup;