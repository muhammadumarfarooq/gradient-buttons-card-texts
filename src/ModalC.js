import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import bgImg from "./gradient-bg.png";
import crossImg from "./cross.png";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center"
  }
}));

const ModalC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type='button' onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className='modalC'>
            {/* bg-img */}
            <div className='bg-img-box'>
              <img src={bgImg} alt='bgimg' />
            </div>

            {/* gradient-bottom-line */}
            <div className='gradient-bottom-line'></div>

            {/* cross button */}

            <div className='cross-img-box'>
              <img src={crossImg} alt='cross-img' />
            </div>

            <h1>Modal Example</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptatem delectus quam inventore nulla dolore
              consequuntur. Quibusdam eius quos atque!
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalC;
