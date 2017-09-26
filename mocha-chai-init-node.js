"use strict";

var Mocha = require('mocha')
var sinon = require('sinon')
var chai = require('chai')
var sinon_chai = require('sinon-chai')
var chai_as_promised = require('chai-as-promised')
var chai_subset = require('chai-subset')
var chai_moment = require('chai-moment')


// expose some global variables as convenience
global.expect = chai.expect
global.sinon = sinon

// activate chai extensions
chai.use(sinon_chai)
chai.use(chai_as_promised)
chai.use(chai_subset)
chai.use(chai_moment)

// convenience
console.log('* Starting tests...')
