import {useReducer, useCallback} from 'react';
const reducer = (state, action) => {
    switch (action.type){
        case 'push':
            return [
                ...state, 
                {
                    id: action.id,
                    name: action.name
                }
            ];
        default:
            return state    
    }
};
export const useInputs = (type, name) => {
    const [state, dispatch] = useReducer(reducer, [])
    const submithHandlerDispatch = useCallback((id, name) => {
        dispatch({type: 'push',id: id, name: name});
    }, []);
    return [state, submithHandlerDispatch];
}