import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import LabelCard from './labelCard';

const card = (data_key, data_value) =>{
    console.log("inside card function");
    console.log(data_key);
    console.log(typeof data_key);
    let labels= [];
    for (const [key, value] of Object.entries(data_value)) {
        console.log(`${key}: ${value}`);
        labels.push(<LabelCard label={key} value={value}>    </LabelCard>);
    }
 return (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        Date {data_key}
      </Typography>
      {labels}
      
      
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);
};

export default function AppCard(props) {

console.log("wow",props.data)
if(Object.keys(props.data).length<1){

    return(
        <Card sx={{ minWidth: 275 }}>
        Empty Slot
        </Card>
    );
}
else{
    let cards = [];
    for (const [key, value] of Object.entries(props.data)) {
        console.log(`${key}: ${value}`);
        cards.push(card(key, value));
    }
    return(
        <Card sx={{ minWidth: 275 }}>
        {cards}
        </Card>
    );
    }


}
    