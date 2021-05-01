import React from 'react'
import Box from './Box';
import './BoxList.css';

function BoxList({weather}) {
	if(!weather){
		return <h1>no weather data</h1>
	}
	return (
		<div>
			<ul className='boxlist__items'>
				{weather.map(weatherDay => (
					<Box weatherState={weatherDay} key={weatherDay.applicable_date}/>
				))}
			</ul>
		</div>
	)
}

export default BoxList