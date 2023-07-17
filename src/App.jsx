import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './components/contacts-page/contacts-local-storage/Contacts';
import AboutUs from './components/about-us-page/AboutUs';
import Header from './components/common/header/Header';
import TicTacToe from './components/tic-tac-toe-page/TicTacToe';
import Challenges from './components/challenges-page/Challenges';
import ContactDetailed from './components/contacts-page/contacts-local-storage/contact-detailed/ContactDetailed';
import ContactsRedux from './components/contacts-page/contacts-redux-store/ContactsRedux';
import ContactDetailedRedux from './components/contacts-page/contacts-redux-store/contact-detailed/ContactDetailedRedux';

const App = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <main>
                <Routes>
                    <Route path="/" element={<Contacts />} />
                    <Route path="/redux" element={<ContactsRedux />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/tictactoe" element={<TicTacToe />} />
                    <Route path="/challenges" element={<Challenges />} />
                    <Route path="/contacts/:id" element={<ContactDetailed />} />
                    <Route path="/contactsredux/:id" element={<ContactDetailedRedux />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
