import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Sidedbar from './Components/Sidedbar/Sidedbar';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='containerr'>
        <Sidedbar />
        {/* <Login /> */}
        <div className='otherPages'></div>
      </div>
    </div>
  );
}

export default App;
