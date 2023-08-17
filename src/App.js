
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './component/navigation';
import Home from './component/HomePage';
import Offers from './component/Offer';
import Footer from './component/Footer/indext';
import AboutUs from './component/AboutUs';
import Menu from './component/Menu';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
        <Route path="/" exact component={<Home/>} />
        <Route path="/AboutUs" component={<AboutUs/>} />
        <Route path="/Menu" component={<Menu/>} />
        {/* Rest of your components */}
        </Routes>
        <Home/>
        <Menu/>
        <AboutUs/>
        <Offers />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
