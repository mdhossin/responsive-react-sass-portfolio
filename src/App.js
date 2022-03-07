import Navbar from "./components/Navbar/Navbar";
import {
  About,
  Contact,
  Experience,
  Home,
  Portfolio,
  Services,
  Testimonials,
} from "./pages";
import Footer from "./pages/Footer/Footer";
import "./scss/App.scss";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        {/* <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer /> */}
      </main>
    </>
  );
}

export default App;
