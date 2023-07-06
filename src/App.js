import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './components/contacts-page/Contacts';
import AboutUs from './components/about-us-page/AboutUs';
import Header from './components/common/header/Header';
import TicTacToe from './components/tic-tac-toe-page/TicTacToe';

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path='/' element={<Contacts />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/tictactoe' element={<TicTacToe />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;