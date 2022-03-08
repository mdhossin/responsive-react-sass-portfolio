import Navbar from "./components/Navbar/Navbar";
import {
  About,
  Contact,
  Home,
  Portfolio,
  Services,
  Skills,
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
        <Skills />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
