import { useState } from 'react';

// function countInitial() {
//   console.log('run function')
//   return 4;
// }

function App() {

  /* First example  */
  // const [count, setCount] = useState(0)

  // const [count, setCount] = useState(countInitial())
  // const [count, setCount] = useState(() => countInitial())

  // const [count, setCount] = useState(() => {
  //   console.log('run function')
  //   return 4;
  // })
  
  // function decrementCount() {
  //   // setCount(count - 1);
  //   setCount(prevCount => prevCount - 1);
  // }

  // function incrementCount() {
  //   // setCount(count + 1);
  //   setCount(prevCount => prevCount + 1);
  // }


/* Second Example  */
  // const [state, setState] = useState({ count: 4, theme: 'blue' })
  // const count = state.count;
  // const theme = state.theme;

  // function decrementState() {
  // }

  // function incrementState() {
  //   setState(prevState => {
  //     return { /* ...prevState , */count: prevState.count + 1 }
  //   })
  // }

  // return (
  //   <>
  //     {/* <button onClick={decrementCount}>-</button>
  //     <span>{count}</span>
  //     <button  onClick={incrementCount}>+</button> */}


  //   <button onClick={decrementState}>-</button>
  //   <span>{count}</span>
  //     <span>{theme}</span>
  //     <button  onClick={incrementState}>+</button>
  //   </>
  // );

  /* Third example  */
  const [theme, setTheme] = useState('blue')
  const [count, setCount] = useState(0)

  function decrement() {
    setCount(prevCount => prevCount - 1);
    setTheme('orange')
  }

  function increment() {
    setCount(prevCount => prevCount +  1);
    setTheme('red')
  }

  return (
    <>
      {/* <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button  onClick={incrementCount}>+</button> */}


    <button onClick={decrement}>-</button>
    <span>{count}</span>
      <span>{theme}</span>
      <button  onClick={increment}>+</button>
    </>
  );
}

export default App;
