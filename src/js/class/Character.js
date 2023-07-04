export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swardsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('В имени должно быть от 2 до 10 символов');
    } else {
      this.name = name;
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Неизвестное существо');
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }
}
