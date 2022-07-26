import React, { useState } from 'react'
import './NoteList.css'
import Note from '../Note/Note.jsx'

import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addNote, clearAll, SELECTOR } from '../../redux/notes/NoteSlice'

function NoteList() {

    const [textChange, setTextChange] = useState("")
    const [backgroundColor, setBackgroundColor] = useState("")
    // console.log(backgroundColor);

    const notes = useSelector(SELECTOR)
    const dispatch = useDispatch()

    const d = new Date()

    const handleClick = () => {

        if (!textChange) return
        dispatch(addNote(
            { 
                id: nanoid(), 
                text: textChange, 
                date: d.getDay(),
                backgroundColor: backgroundColor
            }
        ))
        setTextChange("")
    }

    return (

        <>

            <div className="clear-btn-container">
                <h1>NOTES</h1>
                <button
                    className='clearAll'
                    onClick={() => { dispatch(clearAll()) }}
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
                            maxLength={150}
                            placeholder='Add note'
                            value={textChange}
                            onChange={(e) => setTextChange(e.target.value)}
                        ></textarea>

                        <div className="bottom-note">
                            <div className='date-save'>
                                <div className="date">
                                    <span>{d.toDateString()}</span>
                                </div>
                                <div>
                                    <button
                                        className='save-btn'
                                        onClick={handleClick}
                                    >Save
                                    </button>
                                </div>
                            </div>

                            <div className='colors'>

                                <button 
                                    className='blue'
                                    onClick={() => setBackgroundColor("blue")}
                                    >Blue</button>
                                <button 
                                    className='red'
                                    onClick={() => setBackgroundColor("red")}
                                    >Red</button>
                                <button 
                                    className='green'
                                    onClick={() => setBackgroundColor("green")}
                                    >Green</button>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NoteList