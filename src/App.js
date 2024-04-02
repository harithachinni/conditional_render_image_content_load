import './App.css';
import List from './conditionalrenderingasyncawait/List';
import data from './conditionalrenderingasyncawait/data';
import { useState } from 'react';
import Review from './2.review/Review';
import Qanda from './3. Q&A/Qanda';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />
          }>
          </Route>
          <Route path='/content' element={<List people={people} />
          }>
          </Route>
          <Route path='/review' element={<Review />
          }>
          </Route>
          <Route path='/qa' element={<Qanda />
          }>
          </Route>
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
