module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class V1Controller extends Nodal.Controller {

    get() {

      this.respond({message: `GET request to ${this.constructor.name}`});

    }

    post() {

      this.badRequest();

    }

    put() {

      this.badRequest();

    }

    del() {

      this.badRequest();

    }

  }

  return V1Controller;

})();
