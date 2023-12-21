import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense, lazy } from 'react';
import {cardData} from './mock'
const CardComponent = lazy(()=>import("./components/CardComponent"));

function App() {
  return (
  
      <div className="App">
        <Suspense fallback ={<div>Loading.........</div>}>
        <h1>React Lazy Loading with Infinite Scroll</h1>
          <CardComponent cardData={cardData}/>
        </Suspense>
      </div> 
  
  );
}

export default App;
