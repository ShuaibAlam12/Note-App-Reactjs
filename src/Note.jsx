import React, { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export const Note = (props) => {
    const [deletee, setDeletee] = useState();
    const deleteEvent = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className='note'>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={deleteEvent} className='btn'>
                    <DeleteOutlineIcon className='deleteIcon' />
                </button>

            </div>
        </>
    )
}
