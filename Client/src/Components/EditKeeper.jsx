import React, { useState } from 'react';
import './addkeeper.css';

const Editkeeper = (props) => {
  const [dec, setDec] = useState(props.description);
  const [title, setTitle] = useState(props.title);

  return (
    <div className='addKeeper'>
      <input
        className='inputBox titleInput'
        type='text'
        name='title'
        placeholder='Title'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <textarea
        className='inputBox description'
        name='description'
        placeholder='Add Description'
        onChange={(e) => setDec(e.target.value)}
        value={dec}
      />
      <div
        className='addButton'
        onClick={ async () => {
          var obj = {
                title: title,
                description: dec,
                id: props.Register._id,
              }
          try {
            const resp = await fetch('/Update', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(obj),
            });
            const data = await resp.json();
            props.callmebro();
            console.log(data, obj);
          } catch (e) {
            console.log(e);
          }

          //         title
          // dec
          // props.keeper.id
        }}
      >
        Edit
      </div>
    </div>
  );
};
export default Editkeeper;
