
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import AllChart from './components/AllChart';
import { useEffect } from 'react';
import { getAllData } from './services/operations/dataApi';
import { useDispatch } from 'react-redux';



function App() {
  const dispatch  = useDispatch();

// yaha par use effect use karenge taki first rendering par all data fetch hojae
useEffect(()=>{
  dispatch(getAllData());
},[])

  return (
   <div>

  <Routes>
  <Route path="/" element={<Dashboard/>}>

  <Route path='/' element={  <AllChart/>  }/> 

  </Route>

  </Routes>

   </div>
  );
}

export default App;
