import style from "../stylesheets/Sudoku.module.css"
import Box from "./Box";

function Sudoku() {


  return (

    <div className={style.mainContainer}>

      {
        (() => {
            const arr = [];
            for (let i = 0; i < 9; i++) {
              arr.push( <Box key={i} boxNumber={(i)} /> );
            }
            return arr;
        })()
      }
      
    </div>
  )
}

export default Sudoku;
