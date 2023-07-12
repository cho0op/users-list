import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './components/contacts-page/Contacts';
import AboutUs from './components/about-us-page/AboutUs';
import Header from './components/common/header/Header';
import TicTacToe from './components/tic-tac-toe-page/TicTacToe';
import Challenges from './components/challenges-page/Challenges';
import ContactDetailed from './components/contacts-page/contact-detailed/ContactDetailed';

const App = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <main>
                <Routes>
                    <Route path="/" element={<Contacts />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/tictactoe" element={<TicTacToe />} />
                    <Route path="/challenges" element={<Challenges />} />
                    <Route path="/contacts/:id" element={<ContactDetailed />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
