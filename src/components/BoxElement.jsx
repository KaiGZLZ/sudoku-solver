import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { matrixActions } from "../Redux/matrixSlice";
import style from "../stylesheets/BoxElement.module.css"

function BoxElement( { xPosition, yPosition, boxNumber} ) {

  const matrix = useSelector(state => state.matrix.matrix);
  const matrixSolution = useSelector(state => state.matrix.matrixSolution);
  const arrayOfWrongColumns = useSelector(state => state.matrix.arrayOfWrongColumns);
  const arrayOfWrongRows = useSelector(state => state.matrix.arrayOfWrongRows);
  const arrayOfWrongBoxes = useSelector(state => state.matrix.arrayOfWrongBoxes);

  const showSolutionState = useSelector(state => state.matrix.showSolutionState);

  const number = useMemo(() => {

    if (showSolutionState){

      if ((matrix.length === 0)) return '';

      else{
        if(matrixSolution[xPosition][yPosition] === 0)
          return matrix[xPosition][yPosition]

        else
          return matrixSolution[xPosition][yPosition] ? matrixSolution[xPosition][yPosition] : '';
      }  
    }



    /*return showSolutionState ? 'V' : 'F';

    if(showSolutionState){

      
    }
    else{
      return matrix[xPosition][yPosition]
    }*/

  }, [showSolutionState]);

  const dispatch = useDispatch();

  const handleChange = e => {

    let newValue;

    (e.target.value === '') ? newValue = parseInt(0) : newValue = parseInt(e.target.value)

    if ((newValue >= 0) && (newValue <= 9)) {

      dispatch(matrixActions.modifyMatrixElement({
        xPosition: xPosition,
        yPosition: yPosition,
        boxNumber: boxNumber,
        newValue:  newValue
      }))
    }
  }

  return (
    <>
      <input 
        type="number"
        className={`${style.box}${((arrayOfWrongColumns.length!=0)&&((arrayOfWrongBoxes[boxNumber])||arrayOfWrongColumns[xPosition]||arrayOfWrongRows[yPosition]))? " "+ style.wrong : ''}`} 
        value={ showSolutionState ? number : (matrix.length == 0)||(matrix[xPosition][yPosition] == 0) ? '' : matrix[xPosition][yPosition]}   
        onChange={handleChange} 
        /> 
    </>
  )
}

export default BoxElement;
