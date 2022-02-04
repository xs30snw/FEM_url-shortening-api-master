import Header     from './components/header/Header';
import Hero       from './components/hero/Hero';
import Shortener  from './components/shortener/Shortener';
import Features   from './components/features/Features';
import Boost      from './components/boost/Boost';
import Footer     from './components/footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Shortener />
      <Features />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
