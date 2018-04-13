const capitalize = require('./index');

test('Capitalize is a function', () => {
  expect(typeof capitalize).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});

test('Capitalizing with a question mark at the beginning.', () => {
	expect(capitalize('?que pasa?')).toEqual('?Que Pasa?');
});

test('Capitalizes one char string.', () => {
	expect(capitalize('c')).toEqual('C');
});
