import  {useEffect, useState, useCallback} from 'react';
import './App.css';
import PlantView from './Component/PlantView';
import Table from './Component/Table';
import axios from 'axios';

function App() {
  //the leaf node that is selected from the tree
  const [row,setRow] = useState("");
  const [col, setCol] = useState("");
  const [data,setData] = useState([]);
  const API = "http://ec2-52-203-168-180.compute-1.amazonaws.com:8080/api/v1/list"; //backend server to fetch data from MySQL

  
  //sample data format 
  // const dataSource = [
  //   {
  //     type: 'PlantA',
  //     leaf_color:'Green',
  //     leaf_shape:'Toothed',
  //     stem_color:'Green',
  //   },
  //   {
  //     type: 'PlantB',
  //     leaf_color:'Red',
  //     leaf_shape:'',
  //     stem_color:'',
  //   }
  // ]

  //fetch data from Spring backend
  const fetchData = useCallback (async() =>{
    let response = await axios.get(/api/v1/list);
    setData(response.data);
  },[])
  
  
  useEffect ( async()=>{
    fetchData()
  },[fetchData])
  
  //updating the selected leaf node to highlight the table cell
  const updateSelected = (row, col) =>{
    setRow(row);
    setCol(col);
  }

  return (
    <div className="App">
      <br/>
      <div>
        <Table  row = {row} col = {col} data={data}/>
      </div>
      <div>
        <PlantView onChangeSelected = {updateSelected} data={data}/>
      </div>
    </div>
  );
}

export default App;
