import { Us } from "./components/Us";
import { Footer } from "./components/Footer";
import { Header } from './components/Header';
import { ProductsList } from "./components/ProductsList";
import { Section } from './components/Section';
// import { Services } from "./components/Services";
import { Welcome } from "./components/Welcome";

function App() {

  return (
    <>
      <Header />
      <Section id={'Inicio'} px={'0'}>
        <Welcome />
      </Section>
      <Section id={'Productos'} bg="gray.50" px={{base: '10%', '2xl': '5%'}} height="auto" py={{base: '1rem', '2xl': '2rem'}}>
        <ProductsList />
      </Section>
      <Section id={'Nosotros'} height="auto" px={{base: '5%', sm: '10%'}}>
        <Us />
      </Section>
      <Section height="auto" bg={"gray.50"} py="2rem">
        <Footer/>
      </Section>
    </>
  );
}

export default App;
