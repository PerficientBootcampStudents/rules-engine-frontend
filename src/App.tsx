
import './App.css';
import TableCustom from './components/DynamicTable';
import {columns}  from './components/json';
import {data}  from './components/json';

function App() {



  const options=columns.map((e:any)=>{
    return""+e.name
  })

    return (
    <div className="App">
          <TableCustom
        title="TEST"
        options={options}
        data={data}
        />
      
    </div>
  );
}

export default App;
