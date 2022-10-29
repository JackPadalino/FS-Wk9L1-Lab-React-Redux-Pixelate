import { createSlice } from "@reduxjs/toolkit";

// Set the initial state
const initialState = {
    grid: [Array(20).fill('')],
    selectedColor:'gray'
};

// Set actions and settings specific to this state
export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // Future actions go here
        addRow:(state,action) => {
            const newRow = Array(20).fill('');
            state.grid.push(newRow); 
        },
        selectColor: (state,action)=>{
            state.selectedColor = action.payload;
        },
        updateCell:(state,action) => {
            const { rowIndex, cellIndex } = action.payload;
            state.grid[rowIndex][cellIndex] = state.selectedColor;
        },
        resetBoard:(state,action)=>{
            state.selectedColor='gray';
            for(let a=0;a<state.grid.length;a++) {
                for(let b=0;b<state.grid[a].length;b++) {
                    state.grid[a][b] = state.selectedColor;
                };
            };
        }
    }
});

// here we are exporting out individual actions that can be used within jsx components
export const {
    addRow,
    selectColor,
    updateCell,
    resetBoard
} = gameSlice.actions;

// exporting the gameSlide reducer -> this gets shipped off to the store, which expects to receive an
// entire reducer objects
export default gameSlice.reducer;