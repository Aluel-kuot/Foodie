import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Service from './Components/Service';
import Offer from './Components/Offer';
import AboutUs from './Components/AboutUs';
import Menu from './Components/Menu';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Service/>
      <Offer/>
      <Menu/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
export default App;
