import React, {useState} from 'react';
import SideDrawer from './SideDrawer';
import {Button, IconButton} from '@material-ui/core';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching'
import {useInputs} from '../Hooks/InputHook';
import './Aside.css';
const Aside = (props) => {
    function trunc (x, posiciones = 2) {
            var s = x.toString()
            // var l = s.length
            var decimalLength = s.indexOf('.') + 1
            var numStr = s.substr(0, decimalLength + posiciones)
            return Number(numStr)
          }
    const [state, submithHandlerDispatch] = useInputs();
    const [toggleDrawer, setToggleDrawer] = useState(false);
    const openDrawer = () => {
        setToggleDrawer(true);
    };
    const closeDrawer = () => {
        setToggleDrawer(false);
    };
    if(props.weather){
    return (
    <div className='aside'>
    {toggleDrawer && <SideDrawer closeHandler={closeDrawer} state={state} 
       setInput={props.setInput} onInput={submithHandlerDispatch} />}
        <div className='aside__buttons'>
            <Button className='aside__buttons_SearchCity' onClick={openDrawer}>Search Places</Button>
            <IconButton aria-label="SearchLocation" className='aside__buttons_location'>
                <LocationSearchingIcon onClick={props.getLocation} />
            </IconButton>
        </div>
        <div className='aside__details'>
            <img className='aside__image'alt={props.weather.weather_state_name}
        src={`https://www.metaweather.com/static/img/weather/png/${props.weather.weather_state_abbr}.png`}/>
            <h1 className='aside__tempToday'><span>{trunc(props.weather.the_temp)}</span>°c</h1>
            <h3 className='aside__weatherStateToday'>{props.weather.weather_state_name}</h3>
            <h6 className='aside__weatherDate'>Today - {props.weather.applicable_date}</h6>
        </div>
        <div className='aside__footer'> 
            <h6>{props.city}</h6>
        </div>
    </div>
    )}
    return (
    <div className='aside'>
    {toggleDrawer && <SideDrawer closeHandler={closeDrawer} state={state} 
       setInput={props.setInput} onInput={submithHandlerDispatch} />}
        <div className='aside__buttons'>
            <Button className='aside__buttons_SearchCity' onClick={openDrawer}>Search Places</Button>
            <IconButton aria-label="SearchLocation" className='aside__buttons_location'>
                <LocationSearchingIcon onClick={props.getLocation}/>
            </IconButton>
        </div>
        <div className='aside__details'>
            <h1>
            Begin the search!
            </h1>
            <br />
            <p>Write any city within the input field or push the location button to set your current location weather</p>
            
        </div>
    </div>
    )
}
export default Aside;