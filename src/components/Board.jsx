import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRow,selectColor,updateCell,resetBoard } from '../slices/gameSlice';

const Board = () => {
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        const payload = {}; // payload defines what information is being passed to the action functions inside component's slice
        dispatch(addRow(payload));
    };

    const handleColorSelector = (event) =>{
<<<<<<< HEAD
        dispatch(selectColor(event.target.value));
    };

    const handleCellUpdate = (rowIndex, cellIndex) => {
        dispatch(updateCell({rowIndex,cellIndex}));
    };

    const handleResetBoard = () => {
        dispatch(resetBoard());
=======
        const payload = event.target.value
        dispatch(selectColor(payload))
    };

    const handleCellUpdate = (rowIndex, cellIndex) => {
        const payload = {rowIndex,cellIndex} // action functions can only receive a single payload object, so we wrap multiple arguments in a single payload object!
        dispatch(updateCell(payload))
>>>>>>> 8a92df30176018fff04b4be6b35033023072d8ad
    };

    const grid = useSelector(state => state.game.grid);
    const selectedColor = useSelector(state=>state.game.selectedColor);

    return (
        <div>
            <h1>Pixelate</h1>
            <div>
                <button id='add-row' onClick={handleButtonClick}>Add a row</button>
<<<<<<< HEAD
                <select onChange={handleColorSelector}>
                    <option value="gray">-</option>
=======
                <select value={selectedColor} onChange={handleColorSelector}>
>>>>>>> 8a92df30176018fff04b4be6b35033023072d8ad
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="brown">Brown</option>
                </select>
                <button id='reset-board' onClick={handleResetBoard}>Reset board</button>
            </div>
            <table>
                <tbody>
                    {grid.map((row, rowIndex ) =>
                        <tr key={rowIndex}>
                            {row.map((color, cellIndex) => <td onMouseOver={()=>{handleCellUpdate(rowIndex,cellIndex)}} key={cellIndex} className={color}></td>)}
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
    );
};

export default Board;