function ImagePopup(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.card && "popup_opened"}`}>
      <div className="popup__image-container">
        <figure className="popup__figure">
          <img className="popup__image" src={props.card && props.card.link} alt={props.card && props.card.name} />
          <figcaption className="popup__image-caption">{props.card && props.card.name}</figcaption>
        </figure>
        <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть окно просмотра" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;