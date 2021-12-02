import './App.css';
import { DataManager, MainList, ListItem } from './exporter';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row} from 'react-bootstrap'


function App() {

  if(DataManager.GetAllBands().length <= 0){
    DataManager.setTestData()
  }

  //Check if strictMode is forced
  
  return (
    <div className="App">
      <ListItem band={DataManager.GetBandWithID(1)}/>
      <MainList UpdateFunction={DataManager.GetAllBands}/>

    </div>
    
  );
}

export {App as default};
