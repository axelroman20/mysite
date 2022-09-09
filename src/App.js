import { HeaderPage } from './page/headerPage';
import { AboutPage } from './page/aboutPage';
import { NavbarWidget } from './widget/navbar';



import './css/App.css';

function App() {
  return (
    <div className="App">
      <NavbarWidget />
      <HeaderPage />
      <AboutPage />
    </div>
  );
}

export default App;
