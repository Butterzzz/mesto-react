function ImagePopup() {
    return (
        <div className="popup popup_type_photo-view">
        <div className="popup__image-container">
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="" />
            <figcaption className="popup__image-caption"></figcaption>
          </figure>
          <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть окно просмотра"></button>
        </div>
      </div>
    );
}

export default ImagePopup;