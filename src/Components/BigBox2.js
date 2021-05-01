import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './BigBox.css'

const BigBox = ({weatherDetails, left}) => {
	 function trunc (x, posiciones = 1) {
            var s = x.toString()
            // var l = s.length
            var decimalLength = s.indexOf('.') + 1
            var numStr = s.substr(0, decimalLength + posiciones)
            return Number(numStr)
          }
          if(!weatherDetails){
          	return <h1>No data</h1>
          }
	return (
		<div className='BigBox'>
			<Card className='bigbox__card' >
		      <CardContent>
		        <Typography className='bigbox__cardTitle' >
		          {left === true ? "Visibility" : "Air Preasure"}
		        </Typography>
		        <Typography className='bigbox__cardBody'>
		   			{left === true ? (<div>{trunc(weatherDetails.visibility)}<span> MILES</span></div>) : (<div>{trunc(weatherDetails.air_pressure)}<span> mb</span></div>)}
		        </Typography>
		      </CardContent>
		    </Card>
		</div>
	)
};
export default BigBox;