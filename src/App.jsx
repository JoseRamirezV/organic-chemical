import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Us } from "./components/Us";
import { useContext } from "react";
import { Hero } from "./components/Hero";
import { LanguageContext } from "./context/LanguageContext";
import pageData from "./mocks/pageData.json";
import { FormPopover } from './components/FormPopover';
function App() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <Header lan={language} toggleLan={toggleLanguage} />
      <Hero lan={language} id={pageData[language].sections[0]} />
      <ProductsList lan={language} id={pageData[language].sections[1]} />
      <Us lan={language} id={pageData[language].sections[2]} />
      <Footer lan={language} id={pageData[language].sections[3]} />
      <FormPopover />
    </>
  );
}

export default App;
