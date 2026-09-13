import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';

export default function App() {
  return (
    <div>
        <Nav techCount={0} />
        <Banner />
    </div>
  );
}