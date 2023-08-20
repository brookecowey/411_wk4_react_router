import React from 'react'
import cars from '../cars.json'
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import SimpleContainer from './Container';
import SimplePaper from './Paper';
import BasicChips from './Chip'
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

// import parmas from react router
// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const {id} = useParams()
    const matchingCar = cars.find(car => car.id == id)
    console.log(matchingCar.Name)
    return (
        <div>
            {/* {cars.map((c, i) => ( */}
               {/* <div key={i}> */}
               
                    <Paper elevation={3}>
                    <div style = {{ display: "flex", gap: "5px", justifyContent: "left", padding: "15px"}}>
                    <h1>{matchingCar.Name}</h1>
                    </div>
                    {Object.entries(matchingCar).map(([key, value]) => {
                        return  <Chip label={`${key}: ${value}`} />
                    })}
                 
                    </Paper>
        </div>
    )}
export default Car