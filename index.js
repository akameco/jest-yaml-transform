'use strict'
const yaml = require('js-yaml')

module.exports = {
  process(src) {
    const json = yaml.safeLoad(src, { json: true })
    return `module.exports = ${JSON.stringify(json)};`
  },
}
