

Laya.Node.prototype.appendChild = function(child) {
  return this.addChild(child);
}

Laya.Node.prototype.setAttribute = function(propName, propValue) {
  this[propName] = propValue;
}

Laya.Node.prototype.addEventListener = function(type, listener) {
  return this.on(type, this, listener);
}

// Laya.Node.prototype.removeChild

Object.defineProperty(Laya.Text.prototype, 'textContent', {
  get: function() {
    return this._textContent;
  },
  set: function(value) {
    this._textContent = value;
    this.text = value;
  }
});