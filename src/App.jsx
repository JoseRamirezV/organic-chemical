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
      <Section padding={0} bg="teal">
        <Welcome />
      </Section>
      <Section bg="gray.50">
        <ProductsList />
      </Section>
      <Section>
        <Us />
      </Section>
      <Section height="40vh"  bg={"gray.700"}>
        <Footer/>
      </Section>
    </>
  );
}

export default App;
