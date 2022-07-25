import { configureStore } from "@reduxjs/toolkit";

import NoteSlice from "./notes/NoteSlice";

export const store = configureStore({
    reducer: {
        notes: NoteSlice
    }
})