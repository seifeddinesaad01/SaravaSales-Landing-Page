import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Hero from './components/Hero/Hero';
import SectionOne from './components/Section-1/SectionOne';
import SectionTwo from './components/Section-2/SectionTwo';
import SectionThree from './components/Section-3/SectionThree';
import SectionFour from './components/Section-4/SectionFour';
import SectionFive from './components/Section-5/SectionFive';
import Form from './components/Form/Form';
import SectionSix from './components/Section-6/SectionSix';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Form />
      <SectionSix />
    </>
  );
}

export default App;
