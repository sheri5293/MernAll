import React from 'react';
import './ShowKeeper.css';
import Editkeeper from './EditKeeper';
const ShowKepper = ({ keeperList, setKeeperList, getAllcallback }) => {
  

  const delte = async (id) => {
    try {
      const resp = await fetch('/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id,
        }),
      });
      const data = await resp.json();
      setKeeperList(keeperList.filter((Register) =>  Register.id !== id));
      setKeeperList(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='Showkeeper row'>
      {keeperList.map(
        (
          keeper, index //it render the list ... it is object //
        ) => (
          <>
          {keeper.edit ?
            <Editkeeper keeper={keeper} title={keeper.title} description={keeper.description} callmebro={() => {
              getAllcallback()
            }} />
:
            <div className='keeperCard col-md-3' key={keeper._id}>
              <h1 className='title' value={keeper.title}>
                {' '}
                {keeper.title}{' '}
                <i
                  className='deleteIcon fa fa-trash'
                  aria-hidden='true'
                  onClick={() => delte(keeper._id)}
                ></i>
                <i
                  className='editIcon fas fa-edit'
                  aria-hidden='true'
                  onClick={() => {
                  let edit = [...keeperList]
                  edit[index].edit = true
                  setKeeperList(edit)
                  console.log(keeperList)
                  }}
                ></i>
              </h1>

              <textarea
                className='descriptionBox'
                value={keeper.description}
                readOnly
              />
            </div>
          }
          </>
        )
      )}
    </div>
  );
};

export default ShowKepper;
