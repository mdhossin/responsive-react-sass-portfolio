import { useEffect, useState } from "react";

import { BallTriangle } from "react-loader-spinner";
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <BallTriangle
          FaCentercode
          color="hsl(250, 66%, 75%)"
          height={120}
          width={120}
        />
      ) : (
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
      )}
    </>
  );
}

export default App;
