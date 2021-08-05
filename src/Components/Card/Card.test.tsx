import React from 'react';
import * as ReactDOM from 'react-dom';
import Card from './Card'
import pokemon from '../../App'

describe('Card component test', () => {
 let container: HTMLDivElement

 beforeEach(() => {
     container = document.createElement('div');
     document.body.appendChild(container);
     ReactDOM.render(<Card pokemon = {pokemon}/>, container)
 })

 afterEach(() => {
     document.body.removeChild(container);
     container.remove();
 })

 test('Renders initial document correctly', () => {

 })
})