import * as React from 'react';
import Box from '@mui/material/Box';
import '../styles/styles.css'
import { TextField } from '@mui/material';

export default function TextArea() {
  return (
    
      <div className="content-textfield">
        <Box >
            <input type='text' className="textfield"/>
        </Box> 
      </div>
  );
}