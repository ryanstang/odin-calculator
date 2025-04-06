import mathFunctions from './calculation.js';

describe('Arithmetic Functions', () => {
    test('sums two numbers', () => {
        expect(mathFunctions.add(2, 4)).toEqual(6);
      });

    test('subtracts two numbers', () => {
        expect(mathFunctions.subtract(2, 4)).toEqual(-2);
      });

    test('multiplies two numbers', () => {
        expect(mathFunctions.multiply(2, 4)).toEqual(8);
      });
    
    test('divides two numbers', () => {
        expect(mathFunctions.divide(4, 2)).toEqual(2);
      });
})

describe('Operate Functions', () => {
    test('sums two numbers', () => {
        expect(mathFunctions.operate('+', 2, 4)).toEqual(6);
      });

    test('subtracts two numbers', () => {
        expect(mathFunctions.operate('-', 2, 4)).toEqual(-2);
      });

    test('multiplies two numbers', () => {
        expect(mathFunctions.operate('*', 2, 4)).toEqual(8);
      });
    
    test('divides two numbers', () => {
        expect(mathFunctions.operate('/', 4, 2)).toEqual(2);
      });
})