export default class Validator {
    validateUsername(name) {
      const pattern1 = /[a-z]/i.test(name);
      const pattern2 = /^[^\d_-\W]+[\w-]*[^\d_-\W]$/.test(name);
      const pattern3 = /[\d]{4}/.test(name);
      if (pattern1 && pattern2 && !pattern3) {
        this.name = name;
        return true;
      }
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9). Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
    }
  }