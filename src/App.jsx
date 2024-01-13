import { Blog } from "./components/Blog";
import { Header } from './components/Header';
import { ProductsList } from "./components/ProductsList";
import { Section } from './components/Section';
// import { Services } from "./components/Services";
import { Welcome } from "./components/Welcome";

function App() {

  return (
    <div className="App">
      <Header />
      <Section padding={0} background="teal">
        <Welcome />
      </Section>
      <Section>
        <ProductsList />
      </Section>
      <Section background={'teal'}>
        <Blog />
      </Section>
      {/* <Section background={'green'}></Section> */}
    </div>
  );
}

export default App;
