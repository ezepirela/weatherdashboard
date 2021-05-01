import React, {useState, useEffect} from 'react';
import Aside from './Components/Aside';
import Content from './Components/Content';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useGetApiData} from './Hooks/APIRequest-hook'; 
import { useGeoLocation } from './Hooks/GeoLocation-Hook';
import TransitionsModal from './Components/Modal';

import './App.css';

function App() {
  const [input, setInput] = useState();
  const {getData,getWeatherDataByLocation, isLoading, error, clearError} = useGetApiData(input);
  const [fetchData, setFetchData] = useState(null);
  const [dailyWeather, setDailyWeather] = useState(null);
  let {latitude, longitude, getCoordinates} = useGeoLocation();
  useEffect(() => {
   getCoordinates()
  }, []);
  useEffect(() => {
    let data;
    if(latitude && longitude) { 
      const fetchinDataByLocation = async () => {
        try {
          data = await getWeatherDataByLocation(latitude, longitude);
          setFetchData(data);
          const weather = data.clima.slice(1,6);
          setDailyWeather(weather);
        }catch(e){}
      }
      fetchinDataByLocation();
      return;
    } 
  }, [latitude, longitude])
  useEffect(() => {
    let data;
    if(input){
      const fetchinData = async() => {
        try{
         data = await getData(`${process.env.REACT_APP_BACKEND_URL}api/city`)
          setFetchData(data); 
          const weather = data.clima.slice(1,6);
          setDailyWeather(weather);
        }catch(e){} 
      }
      fetchinData();
      return;
    }
  }, [input]);
  const getWeatherByLocation = async () =>{
    console.log('clicked');
    let data;
    try {
      data = await getWeatherDataByLocation(latitude, longitude);
          setFetchData(data);
          const weather = data.clima.slice(1,6);
          setDailyWeather(weather); 
    }catch(e){} 
  }
  console.log(process.env.REACT_APP_BACKEND_URL);
  if(fetchData && dailyWeather){
    return (
      <div className="App">
        <section className='app__aside'>
          <Aside weather={fetchData.clima[0]} setInput={setInput}city={input} getLocation={getWeatherByLocation}/>
        </section>
        <section className='app__Content'>
        <div className='app__loading'>
          {isLoading &&  <CircularProgress className='app__loading_item' />}
        </div>
          {!isLoading && error && <TransitionsModal error={error} clear={clearError}/>}
          <div className='app__content__component'>
          {!isLoading && <Content weather={dailyWeather} weatherDetails={fetchData.clima[0]}/>}
          </div>
        </section>
      </div>
    );
  }
  return (
    <div className="App">
    {!isLoading && error && <TransitionsModal error={error} clear={clearError}/>}
      <section className='app__aside'>
        <Aside setInput={setInput} getLocation={getWeatherByLocation}/>
      </section>
      <section className='app__Content'>
        <Content className='content__component' />
      </section>  
    </div>
  );
}

export default App;
