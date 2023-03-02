import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Main from './Components/Main'
import Login from './Components/Login';
import Signup from './Components/Signup'
import Items from './Components/Items';
import Access from './Components/Access';
import Logout from './Components/Logout';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} >
          <Route path='/main/items' element={<Items />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/access' element={<Access />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
