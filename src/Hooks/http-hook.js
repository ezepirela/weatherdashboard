import {useState, useCallback, useRef, useEffect} from 'react';
export const  useHttpClient = ()  => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, SetError] = useState();
    const activeHttpRequests = useRef([]);
    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setIsLoading(true);
        const httpAbortCtrl = new AbortController();
        activeHttpRequests.current.push(httpAbortCtrl);
        try {
            const response = await fetch(url, {
                method, 
                body,
                headers,
                signal: httpAbortCtrl.signal
            });
            const responseData = await response.json();
            activeHttpRequests.current = activeHttpRequests.current.filter(reqCtrl => 
                reqCtrl !== httpAbortCtrl
            );
            if(responseData.error){ 
                throw new Error(responseData.error);
            }
            setIsLoading(false);
            return responseData;
        } catch (error) {
            setIsLoading(false);
            SetError(error.message);
            throw error;
        }
    }, []);
    const clearError = () => {
        SetError(null);
    }
    useEffect(() => {
        return () => {
            activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort())
        };
    }, [])
    return {error, isLoading, sendRequest, clearError};
};