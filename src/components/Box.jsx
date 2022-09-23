import style from "../stylesheets/Box.module.css"
import BoxElement from "./BoxElement";

function Box( { boxNumber } ) {

  return (
    <div className={style.box}>

      {
        (() => {
            const arr = [];

            for (let i = 0; i < 3; i++) {

              for (let j = 0; j < 3; j++) {

                let x;
                let y;
                
                if (boxNumber%3 === 0)  x = j;
                else if (boxNumber%3 === 1)  x = j+3;
                else if (boxNumber%3 === 2)  x = j+6;

                if (boxNumber<3)  y = i;
                else if (boxNumber<6)  y = i+3;
                else if (boxNumber<9)  y = i+6;

                arr.push( <BoxElement key={`${x}${y}`} xPosition={x} yPosition={y} boxNumber={boxNumber}/> );
              }
            } 
            return arr;
        })()
      }

    </div>
  )
}

export default Box;
