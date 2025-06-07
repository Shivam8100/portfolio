import { createContext, useContext, useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Qualification from "./Components/Qualification";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

export const ModeContext = createContext();
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <ModeContext.Provider value={[darkMode, setDarkMode]}>
        <div className={darkMode ? "dark-mode" : ""}>
          <Header />
          <main className="main">
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Testimonials />
            <Contact />
            <ul class="background__animation">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </main>
          <Footer />
        </div>
      </ModeContext.Provider>
    </>
  );
}

export default App;
