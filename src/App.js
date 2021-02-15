import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers'
import actions from './actions'

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const clickHandler = () => {
  //   dispatch(actions.addOne())
  // }

  const changeOperationHandler = (operation) => {
    dispatch(actions.changeOperation(operation))
  }

  const applyNumberHandler = (number) => {
    dispatch(actions.applyNumber(number))
  }

  const clearDisplayHandler = () => {
    dispatch(actions.clearDisplay())
  }

  const setToMemoryHandler = () => {
    dispatch(actions.setTotalToMemory())
  }

  const applyMemoryHandler = () => {
    dispatch(actions.applyMemoryToTotal())
  }

  const clearMemoryHandler = () => {
    dispatch(actions.clearMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/> 
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => setToMemoryHandler()} value={"M+"}/>
              <CalcButton onClick={() => applyMemoryHandler()} value={"MR"}/>
              <CalcButton onClick={() => clearMemoryHandler()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberHandler(1)} value={1}/>
              <CalcButton onClick={() => applyNumberHandler(2)} value={2}/>
              <CalcButton onClick={() => applyNumberHandler(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberHandler(4)} value={4}/>
              <CalcButton onClick={() => applyNumberHandler(5)} value={5}/>
              <CalcButton onClick={() => applyNumberHandler(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberHandler(7)} value={7}/>
              <CalcButton onClick={() => applyNumberHandler(8)} value={8}/>
              <CalcButton onClick={() => applyNumberHandler(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => changeOperationHandler("+")} value={"+"}/>
              <CalcButton onClick={() => changeOperationHandler("*")} value={"*"}/>
              <CalcButton onClick={() => changeOperationHandler("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => clearDisplayHandler()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
