import './footer.css'
export function Footer() {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        let nameField = event.target.elements.name.value.trim();
        let emailField = event.target.elements.email.value.trim();
        if (nameField && emailField) {
            alert("Дякую! Ви успішно підписалися!");
        } else {
            alert("Будь ласка, заповніть всі поля перед відправкою.");
        }
    };
    return (
        <footer id="contacts" className="footer flex flex_column align_items_center">
        <div className="footer_contacts flex">
            <h2 className="contact_h2">Контакти</h2>
            <div className="flex flex_column footer_text_content">
                <img className="contact_icon" src="/img/Phone.svg" alt="Phone" />
                <p className="contact_p">
                    Якщо у вас виникають питання – телефонуйте за номером
                    <br />
                    <span className="bold">0-987-654-321</span>
                </p>
                <div className="contact_icons_in_row_div contact_size flex">
                    <img className="contact_icon" src="/img/TelegramLogo.svg" alt="Telegram" />
                    <img className="contact_icon" src="/img/WhatsappLogo.svg" alt="Whatsapp" />
                </div>
                <p className="contact_size">Або пишіть нам у чат-бот</p>
            </div>
        </div>
        <div className="footer_email_div flex">
            <aside className="footer_email_aside">
                <img className="footer_email_img" src="img/email.svg" alt="Email" />
            </aside>
            <form className="flex flex_column footer_form" onSubmit={handleSubmit}>
                <p className="footer_form_p">
                    Щоб дізнаватися усі новини фестивалю, підпишися на нашу розсилку
                </p>
                <input className="footer_inputs" type="text" name="name" placeholder="Ім'я" />
                <input className="footer_inputs" type="email" name="email" placeholder="Емейл" />
                <button className="blue footer_button" type="submit">Підписатися</button>
            </form>
        </div>
    </footer>

    );
}