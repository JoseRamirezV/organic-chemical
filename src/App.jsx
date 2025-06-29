import FormPopover from '@/components/FormPopover';
import Header from '@/components/Header';
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Products from '@/sections/Products';
import Us from '@/sections/Us';
import { useContext } from 'react';
import { LanguageContext } from './context/LanguageContext';
import pageData from './mocks/pageData.json';

function App() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <Header lan={language} toggleLan={toggleLanguage} />
      <main>
        <Hero lan={language} id={pageData[language].sections[0]} />
        <Products lan={language} id={pageData[language].sections[1]} />
        <Us lan={language} id={pageData[language].sections[2]} />
      </main>
      <Footer lan={language} id={pageData[language].sections[3]} />
      <FormPopover lan={language} />
    </>
  );
}

export default App;
