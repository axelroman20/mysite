import { HeaderPage } from './page/headerPage';
import { AboutPage } from './page/aboutPage';
import { NavbarWidget } from './widget/navbar';
import { Helmet } from "react-helmet";

import './css/App.css';
import favicon from './assets/favicon.ico';

function App() {
  return (
    <div className="App">

      <Helmet>
        <html lang="en" />
        <title>Axel Roman</title>
        <meta name="theme-color" content="#E6E6FA" />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>

      <NavbarWidget />
      <HeaderPage />
      <AboutPage />
    </div>
  );
}

export default App;
