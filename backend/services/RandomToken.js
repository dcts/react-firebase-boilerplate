const crypto = require("crypto");

class RandomToken {
  static generate(size = 86) {
    size = Math.max(Math.min(size, 86), 1); // bounds 1-86 chars
    return crypto.randomBytes(64).toString('base64').replace(/\//g, 'i').replace(/\+/g, 'u').replace(/=/g, '').substr(0, size);
  }
}

module.exports = RandomToken;
