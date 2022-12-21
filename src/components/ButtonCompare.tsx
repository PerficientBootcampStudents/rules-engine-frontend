import { Backdrop, Fade, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import '../styles/styles.css'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#323232',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ButtonCompare = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
        <button onClick={handleOpen} className='button-compare'>Compare</button>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" color="#FFFFFF">
              TRUE
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}  color="FFFFFF">
              Comparing data of the table
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ButtonCompare