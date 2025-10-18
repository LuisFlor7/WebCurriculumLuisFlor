import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppCarrousel from './components/carrousel';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppTestimonials from './components/testimonials';
import AppContact from './components/contact';
import AppFooter from './components/footer';
import AppProjects from './components/projects';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppCarrousel />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppProjects />
        <AppTestimonials />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
