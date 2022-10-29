import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRow,selectColor,updateCell,resetBoard } from '../slices/gameSlice';

const Board = ({Table}) => {
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        const payload = {}; // payload defines what information is being passed to the action functions inside component's slice
        dispatch(addRow(payload));
    };

    const handleColorSelector = (event) =>{
        dispatch(selectColor(event.target.value));
    };

    const handleResetBoard = () => {
        dispatch(resetBoard());
    };

    const grid = useSelector(state => state.game.grid);
    const selectedColor = useSelector(state=>state.game.selectedColor);

    return (
        <div>
            <h1>Pixelate</h1>
            <div>
                <button id='add-row' onClick={handleButtonClick}>Add a row</button>
                <select onChange={handleColorSelector}>
                    <option value="gray">-</option>
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
                <Table />
            </div>
    );
};

export default Board;