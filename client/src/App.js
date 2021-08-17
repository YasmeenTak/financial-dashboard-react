import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Sidedbar from './Components/Sidedbar/Sidedbar';
function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <Login /> */}
      <Sidedbar />
    </div>
  );
}

export default App;
