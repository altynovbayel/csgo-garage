import './App.css';
import { Components } from './components';
import {Pages} from './pages';

function App() {
  return (
    <div className="App">
      <Components.Navbar/>
      <Components.Weapons/>
      <Pages.Main/>
    </div>
  );
}

export default App;
