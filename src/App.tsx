import About from './components/About';
import Articles from './components/Articles';
import Blog from './components/Blog';
import CraftRoom from './components/CraftRoom';
import FarmWork from './components/FarmWork';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Garden from './components/Garden';
import Hero from './components/Hero';
import Koler from './components/Koler';
import Museum from './components/Museum';
import Nav from './components/Nav';
import OakTree from './components/OakTree';
import Overnight from './components/Overnight';
import Trails from './components/Trails';
import Visit from './components/Visit';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <About />
        <Articles />
        <OakTree />
        <Koler />
        <Garden />
        <FarmWork />
        <Museum />
        <Overnight />
        <CraftRoom />
        <Trails />
        <Gallery />
        <Blog />
        <Visit />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
