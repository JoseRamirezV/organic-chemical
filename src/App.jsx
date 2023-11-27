import { Welcome } from "./components/Welcome";
import { Section } from './components/Section'
import { Blog } from "./components/Blog";
import { Services } from "./components/Services";
// import { Header } from './components/Header'
// import { useScrollBlur } from "./hooks/useScrollBlur";

function App() {

  // const {blurNav} = useScrollBlur()

  return (
    <div className="App">
      {/* <Header blur={blurNav} /> */}
      <Section background={'blue'}>
        <Welcome />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section background={'teal'}>
        <Blog />
      </Section>
      <Section background={'green'}></Section>
    </div>
  );
}

export default App;
