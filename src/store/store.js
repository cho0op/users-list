import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from '../components/contacts-page/contacts-redux-store/contactsSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsSlice
  },
})