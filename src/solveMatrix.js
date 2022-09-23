
export function solveMatrix(matrix, xPosition, yPosition){
    
    for (let x=xPosition; x<9; ++x){
        for (let y=yPosition; y<9; ++y){
            if(matrix[x][y] === 0){
                for (let num=1; num<10; ++num){
                    if(prove(matrix, num, x,y)){
                        
                        matrix[x][y] = num;
                        
                        if(solveMatrix(matrix, x, y) === false)
                        matrix[x][y] = 0;
                    }
                }
                if(matrix[x][y] === 0){
                    return false;
                } 
            }
        }
    }
    
    return matrix;
}


function prove(matrix, number, xPosition, yPosition){
    
    for (let i=0; i<9; ++i){
        if(matrix[i][yPosition] === number){
                return false
        }
        if(matrix[xPosition][i] === number){
                return false
        }
    }
    
    let xIni = parseInt(xPosition/3) * 3;
    let yIni = parseInt(yPosition/3) * 3;
    
    for (let x=xIni; x<(xIni + 3); ++x){
        for (let y=yIni; y<(yIni + 3); ++y){
            if(matrix[x][y] === number){
                return false
            }
        }
    }
    return true
}


export function proveElementInserted(matrix, arrayOfColumns, arrayOfWrongColumns, arrayOfRows, arrayOfWrongRows, arrayOfBoxes, arrayOfWrongBoxes, payload) {

    let xPosition = payload.xPosition;
    let yPosition = payload.yPosition;
    let newValue = payload.newValue;
    let boxNumber = payload.boxNumber;
    

    //  COLUMNS SECTION

    let index = arrayOfColumns[xPosition].indexOf(matrix[xPosition][yPosition]);
			
    if(index >= 0) 	
        arrayOfWrongColumns[xPosition] = true;

    if((newValue === 0)||(matrix[xPosition][yPosition])){

        arrayOfColumns[xPosition].splice(index,1);

        let areThereRepetitions = arrayOfColumns[xPosition].some((value, index)=>{
    
            return (!(arrayOfColumns[xPosition].indexOf(value) === index));
        })

        arrayOfWrongColumns[xPosition] = areThereRepetitions;
    }

    if((newValue !== 0)){

        let index = arrayOfColumns[xPosition].indexOf(newValue);

        if(index >= 0) 	
            arrayOfWrongColumns[xPosition] = true;

        arrayOfColumns[xPosition].push(newValue);
    }


    //  ROWS SECTION

    index = arrayOfRows[yPosition].indexOf(matrix[xPosition][yPosition]);
			
    if(index >= 0) 	
        arrayOfWrongRows[yPosition] = true;

    if((newValue === 0)||(matrix[xPosition][yPosition])){

        arrayOfRows[yPosition].splice(index,1);

        let areThereRepetitions = arrayOfRows[yPosition].some((value, index)=>{
    
            return (!(arrayOfRows[yPosition].indexOf(value) === index));
        })

        arrayOfWrongRows[yPosition] = areThereRepetitions;
    }

    if(newValue !== 0){

        let index = arrayOfRows[yPosition].indexOf(newValue);

        if(index >= 0) 	
            arrayOfWrongRows[yPosition] = true;

        arrayOfRows[yPosition].push(newValue);
    }


    //  BOXES SECTION 

    index = arrayOfBoxes[boxNumber].indexOf(matrix[xPosition][yPosition]);
			
    if(index >= 0) 	
        arrayOfWrongBoxes[boxNumber] = true;

    if((newValue === 0)||(matrix[xPosition][yPosition])){

        arrayOfBoxes[boxNumber].splice(index,1);

        let areThereRepetitions = arrayOfBoxes[boxNumber].some((value, index)=>{
    
            return (!(arrayOfBoxes[boxNumber].indexOf(value) === index));
        })

        arrayOfWrongBoxes[boxNumber] = areThereRepetitions;
    }

    if(newValue !== 0){

        let index = arrayOfBoxes[boxNumber].indexOf(newValue);

        if(index >= 0) 	
            arrayOfWrongBoxes[boxNumber] = true;

        arrayOfBoxes[boxNumber].push(newValue);
    }
}



