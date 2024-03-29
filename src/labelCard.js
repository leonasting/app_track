import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const LabelCard = (props) =>{
    const [keyval, setKeyval] = useState(props.value);
    let label=props.label;
    const increaseCard = () => {
        setKeyval(keyval+1);
    }
    const decreaseCard = () => {
        setKeyval(keyval-1);
    }
    return (<div>
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >   
        {label}:{keyval} 
            <Button variant="outlined" onClick={increaseCard} >+</Button><Button variant="outlined" onClick={decreaseCard}>-</Button>
            
        </Box>
        </div>);
    

}

export default LabelCard;