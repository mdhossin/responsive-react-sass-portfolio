import Cta from "../../components/Cta/Cta";
import HomeSocial from "../../components/HomeSocial/HomeSocial";
import { BiMouse } from "react-icons/bi";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import { me } from "../../constants/images";
import "./Home.scss";
const Home = () => (
  <section className="home section" id="home">
    <div className="container home__container grid">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="home__data"
      >
        <span className="home__gretting">Hello I'm</span>
        <h1 className="home__name">Sahadat</h1>
        <h3 className="home__education">
          <TypeWriter
            style={{ fontSize: "16px !important" }}
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Frontend Developer",
                "Backend Developer",
                "React Developer",
                "FullStack Developer",
              ],
            }}
          />
        </h3>
        <Cta />
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="home__handle"
      >
        <img src={me} alt="sahadat" className="home__handle-img" />
      </motion.div>
      <HomeSocial />
      <a href="#contact" className="home__scroll">
        <BiMouse className="home__scroll-icon" />
        <span className="home__scroll-name">Scroll Down</span>
      </a>
    </div>
  </section>
);
export default Home;
