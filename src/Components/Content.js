import React from 'react';
import BoxList from './BoxList';
import BigBoxList from './BigBoxList';
import './Content.css';

const Content = ({weather, weatherDetails}) => {
	if(!weather && !weatherDetails){
		return (
			<div className='content__default'>
		        <br/>
	        </div>
	     )
	}
	return (
		<div className='content'>
			<BoxList className='content__boxlist' weather={weather}/>
			<h1 className='content__highlight'>Today's Highlights</h1>
			<BigBoxList weatherDetails={weatherDetails}/>
		</div>
	)
    
};
export default Content