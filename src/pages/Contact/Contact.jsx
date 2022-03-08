import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Contact.scss";
const Contact = () => (
  <section className="contact section" id="contact">
    <SubHeading subtitle="Get In Touch" title="Contact Me" />

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="contact__container container grid"
    >
      <div className="contact__content">
        <h3 className="contact__content__title">Talk to me</h3>
        <div className="contact__content__info">
          <div className="contact__content__info__card">
            <MdOutlineEmail className="contact__content__info__card-icon" />
            <h3 className="contact__content__info__card-title">Email</h3>
            <span className="contact__content__info__card-data">
              sahadat.developer@gmail.com
            </span>
            <a
              href="mailto:sahadat.developer@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact__content__info__card-button"
            >
              Write Me{" "}
              <AiOutlineArrowRight className="contact__content__info__card-send" />
            </a>
          </div>
          <div className="contact__content__info__card">
            <RiMessengerLine className="contact__content__info__card-icon" />
            <h3 className="contact__content__info__card-title">Messenger</h3>
            <span className="contact__content__info__card-data">
              sahadat.profile
            </span>
            <a
              href="htttps://m.me/"
              target="_blank"
              rel="noreferrer"
              className="contact__content__info__card-button"
            >
              Write Me{" "}
              <AiOutlineArrowRight className="contact__content__info__card-send" />
            </a>
          </div>
          <div className="contact__content__info__card">
            <BsWhatsapp className="contact__content__info__card-icon" />
            <h3 className="contact__content__info__card-title">Whatsapp</h3>
            <span className="contact__content__info__card-data">
              +8801836-855666
            </span>
            <a
              href="https://api.whatsapp.com/send?phone=01836855666&text=Hello"
              target="_blank"
              rel="noreferrer"
              className="contact__content__info__card-button"
            >
              Write Me{" "}
              <AiOutlineArrowRight className="contact__content__info__card-send" />
            </a>
          </div>
        </div>
      </div>
      <div className="contact__content">
        <h3 className="contact__content__title">Write me your project</h3>

        <form action="" className="contact__form">
          <div className="contact__form__div">
            <label htmlFor="name" className="contact__form__div-tag">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="contact__form__div-input"
            />
          </div>
          <div className="contact__form__div">
            <label htmlFor="email" className="contact__form__div-tag">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="contact__form__div-input"
            />
          </div>
          <div className="contact__form__div contact__form__div-area">
            <label htmlFor="" className="contact__form__div-tag">
              Message
            </label>
            <textarea
              rows="7"
              type="text"
              placeholder="Message"
              className="contact__form__div-input"
            />
          </div>

          <button className="button" type="button">
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  </section>
);

export default Contact;
