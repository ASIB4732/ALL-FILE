import logo from './logo.svg';
import './App.css';
import Readucer from './Components/Readuser/Readucer';
import PatienReducer from './Components/Readuser/PatienReducer/PatienReducer/PatienReducer';
import PatientManagnemt from './Components/PatientManagnemt/PatientManagnemt';

function App() {
  return (
      <div>
        <Readucer></Readucer>
        <PatientManagnemt></PatientManagnemt>
      </div>
  );
}

export default App;
