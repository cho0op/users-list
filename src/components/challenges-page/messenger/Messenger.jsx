import { useReducer } from 'react';
import Chat from './chat/Chat.jsx';
import ContactList from './contact-list/ContactList.jsx';
import {
    initialState,
    messengerReducer,
} from './messenger-reducer/messengerReducer.js';
import contacts from './contacts.js';
import styles from '../Challenges.module.css';

const Messenger = () => {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const message = state.message;
    const contact = contacts.find((c) => c.id === state.selectedId);
    return (
        <div>
            <div className={styles.section_name}>Messenger</div>
            <ContactList
                contacts={contacts}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Chat
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
};

export default Messenger;
