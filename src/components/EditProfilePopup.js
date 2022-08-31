import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose }) {
    const currentUser = React.useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleDescription(e) {
        setDescription(e.target.value);
    }

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
                    placeholder="Имя" required value={name} onChange={handleChangeName} />
                <span className="popup__error name-input-error"></span>
                <input className="popup__input" type="text" name="about" id="about-input" minLength="2" maxLength="200"
                    placeholder="О себе" required value={description} onChange={handleDescription} />
                <span className="popup__error about-input-error"></span>
            </fieldset>
        </PopupWithForm>
    );
}

export default EditProfilePopup;