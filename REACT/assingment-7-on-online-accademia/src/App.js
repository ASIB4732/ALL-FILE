import logo from './logo.svg';
import './App.css';
import Header from './Container/header/Header';
import Shop from './Container/shop/Shop';

function App() {
  return (
    <div className="App">

      <Header className="header"></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
