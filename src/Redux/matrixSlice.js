import { createSlice } from "@reduxjs/toolkit";
import { solveMatrix, proveElementInserted } from "../solveMatrix";

const matrixSlice = createSlice({
	name: 'matrix',
	initialState: { 
		matrix: [], 
		matrixSolution: [],
		arrayOfBoxes: new Array(9).fill([]), 
		arrayOfRows: new Array(9).fill([]), 
		arrayOfColumns: new Array(9).fill([]), 
		arrayOfWrongBoxes: new Array(9).fill(false),
		arrayOfWrongRows: new Array(9).fill(false),
		arrayOfWrongColumns: new Array(9).fill(false),
		showSolutionState: false
	},
	reducers: {

		modifyMatrixElement(state, action){

			if (state.matrix.length === 0){
				
				for (let i=0; i<9; ++i){
					state.matrix.push(new Array(9).fill(0))
					state.matrixSolution.push(new Array(9).fill(0))
				}
			}
			proveElementInserted(state.matrix, state.arrayOfColumns, state.arrayOfWrongColumns, state.arrayOfRows, state.arrayOfWrongRows, state.arrayOfBoxes, state.arrayOfWrongBoxes, action.payload, )

			state.matrix[action.payload.xPosition][action.payload.yPosition] = action.payload.newValue;
			state.matrixSolution[action.payload.xPosition][action.payload.yPosition] = action.payload.newValue;

		},
		solve(state){
			
			if (state.matrix.length === 0){
				
				for (let i=0; i<9; ++i){
					state.matrix.push(new Array(9).fill(0))
					state.matrixSolution.push(new Array(9).fill(0))
				}
			}
			solveMatrix(state.matrix, 0 , 0);


			console.log(state.matrix);

		},
		cleanSudoku(state) {
			state.matrix = [];
			state.matrixSolution = [];
			state.arrayOfBoxes = new Array(9).fill([]);
			state.arrayOfRows = new Array(9).fill([]);
			state.arrayOfColumns = new Array(9).fill([]); 
			state.arrayOfWrongBoxes = new Array(9).fill(false);
			state.arrayOfWrongRows = new Array(9).fill(false);
			state.arrayOfWrongColumns = new Array(9).fill(false);
		},
		showSolution(state){
			
			if (state.matrix.length === 0){
				
				for (let i=0; i<9; ++i){
					state.matrix.push(new Array(9).fill(0))
					state.matrixSolution.push(new Array(9).fill(0))
				}
			}

			solveMatrix(state.matrixSolution, 0 , 0);

			for (let x = 0; x < state.matrix.length; x++) {
				for (let y = 0; y < state.matrix.length; y++) {
					
					if(!state.matrix[x][y] && (state.matrix[x][y] === state.matrixSolution[x][y])){
						
							state.matrixSolution[x][y] = 0;
					}
				}
			}
		},
		
		changeShowSolutionState(state){

			state.showSolutionState = !state.showSolutionState;

			if(!state.showSolutionState) {
				for (let x = 0; x < state.matrix.length; x++) {
					
					state.matrixSolution[x] = state.matrix[x].slice()
				}
			}
		}
	},
})

export const matrixActions  = matrixSlice.actions;

export default matrixSlice