import "./about.css";
import Logo from "../../assets/logo.png";

const About = () => {
  return (
    <section id="about">

      <div className="container about__container">
        <div className="about__title">
          <h2>Spec Beer</h2>
          <p>Browar rzemieślniczy</p>
        </div>
        </div>
        <div className="about__logo">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="about_info">
          <p>Chcemy, aby każde nasze piwo opowiadało historię pasji i oddania sztuce browarniczej.
        </p>
      </div>
    </section>
  );
};

export default About;
