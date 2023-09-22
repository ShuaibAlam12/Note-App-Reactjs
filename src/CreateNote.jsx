import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const CreateNote = (props) => {
    const [expand,setExpand]=useState(false);
const expandIt=()=>{
    setExpand(true);
}
const btoNormal=()=>{
    setExpand(false);
}
    const [note, setNote] = useState({
        title: '',
        content: '',
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevEvent) => {
            return {
                ...prevEvent,
                [name]: value,
            }
        });
    }
    const addevent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: '',
        });
    };
    return (

        <>
            <div className='main_note'   onDoubleClick={btoNormal}>
              
                <form>
              {  expand?
                    <input type='text'
                        name='title'
                        value={note.title}
                        onChange={InputEvent}
                        placeholder='Title'
                        autoComplete='off' />
                        : null}

                    <textarea rows='' column=""
                        name='content'
                        value={note.content}
                        onChange={InputEvent}
                        onClick={expandIt}
                      
                        placeholder='Write a note...'></textarea>
                       { expand?
                    <Button onClick={addevent} variant="contained"><AddIcon className='plus_sign' ></AddIcon></Button>
                    :null}
                </form>

            </div>
        </>
    )
}

export default CreateNote;