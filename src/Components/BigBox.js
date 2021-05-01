import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './BigBox.css'

const BigBox = ({weatherDetails, left}) => {
	function trunc (x, posiciones = 2) {
            const s = x.toString()
            const decimalLength = s.indexOf('.') + 1
            const numStr = s.substr(0, decimalLength + posiciones)
            return Number(numStr)}
     if(!weatherDetails){
     	return <h1>No data</h1>
     }
	return (
		<div className='BigBox'>
			<Card className='bigbox__card' >
		      <CardContent>
		        <Typography className='bigbox__cardTitle' >
		          {left === true ? "Wind Status" : "Humidity"} 
		        </Typography>
		        <Typography className='bigbox__cardBody'>
		   			{left === true ? (<div>{trunc(weatherDetails.wind_speed)}<span>MPH</span></div>) : (<div>{trunc(weatherDetails.humidity)}<span>%</span></div>) }
		        </Typography>
		        <Typography className='bigbox__cardFooter'>
		          	{left === true ? `${weatherDetails.wind_direction_compass}` : 'none'}
		        </Typography>
		      </CardContent>
		    </Card>
		</div>
	)
};
export default BigBox;