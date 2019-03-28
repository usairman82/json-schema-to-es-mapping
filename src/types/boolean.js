const { MappingBaseType } = require("./base");
const { isBoolean } = require("./util");

function toBoolean(obj) {
  return isBoolean(obj.type) && MappingBoolean.create(obj).convert();
}

class MappingBoolean extends MappingBaseType {
  get baseType() {
    return "boolean";
  }

  static create(obj) {
    return new MappingBoolean(obj);
  }
}

module.exports = {
  toBoolean,
  MappingBoolean
};
