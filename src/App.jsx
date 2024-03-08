import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FormPopover from "@/components/FormPopover";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import pageData from "./mocks/pageData.json";
import Us from "@/sections/Us";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { Section } from "@/components/Section";

function App() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <Header lan={language} toggleLan={toggleLanguage} />
      <main>
        <Section id={pageData[language].sections[0]} fullW>
          <Hero lan={language} />
        </Section>
        <Section
          id={pageData[language].sections[1]}
          px={{ base: "5%", lg: "0" }}
          py={{ base: "2rem",md: "4rem", "2xl": "5%" }}
        >
          <Products lan={language} />
        </Section>
        <Section
          id={pageData[language].sections[2]}
          py={"6vh"}
          bg={"gray.100"}
        >
          <Us lan={language} />
        </Section>
      </main>
      <Footer lan={language} id={pageData[language].sections[3]} />
      <FormPopover lan={language} />
    </>
  );
}

export default App;
