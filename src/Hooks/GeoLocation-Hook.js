import {useState, useCallback} from 'react';
export const useGeoLocation = () => {
    const [latitude, setLatitud] = useState();
    const [longitude, setLongitude] = useState();
    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      };
      function success(pos) {
        const crd = pos.coords;
        setLatitud(crd.latitude);
        setLongitude(crd.longitude);
      }
      function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    const getCoordinates =  useCallback(() => {
        if(navigator.geolocation){
            navigator.permissions
            .query({name: "geolocation"})
            .then(function (result) {
                if(result.state === 'granted'){
                    console.log(result.state);
                    navigator.geolocation.getCurrentPosition(success);
                } 
                else if(result.state === 'prompt'){
                    console.log(result.state);
                    navigator.geolocation.getCurrentPosition(success, errors, options);
                }
                else if(result.state === 'denied') console.log(result.state);//If denied then you have to show instructions to enable location
                result.onChange =   function () {
                    console.log(result.state);
                };
            }, []);   
        }else {
            console.log('not available');
        }
    });
    return {latitude, longitude, getCoordinates}
}