import React, { useState } from 'react';
import { DivContainer } from "./style"




const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <DivContainer>
      <label htmlFor="dropdown"></label>
      <select id="dropdown" value={selectedOption} onChange={handleSelectChange} 
      style={{ fontSize: '14px', padding: '5px', height: '10px' , width: "30px"}}>
        
        <option value="option1">Add</option>
        <option value="option2">More</option>
      </select>
    </DivContainer>
    </>
  );
};

export default Dropdown;
