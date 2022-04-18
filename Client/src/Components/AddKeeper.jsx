import React, { useState } from 'react';
import './addkeeper.css';

const Addkeeper = ({keeperList,setKeeperList}) => {

  const [keeperObj, setKeeperObj] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKeeperObj({
      ...keeperObj,
      [name]: value,
    });
  };

  const add = async (e) => {
    e.preventDefault();

    const { title, description } = keeperObj; //destructuring//

    setKeeperObj({
      title: '',
      description: '',
    });
    
    setKeeperList([...keeperList, { title, description }]);
    try {
      const resp = await fetch('/addNew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      const data = await resp.json();
      
      
    
      console.log(data);
    } catch (e) {
      console.log(e);
    }
   
  };

  return (
    <div className='addKeeper'>
      <input
        className='inputBox titleInput'
        type='text'
        name='title'
        placeholder='Title'
        onChange={handleChange}
        value={keeperObj.title}
      />

      <textarea
        className='inputBox description'
        name='description'
        placeholder='Add Description'
        onChange={handleChange}
        value={keeperObj.description}
      />
      <div className='addButton' onClick={add}>
        Add
      </div>
    </div>
  );
};

export default Addkeeper;
