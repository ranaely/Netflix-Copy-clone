import React  from 'react';
import '../src/App.css'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Holloywood from './compo/Hollywood/Holloywood';
import Index from './compo/New_series';
import Error from './compo/Error/Error';
import { Home } from './compo/Home/Home';





const App=()=> {

  return(

    <Router>

<div className='body'>
 
<Routes>

<Route path='/' element={<Home/>}/>

<Route path='/Hollywood' element={<Holloywood/>}/>

<Route path='/NewSeries' element={<Index/>}/>

<Route path='*' element={<Error/>}/>
</Routes>

 

</div> 
</Router>
 )}

export default App;