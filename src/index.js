import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // line 6 from Benny's index.js file
import { store } from './store'; // didn't add this curly brace syntax before...
import Board from './components/Board.jsx';
import Table from './components/Table.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Board Table={Table}/>
        </Provider>
    </React.StrictMode>
);