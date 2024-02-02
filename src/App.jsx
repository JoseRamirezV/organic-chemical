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
      <Section px={'0'}>
        <Welcome />
      </Section>
      <Section bg="gray.50" px={{base: '10%', '2xl': '5%'}} height="auto" py={{base: '1rem', '2xl': '2rem'}}>
        <ProductsList />
      </Section>
      <Section>
        <Us />
      </Section>
      <Section height="40vh" bg={"gray.700"}>
        <Footer/>
      </Section>
    </>
  );
}

export default App;
