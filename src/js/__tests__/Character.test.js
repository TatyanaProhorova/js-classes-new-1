import Character from '../class/Character';

test('ошибка в name', () => {
  expect(() => {
    const a = new Character('A', 'Bowerman');
    return a;
  }).toThrow(new Error(
    'В имени должно быть от 2 до 10 символов',
  ));
});

test('Ошибка в типе', () => {
  expect(() => {
    const bow = new Character('Alex', 'Bow');
    return bow;
  }).toThrow(new Error(
    'Неизвестное существо',
  ));
});

test('Правильный объект', () => {
  const warior = new Character('Alex', 'Bowman');
  const correct = {
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'Bowman',
  };
  expect(warior).toEqual(correct);
});
