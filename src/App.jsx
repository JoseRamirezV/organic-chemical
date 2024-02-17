import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Products } from "@/sections/Products";
import { Us } from "@/sections/Us";
import { useContext } from "react";
import { Hero } from "@/sections/Hero";
import { LanguageContext } from "./context/LanguageContext";
import pageData from "./mocks/pageData.json";
import { FormPopover } from '@/sections/FormPopover';
function App() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <Header lan={language} toggleLan={toggleLanguage} />
      <Hero lan={language} id={pageData[language].sections[0]} />
      <Products lan={language} id={pageData[language].sections[1]} />
      <Us lan={language} id={pageData[language].sections[2]} />
      <Footer lan={language} id={pageData[language].sections[3]} />
      <FormPopover lan={language}/>
    </>
  );
}

export default App;
