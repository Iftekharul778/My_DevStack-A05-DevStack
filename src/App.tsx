import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Technologies from './components/Technologies';

export default function App() {
  return (
    <div>
        <Nav />
        <Banner />
        <Technologies />
        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={2500}
          newestOnTop
          theme="light"
        />
    </div>
  );
}
