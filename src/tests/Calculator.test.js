import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const addButton = container.getByTestId('operator_add')
    fireEvent.click(addButton)
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4)
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('5');

  })

  it('should subtract 4 from 7 and get 3', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const minusButton = container.getByTestId('operator-subtract');
    fireEvent.click(minusButton);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiplyButton = container.getByTestId('operator-multiply');
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divideButton = container.getByTestId('operator-divide');
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should concatenate multiple number button clicks', () => {
    const runningTotal = container.getByTestId('running-total');
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    fireEvent.click(button5);
    fireEvent.click(button5);
    expect(runningTotal.textContent).toEqual('555')
  })

  it('should chain multiple operations together', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    const button1 = container.getByTestId('number1');
    const addButton = container.getByTestId('operator_add');
    const minusButton = container.getByTestId('operator-subtract');
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(addButton);
    fireEvent.click(minusButton);
    fireEvent.click(button1);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should clear the running total without affecting the calculation', () => {
    const runningTotal = container.getByTestId('running-total');
    const clearButton = container.getByTestId('clear')
    const button1 = container.getByTestId('number1');
    const addButton = container.getByTestId('operator_add');
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(equalsButton);
    fireEvent.click(clearButton);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');
  })
})

