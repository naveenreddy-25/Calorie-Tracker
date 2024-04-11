import React from 'react'

const AppModal =({setOpenModal}) => {
  return (
    <div className="app__modal">
        <h3>Calories Must be greater than 0 And Meal Name cannot be Blank.</h3>
        <button className="btn__close__modal" onClick={() => setOpenModal(false)}>Close</button>
    </div>
  );
};

export default AppModal;