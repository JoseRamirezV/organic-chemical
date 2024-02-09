import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Us } from "./components/Us";
// import { Services } from "./components/Services";
import { useContext } from "react";
import { Hero } from "./components/Hero";
import { LanguageContext } from "./context/LanguageContext";
import sections from "./mocks/sections.json";

function App() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <Header lan={language} toggleLan={toggleLanguage} />
      <Hero lan={language} id={sections[language][0]} />
      <ProductsList lan={language} id={sections[language][1]} />
      <Us lan={language} id={sections[language][2]} />
      <Footer lan={language} id={sections[language][3]} />
    </>
  );
}

export default App;
