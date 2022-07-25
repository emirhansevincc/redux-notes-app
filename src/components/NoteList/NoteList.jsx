import React, { useState } from 'react'
import './NoteList.css'
import Note from '../Note/Note.jsx'

import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addNote, clearAll } from '../../redux/notes/NoteSlice'

function NoteList() {

    const [textChange, setTextChange] = useState("")

    const notes = useSelector((state) => state.notes.items)
    const dispatch = useDispatch()

    const d = new Date()

    const handleClick = () => {

        if( !textChange ) return
        dispatch(addNote(
            { id: nanoid(), text: textChange, date: d.getDay() }
        ))
        setTextChange("")
    }

    return (

        <>

            <div className="clear-btn-container">
                <h1>NOTES</h1>
                <button
                    className='clearAll'
                    onClick={() => {dispatch(clearAll())}}
                    >Clear All</button>
            </div>

            <div className='note-container'>

                {
                    notes.map((note) => {
                        return <Note note={note} key={note.id} />
                    })
                }

                <div className="bottom-part">
                    <div className="note add">
                        <textarea
                            rows="8"
                            maxLength={170}
                            placeholder='Add note'
                            value={textChange}
                            onChange={(e) => setTextChange(e.target.value)}
                        ></textarea>

                        <div className="bottom-note">
                            <div className="date">
                                <span>{d.toDateString()}</span>
                            </div>
                            <div className="delete">
                                <button 
                                    className='save-btn'
                                    onClick={handleClick}
                                    >Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NoteList