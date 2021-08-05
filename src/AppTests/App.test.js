import React from 'react';
import ReactDOM from 'react-dom';
import NextBtn from '../App';
import PreviousBtn from '../App';


test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NextBtn/>, div)
    ReactDOM.render(<PreviousBtn/>, div)
    ReactDOM.unmountComponentAtNode(div);
})

