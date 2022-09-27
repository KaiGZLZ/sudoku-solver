import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './App.module.css';
import ModalError from './components/ModalError';
import Sudoku from './components/Sudoku';
import { matrixActions } from './Redux/matrixSlice';

function App() {

  const [modalHidden, setModalHidden] = useState(true);

  const dispatch = useDispatch();

  const showSolutionState = useSelector(state => state.matrix.showSolutionState);
  const somethingIsWrong = useSelector(state => state.matrix.somethingIsWrong);
  
  const showSolution = () => {

    if (somethingIsWrong)
      setModalHidden(false)
    
    else{
      if(!showSolutionState)  dispatch(matrixActions.showSolution());

      dispatch(matrixActions.changeShowSolutionState());
    }
  }

  const solveMatrix = () => {

    if (somethingIsWrong)
      setModalHidden(false)
    
    else
      dispatch(matrixActions.solve())
  }

  const cleanMatrix = () => {
    dispatch(matrixActions.cleanSudoku())
  }

  return (
    <>
      <div className={style.App}>

        <div className={style.buttonsContainer}>
          <button className={`${style.button}${showSolutionState ? ' '+style.buttonChanged : ''}`} onClick={showSolution}> Show Solution </button>
          <button className={style.button} onClick={solveMatrix}> Solve Sudoku </button>
          <button className={style.button} onClick={cleanMatrix}> Clean Sudoku </button>
          
        </div>

        <ModalError 
          modalHidden={modalHidden}
          setModalHidden={setModalHidden}
          />

        <Sudoku />
      </div>
    </>
  );
}

export default App;
