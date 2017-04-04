# unit-test-toolbox
A convenient aggregation of quality npm modules to be used for writing unit tests. Just install this module and you get everything needed at once!

This modules includes `mocha`, `chai`, `sinon`, `sinon-chai`, `chai-as-promised`, `chai-subset`, `chai-moment`. 
It also exposes:
- a pre-made plumbing activating the `chai.expect` interface, chai `sinon-chai` and `chai-as-promised` plugins
- (for legacy nodes with npm <= 2) the `mocha` executable as a redirection to its integrated `mocha` executable

**In progress**:
- working on integrating sinon properly
- working on typescript compatibility


## Introduction - the problem
Writing unit tests in JavaScript with mocha/chai always requires the same operations:

**WITHOUT @offirmo/unit-test-toolbox :-1: :hurtrealbad:**:
* remembering all the libs needed
* installing them: `npm install mocha chai sinon sinon-chai chai-as-promised`
* if using typescript: `npm install @types/mocha @types/chai @types/sinon @types/sinon-chai @types/chai-as-promised`
* write an init file for activating `chai.expect` (what else ?), `sinon-chai` and `chai-as-promised`
* write the npm task `"test": "mocha --opts mocha.opts path/to/init.js '<glob_to_my_tests/**/*spec.js>'"`
* keep all those dependencies up-to-date

The proposed solution:

**WITH @offirmo/unit-test-toolbox :+1: :sunglasses: **:
* install only one module `npm i -D @offirmo/unit-test-toolbox`
* write the npm task `"test": "mocha --opts mocha.opts node_modules/@offirmo/unit-test-toolbox/mocha-chai-init-node.js '<glob_to_my_tests/**/*spec.js>'"`
* keep @offirmo/unit-test-toolbox up-to-date


## Installation & usage

### recent npm
Targeting node >= 6 & npm >= 3 (for we abuse the flat deps)

```shell
npm i --save-dev @offirmo/unit-test-toolbox
```

If you want to use the pre-written init file, reference it in your `test` task:
```json
  "scripts": {
    "test": "mocha --opts node_modules/@offirmo/unit-test-toolbox/mocha.opts node_modules/@offirmo/unit-test-toolbox/mocha-chai-init.js 'test/unit/src/**/*spec.js'"
  },
```

Suggested `mocha.opts`:
```
--reporter spec
--check-leaks
--es_staging
--full-trace
--harmony
```

### Legacy
For node 0.10 with npm 2, reference a special branch in `package.json`
```
"@offirmo/unit-test-toolbox": "git://github.com/offirmo/unit-test-toolbox.git#legacy-node_v0.10",
```
You can then use `mocha` as usual (transparently forwarded).

`sinon` should be imported through unit-test-toolbox:
```js
var sinon = require('@offirmo/unit-test-toolbox/node_modules/sinon')
```


## See also
* mocha
* chai
* sinon
* sinon-chai
* chai-as-promised
* chai-subset
* chai-moment https://www.npmjs.com/package/chai-moment


## Contributing
Suggestions welcome.
