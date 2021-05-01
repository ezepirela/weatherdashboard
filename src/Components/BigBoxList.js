import React from 'react'
import BigBox from './BigBox';
import BigBox2 from './BigBox2';
import './BigBoxList.css';

function BigBoxList({weatherDetails}) {
	if(!weatherDetails){
		return (
			<h1>No data</h1>
		)
	}
	return (
		<div className='bigboxlist'>
			<div className='content__weatherDetails'>
	        		<BigBox weatherDetails={weatherDetails} left={true}/>
	        		<BigBox weatherDetails={weatherDetails}/>
	        </div>
	        <div className='content__weatherDetails2'>
	        		<BigBox2 weatherDetails={weatherDetails} left={true}/>
	        		<BigBox2 weatherDetails={weatherDetails}/>
	        	</div>
		</div>
	)
}

export default BigBoxList