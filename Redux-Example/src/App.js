import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { depositMoney, withdrawMoney } from './store/action-creators';
//test to make a PR
function App() {

  const account =  useSelector(state => state.account)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{account}</h1>
      <div>
        <button onClick={() => dispatch(depositMoney(5))}>Deposit</button>
        <button onClick={() => dispatch(withdrawMoney(1))}>Withdraw</button>
      </div>
      Hello world!
    </div>
  );
}

export default App;
