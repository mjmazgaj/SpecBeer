import "./contact.css";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    // emailjs.sendForm(
    //   "service_xxqnnwp",
    //   "template_gjyvcdt",
    //   form.current,
    //   "iqIYAX7TowFBAgJm3"
    // );

    // e.target.reset();
    console.log('poszlo');
  };

  return (
    <section id="contact">
      <h2>Kontakt</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaFacebookF className="contact__option-icon" />
            <h4>Facebook</h4>
            <h5>Browar Specbeer</h5>
            <a href="https://www.facebook.com/share/91ocKTcVpKHvUsok/" target="_blank">
              Odwiedź nas na Facebooku
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>browar@specbeer.pl</h5>
            <a href="mailto:browar@specbeer.pl" target="_blank">
              Napisz wiadomość
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messagner</h4>
            <h5>Browar Specbeer</h5>
            <a href="https://m.me/312919435245276" target="_blank">
              Napisz wiadomość
            </a>
          </article>
          <article className="contact__option">
            <IoCallOutline className="contact__option-icon" />
            <h4>Telefon</h4>
            <h5>788 968 748</h5>
            <a href="tel:788968748">Zadzwoń</a>
          </article>
        </div>
        <div className="contact__form">
          <h2>Formularz kontaktowy</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Imię i nazwisko"
              required
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Numer telefonu"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Wiadomość"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;