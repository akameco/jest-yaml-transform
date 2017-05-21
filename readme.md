# jest-yaml-transform [![Build Status](https://travis-ci.org/akameco/jest-yaml-transform.svg?branch=master)](https://travis-ci.org/akameco/jest-yaml-transform)

> transform yaml to object


## Install

```
$ npm install --save-dev jest-yaml-transform
```

## Usage

package.json

```json
{
  "jest": {
    "moduleFileExtensions": [
      "js",
      "jsx",
      "json",
      "yml"
    ],
    "transform": {
      "\\.yml$": "jest-yaml-transform"
    }
  }
}
```

## License

MIT © [akameco](http://akameco.github.io)
