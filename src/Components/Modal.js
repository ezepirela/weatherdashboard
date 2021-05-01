import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './Modal.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #ccccff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({error, clear}) {
  const classes = useStyles();
  return ( 
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={error}
        onClose={clear}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={error}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">An error just happened!</h2>
            <div className='modal__errorDescription'>
              <img className='modal__image' alt='cloud-emoji' src='https://www.vippng.com/png/detail/203-2038600_nube-clipart-png-sad-cloud-icon.png'/>
              <p id="transition-modal-description">{error}</p>
            </div>
            <div className='modal__button'>
            <button type="button" onClick={clear}>Close</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}