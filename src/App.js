import { useDispatch, useSelector } from 'react-redux';
import style from './App.module.css';
import Sudoku from './components/Sudoku';
import { matrixActions } from './Redux/matrixSlice';

function App() {

  const dispatch = useDispatch();

  const matrix = useSelector(state => state.matrix.matrix);
  const arrayOfBoxes = useSelector(state => state.matrix.arrayOfBoxes);
  const arrayOfWrongColumns = useSelector(state => state.matrix.arrayOfWrongColumns);
  const arrayOfWrongBoxes = useSelector(state => state.matrix.arrayOfWrongBoxes);

  const showSolutionState = useSelector(state => state.matrix.showSolutionState);

  const showSolution = () => {
    
    if(!showSolutionState)  dispatch(matrixActions.showSolution());

    dispatch(matrixActions.changeShowSolutionState());
  }

  const solveMatrix = () => {
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

        <Sudoku />
      </div>
    </>
  );
}

export default App;
