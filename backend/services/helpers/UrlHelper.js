const axios = require('axios');

class UrlHelper {
  static async followRedirections(url) {
    const response = await axios.get(url);
    if (response.request._redirectable._redirectCount > 0) {
      return response.request._redirectable._options.href;
    }
    return url; // if no redirections made
  }
}

module.exports = UrlHelper;
