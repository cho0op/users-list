import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { USERS } from '../../../endpoints';
import { arrayMove } from '@dnd-kit/sortable';

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
    selectedId: null,
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
                state.selectedId = null;
            } else {
                state.selectedId = action.payload;
            }
        },
        move(state, action) {
            const { active, over } = action.payload;
            if (active.id !== over.id) {
                const activeIndex = state.contacts.findIndex(
                    (item) => item.id === active.id
                );
                const overIndex = state.contacts.findIndex(
                    (item) => item.id === over.id
                );
                state.contacts = arrayMove(
                    state.contacts,
                    activeIndex,
                    overIndex
                );
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

export const { submit, remove, select, move } = contactsSlice.actions;
export const selectors = {
    selectContacts: (state) => state.contacts.contacts,
    selectSelectedId: (state) => state.contacts.selectedId,
    selectIsLoading: (state) => state.contacts.isLoading,
    selectError: (state) => state.contacts.error,
};
export default contactsSlice.reducer;
