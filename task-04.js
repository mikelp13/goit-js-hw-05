class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    const strArr = this._value.split('');
    strArr.splice(0, 0, str);
    const newStr = strArr.join('');
    this._value = newStr;
  }
  
  pad(str) {
    
    this.prepend(str);
    this.append(str);
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
