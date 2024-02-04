import { Us } from "./components/Us";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Section } from "./components/Section";
// import { Services } from "./components/Services";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <ProductsList />
      <Section id={"Nosotros"} height="auto" px={{ base: "5%", sm: "10%" }}>
        <Us />
      </Section>
      <Section height="auto" bg={"gray.50"} py="2rem">
        <Footer />
      </Section>
    </>
  );
}

export default App;
