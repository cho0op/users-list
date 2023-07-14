import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from '../components/contacts-page/contacts-redux-store/contactsSlice';
import contactSlice from '../components/contacts-page/contacts-redux-store/contact-detailed/contactDetailedSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        contact: contactSlice,
    },
});
