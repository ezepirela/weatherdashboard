import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './SideDrawer.css'
const SideDrawer = props => {
    const inputRef = useRef();
        const submitHandler = event => {
            event.preventDefault();
            const getData = async () =>{
                props.setInput(inputRef.current.value);
                props.onInput(props.state.length, inputRef.current.value);
                inputRef.current.value = '';
            }
            getData();
        }
    const content = (
       <aside className='SideDrawer'>
            <button className='sideDrawer__close' onClick={props.closeHandler}>X</button>
            <form onSubmit={submitHandler} >
                <input ref={inputRef} className='Search-Location' type='search' placeholder='Search Location'/>
                <Button className='sideDrawer__search' type='submit'>Search</Button>
            </form>
        <ul className='sideDrawer__cities'>
            {props.state.map((item, index) => (
              <li key={index}>
                {item.name}
              </li>  
            ))}  
        </ul>
        </aside>
    )
    const container = document.getElementById('drawer');
    return (
        ReactDOM.createPortal(content, container)
    );
};
export default SideDrawer;