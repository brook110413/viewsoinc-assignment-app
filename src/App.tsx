import { useAppSelector, useAppDispatch } from './redux/store';
import {
  increment,
  decrement,
  incrementByAmount,
} from './redux/slices/counterSlice';
import styled from 'styled-components';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
`;

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
        <p>count is {count}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <StyledButton>Click me</StyledButton>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
