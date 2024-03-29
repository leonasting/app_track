import { backdropClasses } from '@mui/material';
import './App.css';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import AppCard from './AppCard';




function App() {
  

  const [base_dict, setAppData] = useState({});
  const [change, setChange] = useState(0);
  
  
  const createCard = () => {
    const date = document.getElementById("date").value;
    console.log(date);
    base_dict[date] = {"Prohire":0,"Dice":0,"Linkedin":0,"other":0};
    console.log(base_dict);
    document.getElementById("date").value = "";
    setChange(change+1);
  }

  return (
    <div className="App">
      <h1>App Track</h1>
      <input type="date" id="date" name="date"  ></input>
      <Button variant="contained" onClick={createCard}>BLA</Button>
      <AppCard data = {base_dict} change={change} />
      

    </div>
  );
}

export default App;
