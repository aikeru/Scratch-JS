function Babel() {
  Transformer.call(this);

  this.name = 'Babel (' + this.getVersion() + ')';
  this.handle = 'babel';
  this.runtimePath = 'node_modules/babel/browser-polyfill.js';
  this.opts = {
    experimental: true
  };
}

// Inherit from Transformer
Babel.prototype = Object.create(Transformer.prototype);
Babel.prototype.constructor = Babel;

Babel.prototype.transform = function(input) {
  var compiled = '';
  try {
    compiled = babel.transform(input, this.opts).code;
  } catch(e) {
    console.log(e);
    logError("Babel SyntaxError: " + e.message);
  }
  return compiled;
}

Babel.prototype.getVersion = function() {
  return babel.version;
}

var babelTransformer = new Babel();
