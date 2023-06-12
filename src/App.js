/* eslint-disable no-unused-vars */
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Navbar from './components/navbar';
import './Dashboard.css';
import Kelola from './pages/Kelola';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Konfirmasi from './pages/Konfirmasi';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <div id='wrapper'>
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
              <Navbar />
              <Routes>
              <Route exact path='/' Component={Kelola}/>
              <Route exact path='/konfirmasi' Component={Konfirmasi}/>
              <Route exact path='/detail' Component={Detail}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

