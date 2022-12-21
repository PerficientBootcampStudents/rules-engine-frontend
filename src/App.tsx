import { Grid } from '@mui/material';
import ButtonCompare from './components/ButtonCompare';
import TableCustom from './components/DynamicTable';
import {columns}  from './components/json';
import {data}  from './components/json';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import './styles/styles.css'


function App() {



  const options=columns.map((e:any)=>{
    return""+e.name
  })

    return (
      <div>
        
          <Grid container>
            <Grid item xs={12}>
            <Navbar/>
            </Grid>
            <Grid item xs={12} >
              <div className='container-rules'>
                <h1>RULES ENGINE</h1>
              </div>
            </Grid>
            <Grid item xs={8} >
             <TextArea/>
            </Grid>
            <Grid item xs={4} >
             <ButtonCompare/>
            </Grid>
           <Grid item xs={8}>
              <TableCustom
                options={options}
                data={data}
             />
           </Grid>
         </Grid>
       </div>
    
  );
}

export default App;
