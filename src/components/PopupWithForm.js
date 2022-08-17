function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <h2 className="popup__heading">{props.title}</h2>
                <form className="popup__form" name={props.name} novalidate>
                    {props.children}
                    <button className="popup__button popup__button_action_save" type="submit">Сохранить</button>
                </form>
                <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть форму"></button>
            </div>
        </div>
    );
}

export default PopupWithForm;