import { CV } from './Utils/Data/CV';
import Hero from './components/Hero';
import './App.scss';
import About from './components/About';
import Navbar from './components/Navbar';

const App = () => {
  console.log(CV);
  const { hero } = CV;

  return (
    <div className="app">
      <nav>
        <Navbar/>
      </nav>
      <aside>
      <Hero info={hero} />
      </aside>
      <main>
        <About metadata={hero.aboutMe} />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
