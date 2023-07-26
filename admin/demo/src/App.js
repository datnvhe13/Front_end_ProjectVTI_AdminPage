import './App.css';
import SideBarAdmin from './Components/SideBarAdmin';
import { routes2 } from './Router/Route';

function App() {
  return (
    <div className="App">
      <SideBarAdmin/>
      {routes2}
    </div>
  );
}

export default App;
