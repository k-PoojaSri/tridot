import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Home } from './components/home';
import { Edit } from './components/edit';
function App() {
  return (
   
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}/>
       <Route path='/edit' element={<Edit />}/>
      </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
