function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`}>
            <div className="popup__container">
                <h2 className="popup__heading">{props.title}</h2>
                <form className="popup__form" name={props.form} noValidate>
                    {props.children}
                    <button className="popup__button popup__button_action_save" type="submit">{props.buttonText}</button>
                </form>
                <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть форму" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default PopupWithForm;