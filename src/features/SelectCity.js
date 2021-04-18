import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCities,
  getWeather,
  fetchCityWeather
} from './weatherSlice';

const cities = ['Chennai', 'Mumbai', 'Delhi', 'Bengaluru', 'Ahmedabad', 'Hyderabad', 'Kolkata', 'Pune']
const cityId = {
    Chennai: 1264527,
    Mumbai: 1275339,
    Bengaluru: 1277333,
    Delhi: 4050006,
    Ahamedabad: 1279233,
    Hyderabad: 1176734,
    Pune: 1259229,
    Kolkata: 1275004
}

export default function SelectCity() {
    const weather = useSelector(getWeather);
    const dispatch = useDispatch();

    const selectedCities = (city) => {
        let selected = [...weather.cities];
        if (weather.cities.includes(city)) {
            selected = selected.filter(v => v !== city)
            dispatch(addCities(selected))
        } else {
            selected = [...selected, city]
            dispatch(addCities(selected))
        }
    }

    const getTemprature = (cities) => {

        let ids = []
        cities.map(c => ids.push(cityId[c]))
        ids.join(',')
        dispatch(fetchCityWeather(ids))
    }

    return (
        <div className='container'>
            <div className='content'>
                <div className='checkboxes'>
                    {cities.map(v => 
                    <FormControlLabel key={v} control={
                        <Checkbox value={v} checked={weather.cities && weather.cities.includes(v)} name={v} onClick={(e) => selectedCities(e.target.value)} />
                    } label={v} />)}
                </div>
                
                <div className='bottom'>
                    <Button variant="contained" color="primary" onClick={() => getTemprature(weather.cities)}>
                        Get Weather
                    </Button>
                    <FormHelperText>{weather.error && weather.error}</FormHelperText>
                </div>
            </div>
        </div>
    )
}