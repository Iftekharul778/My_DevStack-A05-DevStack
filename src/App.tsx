import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Technologies from './components/Technologies';

export default function App() {
  return (
    <div>
        <Nav techCount={0} />
        <Banner />
        <Technologies />
    </div>
  );
}