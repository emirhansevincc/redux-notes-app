import React from 'react'
import "./note.css"
import { useDispatch } from 'react-redux'
import { deleteNote } from '../../redux/notes/NoteSlice'

function Note({ note }) {

  const dispatch = useDispatch()

  const d = new Date()

  const deleteNoteFunction = () => {
    dispatch(deleteNote({id: note.id}))
  }

  return (
    <div className="note">
      <p>{note.text}</p>
      <div className="bottom-part">
        <div className="date">
          <span>{d.toDateString()}</span>
        </div>
        <div className="delete">
          <i 
            className="fa-solid fa-trash-can"
            onClick={deleteNoteFunction}
            ></i>
        </div>
      </div>
    </div>
  )
}

export default Note