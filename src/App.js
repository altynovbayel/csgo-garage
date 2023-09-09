import './App.css';
import { Components } from './components';
import {Pages} from './pages';
import MY_ROUTES from './routes';

function App() {
  return (
    <div className="App">
      <Components.Navbar/>
      <Components.Weapons/>
      <MY_ROUTES/>
      <Components.Footer/>
    </div>
  );
}

export default App;
