import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './Components/User';
import OrderList from './Components/OrderList';
import AddOrders from './Components/AddOrders';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<User/>} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/addOrders" element={<AddOrders />} />
          <Route path="/login" element={<Login />} />          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
