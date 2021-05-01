import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import 'moment-timezone';
import './Box.css';
const Box = (props) => {
	 function trunc (x, posiciones = 1) {
            var s = x.toString()
            // var l = s.length
            var decimalLength = s.indexOf('.') + 1
            var numStr = s.substr(0, decimalLength + posiciones)
            return Number(numStr)
          }
	if(props.weatherState){
		return (
		<div className='Box'>
			<Card className='content__card' >
		      <CardContent>
		        <Typography className='content__cardTitle' >
		          <Moment format='dddd' date={props.weatherState.applicable_date}/>
		        </Typography>
		        <Typography className='content__cardBody'>
		   			<img className='content__cardImg'
		   			alt='weather state '
		   			src={`https://www.metaweather.com/static/img/weather/png/64/${props.weatherState.weather_state_abbr}.png`}/>
		        </Typography>
		        <Typography className='content__cardFooter' >
		         {`${trunc(props.weatherState.max_temp)} °C`} - {`${trunc(props.weatherState.min_temp)} °C`}
		        </Typography>
		      </CardContent>
		    </Card>
		</div>
		)
	}
	return (
		<div className='Box'>
		</div>
	)
};
export default Box;