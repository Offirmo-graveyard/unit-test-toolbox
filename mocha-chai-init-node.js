"use strict";

var Mocha = require('mocha')
var chai = require('chai')
var sinon_chai = require('sinon-chai')
var chai_as_promised = require("chai-as-promised")
var chai_subset = require('chai-subset')
var chai_moment = require('chai-moment')


// expose chai.expect as a global variable
global.expect = chai.expect

chai.use(sinon_chai)
chai.use(chai_as_promised)
chai.use(chai_subset)
chai.use(chai_moment)

console.log('* Starting tests...')
