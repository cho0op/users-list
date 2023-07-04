import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './components/contacts-page/Contacts';
import AboutUs from './components/about-us-page/AboutUs';
import Header from './components/common/header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path='/' element={<Contacts />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
