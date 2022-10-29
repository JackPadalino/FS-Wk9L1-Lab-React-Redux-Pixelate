import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Table = () => {
    const dispatch = useDispatch();
    
    const handleCellUpdate = (rowIndex, cellIndex) => {
        dispatch(updateCell({rowIndex,cellIndex}));
    };

    return (
        <div>
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

export default Table;