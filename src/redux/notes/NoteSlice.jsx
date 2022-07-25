import { createSlice, nanoid } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "notes",
    initialState: {
        items: [
            {
                id: nanoid(),
                text: 'First note',
                date: '22/07/2092'
            },
            {
                id: nanoid(),
                text: 'Second note',
                date: '23/07/2092'
            },
            {
                id: nanoid(),
                text: 'Third note',
                date: '24/07/2092'
            },
        ]
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload)
        },
        deleteNote: (state, action) => {
            const { id } = action.payload
            const filteredList = state.items.filter((note) => note.id !== id)
            state.items = filteredList
        },
        clearAll: (state) => {
            state.items = []
        }
    }
})

export const { addNote, deleteNote, clearAll } = noteSlice.actions
export default noteSlice.reducer