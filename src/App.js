
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import AllChart from './components/AllChart';
import { useSelector } from 'react-redux';

function App() {

  const CurrentData = useSelector( (state)=>state.dataSlice);
  console.log(CurrentData)
  
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
