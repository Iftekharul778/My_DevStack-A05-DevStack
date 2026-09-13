import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Technologies from './components/Technologies';

export default function App() {
  return (
    <div>
        <Nav techCount={0}/>
        <Banner />
        <Technologies />
        <Footer />
    </div>
  );
}