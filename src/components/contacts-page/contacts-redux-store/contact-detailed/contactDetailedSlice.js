import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { USERS } from '../../../../endpoints';

const initialState = {
    contact: {
        address: {
            city: '',
        },
        company: {
            name: '',
        },
    },
    isLoading: false,
    error: null,
};

export const fetchContactById = createAsyncThunk(
    'contact/fetchContactById',
    async (id) => {
        const response = await fetch(USERS.USER_BY_ID(id));
        return response.json();
    }
);

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContactById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchContactById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contact = action.payload;
        });
        builder.addCase(fetchContactById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export default contactSlice.reducer;
export const selectInfo = (state) => state.contact.contact;
