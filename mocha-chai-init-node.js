"use strict";

const Mocha = require('mocha')
const chai = require('chai')
const sinon_chai = require('sinon-chai')
const chai_as_promised = require("chai-as-promised")
const chai_subset = require('chai-subset')
const chai_moment = require('chai-moment')


// expose chai.expect as a global variable
global.expect = chai.expect

chai.use(sinon_chai)
chai.use(chai_as_promised)
chai.use(chai_subset)
chai.use(chai_moment)

console.log('* Starting tests...')
