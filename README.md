# unit-test-toolbox
An aggregation of quality npm modules to be used for writing unit tests.

XXX in progress: working on integrating sinon properly

This modules includes `mocha`, `chai`, `sinon`, `sinon-chai`, `chai-as-promised`, `chai-subset`, `chai-moment`
This module also exposes:
- a pre-made plumbing activating the `chai.expect` interface, and chai `sinon-chai` and `chai-as-promised` plugins
- the `mocha` executable as a redirection to its integrated `mocha` executable


## Introduction - the problem
Writing unit tests in Js always requires the same operations:
* remembering all the libs needed
* installing them: `npm install mocha chai sinon sinon-chai chai-as-promised`
* if using typescript: `npm install @types/mocha @types/chai @types/sinon @types/sinon-chai @types/chai-as-promised`
* write an init file for activating `chai.expect` (what else ?), `sinon-chai` and `chai-as-promised`
* write the npm task `"test": "mocha --opts mocha.opts path/to/init.js '<glob_to_my_tests/**/*spec.js>'"`
* keep all those dependencies up-to-date

The proposed solution:
* install only one module `npm i -D @offirmo/unit-test-toolbox`
* write the npm task `"test": "mocha --opts mocha.opts node_modules/@offirmo/unit-test-toolbox/mocha-chai-init-node.js '<glob_to_my_tests/**/*spec.js>'"`
* keep @offirmo/unit-test-toolbox up-to-date


## Installation & usage
Targetting node >= 6 & npm >= 3

```shell
npm i --save-dev @offirmo/unit-test-toolbox
```

You can then use `mocha` as usual (transparently forwarded).

If you want to use the pre-written init file, reference it in your `test` task:
```json
  "scripts": {
    "test": "mocha --opts mocha.opts node_modules/@offirmo/unit-test-toolbox/mocha-chai-init.js 'test/unit/src/**/*spec.js'"
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
