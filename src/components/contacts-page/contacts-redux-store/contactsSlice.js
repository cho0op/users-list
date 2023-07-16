import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { USERS } from '../../../endpoints';

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
    selectedId: 0
};

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const response = await fetch(USERS.USERS());
        return response.json();
    }
);

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        submit(state, action) {
            state.contacts.push(action.payload);
        },
        remove(state, action) {
            state.contacts = state.contacts.filter(
                (item) => item.id !== action.payload
            );
        },
        select(state, action) {
            if (state.selectedId === action.payload) {
                state.selectedId = 0;
            } else {
                state.selectedId = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts = action.payload;
        });
        builder.addCase(fetchContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export const { submit, remove, select } = contactsSlice.actions;
export default contactsSlice.reducer;
