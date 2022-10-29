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
<<<<<<< HEAD
        // Future actions go here
        addRow:(state,action) => {
=======
        // actions go here
        addRow: (state,action) => {
>>>>>>> 8a92df30176018fff04b4be6b35033023072d8ad
            const newRow = Array(20).fill('');
            state.grid.push(newRow); 
        },
        selectColor: (state,action)=>{
            state.selectedColor = action.payload;
        },
        updateCell:(state,action) => {
            const { rowIndex, cellIndex } = action.payload;
            console.log({rowIndex,cellIndex});
            state.grid[rowIndex][cellIndex] = state.selectedColor;
        },
        resetBoard:(state,action)=>{
            //need to loop over the entire board and reset the color of each cell
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