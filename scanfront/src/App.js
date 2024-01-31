
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addscanning from './components/Addscanning/Addscanning';
import Adlogin from './Admin/Adlogin';
import Editscanning from './components/Editscanning/Editscanning';
import ViewScanning from './components/Viewscanning/Viewscanning';
import Adregister from './Admin/Adregister';
import Adhomepage from './Admin/Adhomepage';
import Adsidebar from './components/Navbar/Adsidebar';
import Adnavbar from './components/Navbar/Adnavbar';
import Settings from './components/Settings/Settings';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path={'/login'} element={<Adlogin method='post'/>}></Route> 
      <Route path={'/addscan'} element={<Addscanning />}></Route>
      <Route path={'/register'} element={<Adregister />}></Route>
      <Route path={'/viewscan'} element={<ViewScanning />}></Route>
      <Route path={'/editscan'} element={<Editscanning />}></Route>
      <Route path={'/panel'} element={<Adhomepage />}></Route>
      <Route path={'/side'} element={<Adsidebar />}></Route>
      <Route path={'/nav'} element={<Adnavbar />}></Route>
      <Route path={'/set'} element={<Settings />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
