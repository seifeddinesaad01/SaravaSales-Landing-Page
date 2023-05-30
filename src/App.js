import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Hero from './components/Hero/Hero';
import SectionOne from './components/Section-1/SectionOne';
import SectionTwo from './components/Section-2/SectionTwo';
import SectionThree from './components/Section-3/SectionThree';
import SectionFour from './components/Section-4/SectionFour';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
}

export default App;
