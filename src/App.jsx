import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import { Note } from './Note';
const App = () => {
  const [AddItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };
  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currData,indx)=>{
        return indx!==id;
      })
      )
  }
  return (
    <>
      <Header />
      <main>
        <CreateNote passNote={addNote} />

        {
          AddItem.map((val, index) => {
            return <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}

              deleteItem={onDelete}
            />
          })
        }
      </main>
      <Footer />
    </>
  )
}

export default App;