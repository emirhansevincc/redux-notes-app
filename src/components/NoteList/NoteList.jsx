import React from 'react'
import './NoteList.css'
import Note from '../Note/Note.jsx'

function NoteList() {


    const d = new Date()

    return (

        <>

            <div className="clear-btn-container">
                <h1>NOTES</h1>
                <button className='clearAll'>Clear All</button>
            </div>

            <div className='note-container'>

                {/* map */}

                <Note />

                <div className="bottom-part">
                    <div className="note add">
                        <textarea
                            cols="10"
                            rows="8"
                            maxLength={220}
                            placeholder='Add note'
                        ></textarea>

                        <div className="bottom-note">
                            <div className="date">
                                <span>{d.toDateString()}</span>
                            </div>
                            <div className="delete">
                                <button className='save-btn'>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteList