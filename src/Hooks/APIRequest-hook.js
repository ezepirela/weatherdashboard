import {useHttpClient } from './http-hook';
export const useGetApiData = (input, latitude, longitude) => {
    const {sendRequest, isLoading, error, clearError} = useHttpClient();
    let response;
    let responseByLocation;
    let getData = async(url) =>{
            try {
                response = await sendRequest(url, 'POST', JSON.stringify({
                    city: input
                }), {'Content-Type': 'application/json'})
            } catch (e) {
                console.log(e);
            }
        return response
        }
    
      const getWeatherDataByLocation = async (latitude, longitude) => {
        try {
            responseByLocation = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}api/latlong`, 'POST', JSON.stringify({
            latitude: latitude,longitude: longitude}), {'Content-Type': 'application/json'})
            } catch (e) {
                console.log(e);
            }
            return responseByLocation;
        }
        return {getData, getWeatherDataByLocation, isLoading, error, clearError};

} 