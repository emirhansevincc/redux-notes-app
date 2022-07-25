import { createSlice, nanoid } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "notes",
    initialState: [
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
    ],
    reducers:{}
})
export default todoSlice.reducer