import { useMemo, useState } from 'react';
import './App.css';
import Header from './header';

function App() {
  const [number, setNumber] = useState(0);
  const info = useMemo(()=>{
      return {name:'bla bla'}
  },[number])
  return (
    <>
      {/* <Header number={number > 5 ? number : 0} info={info} /> */}
      <Header number={number > 5 ? number : 0} info={info} />
      <div className='box'>
        <h1 >{number}</h1>
        <button onClick={() => setNumber(number + 1)}>arttır</button>
      </div>

    </>
  );
}

export default App;
