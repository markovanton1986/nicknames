import Validator from '../validator';

test('Метод должен вернуть true, если строка содержит только латинские буквы, тире -, подчёркивания _ и цифры (0-9)', () => {
  const validated = new Validator();
  expect(validated.validateUsername('markov_86-anton')).toBeTruthy();
});

test('Метод должен выбросить ошибку, если строка содержит символы, кроме латинских букв, тире -, подчёркивания _ и цифр (0-9)', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('markov[{^}]_86-anton')).toThrow();
  expect(() => validated.validateUsername('марков')).toThrow();
});

test('Метод должен вернуть true, если строка не содержит подряд более трёх цифр, не начинается и не заканчивается цифрами, символами тире -, подчёркивания _', () => {
  const validated = new Validator();
  expect(validated.validateUsername('markov_86-anton')).toBeTruthy();
});

test('Метод должен выбросить ошибку, если строка содержит подряд более трёх цифр, ', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('markov_5555-anton')).toThrow();
});

test('Метод должен выбросить ошибку, если строка начинается цифрами, ', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('5markov-anton')).toThrow();
});

test('Метод должен выбросить ошибку, если строка заканчивается цифрами, ', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('markov_anton5')).toThrow();
});

test('Метод должен выбросить ошибку, если строка начинается символами подчёркивания', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('_markov_55-anton')).toThrow();
});

test('Метод должен выбросить ошибку, если строка заканчивается символами подчёркивания', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('markov_55-anton_')).toThrow();
});

test('Метод должен выбросить ошибку, если строка начинается символами тире', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('-markov_55-anton')).toThrow();
});

test('Метод должен выбросить ошибку, если строка заканчивается символами тире', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('markov_55-anton-')).toThrow();
});