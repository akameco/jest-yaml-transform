'use strict'
const yaml = require('js-yaml')
const { flatten } = require('flat')

module.exports = {
  process(src) {
    const json = yaml.safeLoad(src, { json: true })
    const flattenJson = flatten(json)
    return `module.exports = ${JSON.stringify(flattenJson)};`
  },
}
