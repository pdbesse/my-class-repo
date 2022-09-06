const counter = require('../index');

test('counter is a defined function', () => {
  expect(typeof counter).toEqual('function');
});

test('counter is returning as an object', () => {
  let studentCounter = counter();
  expect(typeof studentCounter).toEqual('object');
});

test('count should equal 0', () => {
  let studentCounter = counter();
  expect(studentCounter.increment()).toEqual(0);
});

test('count should equal 1', () => {
  let studentCounter = counter();
  studentCounter.increment();
  expect(studentCounter.increment()).toEqual(1);
});

test('count should equal 4', () => {
  let studentCounter = counter();
  studentCounter.increment();
  studentCounter.increment();
  studentCounter.increment();
  studentCounter.increment();
  expect(studentCounter.increment()).toEqual(4);
});
