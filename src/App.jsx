import { Blog } from "./components/Blog";
import { Header } from './components/Header';
import { Products } from "./components/Products";
import { Section } from './components/Section';
// import { Services } from "./components/Services";
import { Welcome } from "./components/Welcome";

function App() {

  return (
    <div className="App">
      <Header />
      <Section padding={0}>
        <Welcome />
      </Section>
      <Section>
        <Products />
      </Section>
      <Section background={'teal'}>
        <Blog />
      </Section>
      {/* <Section background={'green'}></Section> */}
    </div>
  );
}

export default App;
