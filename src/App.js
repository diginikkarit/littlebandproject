import './App.css';
import { DataManager, MainList } from './exporter';

function App() {

  DataManager.setTestData()

  return (
    <div className="App">
      <MainList UpdateFunction={DataManager.GetAllBands}/>
    </div>
  );
}

export {App as default};
